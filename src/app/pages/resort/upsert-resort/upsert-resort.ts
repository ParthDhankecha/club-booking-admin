import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

import { AppSrc } from '@src/app/shared/directives/src';
import { IconDropdown } from '@src/app/shared/components/icon-dropdown/icon-dropdown';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';


const RESORT_MAX_IMAGES = 10;
type ImageRow = { id: number; url: string; alt: string; isNew: boolean };


@Component({
  selector: 'app-upsert-resort',
  imports: [
    ReactiveFormsModule,
    AppSrc,
    IconDropdown,
    CdkDrag,
    CdkDropList,
    CdkDragHandle,
  ],
  templateUrl: './upsert-resort.html',
  styleUrl: './upsert-resort.scss',
})
export class UpsertResort {
  protected _fb = inject(FormBuilder);
  protected _coreService = inject(CoreFacadeService);
  protected _apiFs = inject(ApiFacadeService);
  private _sanitizer = inject(DomSanitizer);

  @Input('data') data: any = null;
  @Output('upsert') upsert = new EventEmitter<any>();

  protected isEditMode = false;
  protected form: FormGroup = this._fb.group({
    title: [null, [Validators.required, Validators.maxLength(200)]],
    description: [null, [Validators.required, Validators.maxLength(2000)]],
    destination: [null, [Validators.required, Validators.maxLength(1000)]],
    phone: [null, [Validators.required, Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email, Validators.maxLength(320)]],
    location: this._fb.group({
      mapUrl: [''],
      address: [''],
    }),
    facilities: this._fb.array<FormGroup>([]),
    stats: this._fb.array<FormGroup>([]),
  });

  protected readonly maxImages = RESORT_MAX_IMAGES;
  protected displayedImages: ImageRow[] = [];
  private nextRowId = 1;
  /** In edit, server urls removed before save */
  protected delImageUrls: string[] = [];
  protected uploadingRowIds = new Set<number>();
  protected isReqAlive = false;

  protected get iconOptions(): Record<string, string>[] {
    return this._apiFs.resort.iconList;
  }


