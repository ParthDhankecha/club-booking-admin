import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import moment from 'moment';

import { SuperAdminHttpClient } from '../super-admin-http-client/super-admin-http-client';
import { API_ENDPOINTS_SUPER_ADMIN } from '@src/app/constants/api-endpoints';
import { IResponse } from '@src/app/models/http-response.model';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import StorageKeys from '@src/app/constants/storage-keys';


@Injectable({
  providedIn: 'root',
})
export class SuperAdmin {
  private readonly _http: SuperAdminHttpClient = inject(SuperAdminHttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS_SUPER_ADMIN.AUTH;

  private readonly _coreService = inject(CoreFacadeService);
  protected readonly encodeKey = this._coreService.utils.encodeKey;


  login(payload: { email: string, password: string }): Observable<IResponse> {
    const body = {
      data: this._coreService.utils.encodeData(payload, this.encodeKey),
      date: this.encodeKey
    };
    return this._http.post(this._ENDPOINTS.LOGIN, body).pipe(
      tap((res: any) => {
        this._setSession(res);
      }),
    );
  }
  private _setSession(resObj: any): void {
    if (!['OK', 'CREATED'].includes(resObj?.code)) return;

    localStorage.setItem(StorageKeys.ACCESS_TOKEN, resObj.data.token.accessToken);

    const expiresIn = resObj.data.token.expiresIn * 1000;
    const expiresAt = moment().valueOf() + expiresIn;
    localStorage.setItem(StorageKeys.ACCESS_TOKEN_EXPIRES_AT, `${expiresAt}`);

    const userDetails = {
      ...resObj.data.user
    };
    localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(userDetails));
  }
}