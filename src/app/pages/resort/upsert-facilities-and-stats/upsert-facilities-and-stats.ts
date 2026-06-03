import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

import { IconDropdown } from '@src/app/shared/components/icon-dropdown/icon-dropdown';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';


@Component({
  selector: 'app-upsert-facilities-and-stats',
  imports: [
    ReactiveFormsModule,
    IconDropdown,
    CdkDrag,
    CdkDropList,
    CdkDragHandle,
  ],
  templateUrl: './upsert-facilities-and-stats.html',
  styleUrl: './upsert-facilities-and-stats.scss',
})
export class UpsertFacilitiesAndStats {
  private readonly _fb = inject(FormBuilder);
  private readonly _coreService = inject(CoreFacadeService);
  private readonly _apiFs = inject(ApiFacadeService);


  @Input('data') data: any = null;
  @Output('upsert') upsert: EventEmitter<any> = new EventEmitter<any>();


  protected form: FormGroup = this._fb.group({
    facilities: this._fb.array<FormGroup>([]),
    stats: this._fb.array<FormGroup>([]),
  });

  protected isReqAlive = false;

  protected get iconOptions(): Record<string, string>[] {
    return this._apiFs.resort.iconList;
  }

  get f_facilities(): FormArray<FormGroup> {
    return this.form.get('facilities') as FormArray<FormGroup>;
  }

  get f_stats(): FormArray<FormGroup> {
    return this.form.get('stats') as FormArray<FormGroup>;
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.f_facilities.clear();
      this.f_stats.clear();
      if (this.data) {
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
      error: (err: unknown) => {
        console.error('Error loading icons', err);
      },
    });
  }


  protected iconDropdownSelection(iconKey: string | null | undefined): { key: string; value: string } | null {
    const k = (iconKey ?? '').trim();
    if (!k) return null;
    const url = this._apiFs.resort.iconsObj.get(k);
    if (url) return { key: k, value: url };
    return { key: k, value: k };
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


  protected onCloseOrCancel(): void {
    this.upsert.emit(null);
  }


  protected onSubmit(): void {
    if (!this.data?._id || this.isReqAlive) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const facilities = this._serializeFacilityStatsRows(this.f_facilities);
    const stats = this._serializeFacilityStatsRows(this.f_stats);

    this.isReqAlive = true;
    this._apiFs.resort.update(this.data._id, { facilities, stats }).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(
            EToasterType.Success,
            'Facilities & stats updated successfully'
          );
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