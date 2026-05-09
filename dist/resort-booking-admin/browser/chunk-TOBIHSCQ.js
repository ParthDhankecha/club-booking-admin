import {
  Component,
  RouterOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-K5BQJCWW.js";

// src/app/layouts/common-outlet/common-outlet.ts
var CommonOutlet = class _CommonOutlet {
  static \u0275fac = function CommonOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonOutlet)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommonOutlet, selectors: [["app-common-outlet"]], decls: 1, vars: 0, template: function CommonOutlet_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonOutlet, [{
    type: Component,
    args: [{ selector: "app-common-outlet", imports: [RouterOutlet], template: "<router-outlet />" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommonOutlet, { className: "CommonOutlet", filePath: "src/app/layouts/common-outlet/common-outlet.ts", lineNumber: 10 });
})();

export {
  CommonOutlet
};
//# sourceMappingURL=chunk-TOBIHSCQ.js.map
