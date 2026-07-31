import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';

import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';
import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { Pagination } from '@src/app/shared/components/pagination/pagination';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { UpsertBlackoutDate } from './upsert-blackout-date/upsert-blackout-date';
import { RemoveBlackoutDate } from './remove-blackout-date/remove-blackout-date';


@Component({
  selector: 'app-blackout-dates',
  imports: [
    DatePipe,
    CommonDropdown,
    ModalLayer,
    RegisterModalLayer,
    Pagination,
    UpsertBlackoutDate,
    RemoveBlackoutDate
  ],
  templateUrl: './blackout-dates.html',
  styleUrl: './blackout-dates.scss',
})
export class BlackoutDates {
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);

  protected resortList: any[] = [];
  protected selectedResort: any = null;

  protected _allAssetList: any[] = [];
  protected rawAssetList: any[] = [];
  protected assetList: any[] = [];
  protected selectedAsset: any = null;

  // getters
  protected get isAllAssetsSelected(): boolean {
    return this.selectedAsset?._id === 'all';
  }
  protected get isAllResortsSelected(): boolean {
    return this.selectedResort?._id === 'all';
  }


  // list state
  protected loading = false;
  protected isReqAlive = false;
  protected blackoutDates: any[] = [];

  // pagination
  protected totalPages = 0;
  protected totalEntries = 0;
  protected currentPage = 1;
  protected pageSize = 10;

  // modals
  protected readonly upsertModalId = 'upsert-blackout-date-modal';
  protected readonly deleteModalId = 'delete-blackout-date-modal';

  protected upsertData: any = null;
  protected deleteData: any = null;


  ngOnInit(): void {
    this.loadOptions();
  }


  private loadOptions(): void {
    this._apiFs.asset.masterData({ blackoutDate: true }).subscribe({
      next: (res: IResponse) => {
        if (res.code !== 'OK') return;

        const data: any = res.data ?? {};
        this.resortList = data.resortOptions ?? [];
        if (this.resortList.length > 0) {
          this.resortList.unshift({ _id: 'all', title: 'All Resorts' });
          this.selectedResort = this.resortList.at(0);
        }

        this._allAssetList = (data.assetOptions ?? []).map((a: any) => ({
          ...a,
          propertyTitle: a?.propertyId?.title ?? '',
          resortId: a?.resortId?._id ?? a?.resortId ?? null,
        }));
        this.applyAssetFilter(true);
      },
      error: (err: any) => console.log('Error while fetch options data', err),
    });
  }

  protected onResortFilterSelected(resort: any): void {
    if (this.selectedResort?._id === resort?._id) return;

    this.selectedResort = resort;
    this.applyAssetFilter(true);
  }

  private applyAssetFilter(resetSelection = false): void {
    const resortId = this.selectedResort?._id;
    const filtered = (resortId === 'all') ? [...this._allAssetList] :
      this._allAssetList.filter((a) => a.resortId === resortId);

    this.rawAssetList = filtered;
    this.assetList = [
      { _id: 'all', title: 'All', propertyTitle: 'Assets' },
      ...filtered,
    ];

    const assetOutOfScope = this.selectedAsset?._id
      && this.selectedAsset._id !== 'all'
      && !filtered.some((a) => a._id === this.selectedAsset._id);

    if (resetSelection || assetOutOfScope) {
      this.selectedAsset = this.assetList[0] ?? null;
    }

    this.reloadBlackoutList();
  }

  private reloadBlackoutList(): void {
    this.currentPage = 1;
    this.blackoutDates = [];
    this.totalEntries = 0;
    this.totalPages = 0;

    if (this.selectedAsset?._id) {
      this.loadList();
    }
  }

  protected onAssetSelected(asset: any): void {
    if (this.selectedAsset?._id === asset?._id) return;

    this.selectedAsset = asset || null;
    this.reloadBlackoutList();
  }


  private loadList(): void {
    if (this.loading || !this.selectedAsset?._id) return;
    this.loading = true;

    const payload: any = {
      type: 'list',
      page: this.currentPage,
      limit: this.pageSize,
      sourceId: this.selectedAsset._id
    };
    if (this.isAllAssetsSelected && !this.isAllResortsSelected) {
      payload.resortId = this.selectedResort._id;
    }

    this._apiFs.blackoutDate.list(payload).subscribe({
      next: (res: IResponse) => {
        this.loading = false;
        if (res.code === 'OK') {
          const data: any = res.data ?? {};
          this.blackoutDates = data?.list ?? [];
          this.totalEntries = data?.count ?? 0;
          this.totalPages = Math.ceil(this.totalEntries / this.pageSize);
        }
      },
      error: (err: any) => {
        this.loading = false;
        console.log('Error while fetch blackout dates', err);
      },
    });
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.loadList();
  }


  protected openCreate(): void {
    this.upsertData = null;
    this._coreService.modal.open(this.upsertModalId);
  }

  protected openEdit(item: any): void {
    if (!item?._id) return;
    this.upsertData = { ...item };
    this._coreService.modal.open(this.upsertModalId);
  }

  protected blackoutUpsertEvent(event?: any): void {
    if (!event) {
      this._coreService.modal.close(this.upsertModalId);
      this.upsertData = null;
      return;
    }

    let reload = true;
    const upsertId = event._id ?? this.upsertData._id;
    const index = this.blackoutDates.findIndex(({ _id }) => _id === upsertId);
    if (index > -1) {
      const obj = { ...event };
      if (this.upsertData?.sourceId?._id === obj?.sourceId) {
        obj.sourceId = this.blackoutDates[index]?.sourceId;
        reload = false;
      } else {
        const asset = this._allAssetList.find(({ _id }) => _id === obj?.sourceId);
        if (asset) {
          obj.sourceId = { _id: asset._id, title: asset.title };
          reload = false;
        }
      }
      if (!reload) this.blackoutDates[index] = obj;
    }
    if (reload) {
      this.loadList();
    }

    this._coreService.modal.close(this.upsertModalId);
    this.upsertData = null;
  }


  protected openDelete(item: any): void {
    if (!item?._id) return;
    this.deleteData = {
      ...item,
      propertyTitle: this._allAssetList.find(({ _id }) => _id === item.sourceId?._id)?.propertyTitle ?? ''
    };
    this._coreService.modal.open(this.deleteModalId);
  }

  protected blackoutDeleteCloseEvent(event: any): void {
    if (event) {
      if (this.blackoutDates.length === 1 && this.currentPage > 1) {
        this.currentPage--;
      }
      this.loadList();
    }

    this.deleteData = null;
    this._coreService.modal.close(this.deleteModalId);
  }
}