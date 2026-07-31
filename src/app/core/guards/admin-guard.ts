import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';

import { CoreFacadeService } from '../services/core-facade-service';


export const adminGuard: CanMatchFn = () => {
  return inject(CoreFacadeService).utils.isAdmin;
};