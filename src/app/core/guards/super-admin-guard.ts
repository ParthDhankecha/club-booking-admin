import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';

import { CoreFacadeService } from '../services/core-facade-service';


export const superAdminGuard: CanMatchFn = () => {
  return inject(CoreFacadeService).utils.isSuperAdmin;
};