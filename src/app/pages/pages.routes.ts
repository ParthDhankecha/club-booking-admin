import { Routes } from '@angular/router';

import { ROUTES } from '@src/app/constants/app-routes';
import { APP_PAGE_TITLE } from '@src/app/constants/app-config';

import { CommonOutlet } from '../layouts/common-outlet/common-outlet';
import { Resort } from './resort/resort';
import { Property } from './property/property';
import { Calendar } from './calendar/calendar';
import { ContactUs } from './contact-us/contact-us';
import { Newsletter } from './newsletter/newsletter';
import { CancelledOrdersToRefund } from './cancelled-orders-to-refund/cancelled-orders-to-refund';


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
    },
    {
        path: ROUTES.CONTACT_US,
        title: APP_PAGE_TITLE.CONTACT_US,
        component: ContactUs
    },
    {
        path: ROUTES.NEWSLETTER,
        title: APP_PAGE_TITLE.NEWSLETTER,
        component: Newsletter
    },
    {
        path: ROUTES.CANCELLED_ORDERS,
        title: APP_PAGE_TITLE.CANCELLED_ORDERS,
        component: CancelledOrdersToRefund
    },
];