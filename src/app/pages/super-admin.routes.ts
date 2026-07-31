import { Routes } from '@angular/router';

import { ROUTES } from '@src/app/constants/app-routes';
import { APP_PAGE_TITLE } from '@src/app/constants/app-config';

import { Workspaces } from './workspaces/workspaces';
import { Admins } from './admins/admins';
import { PageNotFound } from '../shared/components/page-not-found/page-not-found';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ROUTES.SUPER_ADMIN.WORKSPACES,
    },
    {
        path: ROUTES.SUPER_ADMIN.WORKSPACES,
        title: APP_PAGE_TITLE.SUPER_ADMIN.WORKSPACES,
        component: Workspaces,
    },
    {
        path: ROUTES.SUPER_ADMIN.ADMINS,
        title: APP_PAGE_TITLE.SUPER_ADMIN.ADMINS,
        component: Admins,
    },
    {
        path: ROUTES.PAGE_NOT_FOUND,
        title: APP_PAGE_TITLE.PAGE_NOT_FOUND,
        component: PageNotFound
    }
];