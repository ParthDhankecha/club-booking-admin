import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { UpsertProperty } from './upsert-property/upsert-property';
import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';

import { IResponse } from '@src/app/models/http-response.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { EToasterType } from '@src/app/models/utils.model';


@Component({
  selector: 'app-property',
  imports: [
    UpsertProperty,
    ModalLayer,
    RegisterModalLayer,
    DatePipe,
    CommonDropdown
  ],
  templateUrl: './property.html',
  styleUrl: './property.scss',
})
export class Property {
  // Inject Services
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);

  protected isUpsertModalOpen: boolean = false;
  protected readonly upsertPropertyModalId: string = 'upsert-property-modal';
  protected readonly deletePropertyModalId: string = 'delete-property-modal';
  protected readonly changePropertyStatusModalId: string = 'change-property-status-modal';

  protected properties: any[] = [];
  protected isReqAlive: boolean = false;
  protected loading: boolean = false;

  protected resortList: any[] = [];
  protected selectedResort: any = null;

  get filteredProperties(): any[] {
    const resortId = this.selectedResort?._id;
    if (!resortId) {
      return this.properties;
    }

    return this.properties.filter(
      (p: any) => p.resortId === resortId
    );
  }


  ngOnInit(): void {
    this.loadList();
    this.getOptionsData();
  }


  private loadList(): void {
    this.loading = true;
    this._apiFs.property.list().subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK') {
          const data = res.data;
          if (Array.isArray(data)) {
            this.properties = data;
          }
        }
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
        console.log('Error while fetch list', err);
      }
    });
  }

  protected getOptionsData(): void {
    this._apiFs.resort.optionsData({ dropdownList: 'dropdownList' }).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK') {
          const data = res.data;
          this.resortList = data?.dropdownList ?? [];
        }
      }
    });
  }

  protected onResortFilterSelected(resort: any): void {
    this.selectedResort = resort || null;
  }

  protected onClearFilters(): void {
    if (!this.selectedResort?._id) return;

    this.selectedResort = null;
    this.loadList();
  }


  protected onCreateNew(): void {
    this.propertyData = null;
    this._coreService.modal.open(this.upsertPropertyModalId);
  }

  protected propertyData: any = null;
  protected onEditProperty(property: any): void {
    this.propertyData = property;
    this._coreService.modal.open(this.upsertPropertyModalId);
  }

  protected onUpsertProperty(event: any): void {
    // reset property data
    this.propertyData = null;
    // update properties list
    if (event) {
      const propertyIndex = this.properties.findIndex(p => p._id === event._id);
      if (propertyIndex !== -1) {
        this.properties[propertyIndex] = event;
      } else {
        // reload properties list
        this.loadList();
      }
    }
    this._coreService.modal.close(this.upsertPropertyModalId);
  }

  protected onDeleteProperty(property: any): void {
    this.propertyData = property;
    this._coreService.modal.open(this.deletePropertyModalId);
  }

  protected onDeletePropertyCancel(): void {
    this.propertyData = null;
    this._coreService.modal.close(this.deletePropertyModalId);
  }

  protected onConfirmDeleteProperty(): void {
    if (!this.propertyData || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.property.delete(this.propertyData._id).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'DELETED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Property deleted successfully');
          this.loadList();
          this.onDeletePropertyCancel();
        } else {
          const msg = res.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
          this.onDeletePropertyCancel();
        }
      },
      error: (err: any) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }

  protected onChangePropertyStatus(property: any): void {
    this.propertyData = property;
    this._coreService.modal.open(this.changePropertyStatusModalId);
  }

  protected onChangePropertyStatusCancel(): void {
    this.propertyData = null;
    this._coreService.modal.close(this.changePropertyStatusModalId);
  }

  protected onConfirmChangePropertyStatus(): void {
    if (!this.propertyData || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.property.changeStatus(this.propertyData._id, { isPublished: !this.propertyData.isPublished }).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Property status changed successfully');
          const propertyIndex = this.properties.findIndex(p => p._id === this.propertyData._id);
          if (propertyIndex !== -1) {
            this.properties[propertyIndex] = res.data;
          } else {
            this.loadList();
          }
          this.onChangePropertyStatusCancel();
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