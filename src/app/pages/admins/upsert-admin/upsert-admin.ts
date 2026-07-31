import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';


@Component({
  selector: 'app-upsert-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './upsert-admin.html',
  styleUrl: './upsert-admin.scss',
})
export class UpsertAdmin {

  protected _fb = inject(FormBuilder);
  protected _coreService = inject(CoreFacadeService);
  protected _apiFs = inject(ApiFacadeService);


  @Input('data') data: any = null;
  @Input('workspaces') workspaces: any[] = [];
  @Output('upsert') upsert = new EventEmitter<any>();


  protected isEditMode = false;
  protected form: FormGroup = this._fb.group({
    fullname: [null, [Validators.required, Validators.maxLength(150)]],
    email: [null, [Validators.required, Validators.email, Validators.maxLength(150)]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    workspaceId: ['', [Validators.required]],
    isActive: [true],
  });

  protected isReqAlive = false;

  protected ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']?.currentValue) {
      if (this.data) {
        this.isEditMode = true;
        this.form.patchValue({
          fullname: this.data.fullname,
          email: this.data.email,
          workspaceId: this.data.workspaceId?._id ?? this.data.workspaceId,
          isActive: this.data.isActive ?? false,
        });
        this.form.get('password')?.clearValidators();
        this.form.get('password')?.setValidators([Validators.minLength(6)]);
        this.form.get('workspaceId')?.disable();
      } else {
        this.isEditMode = false;
        this.form.reset();
        this.form.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
        this.form.get('workspaceId')?.enable();
      }
      this.form.get('password')?.updateValueAndValidity();
    }
  }


  get f_fullname(): AbstractControl | null {
    return this.form.get('fullname');
  }

  get f_email(): AbstractControl | null {
    return this.form.get('email');
  }

  get f_password(): AbstractControl | null {
    return this.form.get('password');
  }

  get f_workspaceId(): AbstractControl | null {
    return this.form.get('workspaceId');
  }


  protected onSubmit(): void {
    if (this.isReqAlive) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const fullname = (this.form.value.fullname as string)?.trim();
    const email = (this.form.value.email as string)?.trim();
    const password = (this.form.value.password as string)?.trim();
    const isActive = !!this.form.value.isActive;
    this.isReqAlive = true;

    if (this.isEditMode) {
      const body: { fullname: string; email: string; password?: string; isActive: boolean } = {
        fullname,
        email,
        isActive,
      };
      if (password) {
        body.password = password;
      }

      this._apiFs.adminUser.update(this.data._id, body).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'UPDATED') {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, 'Admin updated successfully');
            this.upsert.emit(res.data);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        },
      });
      return;
    }

    const workspaceId = (this.form.value.workspaceId as string)?.trim();
    this._apiFs.adminUser.create({ fullname, email, password, workspaceId, isActive }).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'CREATED') {
          this.form.reset();
          this._coreService.utils.showToaster(EToasterType.Success, 'Admin created successfully');
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

  protected onCloseOrCancel(): void {
    this.upsert.emit(null);
  }
}