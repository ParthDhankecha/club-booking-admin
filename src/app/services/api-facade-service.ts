import { inject, Injectable } from '@angular/core';

import { Utils } from './utils/utils';
import { Auth } from './auth/auth';
import { SuperAdmin } from './super-admin/super-admin';
import { Resort } from './resort/resort';
import { Property } from './property/property';
import { Asset } from './asset/asset';
import { Calendar } from './calendar/calendar';
import { BlackoutDate } from './blackout-date/blackout-date';
import { ContactUs } from './contact-us/contact-us';
import { Newsletter } from './newsletter/newsletter';
import { Order } from './order/order';
import { Workspace } from './workspace/workspace';
import { AdminUser } from './admin-user/admin-user';


@Injectable({
  providedIn: 'root'
})
export class ApiFacadeService {
  // Inject service(config & auth level)
  public readonly utils: Utils = inject(Utils);
  public readonly auth: Auth = inject(Auth);

  // Inject services for Super Admin
  public readonly superAdmin: SuperAdmin = inject(SuperAdmin);
  public readonly workspace: Workspace = inject(Workspace);
  public readonly adminUser: AdminUser = inject(AdminUser);

  // Inject service
  public readonly resort = inject(Resort);
  public readonly property = inject(Property);
  public readonly asset = inject(Asset);
  public readonly calendar = inject(Calendar);
  public readonly blackoutDate = inject(BlackoutDate);
  public readonly contactUs = inject(ContactUs);
  public readonly newsletter = inject(Newsletter);
  public readonly order = inject(Order);
}