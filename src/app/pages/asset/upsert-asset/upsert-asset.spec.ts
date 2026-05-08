import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertAsset } from './upsert-asset';

describe('UpsertAsset', () => {
  let component: UpsertAsset;
  let fixture: ComponentFixture<UpsertAsset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertAsset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertAsset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
