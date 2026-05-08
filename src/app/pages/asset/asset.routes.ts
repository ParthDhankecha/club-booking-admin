import { Routes } from '@angular/router';

import { ROUTES } from '@src/app/constants/app-routes';
import { APP_PAGE_TITLE } from '@src/app/constants/app-config';

import { Asset } from './asset';
import { UpsertAmenities } from './pages/upsert-amenities/upsert-amenities';
import { UpsertImages } from './pages/upsert-images/upsert-images';


export const routes: Routes = [
    {
        path: '',
        title: APP_PAGE_TITLE.ASSET.BASE,
        component: Asset
    },
    {
        path: ROUTES.ASSET.UPSERT_AMENITIES,
        title: APP_PAGE_TITLE.ASSET.UPSERT_AMENITIES,
        component: UpsertAmenities
    },
    {
        path: ROUTES.ASSET.UPSERT_IMAGES,
        title: APP_PAGE_TITLE.ASSET.UPSERT_IMAGES,
        component: UpsertImages
    }
];