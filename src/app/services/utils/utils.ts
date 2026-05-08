import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { HttpClient } from '../http-client/http-client';
import { API_ENDPOINTS } from '@src/app/constants/api-endpoints';


@Injectable({
  providedIn: 'root',
})
export class Utils {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS.UTILS;

  private readonly _coreService = inject(CoreFacadeService);
  protected readonly encodeKey = this._coreService.utils.encodeKey;


  sync(payload: any = { default: true }): Observable<IResponse> {
    payload = {
      data: this._coreService.utils.encodeData(payload, this.encodeKey),
      date: this.encodeKey
    };
    return this._http.post(this._ENDPOINTS.SYNC, payload);
  }
}