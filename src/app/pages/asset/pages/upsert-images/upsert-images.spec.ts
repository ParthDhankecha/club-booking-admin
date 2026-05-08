import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertImages } from './upsert-images';

describe('UpsertImages', () => {
  let component: UpsertImages;
  let fixture: ComponentFixture<UpsertImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
