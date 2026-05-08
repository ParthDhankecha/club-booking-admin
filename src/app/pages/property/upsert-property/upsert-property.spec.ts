import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertProperty } from './upsert-property';

describe('UpsertProperty', () => {
  let component: UpsertProperty;
  let fixture: ComponentFixture<UpsertProperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertProperty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertProperty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
