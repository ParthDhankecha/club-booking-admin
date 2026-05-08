import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authTokenInjectorInterceptor } from './core/interceptors/auth-token-injector-interceptor';

import { AppInit } from './core/services/app-init/app-init';

function initializeApp(): any {
  const appInitService = inject(AppInit);
  return appInitService.initApp();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(initializeApp),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authTokenInjectorInterceptor
      ])
    )
  ]
};