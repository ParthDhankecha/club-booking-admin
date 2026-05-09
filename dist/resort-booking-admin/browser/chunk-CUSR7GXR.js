import {
  PageNotFound
} from "./chunk-WCGVYOFL.js";
import {
  DefaultValueAccessor,
  EToasterType,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CNIHTPF4.js";
import {
  APP_PAGE_TITLE,
  ApiFacadeService,
  Component,
  CoreFacadeService,
  ROUTES,
  Router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-K5BQJCWW.js";

// src/app/components/auth/login/login.ts
function Login_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Please enter a valid email.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, Login_Conditional_16_Conditional_1_Template, 2, 0, "small");
    \u0275\u0275conditionalCreate(2, Login_Conditional_16_Conditional_2_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]) ? 2 : -1);
  }
}
function Login_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password must be at least 6 characters long.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password cannot exceed 20 characters.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, Login_Conditional_30_Conditional_1_Template, 2, 0, "small");
    \u0275\u0275conditionalCreate(2, Login_Conditional_30_Conditional_2_Template, 2, 0, "small");
    \u0275\u0275conditionalCreate(3, Login_Conditional_30_Conditional_3_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["maxlength"]) ? 3 : -1);
  }
}
function Login_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2, " \xA0 Please wait... ");
    \u0275\u0275elementEnd();
  }
}
var Login = class _Login {
  _coreService;
  constructor(_coreService) {
    this._coreService = _coreService;
    if (this._coreService.utils.isAuthenticated) {
      this._router.navigateByUrl(ROUTES.BASE);
      return;
    }
  }
  _router = inject(Router);
  _apiFs = inject(ApiFacadeService);
  _fb = inject(FormBuilder);
  loginForm = this._fb.group({
    email: ["club.admin@admin.com", [Validators.required, Validators.email]],
    password: ["club@admin", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
  });
  isEyeOpen = false;
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  isReqAlive = false;
  onSubmit() {
    if (this.isReqAlive) {
      return;
    }
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isReqAlive = true;
    this._apiFs.auth.login({
      email: this.email?.value,
      password: this.password?.value
    }).subscribe({
      next: (res) => {
        this.isReqAlive = false;
        if (res.code === "OK") {
          this._router.navigateByUrl(ROUTES.BASE).then(() => {
            this._coreService.utils.showToaster(EToasterType.Success, "Login successfully");
          });
        }
      },
      error: (err) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)(\u0275\u0275directiveInject(CoreFacadeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 35, vars: 10, consts: [[1, "container-fluid"], [1, "min-vh-100", "p-3", "d-flex"], [1, "w-100", "my-auto"], [1, "d-flex", "w-100", "h-100"], [1, "w-100", "p-4", "mx-auto", "shadow", "rounded", 2, "max-width", "420px"], [1, "auth-header", "text-center"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control", "mobile-input"], [1, "text-danger", "mt-1"], [1, "input-group", "flex-nowrap"], ["formControlName", "password", "placeholder", "Enter your password", "aria-describedby", "password", 1, "form-control", 3, "type"], ["id", "password", 1, "input-group-text", "user-select-none", "position-relative", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "#737373"], ["d", "M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3s3-1.358 3-3-1.359-3-3-3"], ["d", "M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5m0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5"], [1, "password-eye-line"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", 3, "disabled"], [1, "spinner-border", "spinner-border-sm"], ["role", "status"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
      \u0275\u0275text(7, "Admin Sign In");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8)(11, "small");
      \u0275\u0275text(12, "Email ");
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(15, "input", 10);
      \u0275\u0275conditionalCreate(16, Login_Conditional_16_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 7)(18, "label", 8)(19, "small");
      \u0275\u0275text(20, "Password ");
      \u0275\u0275elementStart(21, "span", 9);
      \u0275\u0275text(22, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 12);
      \u0275\u0275element(24, "input", 13);
      \u0275\u0275elementStart(25, "span", 14);
      \u0275\u0275listener("click", function Login_Template_span_click_25_listener() {
        return ctx.isEyeOpen = !ctx.isEyeOpen;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 15);
      \u0275\u0275element(27, "path", 16)(28, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(29, "span", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(30, Login_Conditional_30_Template, 4, 3, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 19)(32, "button", 20);
      \u0275\u0275conditionalCreate(33, Login_Conditional_33_Template, 2, 0, "span")(34, Login_Conditional_34_Template, 3, 0);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(8);
      \u0275\u0275conditional((ctx.email == null ? null : ctx.email.touched) && (ctx.email == null ? null : ctx.email.invalid) ? 16 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.isEyeOpen ? "text" : "password");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("hide", ctx.isEyeOpen);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.password == null ? null : ctx.password.touched) && (ctx.password == null ? null : ctx.password.invalid) ? 30 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("disabled", ctx.isReqAlive);
      \u0275\u0275property("disabled", ctx.isReqAlive);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isReqAlive ? 33 : 34);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body[_ngcontent-%COMP%]   .form-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-flex-row-gap[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .req-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%], \n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .limitation[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .textarea-limitation[_ngcontent-%COMP%] {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%] {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.mobile-input[_ngcontent-%COMP%] {\n}\n.mobile-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.mobile-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.mobile-input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.mobile-input[type=number][_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.password-eye-line[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 2px;\n  height: 60%;\n  background: #737373;\n  transform: rotate(45deg);\n  left: 50%;\n  top: 20%;\n}\n.password-eye-line.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      FormsModule,
      ReactiveFormsModule
    ], template: `<div class="container-fluid">
    <div class="min-vh-100 p-3 d-flex">
        <!-- Right column (Login form or router outlet) -->
        <div class="w-100 my-auto">
            <div class="d-flex w-100 h-100">
                <div class="w-100 p-4 mx-auto shadow rounded" style="max-width: 420px;">
                    <!-- Login Form -->
                    <div class="auth-header text-center">
                        <h3>Admin Sign In</h3>
                    </div>
                    <form [formGroup]="loginForm" novalidate (ngSubmit)="onSubmit()">
                        <div class="mb-3">
                            <label class="form-label">
                                <small>Email <span class="text-danger">*</span></small>
                            </label>
                            <input type="email" class="form-control mobile-input" formControlName="email"
                                placeholder="Enter your email">

                            @if(email?.touched && email?.invalid) {
                            <div class="text-danger mt-1">
                                @if(email?.errors?.['required']) {
                                <small>Email is required.</small>
                                }
                                @if(email?.errors?.['email']) {
                                <small>Please enter a valid email.</small>
                                }
                            </div>
                            }
                        </div>
                        <div class="mb-3">
                            <label class="form-label">
                                <small>Password <span class="text-danger">*</span></small>
                            </label>
                            <div class="input-group flex-nowrap">
                                <input [type]="isEyeOpen ? 'text' : 'password'" class="form-control"
                                    formControlName="password" placeholder="Enter your password"
                                    aria-describedby="password">
                                <span class="input-group-text user-select-none position-relative cursor-pointer"
                                    id="password" (click)="isEyeOpen = !isEyeOpen">
                                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                                        fill="#737373">
                                        <path
                                            d='M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3s3-1.358 3-3-1.359-3-3-3' />
                                        <path
                                            d='M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5m0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5' />
                                    </svg>
                                    <span class="password-eye-line" [class.hide]="isEyeOpen"></span>
                                </span>
                            </div>
                            @if(password?.touched && password?.invalid) {
                            <div class="text-danger mt-1">
                                @if(password?.errors?.['required']) {
                                <small>Password is required.</small>
                                }
                                @if(password?.errors?.['minlength']) {
                                <small>Password must be at least 6 characters long.</small>
                                }
                                @if(password?.errors?.['maxlength']) {
                                <small>Password cannot exceed 20 characters.</small>
                                }
                            </div>
                            }
                        </div>

                        <div class="d-grid mt-4">
                            <button type="submit"
                                class="btn btn-primary d-flex align-items-center justify-content-center"
                                [class.disabled]="isReqAlive" [disabled]="isReqAlive">
                                @if(!isReqAlive) {
                                <span>Login</span>
                                } @else {
                                <span class="spinner-border spinner-border-sm"></span>
                                <span role="status">
                                    &nbsp; Please wait...
                                </span>
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n/* src/app/components/auth/login/login.scss */\n:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body .form-flex-row {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body .input-group {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body .input-group .form-flex-row-gap {\n  gap: 2px;\n}\n.form-body .input-group .input-label {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body .input-group .req-indicator {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body .input-group .optional,\n.form-body .input-group .limitation {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body .input-group .info-icon-wrap {\n  flex-shrink: 0;\n}\n.form-body .input-group .info-icon-wrap .info-icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body .input-group .input-wrap {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body .input-group .input-wrap .input-field {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-wrap .input-field::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-textarea-group .input-textarea {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-scrollbar {\n  display: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .textarea-limitation {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body .input-group .error-wrap {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body .input-group .error-wrap .error-msg {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.mobile-input {\n}\n.mobile-input::-webkit-outer-spin-button,\n.mobile-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.mobile-input[type=number] {\n  -moz-appearance: textfield;\n}\n.mobile-input[type=number]::-ms-expand {\n  display: none;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.password-eye-line {\n  position: absolute;\n  display: block;\n  width: 2px;\n  height: 60%;\n  background: #737373;\n  transform: rotate(45deg);\n  left: 50%;\n  top: 20%;\n}\n.password-eye-line.hide {\n  display: none;\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], () => [{ type: CoreFacadeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/components/auth/login/login.ts", lineNumber: 22 });
})();

// src/app/components/auth/auth.routes.ts
var routes = [
  {
    path: "",
    redirectTo: ROUTES.AUTH.LOGIN,
    pathMatch: "full"
  },
  {
    path: ROUTES.AUTH.LOGIN,
    title: APP_PAGE_TITLE.AUTH.LOGIN,
    component: Login
  },
  {
    path: ROUTES.PAGE_NOT_FOUND,
    title: APP_PAGE_TITLE.PAGE_NOT_FOUND,
    component: PageNotFound
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-CUSR7GXR.js.map
