import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { AES, enc } from 'crypto-js';
import { jwtDecode } from 'jwt-decode';

import StorageKeys from '@src/app/constants/storage-keys';
import { EToasterType, IToaster } from '@src/app/models/utils.model';
import { ROUTES } from '@src/app/constants/app-routes';
import { ROLES } from '@src/app/constants/app-config';


@Injectable({
  providedIn: 'root'
})
export class Utils {

  // Inject Services
  private readonly _router = inject(Router);



  get encodeKey(): string {
    return `${window.screen.height}${window.screen.width}${window.screen.colorDepth}${new Date().getTime()}`;
  }

  encodeData(data: any, encodeKey: string): string {
    return AES.encrypt(JSON.stringify(data), encodeKey).toString();
  }

  decodeData(data: string, encodeKey: string): any {
    const bytes = AES.decrypt(data, encodeKey);
    return JSON.parse(bytes.toString(enc.Utf8));
  }


  private decodeTokenData: any;
  get decodeToken(): any {
    try {
      const accessToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
      if (!this.decodeTokenData && accessToken) {
        this.decodeTokenData = jwtDecode<any>(accessToken);
      }
      return this.decodeTokenData;
    } catch (error) {
      console.log('Error while decoding', error);
      this.decodeTokenData = null;
      return;
    }
  }

  get isAuthenticated(): boolean {
    const exp = this.decodeToken?.exp;
    if (exp) {
      return new Date().getTime() < exp * 1000;
    }
    return false;
  }
  get isAdmin(): boolean {
    return this.decodeToken?.user?.role === ROLES.CLUB_ADMIN;
  }
  get isSuperAdmin(): boolean {
    return this.decodeToken?.user?.role === ROLES.SUPER_ADMIN;
  }

  logout(clearCacheOnly: boolean = false): void {
    if (clearCacheOnly) {
      localStorage.clear();
      this.decodeTokenData = null;
      this.clearAllToaster();
      return;
    }

    localStorage.clear();
    this.decodeTokenData = null;
    this.clearAllToaster();
    this._router.navigateByUrl(`${ROUTES.getFullRoute(ROUTES.AUTH.BASE, ROUTES.AUTH.LOGIN)}`);
  }


  readonly toasters$ = new Subject<IToaster>();
  public clearToasters$ = new Subject<boolean>();
  showToaster(type: EToasterType, message: string, duration: number = 6000): void {
    this.toasters$.next({ type, message, duration });
  }
  clearAllToaster(): void {
    this.clearToasters$.next(true);
  }
}