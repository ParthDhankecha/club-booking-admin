import { inject, Injectable } from '@angular/core';

import { Utils } from './utils/utils';
import { Auth } from './auth/auth';
import { Resort } from './resort/resort';
import { Property } from './property/property';
import { Asset } from './asset/asset';
import { Calendar } from './calendar/calendar';
import { ContactUs } from './contact-us/contact-us';
import { Newsletter } from './newsletter/newsletter';
import { Order } from './order/order';


@Injectable({
  providedIn: 'root'
})
export class ApiFacadeService {
  // Inject service(config & auth level)
  public readonly utils: Utils = inject(Utils);
  public readonly auth: Auth = inject(Auth);

  // Inject service
  public readonly resort = inject(Resort);
  public readonly property = inject(Property);
  public readonly asset = inject(Asset);
  public readonly calendar = inject(Calendar);
  public readonly contactUs = inject(ContactUs);
  public readonly newsletter = inject(Newsletter);
  public readonly order = inject(Order);
}