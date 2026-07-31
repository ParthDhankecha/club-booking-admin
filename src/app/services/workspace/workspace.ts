import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SuperAdminHttpClient } from '../super-admin-http-client/super-admin-http-client';
import { API_ENDPOINTS_SUPER_ADMIN } from '@src/app/constants/api-endpoints';
import { IResponse } from '@src/app/models/http-response.model';


@Injectable({
  providedIn: 'root',
})
export class Workspace {
  private readonly _http: SuperAdminHttpClient = inject(SuperAdminHttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS_SUPER_ADMIN.WORKSPACE;


  list(body: Record<string, unknown> = {}): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.LIST, body);
  }

  create(body: { title: string }): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.CREATE, body);
  }

  update(id: string, body: { title: string }): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.UPDATE(id), body);
  }

  delete(id: string): Observable<IResponse> {
    return this._http.delete(this._ENDPOINTS.DELETE(id));
  }
}