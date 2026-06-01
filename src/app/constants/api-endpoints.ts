const _UTILS = '/utils';
const _AUTH = '/auth';
const _RESORT = '/resort';
const _PROPERTY = '/property';
const _ASSET = '/asset';
const _CALENDAR = '/calendar';
const _CONTACT_US = '/contact-us';
const _NEWSLETTER = '/newsletter';


export const API_ENDPOINTS = {
    UTILS: {
        SYNC: `${_UTILS}/sync`,
    },

    AUTH: {
        LOGIN: `${_AUTH}/login`,
    },

    RESORT: {
        LIST: `${_RESORT}/list`,
        UPLOAD_THUMB: `${_RESORT}/upload-thumb`,
        CREATE: `${_RESORT}`,
        OPTIONS_DATA: `${_RESORT}/options-data`,
        UPDATE: (id: string) => `${_RESORT}/${id}`,
        DELETE: (id: string) => `${_RESORT}/${id}`,
    },

    PROPERTY: {
        LIST: `${_PROPERTY}/list`,
        OPTIONS_DATA: `${_PROPERTY}/options-data`,
        CREATE: `${_PROPERTY}`,
        CHANGE_STATUS: (id: string) => `${_PROPERTY}/change-status/${id}`,
        UPDATE: (id: string) => `${_PROPERTY}/${id}`,
        DELETE: (id: string) => `${_PROPERTY}/${id}`,
    },

    ASSET: {
        CREATE: `${_ASSET}`,
        LIST: `${_ASSET}/list`,
        GET_PARTIAL_DETAILS: (id: string) => `${_ASSET}/partial-details/${id}`,
        CONFIGURATION: `${_ASSET}/configuration`,
        MASTER_DATA: `${_ASSET}/master-data`,
        CHANGE_STATUS: (id: string) => `${_ASSET}/change-status/${id}`,
        UPSERT_IMAGE: (id: string) => `${_ASSET}/upsert-image/${id}`,
        REMOVE_IMAGE: (id: string) => `${_ASSET}/remove-image/${id}`,
        UPDATE: (id: string) => `${_ASSET}/${id}`,
        DELETE: (id: string) => `${_ASSET}/${id}`,
    },

    CALENDAR: {
        VIEW: `${_CALENDAR}/view`,
        DETAILS: `${_CALENDAR}/details`,
    },

    CONTACT_US: {
        LIST: `${_CONTACT_US}/list`,
    },

    NEWSLETTER: {
        LIST: `${_NEWSLETTER}/list`,
    },
};