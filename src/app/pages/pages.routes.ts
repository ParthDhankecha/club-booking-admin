import { Routes } from '@angular/router';

import { ROUTES } from '@src/app/constants/app-routes';
import { APP_PAGE_TITLE } from '@src/app/constants/app-config';

import { CommonOutlet } from '../layouts/common-outlet/common-outlet';
import { Resort } from './resort/resort';
import { Property } from './property/property';
import { Calendar } from './calendar/calendar';


export const routes: Routes = [
    {
        path: '',
        redirectTo: ROUTES.CALENDAR,
        pathMatch: 'full',
    },
    {
        path: ROUTES.RESORTS,
        title: APP_PAGE_TITLE.RESORTS,
        component: Resort
    },
    {
        path: ROUTES.PROPERTY,
        title: APP_PAGE_TITLE.PROPERTY,
        component: Property
    },
    {
        path: ROUTES.ASSET.BASE,
        title: APP_PAGE_TITLE.ASSET.BASE,
        component: CommonOutlet,
        loadChildren: () => import('./asset/asset.routes').then(m => m.routes),
    },
    {
        path: ROUTES.CALENDAR,
        title: APP_PAGE_TITLE.CALENDAR,
        component: Calendar
    }
];