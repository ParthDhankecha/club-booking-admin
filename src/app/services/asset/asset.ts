import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '../http-client/http-client';
import { IResponse } from '@src/app/models/http-response.model';
import { API_ENDPOINTS } from '@src/app/constants/api-endpoints';


@Injectable({
  providedIn: 'root',
})
export class Asset {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS.ASSET;


  create(body: any): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.CREATE, body);
  }

  list(body: { page?: number, limit?: number, filters?: any } = {}): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.LIST, body);
  }

  getPartialDetails(id: string, body: { amenities?: boolean, images?: boolean, baseData?: boolean } = {}): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.GET_PARTIAL_DETAILS(id), body);
  }

  configuration(body: any = { default: true }): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.CONFIGURATION, body);
  }

  masterData(body: { optionsList?: any, calendarList?: any }): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.MASTER_DATA, body);
  }

  changeStatus(id: string, body: { isPublished: boolean }): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.CHANGE_STATUS(id), body);
  }

  upsertImage(id: string, body: FormData): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.UPSERT_IMAGE(id), body, { multipart: true });
  }

  removeImage(id: string, body: { url: string, index: number }): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.REMOVE_IMAGE(id), body);
  }

  update(id: string, body: any): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.UPDATE(id), body);
  }

  updateMetadata(id: string, body: FormData): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.UPDATE_METADATA(id), body, { multipart: true });
  }

  delete(id: string): Observable<IResponse> {
    return this._http.delete(this._ENDPOINTS.DELETE(id));
  }
}