import { Routes } from '@angular/router';

import { ROUTES } from './constants/app-routes';
import { APP_PAGE_TITLE } from './constants/app-config';

import { MainLayout } from './layouts/main-layout/main-layout';

import { authGuard } from './core/guards/auth-guard';
import { CommonOutlet } from './layouts/common-outlet/common-outlet';
import { adminGuard } from './core/guards/admin-guard';
import { superAdminGuard } from './core/guards/super-admin-guard';


export const routes: Routes = [
    {
        path: ROUTES.BASE,
        title: APP_PAGE_TITLE.BRAND_NAME,
        component: MainLayout,
        canActivate: [authGuard],
        canMatch: [adminGuard],
        loadChildren: () => import('./pages/pages.routes').then(m => m.routes),
    },
    {
        path: ROUTES.BASE,
        title: APP_PAGE_TITLE.BRAND_NAME,
        component: MainLayout,
        canActivate: [authGuard],
        canMatch: [superAdminGuard],
        loadChildren: () => import('./pages/super-admin.routes').then(m => m.routes),
    },
    {
        path: ROUTES.AUTH.BASE,
        title: APP_PAGE_TITLE.AUTH.BASE,
        component: CommonOutlet,
        loadChildren: () => import('./components/auth/auth.routes').then(m => m.routes)
    },
    {
        path: ROUTES.PAGE_NOT_FOUND,
        redirectTo: ROUTES.getFullRoute(ROUTES.AUTH.BASE),
    }
];