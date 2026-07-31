import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import moment from 'moment';

import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';


@Component({
  selector: 'app-upsert-blackout-date',
  imports: [
    CommonDropdown,
    ReactiveFormsModule
  ],
  templateUrl: './upsert-blackout-date.html',
  styleUrl: './upsert-blackout-date.scss',
})
export class UpsertBlackoutDate {

  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);
  private readonly _fb = inject(FormBuilder);


  protected readonly upsertForm: FormGroup = this._fb.group({
    asset: [null as any, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, []],
    reason: ['', [Validators.maxLength(1000)]],
  });

  protected isEditing = false;
  protected isReqAlive = false;


  @Input('selectedAsset') selectedAsset: any = null;
  @Input('assetList') assetList: any[] = [];
  @Input('data') data: any = null;
  @Output('upsert') upsert: EventEmitter<any> = new EventEmitter<any>();


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']?.currentValue) {
      this.isEditing = !!this.data?._id;

      const sourceId = this.data.sourceId?._id ?? this.data.sourceId;
      const asset = this.assetList.find(({ _id }) => _id === sourceId);
      const assetData: any = { propertyTitle: asset?.propertyTitle ?? '' };
      if (typeof this.data.sourceId === 'string') {
        Object.assign(assetData, {
          _id: asset._id,
          title: asset.title,
        });
      } else {
        Object.assign(assetData, this.data.sourceId);
      }
      this.upsertForm.reset({
        asset: assetData,
        startDate: this.data?.startDate?.substring(0, 10) ?? null,
        endDate: this.data?.endDate?.substring(0, 10) ?? null,
        reason: this.data?.reason ?? '',
      });
    }
  }


  get ff_asset(): AbstractControl {
    return this.upsertForm.get('asset')!;
  }
  get ff_startDate(): AbstractControl {
    return this.upsertForm.get('startDate')!;
  }
  get ff_endDate(): AbstractControl {
    return this.upsertForm.get('endDate')!;
  }
  get ff_reason(): AbstractControl {
    return this.upsertForm.get('reason')!;
  }


  protected closeUpsert(): void {
    this.upsert.emit();
  }

  protected submitUpsert(): void {
    if (this.isReqAlive) return;
    if (this.upsertForm.invalid) {
      this.upsertForm.markAllAsTouched();
      return;
    }

    const formValue = this.upsertForm.getRawValue();
    const resolvedSourceId: string | null = formValue.asset?._id;

    if (!resolvedSourceId || resolvedSourceId === 'all') {
      this._coreService.utils.showToaster(EToasterType.Warning, 'Please select a specific asset');
      return;
    }

    if (formValue.endDate && moment(formValue.endDate).isSameOrBefore(formValue.startDate)) {
      this.ff_endDate.setErrors({ invalidRange: true });
      return;
    }

    const payload: any = {
      sourceId: resolvedSourceId,
      startDate: moment(formValue.startDate).format('YYYY-MM-DD'),
      endDate: formValue.endDate ? moment(formValue.endDate).format('YYYY-MM-DD') : null,
      reason: formValue.reason?.trim?.() ?? '',
    };

    this.isReqAlive = true;
    const req$ = this.isEditing ? this._apiFs.blackoutDate.update(this.data._id, payload) : this._apiFs.blackoutDate.create(payload);

    req$.subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (this.isEditing ? res.code === 'UPDATED' : res.code === 'CREATED') {
          this._coreService.utils.showToaster(
            EToasterType.Success,
            this.isEditing ? 'Blackout date updated' : 'Blackout date created'
          );
          this.upsert.emit(res.data);
        }
      },
      error: (err: any) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      },
    });
  }
}
