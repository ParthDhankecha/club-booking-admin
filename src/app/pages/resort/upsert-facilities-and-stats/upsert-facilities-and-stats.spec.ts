import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertFacilitiesAndStats } from './upsert-facilities-and-stats';

describe('UpsertFacilitiesAndStats', () => {
  let component: UpsertFacilitiesAndStats;
  let fixture: ComponentFixture<UpsertFacilitiesAndStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertFacilitiesAndStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertFacilitiesAndStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
