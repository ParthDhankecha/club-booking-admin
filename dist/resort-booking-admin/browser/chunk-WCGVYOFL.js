import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-K5BQJCWW.js";

// src/app/shared/components/page-not-found/page-not-found.ts
var PageNotFound = class _PageNotFound {
  ngOnInit() {
  }
  static \u0275fac = function PageNotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageNotFound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageNotFound, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "Page not found!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageNotFound, [{
    type: Component,
    args: [{ selector: "app-page-not-found", imports: [], template: "<p>Page not found!</p>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageNotFound, { className: "PageNotFound", filePath: "src/app/shared/components/page-not-found/page-not-found.ts", lineNumber: 10 });
})();

export {
  PageNotFound
};
//# sourceMappingURL=chunk-WCGVYOFL.js.map
