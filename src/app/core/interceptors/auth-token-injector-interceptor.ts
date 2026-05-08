import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { CoreFacadeService } from '../services/core-facade-service';
import { ROUTES } from '@src/app/constants/app-routes';
import StorageKeys from '@src/app/constants/storage-keys';
import { EToasterType } from '@src/app/models/utils.model';


export const authTokenInjectorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const _coreService = inject(CoreFacadeService);

  // Clone the request to add the new header
  const authToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
  if (authToken && typeof authToken === 'string') {
    req = req.clone({
      headers: req.headers.append('Authorization', authToken)
    });
  }

  return next(req).pipe(tap({
    error: (err) => {
      if (err instanceof HttpErrorResponse) {
        // If 401 Unauthorized response and user is authenticated or trying to access auth routes, clear storage and redirect to auth page
        if ([401].includes(err.status)) {
          const isAuthRoute = req.url.includes(`/${ROUTES.AUTH.BASE}`);
          if (_coreService.utils.isAuthenticated || !isAuthRoute) {
            _coreService.utils.logout();
          }
        }
      }
    }
  }));
};