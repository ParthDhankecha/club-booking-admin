import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { CoreFacadeService } from '../services/core-facade-service';
import { ROUTES } from '@src/app/constants/app-routes';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const _router = inject(Router); // Inject the Router service
  const _coreService = inject(CoreFacadeService); // Inject CommonUtils service

  if (!_coreService.utils.isAuthenticated) {
    _coreService.utils.logout(true);
    // User is not authenticated, redirect to login page
    _router.navigateByUrl(ROUTES.getFullRoute(ROUTES.AUTH.BASE, ROUTES.AUTH.LOGIN));
    return false;
  }

  // User is authenticated, allow access
  return true;
};