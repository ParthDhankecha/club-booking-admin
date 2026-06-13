import { inject, Injectable } from '@angular/core';

import { AppConfig } from './app-config/app-config';
import { Utils } from './utils/utils';
import { GoogleMap } from './google-map/google-map';
import { Modal } from './modal/modal';
import { FormBuilder } from './form-builder/form-builder';
import { Icon } from './icon/icon';


@Injectable({
  providedIn: 'root'
})
export class CoreFacadeService {
  // Inject app config service
  public readonly appConfig: AppConfig = inject(AppConfig);
  // Inject utils service 
  public readonly utils: Utils = inject(Utils);
  // Inject google map service
  public readonly googleMap: GoogleMap = inject(GoogleMap);
  // Inject modal service
  public readonly modal: Modal = inject(Modal);
  // Inject form builder service
  public readonly formBuilder = inject(FormBuilder);
  // Inject icon service
  public readonly icon: Icon = inject(Icon);
}