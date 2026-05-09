import {
  CommonOutlet
} from "./chunk-TOBIHSCQ.js";
import {
  PageNotFound
} from "./chunk-WCGVYOFL.js";
import {
  APP_PAGE_TITLE,
  ApiFacadeService,
  Component,
  CoreFacadeService,
  HttpErrorResponse,
  Injectable,
  ROUTES,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  StorageKeys,
  __async,
  bootstrapApplication,
  firstValueFrom,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  tap,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-K5BQJCWW.js";

// src/app/layouts/main-layout/main-layout.ts
function MainLayout_For_9_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function MainLayout_For_9_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function MainLayout_For_9_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20)(1, "g");
    \u0275\u0275element(2, "path", 28)(3, "path", 29)(4, "path", 30)(5, "path", 31);
    \u0275\u0275elementEnd()();
  }
}
function MainLayout_For_9_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function MainLayout_For_9_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "path", 33)(2, "path", 34)(3, "path", 35)(4, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function MainLayout_For_9_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 37)(2, "path", 38)(3, "rect", 39);
    \u0275\u0275elementEnd();
  }
}
function MainLayout_For_9_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "rect", 40)(2, "circle", 41);
    \u0275\u0275elementEnd();
  }
}
function MainLayout_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, MainLayout_For_9_Case_3_Template, 2, 0, ":svg:svg", 18)(4, MainLayout_For_9_Case_4_Template, 2, 0, ":svg:svg", 19)(5, MainLayout_For_9_Case_5_Template, 6, 0, ":svg:svg", 20)(6, MainLayout_For_9_Case_6_Template, 2, 0, ":svg:svg", 21)(7, MainLayout_For_9_Case_7_Template, 5, 0, ":svg:svg", 22)(8, MainLayout_For_9_Case_8_Template, 4, 0, ":svg:svg", 23)(9, MainLayout_For_9_Case_9_Template, 3, 0, ":svg:svg", 24);
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275interpolate(item_r1.link));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = item_r1.icon) === "list" ? 3 : tmp_11_0 === "property" ? 4 : tmp_11_0 === "boxes" ? 5 : tmp_11_0 === "calendar" ? 6 : tmp_11_0 === "apk" ? 7 : tmp_11_0 === "money" ? 8 : 9);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var MainLayout = class _MainLayout {
  _coreService = inject(CoreFacadeService);
  sidebarRoutes = [
    {
      label: "Resorts",
      link: ROUTES.RESORTS,
      icon: "list"
    },
    {
      label: "Property Types",
      link: ROUTES.PROPERTY,
      icon: "boxes"
    },
    {
      label: "Assets",
      link: ROUTES.ASSET.BASE,
      icon: "property"
    },
    {
      label: "Booking Calendar",
      link: ROUTES.CALENDAR,
      icon: "calendar"
    }
  ];
  isSidebarCollapsed = false;
  logout() {
    this._coreService.utils.logout();
  }
  static \u0275fac = function MainLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayout, selectors: [["app-main-layout"]], decls: 20, vars: 3, consts: [[1, "container-fluid"], [1, "row", "flex-nowrap", "bg-light"], [1, "col-auto", "p-0", "bg-white", "sidebar", "position-sticky", "top-0", "p-0", "border-end", "border-light", "shadow", "side-nav"], [1, "side-nav-wrapper"], [1, "py-2", "px-4", "d-flex", "align-items-center", "justify-content-center", "gap-1", "border-bottom", "text-center", "user-select-none", "side-nav-header", 3, "click"], [1, "text-primary", "fs-4", "fw-bold", "text-uppercase"], [1, "nav-menu-wrapper"], ["routerLinkActive", "bg-primary", 1, "menu-item", "rounded"], [1, "border-top", "side-nav-footer"], [1, "btn", "btn-outline-primary", "d-flex", "align-items-center", "gap-2", "w-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 14 14", "fill", "none", 1, "flex-shrink-0"], ["d", "M5.25 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H5.25", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.33334 9.91671L12.25 7.00004L9.33334 4.08337", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.25 7H5.25", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "flex-grow-1"], [1, "col", "m-0", "px-4", "py-3", "min-vh-100", "h-100", "relative", "overflow-auto"], [1, "text-decoration-none", "text-dark", 3, "routerLink"], ["routerLinkActive", "text-white", 1, "d-flex", "gap-2", "align-items-center", "py-2", "px-3"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "flex-shrink-0"], ["fill", "currentColor", "width", "24", "height", "24", "viewBox", "90 90 320 320", 1, "flex-shrink-0"], ["fill", "currentColor", "width", "24", "height", "24", "viewBox", "0 0 32 32", "xmlns", "http://www.w3.org/2000/svg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "flex-shrink-0"], ["fill", "currentColor", "width", "24", "height", "24", "viewBox", "0 0 32 32", "xmlns", "http://www.w3.org/2000/svg", 1, "flex-shrink-0"], ["fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 307.318 307.318", "width", "24", "height", "24", 1, "flex-shrink-0"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "flex-shrink-0"], [1, "text-capitalize", "fw-medium", "menu-label"], ["d", "M10 6L21 6.00066M10 12L21 12.0007M10 18L21 18.0007M3 5L5 4V10M5 10H3M5 10H7M7 20H3L6.41274 17.0139C6.78593 16.6873 7 16.2156 7 15.7197C7 14.7699 6.23008 14 5.28033 14H5C4.06808 14 3.28503 14.6374 3.06301 15.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M368,187.056l-120-60l-120,60V224h16v128h208V224h16V187.056z M280,336h-64v-48c0-17.648,14.352-32,32-32 s32,14.352,32,32V336z M336,336h-40v-48c0-26.472-21.528-48-48-48s-48,21.528-48,48v48h-40V224h176V336z M352,208H144v-11.056 l104-52l104,52V208z"], ["d", "M16,17v8H6V17H16m0-2H6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2Z"], ["d", "M27,6v5H17V6H27m0-2H17a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"], ["d", "M27,17v5H22V17h5m0-2H22a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2Z"], ["d", "M11,6v5H6V6h5m0-2H6A2,2,0,0,0,4,6v5a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"], ["d", "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"], ["d", "M22.43,22a0.5,0.5,0,0,0-.5.5v4.2H5.15V4.2a1.7,1.7,0,0,1,1.7-1.7H20.23a1.7,1.7,0,0,1,1.7,1.7v5a0.5,0.5,0,0,0,1,0v-5a2.7,2.7,0,0,0-2.7-2.7H6.85a2.7,2.7,0,0,0-2.7,2.7V27.8a2.7,2.7,0,0,0,2.7,2.7H20.23a2.7,2.7,0,0,0,2.7-2.7V22.5A0.5,0.5,0,0,0,22.43,22Zm-2.2,7.5H6.85a1.7,1.7,0,0,1-1.7-1.7V27.7H21.93v0.1A1.7,1.7,0,0,1,20.23,29.5Z"], ["d", "M22.43,10.58A5.42,5.42,0,1,0,27.85,16,5.42,5.42,0,0,0,22.43,10.58Zm0,9.83A4.42,4.42,0,1,1,26.85,16,4.42,4.42,0,0,1,22.43,20.42Z"], ["d", "M22.93,15.76V12.82a0.5,0.5,0,1,0-1,0V16a0.5,0.5,0,0,0,.19.39l2.22,1.73a0.5,0.5,0,0,0,.31.11A0.5,0.5,0,0,0,25,17.33Z"], ["d", "M10.36,3.48a0.5,0.5,0,0,0,0,1h6.36a0.5,0.5,0,0,0,0-1H10.36Z"], ["d", "M34.633,0v307.318l44.657-36.057l37.164,29.999l37.179-30l37.166,29.999l37.194-30.001l44.692,36.05V0H34.633z M257.686,275.938l-29.692-23.95l-37.19,29.999l-37.168-30.001l-37.179,30l-37.168-30.001l-29.655,23.943V15h208.053v260.938 H257.686z"], ["d", "M164.799,187.666c20.139,0,38.465-10.301,49.023-27.554l-12.795-7.83c-7.811,12.764-21.354,20.384-36.229,20.384 c-16.873,0-31.478-9.885-38.334-24.168H156.2v-15h-33.753c-0.086-1.099-0.143-2.206-0.143-3.326c0-1.121,0.057-2.228,0.143-3.327 H156.2v-15h-29.735c6.856-14.282,21.461-24.167,38.333-24.167c14.875,0,28.418,7.62,36.229,20.384l12.795-7.83 c-10.559-17.253-28.885-27.554-49.023-27.554c-25.294,0-46.811,16.427-54.481,39.167H93.15v15h14.258 c-0.063,1.102-0.103,2.21-0.103,3.327s0.04,2.225,0.103,3.326H93.15v15h17.167C117.988,171.239,139.504,187.666,164.799,187.666z"], ["x", "93.15", "y", "206.617", "width", "114.274", "height", "15"], ["x", "4", "y", "4", "width", "16", "height", "16", "rx", "2", "fill", "transparent", "stroke", "currentColor", "stroke-width", "1.4"], ["cx", "12", "cy", "12", "r", "4", "fill", "transparent", "stroke", "currentColor", "stroke-width", "1.4"]], template: function MainLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275listener("click", function MainLayout_Template_div_click_4_listener() {
        return ctx.isSidebarCollapsed = !ctx.isSidebarCollapsed;
      });
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "ul", 6);
      \u0275\u0275repeaterCreate(8, MainLayout_For_9_Template, 12, 4, "li", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function MainLayout_Template_button_click_11_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11)(14, "path", 12)(15, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span", 14);
      \u0275\u0275text(17, " Logout ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(18, "main", 15);
      \u0275\u0275element(19, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("collapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", !ctx.isSidebarCollapsed ? "Resort Booking" : "RB", " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sidebarRoutes);
    }
  }, dependencies: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body[_ngcontent-%COMP%]   .form-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-flex-row-gap[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .req-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%], \n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .limitation[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .textarea-limitation[_ngcontent-%COMP%] {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%] {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100vh;\n  max-height: 100vh;\n  z-index: 99;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 280px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .side-nav-header[_ngcontent-%COMP%] {\n  height: var(--header-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .side-nav-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 42px;\n  height: 42px;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 6px 12px;\n  min-height: 300px;\n  flex: 1;\n  flex-wrap: nowrap;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n  list-style: none;\n  overflow: auto;\n  overscroll-behavior: contain;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:not(.bg-primary):hover {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:not(.bg-primary):hover   div[_ngcontent-%COMP%] {\n  color: var(--bs-primary);\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 1;\n  -webkit-line-clamp: 1;\n  word-break: break-all;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .side-nav-footer[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .side-nav-footer[_ngcontent-%COMP%]   .f-menu-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%] {\n  width: max-content;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .side-nav-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 42px;\n  height: 42px;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .side-nav-wrapper[_ngcontent-%COMP%]   .side-nav-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n    font-size: 0.875em;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper.m-view[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper.m-view[_ngcontent-%COMP%]   .side-nav-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n    width: 32px !important;\n    height: 32px !important;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper.m-view[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper.m-view[_ngcontent-%COMP%]   .nav-menu-wrapper[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper.m-view[_ngcontent-%COMP%]   .side-nav-footer[_ngcontent-%COMP%] {\n    padding: 12px 6px;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .side-nav-wrapper.m-view[_ngcontent-%COMP%]   .side-nav-footer[_ngcontent-%COMP%]   .f-menu-icon[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayout, [{
    type: Component,
    args: [{ selector: "app-main-layout", imports: [
      RouterOutlet,
      RouterLink,
      RouterLinkActive
    ], template: `<!-- Load component based on the current route -->
<div class="container-fluid">
    <div class="row flex-nowrap bg-light">
        <nav class="col-auto p-0 bg-white sidebar position-sticky top-0 p-0 border-end border-light shadow side-nav"
            [class.collapsed]="isSidebarCollapsed">
            <div class="side-nav-wrapper">
                <!-- Sidebar Header -->
                <div class="py-2 px-4 d-flex align-items-center justify-content-center gap-1 border-bottom text-center user-select-none side-nav-header"
                    (click)="isSidebarCollapsed = !isSidebarCollapsed">
                    <!-- <svg width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                        class="brand-logo">
                        <rect id="LOGO" x="0" y="0" width="1024" height="1024" style="fill:none;" />
                        <g id="LOGO1" serif:id="LOGO">
                            <g id="White-Back" serif:id="White Back">
                                <rect id="White-BG" serif:id="White BG" x="0" y="0" width="1024" height="1024"
                                    style="fill:white;" />
                                <g id="Chart" transform="matrix(1.05984,0,0,1.05984,-4.7696,90.2224)">
                                    <path
                                        d="M658.992,238.148C658.359,238.806 657.756,239.428 657.2,240C653.55,243.7 648.7,248.75 646.45,251.15C640.45,257.5 616.5,279.95 605.8,289.25C601.4,293.05 589.75,302.35 584.5,306.2C582.7,307.5 579.55,309.85 577.45,311.4C546.15,334.8 526.65,346.95 495,362.8C479.55,370.5 471.85,374.05 460.5,378.8C457.73,379.926 455.219,381.016 453.634,381.763C453.484,381.744 453.261,381.777 452.95,381.85C452.1,382.1 451.9,382 452.1,381.4C452.217,381.087 454.35,372.987 457.21,361.991C457.223,361.997 457.236,362 457.25,362C457.391,362 457.487,361.517 457.499,360.88C458.214,358.128 458.971,355.21 459.75,352.2C465.362,330.574 469.662,314.007 473.869,297.914C473.953,297.894 473.984,297.735 473.995,297.434C475.892,290.175 477.773,283.005 479.75,275.5C482.1,266.55 485.15,254.95 486.5,249.65C487.9,244.4 489.2,239.5 489.5,238.8L490,237.5L574.8,237.5C646.034,237.5 658.326,237.589 658.992,238.148ZM410.673,437.097C410.591,437.245 410.483,437.568 410.35,438.1C407.35,450.1 396.25,502.3 395.7,507.15C395.3,510.6 394.65,511.25 394.2,508.65C392.377,497.898 387.983,486.514 381.48,475.354C381.031,474.32 380.521,473.421 380.144,473.113C379.835,472.607 379.522,472.101 379.205,471.596C377.907,469.015 372.556,461.577 367.85,456C358.003,444.165 346.65,434.47 333.639,426.796C327.121,422.935 320.239,419.613 313.028,416.849C310.615,415.913 308.156,415.031 305.65,414.2C302.848,413.286 299.191,412.288 295.591,411.416C294.558,411.163 293.519,410.921 292.475,410.69C290.407,410.227 288.454,409.83 286.804,409.542C284.559,409.131 282.291,408.767 280,408.45C279.17,408.328 278.081,408.224 276.756,408.137C276.282,408.103 275.732,408.073 275.109,408.044C271.667,407.877 267.039,407.8 261.5,407.8C250.999,407.846 247.227,407.976 242.161,408.691C237.406,409.275 232.92,410.22 227,411.7C226.078,411.929 225.024,412.217 223.888,412.547C220.354,413.542 216.884,414.672 213.479,415.936C209.586,417.318 206.234,418.642 205,419.35C204.765,419.483 204.582,419.591 204.465,419.667C199.771,421.818 195.216,424.242 190.805,426.937C189.933,427.453 189.145,427.934 188.5,428.35C186.806,429.452 185.227,430.519 183.714,431.59C181.95,432.831 180.212,434.117 178.5,435.45C170.91,441.328 155.523,457.187 153.276,461.179C150.463,464.775 148.063,468.27 146.1,471.65L145.995,471.832L146,471.75L145.337,472.911C145.006,473.427 144.682,473.895 144.389,474.286C144.068,474.504 144.037,473.975 144.45,472.8C144.643,472.338 144.746,472.039 144.738,471.846C145.856,469.154 147.84,463.817 151.7,453.35C153.361,448.834 154.56,445.53 155.382,443.126C156.994,438.868 159.793,431.245 163.886,420.034C163.955,419.87 164.026,419.693 164.1,419.5C166.315,413.474 169.368,405.092 171.496,399.21C173.095,394.877 175.089,389.503 177.95,381.825C178.006,381.749 178.055,381.657 178.1,381.55C178.24,381.223 178.339,380.91 178.399,380.621L181.28,372.897C181.448,372.982 181.489,372.792 181.498,372.314L185.162,362.504C185.513,361.601 185.786,360.875 185.985,360.293C187.136,357.205 188.602,353.292 190.153,349.168C190.349,348.679 190.508,348.259 190.63,347.901C192.594,342.68 194.653,337.225 196.35,332.75C199.8,323.7 204.25,311.85 206.3,306.5C208.3,301.15 212.1,291 214.75,284C217.4,277 220.9,267.75 222.5,263.4C223.752,260.136 227.568,250.075 231.915,238.703C232.022,238.577 232.119,238.409 232.2,238.2C232.323,237.868 232.407,237.566 232.451,237.3L233.215,235.302C233.317,235.227 233.41,235.011 233.55,234.65C233.733,234.192 233.851,233.813 233.902,233.508C234.649,231.56 235.401,229.599 236.15,227.65C242.05,212.3 248.15,196.4 249.75,192.25C255.85,176.05 256.2,175.35 260.4,169.7C267.65,159.95 275.9,153.1 287.25,147.5C296.55,142.9 304.6,140.5 317.75,138.4C323.8,137.45 347,137.6 355.65,138.65C361.167,139.335 366.483,140.24 371.607,141.368C371.613,141.454 371.798,141.49 372.19,141.498C395.225,146.663 414.374,156.387 430.55,171.1C440.65,180.25 450.05,194.45 453.9,206.5C456.4,214.2 457.1,219.65 456.85,228.75C456.6,236.95 456.5,237.65 453.75,249C449.5,266.75 444.75,287 442,299C440.65,304.9 438.75,313.25 437.75,317.5C436.75,321.75 434.25,332.55 432.25,341.5C430.2,350.45 427.75,361.25 426.75,365.5C425.75,369.75 423.95,377.75 422.7,383.25C421.5,388.75 420.15,394.6 419.75,396.25C417.855,403.829 413.373,424.185 410.673,437.097ZM808.274,449C808.185,468.056 808.084,498.071 808,532.5L807.75,643.75L806.15,648.5C802.2,660.15 793.25,669.7 781.75,674.5C773.9,677.75 794.4,677.5 525.5,677.5C358.85,677.5 278.95,677.35 275.45,677C256.8,675.1 237.35,669.4 222.5,661.4C208.15,653.7 198.2,646.6 188.25,636.95C169.05,618.3 157.25,597.55 152.55,574.15C145.6,539.7 153,505.4 173.3,478.2C177.9,472 189.4,460.85 196,456.15C206.354,448.839 216.419,443.59 226.569,440.253C228.141,439.749 229.768,439.265 231.472,438.796C235.942,437.608 241.98,436.319 246.595,435.565C248.992,435.274 251.866,434.992 254.5,434.8C255.583,434.718 256.665,434.652 257.746,434.602C264.042,434.469 271.36,434.796 277.568,435.488C282.413,436.147 287.192,437.126 291.87,438.411C293.381,438.89 295.491,439.565 297.75,440.3C300.129,441.056 302.479,441.904 304.795,442.84C314.239,446.748 323.099,451.962 331.068,458.341C343.904,468.686 354.387,482.017 361.1,497.05C371.55,520.45 372.9,550.35 364.65,574.2C360,587.55 352.35,599.3 342.8,607.6C327.9,620.6 310.1,626.55 288.1,625.85C278.6,625.55 272.75,624.65 264.5,622.15C239.7,614.7 218.85,598.25 208.85,578.2C192.9,546.25 205.9,507.25 237.7,491.7C249.9,485.75 264.4,484.5 276,488.3C283.9,490.9 288.7,495.35 290.3,501.45C291.05,504.45 291.05,504.75 290.05,507.95C289.25,510.65 288.55,511.75 286.95,513.25C282.3,517.45 277.95,517.8 270,514.5C261.15,510.9 255.7,511.15 247.5,515.6C238.3,520.6 232.35,528.45 229.4,539.4C228.05,544.6 227.9,553.9 229.15,558.45C232.05,569.15 240.05,579.85 250.05,586.5C261.8,594.25 274,598.45 287.25,599.3C312.75,600.85 332.15,588.3 340.45,564.85C343.122,557.174 344.142,551.198 344.152,541.829C344.419,541.609 344.5,541.143 344.5,540.25C344.5,539.332 344.414,538.865 344.129,538.653C343.966,529.693 342.829,522.888 340.25,515.15C335.663,501.415 326.974,489.319 315.622,480.046C315.275,479.733 314.854,479.388 314.35,479C314.215,478.901 314.078,478.803 313.94,478.708C309.55,475.306 304.789,472.316 299.734,469.802C299.243,469.44 298.444,469.044 297.15,468.45C293.782,466.914 289.988,465.543 286.076,464.409C282.713,463.402 279.265,462.595 275.75,462C275.015,461.876 274.251,461.764 273.464,461.665C270.441,461.234 267.552,461 264.95,461L260,461L260,461.082C257.984,461.134 255.968,461.242 254,461.405L254,461.35L250.65,461.7C249.651,461.809 248.903,461.918 248.315,462.058C247.058,462.246 245.848,462.46 244.7,462.7C243.392,462.977 242.097,463.281 240.816,463.611C240.222,463.697 239.513,463.843 238.7,464.05C238.096,464.219 237.561,464.424 237.171,464.635C200.632,475.734 176.047,508.915 176,548.55C175.95,575.15 186.1,597.95 206.8,618C212.85,623.9 215.6,626.05 223.1,631C229.05,635 240.1,640.85 246.15,643.2C254,646.3 265.75,649.25 274.75,650.45C276.7,650.7 328.65,650.9 392.15,650.95L506,651L506,541.7C506,495.333 505.99,468.591 505.908,453.206C505.966,451.57 505.971,449.103 505.95,445.4C505.9,439.55 505.9,434.35 505.95,433.9C506,433.05 508.2,433 544.5,433L583,433L583,446.25C583,454.934 583.023,457.935 583.322,458.966C583.208,478.959 583.106,508.919 583.05,542.25L582.9,651L619,651L619,572C619,515.552 618.935,498.754 618.567,494.38C618.959,494.191 619,493.711 619,492.5C619,491.891 618.99,491.467 618.93,491.172C618.977,490.924 619,490.617 619,490.25C619,490.163 618.999,490.08 618.996,490L619,490L619,483.256C619.01,483.181 619.01,483.106 619,483.034L619,381L696,381L696,420C696,444.214 696.05,453.67 696.307,457.142C696.223,478.479 696.154,508.712 696.1,541.4L696.099,542.072C696.01,543.589 696,546.214 696,550.75C696,554.861 696.008,557.402 696.076,558.971L695.95,651L732,651L732,522.25C732,467.995 731.975,435.875 731.877,417.285C731.919,408.7 731.96,398.581 732,386.7L732.25,312.25L807.75,312.25L807.9,380.65L808,449L808.274,449Z"
                                        style="fill:url(#_Linear1);" />
                                </g>
                            </g>
                            <g id="Arrow" transform="matrix(1.05984,0,0,1.05984,-4.7696,90.2224)">
                                <path
                                    d="M449.5,392.5C449.5,391.55 451.55,383.2 451.9,382.7C452.1,382.4 455.95,380.65 460.5,378.8C471.85,374.05 479.55,370.5 495,362.8C526.65,346.95 546.15,334.8 577.45,311.4C579.55,309.85 582.7,307.5 584.5,306.2C589.75,302.35 601.4,293.05 605.8,289.25C616.5,279.95 640.45,257.5 646.45,251.15C648.7,248.75 653.55,243.7 657.2,240C660.8,236.3 666.35,230.45 669.5,227.05C672.65,223.6 677.05,218.9 679.3,216.55C681.5,214.15 685.2,210.1 687.5,207.5C689.75,204.9 692.45,201.85 693.45,200.7C694.45,199.6 696.15,197.6 697.25,196.25C699,194.1 703.8,188.35 705.9,185.9C706.65,185 705.85,184.1 698.85,178C694.75,174.45 682.7,163.75 681,162.2C680.05,161.3 678.6,160 677.75,159.3C676.85,158.5 676.45,157.85 676.75,157.6C677.05,157.35 681.75,155.65 687.25,153.85C692.75,152 699.5,149.75 702.25,148.8C709.55,146.25 733.05,138.15 738,136.5C750.15,132.4 792.55,117.75 797.65,115.85C799.5,115.2 801.1,114.75 801.2,114.95C801.3,115.1 801.2,116.4 801,117.75C798.45,132.3 791.25,173.25 790.25,178.5C789.55,182.2 788.55,187.6 788.05,190.5C783.8,214.5 778.45,242.7 777.95,243.65C777.5,244.5 777.15,244.3 774.35,241.55C772.65,239.9 770.3,237.8 769.2,236.9C768.05,236 763.8,232.2 759.75,228.5C751.5,220.95 748.05,218 747.55,218C747.15,218 743.8,221.45 741.7,224.05C740.9,225.05 738.45,227.85 736.25,230.3C734.05,232.75 731.4,235.8 730.3,237C725.55,242.55 717.3,251.7 712.55,256.75C701.1,268.8 679.55,289.65 671.5,296.4C653.35,311.55 646.35,317 633,326.1C602.55,346.85 572.75,362.4 542,373.6C517.2,382.6 484.15,390 459.75,392C456.15,392.25 452.4,392.65 451.4,392.8C450.1,393 449.5,392.9 449.5,392.5Z"
                                    style="fill:rgb(248,164,29);fill-rule:nonzero;" />
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                                gradientTransform="matrix(4.06662e-14,-539.737,664.13,3.30494e-14,485.289,677.504)">
                                <stop offset="0" style="stop-color:rgb(0,101,179);stop-opacity:1" />
                                <stop offset="1" style="stop-color:rgb(0,119,198);stop-opacity:1" />
                            </linearGradient>
                        </defs>
                    </svg> -->
                    <span class="text-primary fs-4 fw-bold text-uppercase">
                        {{!isSidebarCollapsed ? 'Resort Booking': 'RB'}}
                    </span>
                </div>
                <!-- Navigation Menu -->
                <ul class="nav-menu-wrapper">
                    @for(item of sidebarRoutes; track item){
                    <li class="menu-item rounded" routerLinkActive="bg-primary">
                        <a class="text-decoration-none text-dark" routerLink="{{item.link}}">
                            <div class="d-flex gap-2 align-items-center py-2 px-3" routerLinkActive="text-white">
                                @switch (item.icon) {
                                @case('list'){
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                    class="flex-shrink-0">
                                    <path
                                        d="M10 6L21 6.00066M10 12L21 12.0007M10 18L21 18.0007M3 5L5 4V10M5 10H3M5 10H7M7 20H3L6.41274 17.0139C6.78593 16.6873 7 16.2156 7 15.7197C7 14.7699 6.23008 14 5.28033 14H5C4.06808 14 3.28503 14.6374 3.06301 15.5"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                                }
                                @case('property'){
                                <svg fill="currentColor" width="24" height="24" viewBox="90 90 320 320"
                                    class="flex-shrink-0">
                                    <path
                                        d="M368,187.056l-120-60l-120,60V224h16v128h208V224h16V187.056z M280,336h-64v-48c0-17.648,14.352-32,32-32 s32,14.352,32,32V336z M336,336h-40v-48c0-26.472-21.528-48-48-48s-48,21.528-48,48v48h-40V224h176V336z M352,208H144v-11.056 l104-52l104,52V208z">
                                    </path>
                                </svg>
                                <!-- <svg fill="currentColor" height="24" width="24" viewBox="0 0 496 496"
                                    xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
                                    <g>
                                        <path
                                            d="M248,0C111.256,0,0,111.248,0,248s111.256,248,248,248s248-111.248,248-248S384.744,0,248,0z M425.272,98.568 c32.504,38.496,52.688,87.664,54.52,141.432H423.8c-1.92-42.624-19.056-81.344-46.12-110.848 C403.376,118.08,418.208,105.704,425.272,98.568z M414.512,86.696c-5.888,6.064-20.944,19.144-49.2,30.248 c-4.824-4.32-9.904-8.36-15.184-12.136c-22.776-42.968-51.984-70.888-72.704-86.864C330.912,24.736,378.76,49.8,414.512,86.696z M256,22.256c14.928,10.016,41.744,31.096,65.416,65.848C301.344,78.848,279.264,73.248,256,72.2V22.256z M218.576,17.928 c-20.728,15.976-49.928,43.904-72.704,86.864c-5.28,3.776-10.36,7.816-15.184,12.136c-28.256-11.096-43.312-24.184-49.2-30.248 C117.24,49.8,165.088,24.736,218.576,17.928z M240,22.288V72.2c-23.256,1.048-45.328,6.648-65.392,15.896 C198.232,53.464,225.056,32.344,240,22.288z M70.72,98.568c7.072,7.136,21.904,19.512,47.6,30.584 C91.264,158.656,74.12,197.376,72.2,240h-56C18.032,186.232,38.224,137.064,70.72,98.568z M70.728,397.432 C38.224,358.936,18.04,309.768,16.2,256h56c1.92,42.624,19.056,81.344,46.12,110.848 C92.624,377.92,77.792,390.296,70.728,397.432z M81.488,409.304c5.888-6.064,20.944-19.144,49.2-30.248 c4.824,4.32,9.904,8.36,15.184,12.136c22.776,42.968,51.984,70.888,72.704,86.864C165.088,471.264,117.24,446.2,81.488,409.304z M240,473.744c-14.928-10.016-41.744-31.096-65.416-65.848c20.072,9.256,42.16,14.856,65.416,15.904V473.744z M88,248 c0-88.224,71.776-160,160-160s160,71.776,160,160s-71.776,160-160,160S88,336.224,88,248z M256,423.8 c23.256-1.048,45.328-6.648,65.392-15.896c-23.624,34.624-50.456,55.752-65.392,65.808V423.8z M277.424,478.072 c20.728-15.976,49.928-43.904,72.704-86.864c5.28-3.776,10.36-7.816,15.184-12.136c28.256,11.096,43.312,24.184,49.2,30.248 C378.76,446.2,330.912,471.264,277.424,478.072z M377.68,366.848c27.056-29.504,44.2-68.224,46.12-110.848h56 c-1.832,53.768-22.024,102.936-54.52,141.432C418.208,390.296,403.376,377.92,377.68,366.848z">
                                        </path>
                                        <path
                                            d="M368,187.056l-120-60l-120,60V224h16v128h208V224h16V187.056z M280,336h-64v-48c0-17.648,14.352-32,32-32 s32,14.352,32,32V336z M336,336h-40v-48c0-26.472-21.528-48-48-48s-48,21.528-48,48v48h-40V224h176V336z M352,208H144v-11.056 l104-52l104,52V208z">
                                        </path>
                                    </g>
                                </svg> -->
                                }
                                @case('boxes'){
                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path
                                            d="M16,17v8H6V17H16m0-2H6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2Z">
                                        </path>
                                        <path
                                            d="M27,6v5H17V6H27m0-2H17a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z">
                                        </path>
                                        <path
                                            d="M27,17v5H22V17h5m0-2H22a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2Z">
                                        </path>
                                        <path
                                            d="M11,6v5H6V6h5m0-2H6A2,2,0,0,0,4,6v5a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z">
                                        </path>
                                    </g>
                                </svg>
                                }
                                @case('calendar'){
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 16 16" class="flex-shrink-0">
                                    <path
                                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                }
                                @case('apk'){
                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
                                    <path
                                        d="M22.43,22a0.5,0.5,0,0,0-.5.5v4.2H5.15V4.2a1.7,1.7,0,0,1,1.7-1.7H20.23a1.7,1.7,0,0,1,1.7,1.7v5a0.5,0.5,0,0,0,1,0v-5a2.7,2.7,0,0,0-2.7-2.7H6.85a2.7,2.7,0,0,0-2.7,2.7V27.8a2.7,2.7,0,0,0,2.7,2.7H20.23a2.7,2.7,0,0,0,2.7-2.7V22.5A0.5,0.5,0,0,0,22.43,22Zm-2.2,7.5H6.85a1.7,1.7,0,0,1-1.7-1.7V27.7H21.93v0.1A1.7,1.7,0,0,1,20.23,29.5Z" />
                                    <path
                                        d="M22.43,10.58A5.42,5.42,0,1,0,27.85,16,5.42,5.42,0,0,0,22.43,10.58Zm0,9.83A4.42,4.42,0,1,1,26.85,16,4.42,4.42,0,0,1,22.43,20.42Z" />
                                    <path
                                        d="M22.93,15.76V12.82a0.5,0.5,0,1,0-1,0V16a0.5,0.5,0,0,0,.19.39l2.22,1.73a0.5,0.5,0,0,0,.31.11A0.5,0.5,0,0,0,25,17.33Z" />
                                    <path d="M10.36,3.48a0.5,0.5,0,0,0,0,1h6.36a0.5,0.5,0,0,0,0-1H10.36Z" />
                                </svg>
                                }
                                @case('money'){
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 307.318 307.318" width="24" height="24" class="flex-shrink-0">
                                    <path
                                        d="M34.633,0v307.318l44.657-36.057l37.164,29.999l37.179-30l37.166,29.999l37.194-30.001l44.692,36.05V0H34.633z M257.686,275.938l-29.692-23.95l-37.19,29.999l-37.168-30.001l-37.179,30l-37.168-30.001l-29.655,23.943V15h208.053v260.938 H257.686z">
                                    </path>
                                    <path
                                        d="M164.799,187.666c20.139,0,38.465-10.301,49.023-27.554l-12.795-7.83c-7.811,12.764-21.354,20.384-36.229,20.384 c-16.873,0-31.478-9.885-38.334-24.168H156.2v-15h-33.753c-0.086-1.099-0.143-2.206-0.143-3.326c0-1.121,0.057-2.228,0.143-3.327 H156.2v-15h-29.735c6.856-14.282,21.461-24.167,38.333-24.167c14.875,0,28.418,7.62,36.229,20.384l12.795-7.83 c-10.559-17.253-28.885-27.554-49.023-27.554c-25.294,0-46.811,16.427-54.481,39.167H93.15v15h14.258 c-0.063,1.102-0.103,2.21-0.103,3.327s0.04,2.225,0.103,3.326H93.15v15h17.167C117.988,171.239,139.504,187.666,164.799,187.666z">
                                    </path>
                                    <rect x="93.15" y="206.617" width="114.274" height="15" />
                                </svg>
                                }
                                @default {
                                <svg width="24" height="24" viewBox="0 0 24 24" class="flex-shrink-0">
                                    <rect x="4" y="4" width="16" height="16" rx="2" fill="transparent"
                                        stroke="currentColor" stroke-width="1.4" />
                                    <circle cx="12" cy="12" r="4" fill="transparent" stroke="currentColor"
                                        stroke-width="1.4" />
                                </svg>
                                }
                                }
                                <span class="text-capitalize fw-medium menu-label">
                                    {{item.label}}
                                </span>
                            </div>
                        </a>
                    </li>
                    }
                </ul>
                <!-- Sidebar Footer -->
                <div class="border-top side-nav-footer">
                    <button class="btn btn-outline-primary d-flex align-items-center gap-2 w-100" (click)="logout()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14" fill="none"
                            class="flex-shrink-0">
                            <path
                                d="M5.25 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H5.25"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M9.33334 9.91671L12.25 7.00004L9.33334 4.08337" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.25 7H5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span class="flex-grow-1">
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Body Section (Right) -->
        <main class="col m-0 px-4 py-3 min-vh-100 h-100 relative overflow-auto">
            <router-outlet />
        </main>
    </div>
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n/* src/app/layouts/main-layout/main-layout.scss */\n:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body .form-flex-row {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body .input-group {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body .input-group .form-flex-row-gap {\n  gap: 2px;\n}\n.form-body .input-group .input-label {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body .input-group .req-indicator {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body .input-group .optional,\n.form-body .input-group .limitation {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body .input-group .info-icon-wrap {\n  flex-shrink: 0;\n}\n.form-body .input-group .info-icon-wrap .info-icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body .input-group .input-wrap {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body .input-group .input-wrap .input-field {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-wrap .input-field::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-textarea-group .input-textarea {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-scrollbar {\n  display: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .textarea-limitation {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body .input-group .error-wrap {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body .input-group .error-wrap .error-msg {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.container-fluid .side-nav {\n  width: auto;\n  height: 100vh;\n  max-height: 100vh;\n  z-index: 99;\n}\n.container-fluid .side-nav .side-nav-wrapper {\n  width: 100%;\n  max-width: 280px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.container-fluid .side-nav .side-nav-wrapper .side-nav-header {\n  height: var(--header-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container-fluid .side-nav .side-nav-wrapper .side-nav-header .brand-logo {\n  display: block;\n  width: 42px;\n  height: 42px;\n}\n.container-fluid .side-nav .side-nav-wrapper .nav-menu-wrapper {\n  margin: 0;\n  padding: 6px 12px;\n  min-height: 300px;\n  flex: 1;\n  flex-wrap: nowrap;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n  list-style: none;\n  overflow: auto;\n  overscroll-behavior: contain;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.container-fluid .side-nav .side-nav-wrapper .nav-menu-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.container-fluid .side-nav .side-nav-wrapper .nav-menu-wrapper .menu-item:not(.bg-primary):hover {\n  background-color: rgba(var(--bs-primary-rgb), 0.2);\n}\n.container-fluid .side-nav .side-nav-wrapper .nav-menu-wrapper .menu-item:not(.bg-primary):hover div {\n  color: var(--bs-primary);\n}\n.container-fluid .side-nav .side-nav-wrapper .nav-menu-wrapper .menu-item .menu-icon {\n  width: 32px;\n  height: 32px;\n}\n.container-fluid .side-nav .side-nav-wrapper .nav-menu-wrapper .menu-item .menu-label {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 1;\n  -webkit-line-clamp: 1;\n  word-break: break-all;\n}\n.container-fluid .side-nav .side-nav-wrapper .side-nav-footer {\n  padding: 12px 12px;\n}\n.container-fluid .side-nav .side-nav-wrapper .side-nav-footer .f-menu-icon {\n  width: 24px;\n  height: 24px;\n}\n.container-fluid .side-nav.collapsed {\n  width: max-content;\n}\n.container-fluid .side-nav.collapsed .side-nav-wrapper .side-nav-header .brand-logo {\n  margin: auto;\n  width: 42px;\n  height: 42px;\n}\n.container-fluid .side-nav.collapsed .side-nav-wrapper .nav-menu-wrapper .menu-item .menu-label {\n  display: none;\n}\n.container-fluid .side-nav.collapsed .side-nav-wrapper .side-nav-footer button span {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .container-fluid .side-nav {\n    font-size: 0.875em;\n  }\n  .container-fluid .side-nav .side-nav-wrapper.m-view {\n    max-width: 180px;\n  }\n  .container-fluid .side-nav .side-nav-wrapper.m-view .side-nav-header .brand-logo {\n    width: 32px !important;\n    height: 32px !important;\n  }\n  .container-fluid .side-nav .side-nav-wrapper.m-view .nav-menu-wrapper {\n    padding: 4px 8px;\n  }\n  .container-fluid .side-nav .side-nav-wrapper.m-view .nav-menu-wrapper .menu-item .menu-icon {\n    width: 24px;\n    height: 24px;\n  }\n  .container-fluid .side-nav .side-nav-wrapper.m-view .side-nav-footer {\n    padding: 12px 6px;\n  }\n  .container-fluid .side-nav .side-nav-wrapper.m-view .side-nav-footer .f-menu-icon {\n    width: 18px;\n    height: 18px;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayout, { className: "MainLayout", filePath: "src/app/layouts/main-layout/main-layout.ts", lineNumber: 18 });
})();

// src/app/core/guards/auth-guard.ts
var authGuard = (route, state) => {
  const _router = inject(Router);
  const _coreService = inject(CoreFacadeService);
  if (!_coreService.utils.isAuthenticated) {
    _coreService.utils.logout(true);
    _router.navigateByUrl(ROUTES.getFullRoute(ROUTES.AUTH.BASE, ROUTES.AUTH.LOGIN));
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: ROUTES.BASE,
    title: APP_PAGE_TITLE.BRAND_NAME,
    component: MainLayout,
    canActivate: [authGuard],
    loadChildren: () => import("./chunk-ISBJBFII.js").then((m) => m.routes)
  },
  {
    path: ROUTES.AUTH.BASE,
    title: APP_PAGE_TITLE.AUTH.BASE,
    component: CommonOutlet,
    loadChildren: () => import("./chunk-CUSR7GXR.js").then((m) => m.routes)
  },
  {
    path: ROUTES.PAGE_NOT_FOUND,
    title: APP_PAGE_TITLE.PAGE_NOT_FOUND,
    component: PageNotFound
  }
];

// src/app/core/interceptors/auth-token-injector-interceptor.ts
var authTokenInjectorInterceptor = (req, next) => {
  const _coreService = inject(CoreFacadeService);
  const authToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
  if (authToken && typeof authToken === "string") {
    req = req.clone({
      headers: req.headers.append("Authorization", authToken)
    });
  }
  return next(req).pipe(tap({
    error: (err) => {
      if (err instanceof HttpErrorResponse) {
        if ([401].includes(err.status)) {
          const isAuthRoute = req.url.includes(`/${ROUTES.AUTH.BASE}`);
          if (_coreService.utils.isAuthenticated || !isAuthRoute) {
            _coreService.utils.logout();
          }
        }
      }
    }
  }));
};

// src/app/core/services/app-init/app-init.ts
var AppInit = class _AppInit {
  _apiFs;
  _coreService;
  constructor(_apiFs, _coreService) {
    this._apiFs = _apiFs;
    this._coreService = _coreService;
  }
  initApp() {
    return __async(this, null, function* () {
      try {
        const res = yield firstValueFrom(this._apiFs.utils.sync());
        if (res.code === "OK" && res.data) {
          const data = res.data || {};
          const decoded = this._coreService.utils.decodeData(data.data, data.date);
          if (decoded) {
            this._coreService.appConfig.configData = decoded;
          }
        }
      } catch (err) {
        console.error("App initialization failed", err);
      }
    });
  }
  static \u0275fac = function AppInit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInit)(\u0275\u0275inject(ApiFacadeService), \u0275\u0275inject(CoreFacadeService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppInit, factory: _AppInit.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInit, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiFacadeService }, { type: CoreFacadeService }], null);
})();

// src/app/app.config.ts
function initializeApp() {
  const appInitService = inject(AppInit);
  return appInitService.initApp();
}
var appConfig = {
  providers: [
    provideAppInitializer(initializeApp),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      authTokenInjectorInterceptor
    ]))
  ]
};

// src/app/shared/components/toaster/toaster.ts
var _forTrack0 = ($index, $item) => $item.id;
function Toaster_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domListener("mouseenter", function Toaster_Conditional_0_For_2_Template_div_mouseenter_0_listener($event) {
      const toaster_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMouseEnter($event, toaster_r2));
    })("mouseleave", function Toaster_Conditional_0_For_2_Template_div_mouseleave_0_listener($event) {
      const toaster_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMouseLeave($event, toaster_r2));
    });
    \u0275\u0275domElementStart(1, "div", 3);
    \u0275\u0275domElement(2, "div");
    \u0275\u0275domElementStart(3, "div", 4)(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "button", 6);
    \u0275\u0275domListener("click", function Toaster_Conditional_0_For_2_Template_button_click_6_listener() {
      const toaster_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeToaster(toaster_r2));
    });
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const toaster_r2 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("toast bg-white show rounded-3 p-2 border border-", toaster_r2.type, " border-opacity-25"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bg-", toaster_r2.type, " ps-1 align-self-stretch rounded"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", toaster_r2 == null ? null : toaster_r2.message, " ");
  }
}
function Toaster_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, Toaster_Conditional_0_For_2_Template, 7, 7, "div", 1, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.toasters);
  }
}
var Toaster = class _Toaster {
  _coreService;
  constructor(_coreService) {
    this._coreService = _coreService;
    this._coreService.utils.toasters$.subscribe({
      next: (toaster) => {
        toaster.id = `toaster-${Math.random().toString(36).substring(2, 9)}`;
        toaster.timeoutId = setTimeout(() => {
          this.removeToaster(toaster);
        }, toaster.duration || 6e3);
        this.toasters.push(toaster);
      }
    });
    this._coreService.utils.clearToasters$.subscribe({
      next: (needClear) => {
        if (needClear) {
          this.toasters.forEach((t) => {
            if (t && t.timeoutId)
              clearTimeout(t.timeoutId);
          });
          this.toasters = [];
        }
      }
    });
  }
  toasters = [];
  onMouseEnter(event, toaster) {
    event.stopPropagation();
    if (toaster && toaster.timeoutId) {
      clearTimeout(toaster.timeoutId);
      toaster.timeoutId = null;
    }
  }
  onMouseLeave(event, toaster) {
    event.stopPropagation();
    if (toaster && !toaster.timeoutId) {
      toaster.timeoutId = setTimeout(() => {
        this.removeToaster(toaster);
      }, 2500);
    }
  }
  removeToaster(toaster) {
    const toasterIdx = this.toasters.findIndex((t) => t.id === toaster.id);
    this.toasters.splice(toasterIdx, 1);
    if (toaster && toaster.timeoutId) {
      clearTimeout(toaster.timeoutId);
    }
  }
  ngOnDestroy() {
    this.toasters.forEach((t) => {
      if (t && t.timeoutId)
        clearTimeout(t.timeoutId);
    });
    this.toasters = [];
  }
  static \u0275fac = function Toaster_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toaster)(\u0275\u0275directiveInject(CoreFacadeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Toaster, selectors: [["app-toaster"]], decls: 1, vars: 1, consts: [[1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "class"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave"], [1, "d-flex"], [1, "toast-body", "flex-grow-1", "align-self-stretch", "p-2"], [1, "message", "m-0"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "flex-shrink-0", "p-0", 3, "click"]], template: function Toaster_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Toaster_Conditional_0_Template, 3, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.toasters.length ? 0 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toaster, [{
    type: Component,
    args: [{ selector: "app-toaster", imports: [], template: '@if(toasters.length){\n<div class="toast-container position-fixed top-0 end-0 p-3">\n    <!-- Loop through the toasters -->\n    @for (toaster of toasters; track toaster.id;) {\n    <div class="toast bg-white show rounded-3 p-2 border border-{{toaster.type}} border-opacity-25" role="alert"\n        aria-live="assertive" aria-atomic="true" (mouseenter)="onMouseEnter($event, toaster)"\n        (mouseleave)="onMouseLeave($event, toaster)">\n        <div class="d-flex">\n            <div class="bg-{{toaster.type}} ps-1 align-self-stretch rounded"></div>\n            <div class="toast-body flex-grow-1 align-self-stretch p-2">\n                <p class="message m-0">\n                    {{ toaster?.message }}\n                </p>\n            </div>\n            <button type="button" class="btn-close flex-shrink-0 p-0" data-bs-dismiss="toast" aria-label="Close"\n                (click)="removeToaster(toaster)"></button>\n        </div>\n    </div>\n    }\n</div>\n}' }]
  }], () => [{ type: CoreFacadeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Toaster, { className: "Toaster", filePath: "src/app/shared/components/toaster/toaster.ts", lineNumber: 12 });
})();

// src/app/app.ts
var App = class _App {
  constructor() {
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toaster");
    }
  }, dependencies: [
    RouterOutlet,
    Toaster
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      RouterOutlet,
      Toaster
    ], template: "<router-outlet></router-outlet>\n\n<!-- Toaster/Notification Component -->\n<app-toaster />" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
