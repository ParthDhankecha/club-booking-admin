import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertAmenities } from './upsert-amenities';

describe('UpsertAmenities', () => {
  let component: UpsertAmenities;
  let fixture: ComponentFixture<UpsertAmenities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertAmenities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertAmenities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
