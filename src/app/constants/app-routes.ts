export const ROUTES = {
    BASE: '',
    HOME: '',
    AUTH: {
        BASE: 'auth',
        LOGIN: 'login',
    },
    RESORTS: 'resort',
    PROPERTY: 'property',
    ASSET: {
        BASE: 'asset',
        UPSERT_AMENITIES: 'upsert-amenities/:id',
        UPSERT_IMAGES: 'upsert-images/:id',
    },
    CALENDAR: 'calendar',
    CONTACT_US: 'contact-us',
    NEWSLETTER: 'newsletter',
    TERMS_AND_CONDITIONS: 'terms-and-condition',
    PRIVACY_POLICY: 'privacy-policy',
    SUPPORT: 'support',
    PAGE_NOT_FOUND: '**',
    getFullRoute: (...slugs: string[]) => `/${slugs.join('/')}`,
};