  protected ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.delImageUrls = [];
      this.displayedImages = [];
      this.f_facilities.clear();
      this.f_stats.clear();
      if (this.data) {
        this.isEditMode = true;
        this.form.patchValue({
          title: this.data.title,
          description: this.data.description,
          destination: this.data.destination,
          phone: this.data.phone,
          email: this.data.email,
        });
        const loc = this.data.location;
        this.f_location.patchValue({
          mapUrl: loc?.mapUrl ?? '',
          address: loc?.address ?? '',
        });
        if (loc?.mapUrl) {
          this.updateMapUrlPreviewUrl(loc.mapUrl);
        }
        for (const item of this.data.facilities ?? []) {
          this.f_facilities.push(
            this._createFacilityStatRow(item?.icon ?? '', item?.label ?? '', item?.value ?? '')
          );
        }
        for (const item of this.data.stats ?? []) {
          this.f_stats.push(
            this._createFacilityStatRow(item?.icon ?? '', item?.label ?? '', item?.value ?? '')
          );
        }
        this.displayedImages = [];
        const imgs = this.data.images;
        if (Array.isArray(imgs)) {
          for (const im of imgs) {
            if (im?.url) {
              this.displayedImages.push({
                id: this.nextRowId++,
                url: im.url,
                alt: typeof im.alt === 'string' ? im.alt : '',
                isNew: false,
              });
            }
          }
        }
      } else {
        this.isEditMode = false;
        this.form.reset();
        this.f_location.patchValue({ mapUrl: '', address: '' });
        this.displayedImages = [];
      }
    }
  }

  protected ngOnInit(): void {
    this.loadIcons();
  }


  private loadIcons(): void {
    if (this._apiFs.resort.iconsObj.size > 0) return;

    this._apiFs.resort.optionsData({ iconsMap: 'iconsMap' }).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK' && res.data) {
          this._apiFs.resort.iconsObj = res.data?.iconsMap ?? {};
        }
      },
      error: (err: any) => {
        console.error('Error loading icons', err);
      },
    });
  }


  get f_title(): AbstractControl | null {
    return this.form.get('title');
  }
  get f_description(): AbstractControl | null {
    return this.form.get('description');
  }
  get f_destination(): AbstractControl | null {
    return this.form.get('destination');
  }
  get f_phone(): AbstractControl | null {
    return this.form.get('phone');
  }
  get f_email(): AbstractControl | null {
    return this.form.get('email');
  }

  get f_location(): FormGroup {
    return this.form.get('location') as FormGroup;
  }

  get f_facilities(): FormArray<FormGroup> {
    return this.form.get('facilities') as FormArray<FormGroup>;
  }

  get f_stats(): FormArray<FormGroup> {
    return this.form.get('stats') as FormArray<FormGroup>;
  }


  protected iconDropdownSelection(iconKey: string | null | undefined): { key: string; value: string } | null {
    const k = (iconKey ?? '').trim();
    if (!k) return null;
    const url = this._apiFs.resort.iconsObj.get(k);
    if (url) return { key: k, value: url };
    return { key: k, value: k };
  }


  /** Extracts the actual URL from map URL value (handles pasted iframe HTML). */
  private getResolvedMapUrl(): string {
    return this._coreService.googleMap.getEmbedMapUrl(
      this.f_location?.get('mapUrl')?.value?.trim() ?? ''
    );
  }

  protected mapUrlPreview: SafeResourceUrl | null = null;
  protected mapUrlForOpen: string | null = null;
  /** Sanitized map URL for iframe preview. */
  private updateMapUrlPreviewUrl(url: string): void {
    if (!url) return;
    this.mapUrlPreview = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    this.mapUrlForOpen = this._coreService.googleMap.getMapUrlForOpen(url);
  }

  /** Normalize map URL on blur: if pasted iframe HTML, store only the embed URL. */
  protected onMapUrlBlur(): void {
    const url = this.getResolvedMapUrl();
    const control = this.f_location.get('mapUrl');
    if (control && url && url !== control.value?.trim()) {
      control.patchValue(url, { emitEvent: false });
      this.updateMapUrlPreviewUrl(url);
    }
  }


  private _createFacilityStatRow(icon = '', label = '', value = ''): FormGroup {
    return this._fb.group({
      icon: [icon, [Validators.required, Validators.maxLength(200)]],
      label: [label, [Validators.required, Validators.maxLength(200)]],
      value: [value, [Validators.maxLength(200)]],
    });
  }

  protected addFacilityRow(): void {
    this.f_facilities.push(this._createFacilityStatRow());
  }

  protected addStatRow(): void {
    this.f_stats.push(this._createFacilityStatRow());
  }

  protected removeFacilityRow(index: number): void {
    this.f_facilities.removeAt(index);
  }

  protected removeStatRow(index: number): void {
    this.f_stats.removeAt(index);
  }

  protected onFacilitiesDrop(event: CdkDragDrop<unknown>): void {
    moveItemInArray(this.f_facilities.controls, event.previousIndex, event.currentIndex);
    this.f_facilities.updateValueAndValidity();
  }

  protected onStatsDrop(event: CdkDragDrop<unknown>): void {
    moveItemInArray(this.f_stats.controls, event.previousIndex, event.currentIndex);
    this.f_stats.updateValueAndValidity();
  }

  protected onFacilityIconChange(index: number, option: { key: string } | null): void {
    this.f_facilities.at(index).get('icon')?.setValue(option?.key ?? '');
  }

  protected onStatIconChange(index: number, option: { key: string } | null): void {
    this.f_stats.at(index).get('icon')?.setValue(option?.key ?? '');
  }

  private _serializeFacilityStatsRows(rows: FormArray<FormGroup>): { icon: string; label: string; value: string }[] {
    return rows.controls.map((g) => {
      const v = g.value;
      return {
        icon: (v.icon as string)?.trim() ?? '',
        label: (v.label as string)?.trim() ?? '',
        value: (v.value as string)?.trim() ?? '',
      };
    });
  }

  protected onPickFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (!files?.length) return;

    const cap = this.maxImages - this.displayedImages.length;
    const toAdd = Array.from(files).slice(0, Math.max(0, cap));
    for (const file of toAdd) {
      const id = this.nextRowId++;
      this.displayedImages.push({ id, url: '', alt: '', isNew: true });
      this.uploadByRowId(id, file);
    }
    input.value = '';
  }

  private uploadByRowId(rowId: number, file: File): void {
    this.uploadingRowIds.add(rowId);
    const formData = new FormData();
    formData.append('file', file);

    this._apiFs.resort.uploadThumb(formData).subscribe({
      next: (res: IResponse) => {
        this.uploadingRowIds.delete(rowId);
        const row = this.displayedImages.find((r) => r.id === rowId);
        if (res.code === 'OK' && res.data?.location && row) {
          row.url = res.data.location;
        } else {
          this._dropByRowId(rowId);
        }
      },
      error: (err: any) => {
        this.uploadingRowIds.delete(rowId);
        this._dropByRowId(rowId);
        const msg = err?.error?.message || 'Upload failed. Please try again.';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      },
    });
  }

  private _dropByRowId(rowId: number): void {
    this.displayedImages = this.displayedImages.filter((r) => r.id !== rowId);
  }

  protected isRowUploading(row: ImageRow): boolean {
    return this.uploadingRowIds.has(row.id);
  }

  protected onAltInput(row: ImageRow, event: Event): void {
    const t = (event.target as HTMLInputElement).value;
    row.alt = t.length > 255 ? t.slice(0, 255) : t;
  }

  protected removeImage(row: ImageRow): void {
    if (this.isEditMode && !row.isNew) {
      this.delImageUrls.push(row.url);
    }
    this.displayedImages = this.displayedImages.filter((r) => r.id !== row.id);
  }

  protected onSubmit(): void {
    if (this.isReqAlive) return;

    if (this.uploadingRowIds.size > 0) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'Please wait for uploads to finish');
      return;
    }

    const withUrl = this.displayedImages.filter((x) => x.url);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (withUrl.length < 1) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'Add at least one image');
      return;
    }

    const form = this.form.value;
    this.isReqAlive = true;

    const facilities = this._serializeFacilityStatsRows(this.f_facilities);
    const stats = this._serializeFacilityStatsRows(this.f_stats);
    const locationPayload = {
      mapUrl: this.getResolvedMapUrl(),
      address: (form.location?.address as string)?.trim() ?? '',
    };

    if (this.isEditMode) {
      const body: Record<string, unknown> = {
        title: (form.title as string)?.trim(),
        description: (form.description as string)?.trim(),
        destination: (form.destination as string)?.trim(),
        phone: (form.phone as string)?.trim(),
        email: (form.email as string)?.trim(),
        facilities,
        stats,
        location: locationPayload,
      };
      const newImgs = withUrl.filter((x) => x.isNew).map((x) => ({ url: x.url, alt: (x.alt ?? '').trim() }));
      if (newImgs.length) {
        body['newImages'] = newImgs;
      }
      if (this.delImageUrls.length) {
        body['delImages'] = [...this.delImageUrls];
      }
      const origByUrl = new Map<string, string>(
        (this.data.images ?? [])
          .filter((im: { url?: string }) => im?.url)
          .map((im: { url: string; alt?: string }) =>
            [im.url, typeof im.alt === 'string' ? im.alt : ''] as [string, string]
          )
      );
      const updateImageAlts = withUrl.filter((x) => !x.isNew && x.url)
        .filter((x) => (origByUrl.get(x.url) ?? '').trim() !== (x.alt ?? '').trim())
        .map((x) => ({ url: x.url, alt: (x.alt ?? '').trim() }));
      if (updateImageAlts.length) {
        body['updateImages'] = updateImageAlts;
      }
      this._apiFs.resort.update(this.data._id, body).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'UPDATED') {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, 'Resort updated successfully');
            this.upsert.emit(res.data);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        },
      });
    } else {
      const body = {
        title: (form.title as string)?.trim(),
        description: (form.description as string)?.trim(),
        destination: (form.destination as string)?.trim(),
        phone: (form.phone as string)?.trim(),
        email: (form.email as string)?.trim(),
        images: withUrl.map((x) => ({ url: x.url, alt: (x.alt ?? '').trim() })),
        facilities,
        stats,
        location: locationPayload,
      };
      this._apiFs.resort.create(body).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'CREATED') {
            this.form.reset();
            this.displayedImages = [];
            this._coreService.utils.showToaster(EToasterType.Success, 'Resort created successfully');
            this.upsert.emit({ refreshList: true });
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        },
      });
    }
  }

  protected onCloseOrCancel(): void {
    this.upsert.emit(null);
  }
}
