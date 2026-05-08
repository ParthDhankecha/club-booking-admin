import { Routes } from '@angular/router';

import { ROUTES } from './constants/app-routes';
import { APP_PAGE_TITLE } from './constants/app-config';

import { MainLayout } from './layouts/main-layout/main-layout';
import { PageNotFound } from './shared/components/page-not-found/page-not-found';

import { authGuard } from './core/guards/auth-guard';
import { CommonOutlet } from './layouts/common-outlet/common-outlet';


export const routes: Routes = [
    {
        path: ROUTES.BASE,
        title: APP_PAGE_TITLE.BRAND_NAME,
        component: MainLayout,
        canActivate: [authGuard],
        loadChildren: () => import('./pages/pages.routes').then(m => m.routes),
    },
    {
        path: ROUTES.AUTH.BASE,
        title: APP_PAGE_TITLE.AUTH.BASE,
        component: CommonOutlet,
        loadChildren: () => import('./components/auth/auth.routes').then(m => m.routes)
    },
    {
        path: ROUTES.PAGE_NOT_FOUND,
        title: APP_PAGE_TITLE.PAGE_NOT_FOUND,
        component: PageNotFound
    }
];