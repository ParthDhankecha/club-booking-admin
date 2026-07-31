import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminLogin } from './super-admin-login';

describe('Login', () => {
  let component: SuperAdminLogin;
  let fixture: ComponentFixture<SuperAdminLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminLogin]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuperAdminLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});