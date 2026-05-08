import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';


@Component({
  selector: 'app-upsert-asset',
  imports: [
    ReactiveFormsModule,
    CommonDropdown
  ],
  templateUrl: './upsert-asset.html',
  styleUrl: './upsert-asset.scss',
})
export class UpsertAsset {
  // Inject Services
  protected _fb: FormBuilder = inject(FormBuilder);
  protected _coreService: CoreFacadeService = inject(CoreFacadeService);
  protected _apiFs: ApiFacadeService = inject(ApiFacadeService);
  private _sanitizer: DomSanitizer = inject(DomSanitizer);


  @Input('assetConfigs') assetConfigs: any = null;
  @Input('propertyList') propertyList: any[] = [];
  @Input('resortList') resortList: any[] = [];
  @Input('selectedResort') selectedResort: any = null;
  @Input('selectedProperty') selectedProperty: any = null;
  @Input('data') data: any = null;
  @Output('upsert') upsert: EventEmitter<any> = new EventEmitter<any>();

  protected propertyDropdownList: any[] = [];


  protected dayUnitsKeys: string[] = [];
  protected isEditMode: boolean = false;
  protected form: FormGroup = this._fb.group({
    resort: [null, [Validators.required]],
    property: [null, [Validators.required]],
    title: [null, [Validators.required, Validators.pattern(/^(?!\s)[A-Za-z0-9 &\/\-,\.\(\)]{1,150}(?<!\s)$/)]],
    maxLimit: this._fb.group({
      adults: [null, [Validators.required, Validators.min(1)]],
      kids: [null, [Validators.required, Validators.min(0)]],
    }),
    description: [null, [Validators.required, Validators.maxLength(5000)]],
    price: [null, [Validators.min(0)]],
    quantity: [null, [Validators.required, Validators.min(1)]],
    location: this._fb.group({
      mapLink: [''],
      address: ['']
    }),
    information: this._fb.group({
      size: this._fb.group({
        value: [null, [Validators.min(0)]],
        unit: ['']
      }),
      buildings: [null, [Validators.min(0)]],
      basement: [null, [Validators.min(0)]],
      balcony: [false],
      bedRooms: [''],
      bathrooms: [null, [Validators.min(0)]],
      floorHeight: this._fb.group({
        value: [null, [Validators.min(0)]],
        unit: ['']
      }),
      carParking: [false]
    })
  });


  protected ngOnChanges(changes: SimpleChanges): void {
    if (changes['resortList']?.currentValue) {
      const resortId = !this.data?.resortId && this.selectedResort?._id;
      if (resortId) {
        this.f_resort?.setValue(
          this.resortList?.find((r) => r._id === resortId) ?? null
        );
      }
    }
    if (changes['propertyList']?.currentValue) {
      const resortId = this.f_resort?.value?._id;
      if (resortId) {
        this.propertyDropdownList = [...(this.propertyList || [])].filter((p) => p.resortId === resortId);
      }

      const propertyId = !this.data?.propertyId?._id && this.selectedProperty?._id;
      if (resortId && propertyId) {
        this.f_property?.setValue(
          this.propertyDropdownList?.find((p) => p._id === propertyId) ?? null
        );
      }
    }


    if (changes['assetConfigs']?.currentValue) {
      Object.assign(this.assetConfigs, changes['assetConfigs']?.currentValue);
      if (this.assetConfigs) {
        this.dayUnitsKeys = Object.keys(this.assetConfigs.dayUnits);
      }
      // create form group for dayUnits
      const dayUnits = this.assetConfigs?.dayUnits;
      if (dayUnits) {
        const dayUnitsGroup: any = {};
        Object.keys(dayUnits).forEach((key: string) => {
          dayUnitsGroup[key] = [null, [Validators.required, Validators.min(0)]];
        })
        this.form.addControl('dayUnits', this._fb.group(dayUnitsGroup));
      }
    }

    if (changes['data']?.currentValue) {
      this._fetchAssetData();
    }
  }


  private applyResortFilterToPropertyList(): void {
    const rid = this.f_resort?.value?._id;
    const all = this.propertyList || [];
    if (!rid) {
      this.propertyDropdownList = [];
      return;
    }
    this.propertyDropdownList = all.filter((p: any) => p.resortId === rid);
  }


