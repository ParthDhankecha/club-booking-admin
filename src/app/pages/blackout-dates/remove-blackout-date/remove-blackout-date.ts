import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';


@Component({
  selector: 'app-remove-blackout-date',
  imports: [
    DatePipe
  ],
  templateUrl: './remove-blackout-date.html',
  styleUrl: './remove-blackout-date.scss',
})
export class RemoveBlackoutDate {

  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);

  protected isReqAlive: boolean = false;

  @Input('data') deleteData: any;
  @Output('close') closeEvent: EventEmitter<any> = new EventEmitter<any>();


  protected closeDelete(): void {
    this.closeEvent.emit();
  }

  protected confirmDelete(): void {
    if (!this.deleteData?._id || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.blackoutDate.delete(this.deleteData._id).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'DELETED' || res.code === 'OK') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Blackout date deleted');
          this.closeEvent.emit(true);
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
