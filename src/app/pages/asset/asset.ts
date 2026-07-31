import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { Pagination } from '@src/app/shared/components/pagination/pagination';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';
import { UpsertAsset } from './upsert-asset/upsert-asset';
import { UpsertMetadata } from './pages/upsert-metadata/upsert-metadata';

import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';
import { ROUTES } from '@src/app/constants/app-routes';


@Component({
  selector: 'app-asset',
  imports: [
    FormsModule,
    ModalLayer,
    RegisterModalLayer,
    UpsertAsset,
    UpsertMetadata,
    DatePipe,
    Pagination,
    CommonDropdown
  ],
  templateUrl: './asset.html',
  styleUrl: './asset.scss',
})
export class Asset {
  // Inject Services
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);
  private readonly _router = inject(Router);

  protected isUpsertModalOpen: boolean = false;
  protected readonly upsertAssetModalId: string = 'upsert-asset-modal';
  protected readonly upsertAssetMetadataModalId: string = 'upsert-asset-metadata-modal';
  protected readonly deleteAssetModalId: string = 'delete-asset-modal';
  protected readonly changeAssetStatusModalId: string = 'change-asset-status-modal';

  protected assets: any[] = [];
  protected assetData: any = null;
  protected isReqAlive: boolean = false;
  protected loading: boolean = false;

  // pagination
  protected totalPages: number = 0;
  protected totalEntries: number = 0;
  protected currentPage: number = 1;
  protected pageSize: number = 10;


  ngOnInit(): void {
    this.getOptionsData();
    this.getAssets();
  }


  protected _propertyList: any[] = [];
  protected propertyList: any[] = [];
  protected resortList: any[] = [];
  protected assetConfigs: any = null;


  private getOptionsData(): void {
    // use fork join to get both data in parallel
    forkJoin({
      property: this._apiFs.property.optionsData({ dropdownList: 'list' }),
      asset: this._apiFs.asset.configuration({ dayUnits: 'dayUnits' }),
      resort: this._apiFs.resort.optionsData({ dropdownList: 'dropdownList' }),
    }).subscribe({
      next: (res: any) => {
        if (res.property.code === 'OK') {
          const data = res.property.data;
          this._propertyList = data?.list ?? [];
          this.propertyList = [...this._propertyList];
        }
        if (res.asset.code === 'OK') {
          const data = res.asset.data;
          this.assetConfigs = data;
        }
        if (res.resort.code === 'OK') {
          const data = res.resort.data;
          this.resortList = data?.dropdownList ?? [];
        }
      },
      error: (err: any) => {
        console.log('Error while fetch options data', err);
      }
    });
  }

  protected selectedResort: any = null;
  protected onResortFilterSelected(resort: any): void {
    this.selectedResort = resort || null;

    if (!resort?._id) {
      this.propertyList = [...this._propertyList];
    } else {
      this.propertyList = this._propertyList.filter((p: any) => p.resortId === resort._id);
      if (this.selectedProperty?._id && !this.propertyList.some((p: any) => p._id === this.selectedProperty._id)) {
        this.selectedProperty = null;
      }
    }
  }

  protected selectedProperty: any = null;
  protected searchInput: string = '';
  protected onPropertySelected(property: any): void {
    this.selectedProperty = property || null;
  }
  protected onSearch(): void {
    this.currentPage = 1;
    this.getAssets();
  }

  protected onClearFilters(): void {
    this.selectedResort = null;
    this.selectedProperty = null;
    this.searchInput = '';
    this.propertyList = [...this._propertyList];
    this.currentPage = 1;
    this.getAssets();
  }


  private getAssets(): void {
    this.loading = true;
    const payload: any = {
      page: this.currentPage,
      limit: this.pageSize,
      filters: null,
    };
    if (this.selectedProperty?._id || this.searchInput?.trim() || this.selectedResort?._id) {
      payload.filters = {
        ...(this.searchInput?.trim() && { search: this.searchInput?.trim() }),
        ...(this.selectedProperty?._id && { propertyId: this.selectedProperty?._id }),
        ...(this.selectedResort?._id && { resortId: this.selectedResort._id }),
      };
    }
    this._apiFs.asset.list(payload).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK') {
          const data = res.data;
          this.assets = data?.list ?? [];
          this.totalEntries = data?.count ?? 0;
          this.totalPages = Math.ceil(this.totalEntries / this.pageSize);
        }
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
        console.log('Error while fetch list', err);
      }
    });
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.getAssets();
  }


  // create new asset
  protected onCreateNew(): void {
    if (!this._propertyList?.length) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'No properties found. Please add properties first');
      return;
    }
    if (!this.resortList?.length) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'No resorts found. Please add resorts first');
      return;
    }
    this.assetData = null;
    this._coreService.modal.open(this.upsertAssetModalId);
  }

  // change asset status
  protected isCasReqAlive: boolean = false;
  protected onChangeAssetStatus(asset: any): void {
    if (!asset || this.isCasReqAlive) return;

    this.assetData = asset;
    this._coreService.modal.open(this.changeAssetStatusModalId);
  }

  protected onChangeAssetStatusCancel(): void {
    this.assetData = null;
    this._coreService.modal.close(this.changeAssetStatusModalId);
  }

  protected onConfirmChangeAssetStatus(): void {
    if (!this.assetData?._id || this.isCasReqAlive) return;

    this.isCasReqAlive = true;
    this._apiFs.asset.changeStatus(this.assetData._id, { isPublished: !this.assetData.isPublished }).subscribe({
      next: (res: IResponse) => {
        this.isCasReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Asset status changed successfully');
          const index = this.assets.findIndex(a => a._id === this.assetData._id);
          if (index !== -1) {
            this.assets[index] = {
              ...this.assets[index],
              ...res.data
            };
          }
          this.onChangeAssetStatusCancel();
        }
      },
      error: (err: any) => {
        this.isCasReqAlive = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }


  // edit asset
  protected onEditAsset(asset: any): void {
    if (!asset) return;

    this.assetData = { ...asset };
    this._coreService.modal.open(this.upsertAssetModalId);
  }

  protected onUpsertAsset(event: any): void {
    this.assetData = null;
    if (event) { this.getAssets(); } // reload assets list
    this._coreService.modal.close(this.upsertAssetModalId);
  }

  protected onEditMetadata(asset: any): void {
    if (!asset) return;
    this.assetData = { ...asset };
    this._coreService.modal.open(this.upsertAssetMetadataModalId);
  }

  protected onUpsertMetadata(event: any): void {
    if (event) {
      const i = this.assets.findIndex((a) => a._id === this.assetData?._id);
      if (i !== -1) {
        this.assets[i] = { ...this.assets[i], metadata: event.metadata };
      } else {
        this.getAssets();
      }
    }
    this.assetData = null;
    this._coreService.modal.close(this.upsertAssetMetadataModalId);
  }

  // edit amenities
  protected onEditAmenities(asset: any): void {
    if (!asset?._id) return;
    this._router.navigate([ROUTES.getFullRoute(ROUTES.ASSET.BASE, ROUTES.ASSET.UPSERT_AMENITIES?.replace(':id', asset._id))]);
  }

  // edit images
  protected onEditImages(asset: any): void {
    if (!asset?._id) return;
    this._router.navigate([ROUTES.getFullRoute(ROUTES.ASSET.BASE, ROUTES.ASSET.UPSERT_IMAGES?.replace(':id', asset._id))]);
  }


  // delete asset
  protected onDeleteAsset(asset: any): void {
    if (this.assetData || this.isReqAlive) return;
    this.assetData = asset;
    this._coreService.modal.open(this.deleteAssetModalId);
  }

  protected onDeleteAssetCancel(): void {
    this.assetData = null;
    this._coreService.modal.close(this.deleteAssetModalId);
  }

  protected onConfirmDeleteAsset(): void {
    if (!this.assetData?._id || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.asset.delete(this.assetData._id).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'DELETED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Asset deleted successfully');
          this.getAssets(); // reload assets list
          this.onDeleteAssetCancel();
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