  protected isDataLoading: boolean = false;
  private _fetchAssetData(): void {
    if (!this.data?._id || this.isDataLoading) return;

    this.isDataLoading = true;
    this.isEditMode = true;
    this._apiFs.asset.getPartialDetails(this.data._id, { baseData: true }).subscribe({
      next: (res: IResponse) => {
        this.isDataLoading = false;
        if (res.code === 'OK') {
          this.data = { ...res.data };
          const resortId = this.data?.resortId?._id ?? this.data?.resortId;
          this.form.patchValue({
            title: this.data.title,
            maxLimit: {
              adults: this.data.maxLimit?.adults ?? 0,
              kids: this.data.maxLimit?.kids ?? 0,
            },
            description: this.data.description,
            price: this.data.price,
            quantity: this.data.quantity,
            resort: (resortId && this.resortList?.find((r) => r._id === resortId)) ?? null,
          });

          this.applyResortFilterToPropertyList();
          const propertyId = this.data?.propertyId?._id ?? this.data?.propertyId;
          this.form.patchValue({
            property: (propertyId && this.propertyDropdownList?.find((p) => p._id === propertyId)) ?? null,
          });
          if (this.data.location) {
            this.f_location?.patchValue({
              mapLink: this.data.location.mapLink ?? '',
              address: this.data.location.address ?? ''
            });
            if (this.data.location.mapLink) {
              this.updateMapUrlPreviewUrl(this.data.location.mapLink);
            }
          }
          if (this.f_dayUnits) {
            this.f_dayUnits.patchValue(this.data.dayUnits);
          }
          if (this.data.information && this.f_information) {
            this.f_information.patchValue({
              size: this.data.information.size ?? { value: null, unit: '' },
              buildings: this.data.information.buildings ?? null,
              basement: this.data.information.basement ?? null,
              balcony: this.data.information.balcony ?? false,
              bedRooms: this.data.information.bedRooms ?? '',
              bathrooms: this.data.information.bathrooms ?? null,
              floorHeight: this.data.information.floorHeight ?? { value: null, unit: '' },
              carParking: this.data.information.carParking ?? false
            });
          }
        }
      },
      error: (err: any) => {
        this.isDataLoading = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }


  get f_resort(): AbstractControl | null {
    return this.form.get('resort');
  }
  get f_property(): AbstractControl | null {
    return this.form.get('property');
  }
  get f_title(): AbstractControl | null {
    return this.form.get('title');
  }
  get f_maxLimit(): FormGroup | null {
    return this.form.get('maxLimit') as FormGroup;
  }
  get f_description(): AbstractControl | null {
    return this.form.get('description');
  }
  get f_price(): AbstractControl | null {
    return this.form.get('price');
  }
  get f_quantity(): AbstractControl | null {
    return this.form.get('quantity');
  }
  get f_dayUnits(): FormGroup | null {
    return this.form.get('dayUnits') as FormGroup;
  }
  get f_location(): FormGroup | null {
    return this.form.get('location') as FormGroup;
  }
  get f_information(): FormGroup | null {
    return this.form.get('information') as FormGroup;
  }


  /** Extracts the actual URL from map link value (handles pasted iframe HTML). */
  private getResolvedMapUrl(): string {
    return this._coreService.googleMap.getEmbedMapUrl(
      this.f_location?.get('mapLink')?.value?.trim() ?? ''
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


  /** Normalize map link on blur: if pasted iframe HTML, store only the embed URL. */
  protected onMapLinkBlur(): void {
    const url = this.getResolvedMapUrl();
    const control = this.f_location?.get('mapLink');
    if (control && url && url !== control.value?.trim()) {
      control.patchValue(url, { emitEvent: false });
      this.updateMapUrlPreviewUrl(url);
    }
  }


  protected onResortChange(resort: any): void {
    this.f_resort?.setValue(resort ?? null);
    this.f_resort?.markAsTouched();

    this.applyResortFilterToPropertyList();
    this.f_property?.setValue(null);
  }

  protected onPropertyChange(property: any): void {
    if (!property) return;

    this.f_property?.patchValue(property);
  }



  protected isReqAlive: boolean = false;
  protected onSubmit(): void {
    if (this.isReqAlive) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const form = this.form.value;
    const info = form.information;
    const upsertObj: any = {
      title: form.title?.trim(),
      maxLimit: {
        adults: form.maxLimit?.adults,
        kids: form.maxLimit?.kids,
      },
      description: form.description?.trim(),
      price: form.price,
      quantity: form.quantity,
      resortId: form.resort?._id,
      propertyId: form.property?._id,
      dayUnits: form.dayUnits,
      location: {
        mapLink: this.getResolvedMapUrl(),
        address: form.location?.address?.trim() ?? ''
      },
      information: {
        size: (info?.size?.value != null || info?.size?.unit)
          ? { value: info.size.value ?? null, unit: info.size.unit?.trim() ?? '' }
          : undefined,
        buildings: info?.buildings ?? undefined,
        basement: info?.basement ?? undefined,
        balcony: info?.balcony ?? undefined,
        bedRooms: info?.bedRooms?.trim() || undefined,
        bathrooms: info?.bathrooms ?? undefined,
        floorHeight: (info?.floorHeight?.value != null || info?.floorHeight?.unit)
          ? { value: info.floorHeight.value ?? null, unit: info.floorHeight.unit?.trim() ?? '' }
          : undefined,
        carParking: info?.carParking ?? undefined
      }
    };
    // Remove undefined keys so API receives only set values
    Object.keys(upsertObj.information).forEach(k => {
      if (upsertObj.information[k] === undefined) delete upsertObj.information[k];
    });

    this.isReqAlive = true;
    if (this.isEditMode) {
      this._apiFs.asset.update(this.data._id, upsertObj).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'UPDATED') {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, 'Asset updated successfully');
            this.upsert.emit(true); // true means asset updated successfully
          }
        },
        error: (err: any) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    } else {
      this._apiFs.asset.create(upsertObj).subscribe({
        next: (res: IResponse) => {
          this.isReqAlive = false;
          if (res.code === 'CREATED') {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, 'Asset created successfully');
            this.upsert.emit(true); // true means asset created successfully
          }
        },
        error: (err: any) => {
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