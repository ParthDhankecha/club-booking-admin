import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDropdown } from './icon-dropdown';

describe('IconDropdown', () => {
  let component: IconDropdown;
  let fixture: ComponentFixture<IconDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(IconDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});