import { TestBed } from '@angular/core/testing';

import { SuperAdminHttpClient } from './super-admin-http-client';

describe('SuperAdminHttpClient', () => {
  let service: SuperAdminHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAdminHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
