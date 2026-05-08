import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resort } from './resort';

describe('Resort', () => {
  let component: Resort;
  let fixture: ComponentFixture<Resort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
