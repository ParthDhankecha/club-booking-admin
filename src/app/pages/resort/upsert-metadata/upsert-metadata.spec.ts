import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertMetadata } from './upsert-metadata';

describe('UpsertMetadata', () => {
  let component: UpsertMetadata;
  let fixture: ComponentFixture<UpsertMetadata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertMetadata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertMetadata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
