import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '../http-client/http-client';
import { IResponse } from '@src/app/models/http-response.model';
import { API_ENDPOINTS } from '@src/app/constants/api-endpoints';

export interface IBlackoutDateUpsertPayload {
  sourceId: string;
  /** Date string accepted by backend (ISO / YYYY-MM-DD) */
  startDate: string | Date;
  endDate?: string | Date | null;
  reason?: string;
}

export type BlackoutDateListType = 'list' | 'range';

export type IBlackoutDateListPayload =
  | { type: 'list'; sourceId: string; page: number; limit: number; resortId?: string }
  | { type: 'range'; sourceId: string; startDate: string; endDate: string };

@Injectable({
  providedIn: 'root',
})
export class BlackoutDate {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ENDPOINTS = API_ENDPOINTS.BLACKOUT_DATE;

  create(body: IBlackoutDateUpsertPayload): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.CREATE, body);
  }

  list(body: IBlackoutDateListPayload): Observable<IResponse> {
    return this._http.post(this._ENDPOINTS.LIST, body);
  }

  update(id: string, body: IBlackoutDateUpsertPayload): Observable<IResponse> {
    return this._http.patch(this._ENDPOINTS.UPDATE(id), body);
  }

  delete(id: string): Observable<IResponse> {
    return this._http.delete(this._ENDPOINTS.DELETE(id));
  }
}
