import { Component, inject } from '@angular/core';

import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { UpsertResort } from './upsert-resort/upsert-resort';
import { AppSrc } from '@src/app/shared/directives/src';

import { IResponse } from '@src/app/models/http-response.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { EToasterType } from '@src/app/models/utils.model';


@Component({
  selector: 'app-resort',
  imports: [
    ModalLayer,
    RegisterModalLayer,
    UpsertResort,
    AppSrc
  ],
  templateUrl: './resort.html',
  styleUrl: './resort.scss',
})
export class Resort {
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);

  protected readonly upsertResortModalId = 'upsert-resort-modal';
  protected readonly deleteResortModalId = 'delete-resort-modal';

  protected resorts: any[] = [];
  protected isReqAlive = false;
  protected loading = false;
  protected resortData: any = null;

  ngOnInit(): void {
    this.loadList();
  }


  private loadList(): void {
    this.loading = true;
    this._apiFs.resort.list({}).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK' && res.data) {
          const list = res.data?.list;
          this.resorts = Array.isArray(list) ? list : [];
        } else {
          this.resorts = [];
        }
        this.loading = false;
      },
      error: (err: unknown) => {
        this.loading = false;
        console.log('Error while fetch resorts', err);
      }
    });
  }

  protected onCreateNew(): void {
    this.resortData = null;
    this._coreService.modal.open(this.upsertResortModalId);
  }

  protected onEditResort(resort: any): void {
    this.resortData = resort;
    this._coreService.modal.open(this.upsertResortModalId);
  }

  protected onUpsertResort(event: any): void {
    this.resortData = null;
    if (event) {
      if (event.refreshList) {
        this.loadList();
      } else {
        const i = this.resorts.findIndex((c) => c._id === event._id);
        if (i !== -1) {
          this.resorts[i] = event;
        } else {
          this.loadList();
        }
      }
    }
    this._coreService.modal.close(this.upsertResortModalId);
  }

  protected onDeleteResort(resort: any): void {
    this.resortData = resort;
    this._coreService.modal.open(this.deleteResortModalId);
  }

  protected onDeleteResortCancel(): void {
    this.resortData = null;
    this._coreService.modal.close(this.deleteResortModalId);
  }

  protected onConfirmDeleteResort(): void {
    if (!this.resortData || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.resort.delete(this.resortData._id).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'DELETED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Resort deleted successfully');
          this.loadList();
          this.onDeleteResortCancel();
        } else {
          const msg = res.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
          this.onDeleteResortCancel();
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