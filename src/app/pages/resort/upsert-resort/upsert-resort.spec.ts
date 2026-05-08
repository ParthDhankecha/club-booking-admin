import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertResort } from './upsert-resort';

describe('UpsertResort', () => {
  let component: UpsertResort;
  let fixture: ComponentFixture<UpsertResort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsertResort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertResort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
