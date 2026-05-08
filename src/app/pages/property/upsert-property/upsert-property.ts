import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';


@Component({
  selector: 'app-upsert-property',
  imports: [
    ReactiveFormsModule,
    CommonDropdown
  ],
  templateUrl: './upsert-property.html',
  styleUrl: './upsert-property.scss',
})
export class UpsertProperty {
  // Inject Services
  protected _fb: FormBuilder = inject(FormBuilder);
  protected _coreService: CoreFacadeService = inject(CoreFacadeService);
  protected _apiFs: ApiFacadeService = inject(ApiFacadeService);


  @Input('data') data: any = null;
  @Input('resortOptions') resortOptions: any[] = [];
  @Input('defaultResortForCreate') defaultResortForCreate: any = null;
  @Output('upsert') upsert: EventEmitter<any> = new EventEmitter<any>();


  protected isEditMode: boolean = false;
  protected form: FormGroup = this._fb.group({
    resort: [null, [Validators.required]],
    title: [null, [Validators.required, Validators.pattern(/^(?!\s)[A-Za-z0-9 &\/\-,\.\(\)]{1,150}(?<!\s)$/)]],
    description: [null, [Validators.required, Validators.maxLength(700)]],
    isPublished: [false, [Validators.required]]
  });


  protected ngOnChanges(changes: SimpleChanges): void {
    // for new create
    if (!changes['data']?.currentValue && changes['data']?.firstChange) {
      this.resetCreateForm();
      // for edit
    } else if (changes['data']?.currentValue) {
      this.patchEditForm();
    }
  }

  private patchEditForm(): void {
    this.isEditMode = true;

    const resortId = this.data?.resortId?._id ?? this.data?.resortId;
    this.form.patchValue({
      title: this.data.title,
      description: this.data.description,
      isPublished: this.data.isPublished ?? false,
      resort: this.resortOptions?.find((r: any) => r._id === resortId) || null,
    });
  }

  private resetCreateForm(): void {
    this.isEditMode = false;
    this.form.reset({
      title: null,
      description: null,
      isPublished: false,
      resort: this.defaultResortForCreate || null,
    });
  }



  get f_resort(): AbstractControl | null {
    return this.form.get('resort');
  }
  get f_title(): AbstractControl | null {
    return this.form.get('title');
  }
  get f_description(): AbstractControl | null {
    return this.form.get('description');
  }
  get f_isPublished(): AbstractControl | null {
    return this.form.get('isPublished');
  }

  protected onResortSelected(resort: any): void {
    this.form.get('resort')?.setValue(resort || null);
    this.form.get('resort')?.markAsTouched();
  }


  protected isReqAlive: boolean = false;
  protected onSubmit(): void {
    if (this.isReqAlive) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const form = this.form.value;
    const body: any = {
      resortId: form.resort?._id,
      title: form.title?.trim(),
      description: form.description?.trim(),
      isPublished: form.isPublished
    };

    this.isReqAlive = true;
    if (this.isEditMode) {
      this._apiFs.property.update(this.data._id, body).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'UPDATED') {
            this.form.reset();
            this._coreService.utils.showToaster(
              EToasterType.Success,
              'Property updated successfully'
            );
            this.upsert.emit(res.data);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    } else {
      this._apiFs.property.create(body).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'CREATED') {
            this.form.reset();
            this._coreService.utils.showToaster(
              EToasterType.Success,
              'Property created successfully'
            );
            this.upsert.emit(res.data);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    }
  }


  protected onCloseOrCancel(): void {
    this.upsert.emit(null);
  }

}