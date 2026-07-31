import { TestBed } from '@angular/core/testing';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';

import { superAdminGuard } from './super-admin-guard';

describe('superAdminGuard', () => {
  const executeGuard: CanMatchFn = (route, segments) =>
    TestBed.runInInjectionContext(() => superAdminGuard(route, segments));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const route = {} as Route;
    const segments: UrlSegment[] = [];

    expect(executeGuard(route, segments)).toBeTruthy();
  });
});