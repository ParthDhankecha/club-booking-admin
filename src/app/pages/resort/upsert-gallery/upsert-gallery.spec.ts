import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertGallery } from './upsert-gallery';

describe('UpsertGallery', () => {
  let component: UpsertGallery;
  let fixture: ComponentFixture<UpsertGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
