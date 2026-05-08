import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '../http-client/http-client';
import { API_ENDPOINTS } from '@src/app/constants/api-endpoints';
import { IResponse } from '@src/app/models/http-response.model';


@Injectable({
  providedIn: 'root',
})
export class Property {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS.PROPERTY;


  list(body: any = {}): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.LIST, body);
  }

  create(body: any): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.CREATE, body);
  }

  optionsData(body: { dropdownList: any }): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.OPTIONS_DATA, body);
  }

  changeStatus(id: string, body: { isPublished: boolean }): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.CHANGE_STATUS(id), body);
  }

  update(id: string, body: any): Observable<IResponse> {
    return this._http.put(this._ENDPOINTS.UPDATE(id), body);
  }

  delete(id: string): Observable<IResponse> {
    return this._http.delete(this._ENDPOINTS.DELETE(id));
  }
}