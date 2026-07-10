import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { ROUTES } from '@src/app/constants/app-routes';


@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  protected readonly _coreService = inject(CoreFacadeService);

  protected readonly sidebarRoutes: { label: string, link: string, icon: string }[] = [
    {
      label: 'Resorts',
      link: ROUTES.RESORTS,
      icon: 'list'
    },
    {
      label: 'Property Types',
      link: ROUTES.PROPERTY,
      icon: 'list'
    },
    {
      label: 'Assets',
      link: ROUTES.ASSET.BASE,
      icon: 'property'
    },
    {
      label: 'Bookings',
      link: ROUTES.CALENDAR,
      icon: 'calendar'
    },
    {
      label: 'Cancelled Orders',
      link: ROUTES.CANCELLED_ORDERS,
      icon: 'cancelled-orders'
    },
    {
      label: 'Contact Us',
      link: ROUTES.CONTACT_US,
      icon: 'contact-us'
    },
    {
      label: 'Newsletter',
      link: ROUTES.NEWSLETTER,
      icon: 'newsletter'
    },
  ];

  protected isSidebarCollapsed: boolean = false;


  protected logout(): void {
    this._coreService.utils.logout();
  }
}