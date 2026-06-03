import { Component, ElementRef, EventEmitter, inject, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

import { AppSrc } from '@src/app/shared/directives/src';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';


export const RESORT_MAX_IMAGES = 20;
export type ResortImageRow = { id: number; url: string; alt: string; isNew: boolean };


@Component({
  selector: 'app-upsert-gallery',
  imports: [AppSrc],
  templateUrl: './upsert-gallery.html',
  styleUrl: './upsert-gallery.scss',
})
export class UpsertGallery {
  private readonly _coreService = inject(CoreFacadeService);
  private readonly _apiFs = inject(ApiFacadeService);


  @ViewChild('fileInput') private fileInput?: ElementRef<HTMLInputElement>;

  @Input('data') data: any = null;
  @Output('upsert') upsert: EventEmitter<any> = new EventEmitter<any>();


  protected readonly maxImages = RESORT_MAX_IMAGES;

  protected get canAddMore(): boolean {
    return this.displayedImages.length < this.maxImages;
  }
  protected displayedImages: ResortImageRow[] = [];
  private nextRowId = 1;
  protected delImageUrls: string[] = [];
  protected uploadingRowIds = new Set<number>();
  protected isReqAlive = false;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.reset();
      const imgs = this.data?.images;
      if (Array.isArray(imgs)) {
        for (const im of imgs) {
          if (!im?.url) continue;

          this.displayedImages.push({
            id: this.nextRowId++,
            url: im.url,
            alt: typeof im.alt === 'string' ? im.alt : '',
            isNew: false,
          });
        }
      }
    }
  }


  private reset(): void {
    this.delImageUrls = [];
    this.displayedImages = [];
    this.nextRowId = 1;
    this.uploadingRowIds.clear();
  }


  protected triggerFilePick(): void {
    if (!this.canAddMore) return;
    this.fileInput?.nativeElement.click();
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

  protected isRowUploading(row: ResortImageRow): boolean {
    return this.uploadingRowIds.has(row.id);
  }

  protected onAltInput(row: ResortImageRow, event: Event): void {
    const t = (event.target as HTMLInputElement).value;
    row.alt = t.length > 255 ? t.slice(0, 255) : t;
  }

  protected removeImage(row: ResortImageRow): void {
    if (!row.isNew) {
      this.delImageUrls.push(row.url);
    }
    this.displayedImages = this.displayedImages.filter((r) => r.id !== row.id);
  }

  protected onCloseOrCancel(): void {
    this.upsert.emit(null);
  }

  protected onSubmit(): void {
    if (!this.data?._id || this.isReqAlive) return;

    if (this.uploadingRowIds.size > 0) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'Please wait for uploads to finish');
      return;
    }

    const withUrl = this.displayedImages.filter((x) => x.url);
    if (withUrl.length < 1) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'Add at least one image');
      return;
    }

    const body: Record<string, unknown> = {};
    const newImgs = withUrl.filter((x) => x.isNew).map((x) => ({ url: x.url, alt: (x.alt ?? '').trim() }));
    if (newImgs.length) {
      body['newImages'] = newImgs;
    }
    if (this.delImageUrls.length) {
      body['delImages'] = [...this.delImageUrls];
    }
    const origByUrl = new Map<string, string>((this.data.images ?? [])
      .filter((im: { url?: string }) => im?.url)
      .map((im: { url: string; alt?: string }) =>
        [im.url, typeof im.alt === 'string' ? im.alt : ''] as [string, string]
      ));
    const updateImageAlts = withUrl
      .filter((x) => !x.isNew && x.url)
      .filter((x) => (origByUrl.get(x.url) ?? '').trim() !== (x.alt ?? '').trim())
      .map((x) => ({ url: x.url, alt: (x.alt ?? '').trim() }));
    if (updateImageAlts.length) {
      body['updateImages'] = updateImageAlts;
    }

    if (!Object.keys(body).length) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'No changes to save');
      return;
    }

    this.isReqAlive = true;
    this._apiFs.resort.update(this.data._id, body).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Gallery updated successfully');
          this.upsert.emit(res.data);
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