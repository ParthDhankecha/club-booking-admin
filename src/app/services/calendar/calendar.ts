import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '../http-client/http-client';
import { IResponse } from '@src/app/models/http-response.model';
import { API_ENDPOINTS } from '@src/app/constants/api-endpoints';

export interface ICalendarViewRequest {
  assetId?: string;
  view: 'weekly' | 'monthly' | 'full-day';
  date: string; // YYYY-MM-DD
}

export type CalendarDetailsPayload =
  | { type: 'date'; date: string; assetId?: string }
  | { type: 'order'; orderId: string };

@Injectable({
  providedIn: 'root',
})
export class Calendar {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS.CALENDAR;

  view(body: ICalendarViewRequest): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.VIEW, body);
  }

  details(payload: CalendarDetailsPayload): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.DETAILS, payload);
  }
}