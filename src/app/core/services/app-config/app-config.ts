import { Injectable } from '@angular/core';

import { IAppConfigData } from '@src/app/models/utils.model';


@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  // Inject Services

  private readonly _configData: IAppConfigData = {
    serverUrl: '',
    s3BaseUrl: '',
  };

  // getter and setter for config data
  get configData(): IAppConfigData {
    return this._configData;
  }
  set configData(data: IAppConfigData) {
    if (data && typeof data === 'object') {
      Object.assign(this._configData, data);
    }
  }
}