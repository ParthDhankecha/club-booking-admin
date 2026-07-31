import { Injectable } from '@angular/core';

import { HttpClient } from '../http-client/http-client';


@Injectable({
  providedIn: 'root',
})
export class SuperAdminHttpClient extends HttpClient {
  protected override readonly middlePath: string = '/super-admin';
}