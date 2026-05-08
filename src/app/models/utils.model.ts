export interface IAppConfigData {
    serverUrl: string;
    s3BaseUrl: string;
}


// Enum for Toaster types
export enum EToasterType {
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
};

// Interface for a Toaster
export interface IToaster {
    type: EToasterType; // Use the enum here
    message: string;
    duration?: number;
};


export enum EBreadcrumbIconName {
    Home = 'home',
    Dashboard = 'dashboard',
    Settings = 'settings',
    Def = 'default'
};
export interface IBreadcrumbItem {
    id: string;
    label: string;
    iconName?: EBreadcrumbIconName;
};


export interface IModalLayer {
    id: string
    open: boolean
};