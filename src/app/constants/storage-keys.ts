const _prefix: string = 'resort_booking.';


export default class StorageKeys {
    static readonly ACCESS_TOKEN: string = `${_prefix}access_token`;
    static readonly ACCESS_TOKEN_EXPIRES_AT = `${_prefix}token_expire_at`;
    static readonly USER_INFO = `${_prefix}user`;

    /** sessionStorage */
    static readonly SST = {
        // Selected Language
        LANG: `${_prefix}lang`
    };
}