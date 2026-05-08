import { TestBed } from '@angular/core/testing';

import { GoogleMap } from './google-map';

describe('GoogleMap', () => {
  let service: GoogleMap;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMap);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
