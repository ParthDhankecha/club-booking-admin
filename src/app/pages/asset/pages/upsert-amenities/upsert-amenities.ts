import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { AppSrc } from '@src/app/shared/directives/src';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { EToasterType } from '@src/app/models/utils.model';
import { ROUTES } from '@src/app/constants/app-routes';


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
  protected readonly MIN_FEATURED = 3;
  protected readonly MAX_FEATURED = 3;

  // Inject Services
  protected _fb: FormBuilder = inject(FormBuilder);
  protected _coreService: CoreFacadeService = inject(CoreFacadeService);
  protected _apiFs: ApiFacadeService = inject(ApiFacadeService);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);
  private readonly _router: Router = inject(Router);

  protected readonly getIconPath = this._coreService.icon.getIconPath;
  protected readonly iconMap: Map<string, string> = new Map();


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

  /** Cached enabled amenity names — updated on form changes, not per template read. */
  protected enabledAmenities = new Set<string>();
  /** Cached featured amenity names — updated on form changes, not per template read. */
  protected featuredAmenities = new Set<string>();



  protected goBack(): void {
    this._router.navigate([ROUTES.getFullRoute(ROUTES.ASSET.BASE)]);
  }


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
    this.iconMap.clear();

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
              this.iconMap.set(item, this.getIconPath(item));
            }
          } else {
            for (const item of amenities[key]) {
              group[item] = [false, []];  // or [true, []] when patching from this.data.amenities
              this.iconMap.set(item, this.getIconPath(item));
            }
          }
          amenitiesGroup[key] = this._fb.group(group);
        }
        this.form.addControl('amenities', this._fb.group(amenitiesGroup));
        this.setupFeaturedAmenities(savedAmenities);
      }
    }
  }

  private setupFeaturedAmenities(savedAmenities: Record<string, string[]>): void {
    const savedFeatured: string[] = this.assetData?.featuredAmenities ?? [];
    const enabledAtLoad = Object.values(savedAmenities ?? []).flat();
    const featured = savedFeatured.filter((amenity) => enabledAtLoad.includes(amenity));

    this.form.addControl('featuredAmenities', this._fb.control(featured, [this.featuredAmenitiesValidator()]));
    this.refreshAmenityState();
    this.form.get('amenities')?.valueChanges.pipe(
      takeUntilDestroyed(this._destroyRef),
    ).subscribe(() => {
      this.refreshAmenityState();
      this.syncFeaturedAmenities();
      this.refreshAmenityState();
    });
  }

  private refreshAmenityState(): void {
    this.enabledAmenities = new Set(this.getEnabledAmenityNames());
    this.featuredAmenities = new Set(this.form.get('featuredAmenities')?.value ?? []);
  }

  private syncFeaturedAmenities(): void {
    const control = this.form.get('featuredAmenities');
    if (!control) return;

    const featured: string[] = control.value ?? [];
    const synced = featured.filter((amenity) => this.enabledAmenities.has(amenity));

    if (synced.length !== featured.length) {
      control.setValue(synced);
    }
  }

  private featuredAmenitiesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const count = (control.value as string[] | null)?.length ?? 0;
      if (count === 0) return null;
      if (count < this.MIN_FEATURED) return { minFeatured: true };
      if (count > this.MAX_FEATURED) return { maxFeatured: true };
      return null;
    };
  }

  private getEnabledAmenityNames(): string[] {
    const amenities: Record<string, Record<string, boolean>> = this.form.get('amenities')?.value ?? {};

    return Object.values(amenities).flatMap(group => Object.entries(group)
      .filter(([, checked]) => checked)
      .map(([name]) => name)
    );
  }

  protected get featuredCount(): number {
    return this.featuredAmenities.size;
  }

  protected toggleFeatured(amenity: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const control = this.form.get('featuredAmenities');
    if (!control) return;

    let featured: string[] = [...(control.value ?? [])];
    if (input.checked) {
      if (featured.length >= this.MAX_FEATURED) {
        input.checked = false;
        this._coreService.utils.showToaster(
          EToasterType.Warning,
          `You can select up to ${this.MAX_FEATURED} featured amenities`,
        );
        return;
      }
      featured.push(amenity);
    } else {
      featured = featured.filter((item) => item !== amenity);
    }

    control.setValue(featured);
    control.markAsTouched();
    this.refreshAmenityState();
  }


  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const form = this.form.value;
    const body: any = {
      amenities: {},
      featuredAmenities: form.featuredAmenities ?? [],
    };
    for (const key of Object.keys(form.amenities)) {
      const amenities = Object.entries(form.amenities[key]).filter(([, b]: any) => b).map(([a]) => a);
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