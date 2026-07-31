import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';


@Component({
  selector: 'app-upsert-workspace',
  imports: [ReactiveFormsModule],
  templateUrl: './upsert-workspace.html',
  styleUrl: './upsert-workspace.scss',
})
export class UpsertWorkspace {
  protected _fb = inject(FormBuilder);
  protected _coreService = inject(CoreFacadeService);
  protected _apiFs = inject(ApiFacadeService);

  @Input('data') data: any = null;
  @Output('upsert') upsert = new EventEmitter<any>();

  protected isEditMode = false;
  protected form: FormGroup = this._fb.group({
    title: [null, [Validators.required, Validators.maxLength(150)]],
  });

  protected isReqAlive = false;

  protected ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      if (this.data) {
        this.isEditMode = true;
        this.form.patchValue({ title: this.data.title });
      } else {
        this.isEditMode = false;
        this.form.reset();
      }
    }
  }

  get f_title(): AbstractControl | null {
    return this.form.get('title');
  }

  protected onSubmit(): void {
    if (this.isReqAlive) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const title = (this.form.value.title as string)?.trim();
    this.isReqAlive = true;

    if (this.isEditMode) {
      this._apiFs.workspace.update(this.data._id, { title }).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'UPDATED') {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, 'Workspace updated successfully');
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

    this._apiFs.workspace.create({ title }).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'CREATED') {
          this.form.reset();
          this._coreService.utils.showToaster(EToasterType.Success, 'Workspace created successfully');
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