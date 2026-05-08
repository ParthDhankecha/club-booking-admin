import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { AppSrc } from '@src/app/shared/directives/src';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { EToasterType } from '@src/app/models/utils.model';


@Component({
  selector: 'app-upsert-amenities',
  imports: [
    ReactiveFormsModule,
    AppSrc
],
  templateUrl: './upsert-amenities.html',
  styleUrl: './upsert-amenities.scss',
})
export class UpsertAmenities {
  // Inject Services
  protected _fb: FormBuilder = inject(FormBuilder);
  protected _coreService: CoreFacadeService = inject(CoreFacadeService);
  protected _apiFs: ApiFacadeService = inject(ApiFacadeService);

  constructor(
    private readonly _route: ActivatedRoute,
  ) {
    const assetId = this._route.snapshot.params['id'];
    if (assetId) {
      this.assetId = assetId;
      this.loadData();
    }
  }


  protected assetConfigs: any = {};
  protected dayUnitsKeys!: string[];
  protected amenitiesKeys!: string[];

  protected assetId!: string;
  protected assetData!: any;
  protected form: FormGroup = this._fb.group({});



  private loadData(): void {
    forkJoin({
      asset: this._apiFs.asset.getPartialDetails(this.assetId, { amenities: true }),
      configuration: this._apiFs.asset.configuration({ amenities: 'amenities' }),
    }).subscribe({
      next: (res: any) => {
        if (res.asset?.code === 'OK') {
          this.assetData = res.asset.data;
        }
        if (res.configuration?.code === 'OK') {
          this.setAssetData(res.configuration.data);
        }
      },
      error: (err: any) => {
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }

  private setAssetData(data: any): void {
    if (!data) return;
    Object.assign(this.assetConfigs, data);

    if (this.assetConfigs) {
      this.amenitiesKeys = Object.keys(this.assetConfigs.amenities);
      const amenities = this.assetConfigs?.amenities;
      const savedAmenities = this.assetData?.amenities ?? {};
      if (amenities) {
        // When building amenities form (concept)
        const amenitiesGroup: Record<string, FormGroup> = {};
        for (const key of Object.keys(amenities)) {
          const group: Record<string, [boolean, []]> = {};
          if (savedAmenities[key]) {
            for (const item of amenities[key]) {
              group[item] = [savedAmenities[key]?.includes?.(item) ?? false, []];  // or [true, []] when patching from this.data.amenities
            }
          } else {
            for (const item of amenities[key]) {
              group[item] = [false, []];  // or [true, []] when patching from this.data.amenities
            }
          }
          amenitiesGroup[key] = this._fb.group(group);
        }
        this.form.addControl('amenities', this._fb.group(amenitiesGroup));
      }
    }
  }


  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const form = this.form.value;
    const body: any = {
      amenities: {}
    };
    for (const key of Object.keys(form.amenities)) {
      const amenities = Object.entries(form.amenities[key]).filter((item: any) => item[1]).map((item: any) => item[0]);
      if (amenities.length > 0) {
        body.amenities[key] = amenities;
      }
    }

    this._apiFs.asset.update(this.assetId, body).subscribe({
      next: (res: any) => {
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Amenities updated successfully');
        }
      },
      error: (err: any) => {
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
}