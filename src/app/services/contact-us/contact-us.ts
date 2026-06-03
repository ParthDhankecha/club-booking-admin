import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '../http-client/http-client';
import { API_ENDPOINTS } from '@src/app/constants/api-endpoints';
import { IResponse } from '@src/app/models/http-response.model';


@Injectable({
  providedIn: 'root',
})
export class ContactUs {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS.CONTACT_US;


  list(body: any = {}): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.LIST, body);
  }
}