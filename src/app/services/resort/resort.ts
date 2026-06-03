import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '../http-client/http-client';
import { IResponse } from '@src/app/models/http-response.model';
import { API_ENDPOINTS } from '@src/app/constants/api-endpoints';


@Injectable({
  providedIn: 'root',
})
export class Resort {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS.RESORT;


  list(body: Record<string, unknown> = {}): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.LIST, body);
  }

  uploadThumb(formData: FormData): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.UPLOAD_THUMB, formData, { multipart: true });
  }

  optionsData(body: any = {}): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.OPTIONS_DATA, body);
  }

  create(body: any): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.CREATE, body);
  }

  update(id: string, body: unknown): Observable<IResponse> {
    return this._http.put(this._ENDPOINTS.UPDATE(id), body);
  }

  updateMetadata(id: string, body: FormData): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.UPDATE_METADATA(id), body, { multipart: true });
  }

  delete(id: string): Observable<IResponse> {
    return this._http.delete(this._ENDPOINTS.DELETE(id));
  }


  private _iconsObject: Map<string, string> = new Map();
  private _iconList: Record<string, string>[] = [];
  get iconsObj(): Map<string, string> {
    return new Map(this._iconsObject);
  }
  get iconList(): Record<string, string>[] {
    return [...this._iconList];
  }
  set iconsObj(value: Record<string, string>) {
    this._iconsObject = new Map(Object.entries(value));
    this._iconList = Array.from(this._iconsObject).map(([key, value]) => ({ key, value }));
  }
}