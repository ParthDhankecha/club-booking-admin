import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';


@Component({
  selector: 'app-upsert-resort',
  imports: [ReactiveFormsModule],
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
  });

  protected isReqAlive = false;


  protected ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
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
      } else {
        this.isEditMode = false;
        this.form.reset();
        this.f_location.patchValue({ mapUrl: '', address: '' });
        this.mapUrlPreview = null;
        this.mapUrlForOpen = null;
      }
    }
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


  protected onSubmit(): void {
    if (this.isReqAlive) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const form = this.form.value;
    this.isReqAlive = true;

    const locationPayload = {
      mapUrl: this.getResolvedMapUrl(),
      address: (form.location?.address as string)?.trim() ?? '',
    };

    if (this.isEditMode) {
      const body = {
        title: (form.title as string)?.trim(),
        description: (form.description as string)?.trim(),
        destination: (form.destination as string)?.trim(),
        phone: (form.phone as string)?.trim(),
        email: (form.email as string)?.trim(),
        location: locationPayload,
      };
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
        location: locationPayload,
      };
      this._apiFs.resort.create(body).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'CREATED') {
            this.form.reset();
            this._coreService.utils.showToaster(
              EToasterType.Success,
              'Resort created successfully. Add images from Gallery in the actions menu.'
            );
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