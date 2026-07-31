import { TestBed } from '@angular/core/testing';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';

import { adminGuard } from './admin-guard';

describe('adminGuard', () => {
  const executeGuard: CanMatchFn = (route, segments) =>
    TestBed.runInInjectionContext(() => adminGuard(route, segments));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const route = {} as Route;
    const segments: UrlSegment[] = [];

    expect(executeGuard(route, segments)).toBeTruthy();
  });
});