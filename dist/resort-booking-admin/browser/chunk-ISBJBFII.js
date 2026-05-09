import {
  CommonOutlet
} from "./chunk-TOBIHSCQ.js";
import {
  AppSrc,
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  CommonDropdown,
  ModalLayer,
  RegisterModalLayer,
  SearchInput,
  moveItemInArray
} from "./chunk-FMTP2DGP.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  EToasterType,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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
  CurrencyPipe,
  DatePipe,
  DomSanitizer,
  EventEmitter,
  Input,
  Output,
  ROUTES,
  __spreadProps,
  __spreadValues,
  __toESM,
  inject,
  require_moment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-K5BQJCWW.js";

// src/app/shared/components/icon-dropdown/icon-dropdown.ts
function IconDropdown_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-search-input", 8);
    \u0275\u0275listener("onSearch", function IconDropdown_Conditional_3_Conditional_1_Template_app_search_input_onSearch_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchTerms($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function IconDropdown_Conditional_3_Conditional_3_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("appSrc", option_r4[ctx_r1.thumbKey]);
  }
}
function IconDropdown_Conditional_3_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function IconDropdown_Conditional_3_Conditional_3_For_2_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOptionChange(option_r4));
    });
    \u0275\u0275conditionalCreate(1, IconDropdown_Conditional_3_Conditional_3_For_2_Conditional_1_Template, 1, 1, "img", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("icon-dropdown-tile--selected", ctx_r1.isSelected(option_r4));
    \u0275\u0275attribute("title", ctx_r1.labelTitle(option_r4))("aria-label", ctx_r1.labelTitle(option_r4));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.thumbKey && option_r4[ctx_r1.thumbKey] ? 1 : -1);
  }
}
function IconDropdown_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, IconDropdown_Conditional_3_Conditional_3_For_2_Template, 2, 5, "button", 9, \u0275\u0275componentInstance().trackByUniqueKey, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredList);
  }
}
function IconDropdown_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " No records found. ");
    \u0275\u0275elementEnd();
  }
}
function IconDropdown_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, IconDropdown_Conditional_3_Conditional_1_Template, 2, 0, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275conditionalCreate(3, IconDropdown_Conditional_3_Conditional_3_Template, 3, 0, "div", 6)(4, IconDropdown_Conditional_3_Conditional_4_Template, 2, 0, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.listWrapClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.disableSearch ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredList.length ? 3 : 4);
  }
}
var IconDropdown = class _IconDropdown {
  placeholder = "";
  optionsList = [];
  selectedOption;
  uniqueKey = "_id";
  displayKey1 = "";
  thumbKey = "";
  filterKeys = [];
  disableSameSelect = false;
  enableSameSelectRemove = false;
  disableSearch = false;
  disabled = false;
  listWrapClass = "";
  btnClass = "";
  btnStyle = "";
  usedInModal = false;
  onSelect = new EventEmitter();
  cacheSearchTerms = "";
  filteredList = [];
  ngOnChanges(changes) {
    if (changes["optionsList"] && changes["optionsList"].currentValue) {
      this.filteredList = [...this.optionsList || []];
      if (this.cacheSearchTerms)
        this.onSearchTerms(this.cacheSearchTerms);
    }
    if (changes["selectedOption"] && changes["selectedOption"].currentValue) {
      this.selectedOption = changes["selectedOption"].currentValue;
    }
  }
  get displayText() {
    if (!this.selectedOption)
      return "";
    if (this.displayKey1)
      return this.selectedOption[this.displayKey1] ?? "";
    return this.selectedOption?.toString() ?? "";
  }
  trackByUniqueKey = (index, item) => item[this.uniqueKey] ?? index;
  onSearchTerms(event) {
    this.cacheSearchTerms = event;
    event = event?.trim()?.toLowerCase() ?? "";
    if (this.filterKeys.length > 0) {
      this.filteredList = this.optionsList?.filter((item) => this.filterKeys.some((key) => item?.[key]?.toLowerCase().includes(event))) || [];
    } else if (this.displayKey1) {
      this.filteredList = this.optionsList?.filter((item) => item?.[this.displayKey1]?.toLowerCase().includes(event)) || [];
    } else {
      this.filteredList = this.optionsList?.filter((item) => item?.toLowerCase().includes(event)) || [];
    }
  }
  isSelected(option) {
    if (!this.selectedOption || !option)
      return false;
    if (this.uniqueKey) {
      return this.selectedOption?.[this.uniqueKey] === option?.[this.uniqueKey];
    }
    return this.selectedOption === option;
  }
  onOptionChange(option) {
    if (this.disabled || !option)
      return;
    let isSameSelect = false;
    if (this.selectedOption && !this.disableSameSelect) {
      if (this.uniqueKey && this.selectedOption[this.uniqueKey] === option[this.uniqueKey]) {
        isSameSelect = true;
      } else if (this.selectedOption === option) {
        isSameSelect = true;
      }
    }
    if (isSameSelect && this.enableSameSelectRemove) {
      this.onSelect.emit(null);
      if (this.cacheSearchTerms)
        this.onSearchTerms("");
      return;
    }
    this.onSelect.emit(option);
    if (this.cacheSearchTerms)
      this.onSearchTerms("");
  }
  labelTitle(option) {
    const v = option?.[this.displayKey1];
    return v != null ? String(v) : "";
  }
  static \u0275fac = function IconDropdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconDropdown)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconDropdown, selectors: [["app-icon-dropdown"]], inputs: { placeholder: "placeholder", optionsList: "optionsList", selectedOption: "selectedOption", uniqueKey: "uniqueKey", displayKey1: "displayKey1", thumbKey: "thumbKey", filterKeys: "filterKeys", disableSameSelect: "disableSameSelect", enableSameSelectRemove: "enableSameSelectRemove", disableSearch: "disableSearch", disabled: "disabled", listWrapClass: "listWrapClass", btnClass: "btnClass", btnStyle: "btnStyle", usedInModal: "usedInModal" }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 9, consts: [[1, "dropdown", "icon-dropdown-root"], ["type", "button", 1, "btn", "btn-light", "w-100", "dropdown-toggle", "text-capitalize", "icon-dropdown-trigger", "selected-option", 3, "disabled"], [1, "dropdown-menu", "dropdown-menu-start", "p-0", "icon-dropdown-panel", "shadow", 3, "class"], [1, "dropdown-menu", "dropdown-menu-start", "p-0", "icon-dropdown-panel", "shadow"], [1, "bg-secondary-subtle", "border-bottom", "px-2", "py-2", "z-1"], [1, "icon-dropdown-scroll", "px-2", "py-2"], [1, "icon-dropdown-grid"], [1, "py-4", "text-center", "text-muted", "small"], [3, "onSearch"], ["type", "button", 1, "icon-dropdown-tile", "dropdown-item", 3, "icon-dropdown-tile--selected"], ["type", "button", 1, "icon-dropdown-tile", "dropdown-item", 3, "click"], ["alt", "", "loading", "lazy", "draggable", "false", 1, "icon-dropdown-swatch", 3, "appSrc"]], template: function IconDropdown_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, IconDropdown_Conditional_3_Template, 5, 4, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleMap(ctx.btnStyle);
      \u0275\u0275classMap(ctx.btnClass);
      \u0275\u0275property("disabled", ctx.disabled);
      \u0275\u0275attribute("data-bs-display", ctx.usedInModal ? "static" : null)("data-bs-toggle", ctx.disabled ? "" : "dropdown");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.selectedOption ? ctx.displayText : ctx.placeholder, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.disabled ? 3 : -1);
    }
  }, dependencies: [SearchInput, AppSrc], styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.icon-dropdown-root[_ngcontent-%COMP%] {\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-trigger.selected-option[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 1;\n  -webkit-line-clamp: 1;\n  word-break: break-all;\n  white-space: normal;\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-panel.dropdown-menu[_ngcontent-%COMP%] {\n  width: max(250px + 10vw, 100%);\n  max-width: 400px;\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%] {\n  max-height: min(52vh, 22rem);\n  overflow-y: auto;\n  overflow: auto;\n  overscroll-behavior: contain;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]   .icon-dropdown-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(2.4rem, 1fr));\n  gap: 0.3rem;\n  align-content: start;\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]   .icon-dropdown-grid[_ngcontent-%COMP%]   .icon-dropdown-tile[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  min-width: 0;\n  min-height: 0;\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]   .icon-dropdown-grid[_ngcontent-%COMP%]   .icon-dropdown-tile[_ngcontent-%COMP%]   .icon-dropdown-swatch[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0;\n  object-fit: contain;\n  object-position: center;\n  display: block;\n  border-radius: 0.15rem;\n  pointer-events: none;\n  filter: invert(0.9);\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]   .icon-dropdown-grid[_ngcontent-%COMP%]   .icon-dropdown-tile[_ngcontent-%COMP%]:hover, \n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]   .icon-dropdown-grid[_ngcontent-%COMP%]   .icon-dropdown-tile[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--bs-border-color, #dee2e6);\n  background-color: var(--bs-secondary-bg, #e9ecef);\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]   .icon-dropdown-grid[_ngcontent-%COMP%]   .icon-dropdown-tile.icon-dropdown-tile--selected[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.icon-dropdown-root[_ngcontent-%COMP%]   .icon-dropdown-scroll[_ngcontent-%COMP%]   .icon-dropdown-grid[_ngcontent-%COMP%]   .icon-dropdown-tile.icon-dropdown-tile--selected[_ngcontent-%COMP%]   .icon-dropdown-swatch[_ngcontent-%COMP%] {\n  filter: invert(0);\n}\n/*# sourceMappingURL=icon-dropdown.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconDropdown, [{
    type: Component,
    args: [{ selector: "app-icon-dropdown", imports: [SearchInput, AppSrc], template: `<div class="dropdown icon-dropdown-root">
    <button class="btn btn-light w-100 dropdown-toggle text-capitalize icon-dropdown-trigger selected-option"
        type="button" [class]="btnClass" [attr.data-bs-display]="usedInModal ? 'static' : null"
        [attr.data-bs-toggle]="disabled ? '' : 'dropdown'" [disabled]="disabled" [style]="btnStyle">
        {{ selectedOption ? displayText : placeholder }}
    </button>

    @if (!disabled) {
    <!-- Wider than trigger (color-picker style); not w-100 so the grid can use horizontal space -->
    <div class="dropdown-menu dropdown-menu-start p-0 icon-dropdown-panel shadow" [class]="listWrapClass">
        @if (!disableSearch) {
        <div class="bg-secondary-subtle border-bottom px-2 py-2 z-1">
            <app-search-input (onSearch)="onSearchTerms($event)" />
        </div>
        }
        <div class="icon-dropdown-scroll px-2 py-2">
            @if (filteredList.length) {
            <div class="icon-dropdown-grid">
                @for (option of filteredList; track trackByUniqueKey(i, option); let i = $index) {
                <button type="button" class="icon-dropdown-tile dropdown-item"
                    [class.icon-dropdown-tile--selected]="isSelected(option)" [attr.title]="labelTitle(option)"
                    [attr.aria-label]="labelTitle(option)" (click)="onOptionChange(option)">

                    @if (thumbKey && option[thumbKey]) {
                    <img [appSrc]="option[thumbKey]" alt="" class="icon-dropdown-swatch" loading="lazy"
                        draggable="false">
                    }
                </button>
                }
            </div>
            } @else {
            <div class="py-4 text-center text-muted small">
                No records found.
            </div>
            }
        </div>
    </div>
    }
</div>`, styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n/* src/app/shared/components/icon-dropdown/icon-dropdown.scss */\n:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.icon-dropdown-root {\n}\n.icon-dropdown-root .icon-dropdown-trigger.selected-option {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 1;\n  -webkit-line-clamp: 1;\n  word-break: break-all;\n  white-space: normal;\n}\n.icon-dropdown-root .icon-dropdown-panel.dropdown-menu {\n  width: max(250px + 10vw, 100%);\n  max-width: 400px;\n}\n.icon-dropdown-root .icon-dropdown-scroll {\n  max-height: min(52vh, 22rem);\n  overflow-y: auto;\n  overflow: auto;\n  overscroll-behavior: contain;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.icon-dropdown-root .icon-dropdown-scroll::-webkit-scrollbar {\n  display: none;\n}\n.icon-dropdown-root .icon-dropdown-scroll .icon-dropdown-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(2.4rem, 1fr));\n  gap: 0.3rem;\n  align-content: start;\n}\n.icon-dropdown-root .icon-dropdown-scroll .icon-dropdown-grid .icon-dropdown-tile {\n  width: 100%;\n  aspect-ratio: 1;\n  min-width: 0;\n  min-height: 0;\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n}\n.icon-dropdown-root .icon-dropdown-scroll .icon-dropdown-grid .icon-dropdown-tile .icon-dropdown-swatch {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0;\n  object-fit: contain;\n  object-position: center;\n  display: block;\n  border-radius: 0.15rem;\n  pointer-events: none;\n  filter: invert(0.9);\n}\n.icon-dropdown-root .icon-dropdown-scroll .icon-dropdown-grid .icon-dropdown-tile:hover,\n.icon-dropdown-root .icon-dropdown-scroll .icon-dropdown-grid .icon-dropdown-tile:focus-visible {\n  border-color: var(--bs-border-color, #dee2e6);\n  background-color: var(--bs-secondary-bg, #e9ecef);\n}\n.icon-dropdown-root .icon-dropdown-scroll .icon-dropdown-grid .icon-dropdown-tile.icon-dropdown-tile--selected {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.icon-dropdown-root .icon-dropdown-scroll .icon-dropdown-grid .icon-dropdown-tile.icon-dropdown-tile--selected .icon-dropdown-swatch {\n  filter: invert(0);\n}\n/*# sourceMappingURL=icon-dropdown.css.map */\n'] }]
  }], null, { placeholder: [{
    type: Input,
    args: ["placeholder"]
  }], optionsList: [{
    type: Input,
    args: ["optionsList"]
  }], selectedOption: [{
    type: Input,
    args: ["selectedOption"]
  }], uniqueKey: [{
    type: Input,
    args: ["uniqueKey"]
  }], displayKey1: [{
    type: Input,
    args: ["displayKey1"]
  }], thumbKey: [{
    type: Input,
    args: ["thumbKey"]
  }], filterKeys: [{
    type: Input,
    args: ["filterKeys"]
  }], disableSameSelect: [{
    type: Input,
    args: ["disableSameSelect"]
  }], enableSameSelectRemove: [{
    type: Input,
    args: ["enableSameSelectRemove"]
  }], disableSearch: [{
    type: Input,
    args: ["disableSearch"]
  }], disabled: [{
    type: Input,
    args: ["disabled"]
  }], listWrapClass: [{
    type: Input,
    args: ["listWrapClass"]
  }], btnClass: [{
    type: Input,
    args: ["btnClass"]
  }], btnStyle: [{
    type: Input,
    args: ["btnStyle"]
  }], usedInModal: [{
    type: Input,
    args: ["usedInModal"]
  }], onSelect: [{
    type: Output,
    args: ["onSelect"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconDropdown, { className: "IconDropdown", filePath: "src/app/shared/components/icon-dropdown/icon-dropdown.ts", lineNumber: 13 });
})();

// src/app/pages/resort/upsert-resort/upsert-resort.ts
var _c0 = () => ["key"];
var _forTrack0 = ($index, $item) => $item.id;
function UpsertResort_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Resort name is required.");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Resort name cannot exceed ", ctx_r0.f_title == null ? null : ctx_r0.f_title.errors == null ? null : ctx_r0.f_title.errors["maxlength"] == null ? null : ctx_r0.f_title.errors["maxlength"].requiredLength, " characters. ");
  }
}
function UpsertResort_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, UpsertResort_Conditional_14_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertResort_Conditional_14_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_title == null ? null : ctx_r0.f_title.errors == null ? null : ctx_r0.f_title.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_title == null ? null : ctx_r0.f_title.errors == null ? null : ctx_r0.f_title.errors["maxlength"]) ? 2 : -1);
  }
}
function UpsertResort_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Description is required.");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, UpsertResort_Conditional_21_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_description == null ? null : ctx_r0.f_description.errors == null ? null : ctx_r0.f_description.errors["required"]) ? 1 : -1);
  }
}
function UpsertResort_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Destination is required.");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Destination cannot exceed ", ctx_r0.f_destination == null ? null : ctx_r0.f_destination.errors == null ? null : ctx_r0.f_destination.errors["maxlength"] == null ? null : ctx_r0.f_destination.errors["maxlength"].requiredLength, " characters. ");
  }
}
function UpsertResort_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, UpsertResort_Conditional_28_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertResort_Conditional_28_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_destination == null ? null : ctx_r0.f_destination.errors == null ? null : ctx_r0.f_destination.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_destination == null ? null : ctx_r0.f_destination.errors == null ? null : ctx_r0.f_destination.errors["maxlength"]) ? 2 : -1);
  }
}
function UpsertResort_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Phone is required.");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Phone cannot exceed ", ctx_r0.f_phone == null ? null : ctx_r0.f_phone.errors == null ? null : ctx_r0.f_phone.errors["maxlength"] == null ? null : ctx_r0.f_phone.errors["maxlength"].requiredLength, " characters. ");
  }
}
function UpsertResort_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, UpsertResort_Conditional_36_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertResort_Conditional_36_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_phone == null ? null : ctx_r0.f_phone.errors == null ? null : ctx_r0.f_phone.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_phone == null ? null : ctx_r0.f_phone.errors == null ? null : ctx_r0.f_phone.errors["maxlength"]) ? 2 : -1);
  }
}
function UpsertResort_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_Conditional_43_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_Conditional_43_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Email cannot exceed ", ctx_r0.f_email == null ? null : ctx_r0.f_email.errors == null ? null : ctx_r0.f_email.errors["maxlength"] == null ? null : ctx_r0.f_email.errors["maxlength"].requiredLength, " characters. ");
  }
}
function UpsertResort_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, UpsertResort_Conditional_43_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertResort_Conditional_43_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, UpsertResort_Conditional_43_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_email == null ? null : ctx_r0.f_email.errors == null ? null : ctx_r0.f_email.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_email == null ? null : ctx_r0.f_email.errors == null ? null : ctx_r0.f_email.errors["email"]) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_email == null ? null : ctx_r0.f_email.errors == null ? null : ctx_r0.f_email.errors["maxlength"]) ? 3 : -1);
  }
}
function UpsertResort_For_55_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "img", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const iconUrl_r4 = \u0275\u0275readContextLet(7);
    \u0275\u0275advance();
    \u0275\u0275property("appSrc", iconUrl_r4);
  }
}
function UpsertResort_For_55_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, " Icon is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_For_55_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, " Label is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_For_55_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const \u0275$index_141_r3 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Label cannot exceed ", (tmp_13_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("label")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["maxlength"] == null ? null : tmp_13_0.errors["maxlength"].requiredLength, " characters. ");
  }
}
function UpsertResort_For_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "button", 48);
    \u0275\u0275listener("click", function UpsertResort_For_55_Template_button_click_1_listener() {
      const \u0275$index_141_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFacilityRow(\u0275$index_141_r3));
    });
    \u0275\u0275text(2, " X ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "div", 50);
    \u0275\u0275text(5, " :: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275declareLet(7);
    \u0275\u0275conditionalCreate(8, UpsertResort_For_55_Conditional_8_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53)(10, "span", 54);
    \u0275\u0275text(11, " Icon ");
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "app-icon-dropdown", 55);
    \u0275\u0275listener("onSelect", function UpsertResort_For_55_Template_app_icon_dropdown_onSelect_14_listener($event) {
      const \u0275$index_141_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFacilityIconChange(\u0275$index_141_r3, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, UpsertResort_For_55_Conditional_15_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 57)(17, "label", 54);
    \u0275\u0275text(18, " Label ");
    \u0275\u0275elementStart(19, "span", 9);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 58);
    \u0275\u0275conditionalCreate(22, UpsertResort_For_55_Conditional_22_Template, 2, 0, "span", 56);
    \u0275\u0275conditionalCreate(23, UpsertResort_For_55_Conditional_23_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 57)(25, "label", 54);
    \u0275\u0275text(26, " Value ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_21_0;
    let tmp_22_0;
    const \u0275$index_141_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_141_r3);
    \u0275\u0275advance(7);
    const iconUrl_r5 = \u0275\u0275storeLet((tmp_12_0 = ctx_r0.iconDropdownSelection((tmp_12_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("icon")) == null ? null : tmp_12_0.value)) == null ? null : tmp_12_0.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(iconUrl_r5 ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("optionsList", ctx_r0.iconOptions)("filterKeys", \u0275\u0275pureFunction0(16, _c0))("selectedOption", ctx_r0.iconDropdownSelection((tmp_16_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("icon")) == null ? null : tmp_16_0.value))("usedInModal", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("icon")) == null ? null : tmp_18_0.touched) && ((tmp_18_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("icon")) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors["required"]) ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "facility-label-" + \u0275$index_141_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("id", \u0275\u0275interpolate1("facility-label-", \u0275$index_141_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("label")) == null ? null : tmp_21_0.touched) && ((tmp_21_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("label")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["required"]) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_22_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("label")) == null ? null : tmp_22_0.touched) && ((tmp_22_0 = ctx_r0.f_facilities.at(\u0275$index_141_r3).get("label")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors["maxlength"]) ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "facility-value-" + \u0275$index_141_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("facility-value-", \u0275$index_141_r3));
  }
}
function UpsertResort_For_67_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "img", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const statIconUrl_r8 = \u0275\u0275readContextLet(7);
    \u0275\u0275advance();
    \u0275\u0275property("appSrc", statIconUrl_r8);
  }
}
function UpsertResort_For_67_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, " Icon is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_For_67_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, " Label is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_For_67_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const \u0275$index_217_r7 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Label cannot exceed ", (tmp_13_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("label")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["maxlength"] == null ? null : tmp_13_0.errors["maxlength"].requiredLength, " characters. ");
  }
}
function UpsertResort_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "button", 48);
    \u0275\u0275listener("click", function UpsertResort_For_67_Template_button_click_1_listener() {
      const \u0275$index_217_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeStatRow(\u0275$index_217_r7));
    });
    \u0275\u0275text(2, " X ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "div", 50);
    \u0275\u0275text(5, " :: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275declareLet(7);
    \u0275\u0275conditionalCreate(8, UpsertResort_For_67_Conditional_8_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53)(10, "span", 54);
    \u0275\u0275text(11, " Icon ");
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "app-icon-dropdown", 61);
    \u0275\u0275listener("onSelect", function UpsertResort_For_67_Template_app_icon_dropdown_onSelect_14_listener($event) {
      const \u0275$index_217_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onStatIconChange(\u0275$index_217_r7, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, UpsertResort_For_67_Conditional_15_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 57)(17, "label", 54);
    \u0275\u0275text(18, " Label ");
    \u0275\u0275elementStart(19, "span", 9);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 58);
    \u0275\u0275conditionalCreate(22, UpsertResort_For_67_Conditional_22_Template, 2, 0, "span", 56);
    \u0275\u0275conditionalCreate(23, UpsertResort_For_67_Conditional_23_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 57)(25, "label", 54);
    \u0275\u0275text(26, " Value ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    let tmp_18_0;
    let tmp_21_0;
    let tmp_22_0;
    const \u0275$index_217_r7 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_217_r7);
    \u0275\u0275advance(7);
    const statIconUrl_r9 = \u0275\u0275storeLet((tmp_12_0 = ctx_r0.iconDropdownSelection((tmp_12_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("icon")) == null ? null : tmp_12_0.value)) == null ? null : tmp_12_0.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(statIconUrl_r9 ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("selectedOption", ctx_r0.iconDropdownSelection((tmp_14_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("icon")) == null ? null : tmp_14_0.value))("optionsList", ctx_r0.iconOptions)("filterKeys", \u0275\u0275pureFunction0(16, _c0))("usedInModal", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("icon")) == null ? null : tmp_18_0.touched) && ((tmp_18_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("icon")) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors["required"]) ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "stat-label-" + \u0275$index_217_r7);
    \u0275\u0275advance(4);
    \u0275\u0275property("id", \u0275\u0275interpolate1("stat-label-", \u0275$index_217_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("label")) == null ? null : tmp_21_0.touched) && ((tmp_21_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("label")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["required"]) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_22_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("label")) == null ? null : tmp_22_0.touched) && ((tmp_22_0 = ctx_r0.f_stats.at(\u0275$index_217_r7).get("label")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors["maxlength"]) ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "stat-value-" + \u0275$index_217_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("stat-value-", \u0275$index_217_r7));
  }
}
function UpsertResort_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "iframe", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 64);
    \u0275\u0275text(3, " Open in new tab ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.mapUrlPreviewUrl, \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.getMapUrlViewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function UpsertResort_For_99_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 67);
  }
}
function UpsertResort_For_99_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 68);
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("appSrc", row_r11.url);
    \u0275\u0275attribute("alt", row_r11.alt || "Resort image");
  }
}
function UpsertResort_For_99_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function UpsertResort_For_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 65)(2, "div", 66);
    \u0275\u0275conditionalCreate(3, UpsertResort_For_99_Conditional_3_Template, 1, 0, "div", 67)(4, UpsertResort_For_99_Conditional_4_Template, 1, 2, "img", 68)(5, UpsertResort_For_99_Conditional_5_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 69)(7, "input", 70);
    \u0275\u0275listener("input", function UpsertResort_For_99_Template_input_input_7_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAltInput(row_r11, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 71);
    \u0275\u0275listener("click", function UpsertResort_For_99_Template_button_click_8_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeImage(row_r11));
    });
    \u0275\u0275text(9, " X ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isRowUploading(row_r11) ? 3 : row_r11.url ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", row_r11.alt)("disabled", !row_r11.url || ctx_r0.isRowUploading(row_r11));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isRowUploading(row_r11));
  }
}
function UpsertResort_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Save changes" : "Create", " ");
  }
}
function UpsertResort_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 72);
    \u0275\u0275elementStart(1, "span", 73);
    \u0275\u0275text(2, "\xA0 Please wait\u2026");
    \u0275\u0275elementEnd();
  }
}
var RESORT_MAX_IMAGES = 10;
var UpsertResort = class _UpsertResort {
  _fb = inject(FormBuilder);
  _coreService = inject(CoreFacadeService);
  _apiFs = inject(ApiFacadeService);
  _sanitizer = inject(DomSanitizer);
  data = null;
  upsert = new EventEmitter();
  isEditMode = false;
  form = this._fb.group({
    title: [null, [Validators.required, Validators.maxLength(200)]],
    description: [null, [Validators.required, Validators.maxLength(2e3)]],
    destination: [null, [Validators.required, Validators.maxLength(1e3)]],
    phone: [null, [Validators.required, Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email, Validators.maxLength(320)]],
    location: this._fb.group({
      mapUrl: [""],
      address: [""]
    }),
    facilities: this._fb.array([]),
    stats: this._fb.array([])
  });
  maxImages = RESORT_MAX_IMAGES;
  displayedImages = [];
  nextRowId = 1;
  /** In edit, server urls removed before save */
  delImageUrls = [];
  uploadingRowIds = /* @__PURE__ */ new Set();
  isReqAlive = false;
  get iconOptions() {
    return this._apiFs.resort.iconList;
  }
  ngOnChanges(changes) {
    if (changes["data"]) {
      this.delImageUrls = [];
      this.displayedImages = [];
      this.f_facilities.clear();
      this.f_stats.clear();
      if (this.data) {
        this.isEditMode = true;
        this.form.patchValue({
          title: this.data.title,
          description: this.data.description,
          destination: this.data.destination,
          phone: this.data.phone,
          email: this.data.email
        });
        const loc = this.data.location;
        this.f_location.patchValue({
          mapUrl: loc?.mapUrl ?? "",
          address: loc?.address ?? ""
        });
        for (const item of this.data.facilities ?? []) {
          this.f_facilities.push(this._createFacilityStatRow(item?.icon ?? "", item?.label ?? "", item?.value ?? ""));
        }
        for (const item of this.data.stats ?? []) {
          this.f_stats.push(this._createFacilityStatRow(item?.icon ?? "", item?.label ?? "", item?.value ?? ""));
        }
        this.displayedImages = [];
        const imgs = this.data.images;
        if (Array.isArray(imgs)) {
          for (const im of imgs) {
            if (im?.url) {
              this.displayedImages.push({
                id: this.nextRowId++,
                url: im.url,
                alt: typeof im.alt === "string" ? im.alt : "",
                isNew: false
              });
            }
          }
        }
      } else {
        this.isEditMode = false;
        this.form.reset();
        this.f_location.patchValue({ mapUrl: "", address: "" });
        this.displayedImages = [];
      }
    }
  }
  ngOnInit() {
    this.loadIcons();
  }
  loadIcons() {
    if (this._apiFs.resort.iconsObj.size > 0)
      return;
    this._apiFs.resort.optionsData({ iconsMap: "iconsMap" }).subscribe({
      next: (res) => {
        if (res.code === "OK" && res.data) {
          this._apiFs.resort.iconsObj = res.data?.iconsMap ?? {};
          console.log("Icons loaded", this._apiFs.resort.iconsObj);
          console.log("Icons list", this._apiFs.resort.iconList);
        }
      },
      error: (err) => {
        console.error("Error loading icons", err);
      }
    });
  }
  get f_title() {
    return this.form.get("title");
  }
  get f_description() {
    return this.form.get("description");
  }
  get f_destination() {
    return this.form.get("destination");
  }
  get f_phone() {
    return this.form.get("phone");
  }
  get f_email() {
    return this.form.get("email");
  }
  get f_location() {
    return this.form.get("location");
  }
  get f_facilities() {
    return this.form.get("facilities");
  }
  get f_stats() {
    return this.form.get("stats");
  }
  iconDropdownSelection(iconKey) {
    const k = (iconKey ?? "").trim();
    if (!k)
      return null;
    const url = this._apiFs.resort.iconsObj.get(k);
    if (url)
      return { key: k, value: url };
    return { key: k, value: k };
  }
  /** Extracts the actual URL from map URL value (handles pasted iframe HTML). */
  getResolvedMapUrl() {
    const raw = this.f_location.get("mapUrl")?.value?.trim() ?? "";
    if (!raw)
      return "";
    const iframeSrcMatch = raw.match(/src\s*=\s*["']([^"']+)["']/i);
    return iframeSrcMatch ? iframeSrcMatch[1].trim() : raw;
  }
  /** Sanitized map URL for iframe preview. */
  get mapUrlPreviewUrl() {
    const url = this.getResolvedMapUrl();
    if (!url)
      return null;
    try {
      return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    } catch {
      return null;
    }
  }
  /** URL for "Open in new tab": converts Google embed URL to viewable maps URL. */
  getMapUrlViewUrl() {
    const url = this.getResolvedMapUrl();
    if (!url)
      return "";
    if (url.includes("google.com/maps/embed")) {
      return url.replace(/\/maps\/embed\?/, "/maps?");
    }
    return url;
  }
  /** Normalize map URL on blur: if pasted iframe HTML, store only the embed URL. */
  onMapUrlBlur() {
    const url = this.getResolvedMapUrl();
    const control = this.f_location.get("mapUrl");
    if (control && url && url !== control.value?.trim()) {
      control.patchValue(url, { emitEvent: false });
    }
  }
  _createFacilityStatRow(icon = "", label = "", value = "") {
    return this._fb.group({
      icon: [icon, [Validators.required, Validators.maxLength(200)]],
      label: [label, [Validators.required, Validators.maxLength(200)]],
      value: [value, [Validators.maxLength(200)]]
    });
  }
  addFacilityRow() {
    this.f_facilities.push(this._createFacilityStatRow());
  }
  addStatRow() {
    this.f_stats.push(this._createFacilityStatRow());
  }
  removeFacilityRow(index) {
    this.f_facilities.removeAt(index);
  }
  removeStatRow(index) {
    this.f_stats.removeAt(index);
  }
  onFacilitiesDrop(event) {
    moveItemInArray(this.f_facilities.controls, event.previousIndex, event.currentIndex);
    this.f_facilities.updateValueAndValidity();
  }
  onStatsDrop(event) {
    moveItemInArray(this.f_stats.controls, event.previousIndex, event.currentIndex);
    this.f_stats.updateValueAndValidity();
  }
  onFacilityIconChange(index, option) {
    this.f_facilities.at(index).get("icon")?.setValue(option?.key ?? "");
  }
  onStatIconChange(index, option) {
    this.f_stats.at(index).get("icon")?.setValue(option?.key ?? "");
  }
  _serializeFacilityStatsRows(rows) {
    return rows.controls.map((g) => {
      const v = g.value;
      return {
        icon: v.icon?.trim() ?? "",
        label: v.label?.trim() ?? "",
        value: v.value?.trim() ?? ""
      };
    });
  }
  onPickFiles(event) {
    const input = event.target;
    const files = input.files;
    if (!files?.length)
      return;
    const cap = this.maxImages - this.displayedImages.length;
    const toAdd = Array.from(files).slice(0, Math.max(0, cap));
    for (const file of toAdd) {
      const id = this.nextRowId++;
      this.displayedImages.push({ id, url: "", alt: "", isNew: true });
      this.uploadByRowId(id, file);
    }
    input.value = "";
  }
  uploadByRowId(rowId, file) {
    this.uploadingRowIds.add(rowId);
    const formData = new FormData();
    formData.append("file", file);
    this._apiFs.resort.uploadThumb(formData).subscribe({
      next: (res) => {
        this.uploadingRowIds.delete(rowId);
        const row = this.displayedImages.find((r) => r.id === rowId);
        if (res.code === "OK" && res.data?.location && row) {
          row.url = res.data.location;
        } else {
          this._dropByRowId(rowId);
        }
      },
      error: (err) => {
        this.uploadingRowIds.delete(rowId);
        this._dropByRowId(rowId);
        const msg = err?.error?.message || "Upload failed. Please try again.";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  _dropByRowId(rowId) {
    this.displayedImages = this.displayedImages.filter((r) => r.id !== rowId);
  }
  isRowUploading(row) {
    return this.uploadingRowIds.has(row.id);
  }
  onAltInput(row, event) {
    const t = event.target.value;
    row.alt = t.length > 255 ? t.slice(0, 255) : t;
  }
  removeImage(row) {
    if (this.isEditMode && !row.isNew) {
      this.delImageUrls.push(row.url);
    }
    this.displayedImages = this.displayedImages.filter((r) => r.id !== row.id);
  }
  onSubmit() {
    if (this.isReqAlive)
      return;
    if (this.uploadingRowIds.size > 0) {
      this._coreService.utils.showToaster(EToasterType.Warning, "Please wait for uploads to finish");
      return;
    }
    const withUrl = this.displayedImages.filter((x) => x.url);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (withUrl.length < 1) {
      this._coreService.utils.showToaster(EToasterType.Warning, "Add at least one image");
      return;
    }
    const form = this.form.value;
    this.isReqAlive = true;
    const facilities = this._serializeFacilityStatsRows(this.f_facilities);
    const stats = this._serializeFacilityStatsRows(this.f_stats);
    const locationPayload = {
      mapUrl: this.getResolvedMapUrl(),
      address: form.location?.address?.trim() ?? ""
    };
    if (this.isEditMode) {
      const body = {
        title: form.title?.trim(),
        description: form.description?.trim(),
        destination: form.destination?.trim(),
        phone: form.phone?.trim(),
        email: form.email?.trim(),
        facilities,
        stats,
        location: locationPayload
      };
      const newImgs = withUrl.filter((x) => x.isNew).map((x) => ({ url: x.url, alt: (x.alt ?? "").trim() }));
      if (newImgs.length) {
        body["newImages"] = newImgs;
      }
      if (this.delImageUrls.length) {
        body["delImages"] = [...this.delImageUrls];
      }
      const origByUrl = new Map((this.data.images ?? []).filter((im) => im?.url).map((im) => [im.url, typeof im.alt === "string" ? im.alt : ""]));
      const updateImageAlts = withUrl.filter((x) => !x.isNew && x.url).filter((x) => (origByUrl.get(x.url) ?? "").trim() !== (x.alt ?? "").trim()).map((x) => ({ url: x.url, alt: (x.alt ?? "").trim() }));
      if (updateImageAlts.length) {
        body["updateImages"] = updateImageAlts;
      }
      this._apiFs.resort.update(this.data._id, body).subscribe({
        next: (res) => {
          this.isReqAlive = false;
          if (res.code === "UPDATED") {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, "Resort updated successfully");
            this.upsert.emit(res.data);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || "Something went wrong. Please try again later";
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    } else {
      const body = {
        title: form.title?.trim(),
        description: form.description?.trim(),
        destination: form.destination?.trim(),
        phone: form.phone?.trim(),
        email: form.email?.trim(),
        images: withUrl.map((x) => ({ url: x.url, alt: (x.alt ?? "").trim() })),
        facilities,
        stats,
        location: locationPayload
      };
      this._apiFs.resort.create(body).subscribe({
        next: (res) => {
          this.isReqAlive = false;
          if (res.code === "CREATED") {
            this.form.reset();
            this.displayedImages = [];
            this._coreService.utils.showToaster(EToasterType.Success, "Resort created successfully");
            this.upsert.emit({ refreshList: true });
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || "Something went wrong. Please try again later";
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    }
  }
  onCloseOrCancel() {
    this.upsert.emit(null);
  }
  static \u0275fac = function UpsertResort_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpsertResort)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpsertResort, selectors: [["app-upsert-resort"]], inputs: { data: "data" }, outputs: { upsert: "upsert" }, features: [\u0275\u0275NgOnChangesFeature], decls: 106, vars: 14, consts: [[1, "modal", "d-block"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable", "modal-lg"], [1, "modal-content", "shadow-lg", 3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title", "fs-5", "text-capitalize"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["for", "title", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Name", 1, "form-control"], [1, "invalid-feedback", "d-block"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Description", 1, "form-control"], ["for", "destination", 1, "form-label"], ["id", "destination", "formControlName", "destination", "rows", "2", "placeholder", "Destination", 1, "form-control"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "phone", 1, "form-label"], ["type", "text", "id", "phone", "formControlName", "phone", "placeholder", "Phone number", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Email address", 1, "form-control"], [1, "mt-3", "mb-2", "d-flex", "justify-content-center", "align-items-center"], [1, "w-100"], [1, "mx-3", "fw-bold", "text-nowrap", "text-muted", "fs-6"], [1, "d-flex", "justify-content-end", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["formArrayName", "facilities", "cdkDropList", "", "cdkDropListOrientation", "mixed", 1, "d-flex", "flex-column", "gap-2", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "border", "rounded", "p-2", "bg-light", "position-relative", 3, "formGroupName"], ["formArrayName", "stats", "cdkDropList", "", "cdkDropListOrientation", "mixed", 1, "d-flex", "flex-column", "gap-2", 3, "cdkDropListDropped"], [1, "row", "mb-3"], ["formGroupName", "location", 1, "col-xl-6", "row", "align-content-start", "mb-3"], [1, "col-12", "mb-3"], ["for", "resort-location-address", 1, "form-label"], ["type", "text", "id", "resort-location-address", "formControlName", "address", "placeholder", "Address shown with the map", 1, "form-control"], ["for", "resort-location-mapUrl", 1, "form-label"], ["type", "text", "id", "resort-location-mapUrl", "formControlName", "mapUrl", "placeholder", "Paste map URL or embed iframe code", 1, "form-control", 3, "blur"], [1, "col-xl-6"], [1, "form-label", "text-muted", "small"], [1, "mb-2"], [1, "form-label"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-2"], ["type", "file", "accept", "image/*", "multiple", "", 1, "form-control", 3, "change", "disabled"], [1, "text-muted", "small"], [1, "col-12", "col-md-6", "mb-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "me-3", 3, "click"], [1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", 3, "disabled"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-sm", "btn-outline-danger", "position-absolute", "lh-md", "top-0", "end-0", "m-1", "py-0", "px-2", 3, "click"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-start", "pe-5"], ["cdkDragHandle", "", "title", "Drag to reorder", 1, "lh-md", "user-select-none", "text-muted", "cursor-grab"], [1, "flex-shrink-0"], [1, "resort-icon-thumb-well"], [1, "flex-grow-1", 2, "min-width", "10rem"], [1, "form-label", "small", "mb-1", "d-block"], ["placeholder", "Select icon", "uniqueKey", "key", "displayKey1", "key", "thumbKey", "value", "btnClass", "btn-sm", 3, "onSelect", "optionsList", "filterKeys", "selectedOption", "usedInModal"], [1, "invalid-feedback", "d-block", "small"], [1, "flex-grow-1", 2, "min-width", "8rem"], ["type", "text", "formControlName", "label", "placeholder", "Label", 1, "form-control", "form-control-sm", 3, "id"], ["type", "text", "formControlName", "value", "placeholder", "Value", 1, "form-control", "form-control-sm", 3, "id"], ["alt", "", "draggable", "false", 3, "appSrc"], ["placeholder", "Select icon", "uniqueKey", "key", "displayKey1", "key", "thumbKey", "value", "btnClass", "btn-sm", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "usedInModal"], [1, "border", "rounded", "overflow-hidden", "bg-light"], ["title", "Map preview", "loading", "lazy", "allowfullscreen", "", "referrerpolicy", "no-referrer-when-downgrade", 1, "map-preview-iframe", 3, "src"], ["target", "_blank", "rel", "noopener noreferrer", 1, "small", "text-primary", "mt-1", "d-inline-block", 3, "href"], [1, "border", "rounded", "p-2", "bg-light", "position-relative"], [1, "flex-shrink-0", "border", "rounded", "bg-white", "p-1", "mx-auto", "mb-2", 2, "max-width", "250px", "aspect-ratio", "16/9"], [1, "spinner-border", "spinner-border-sm", "text-primary"], ["draggable", "false", "loading", "lazy", 1, "rounded", "d-block", "w-100", "h-100", "img-cover", 3, "appSrc"], [1, "flex-grow-1", "d-flex", "align-items-center", "gap-2"], ["type", "text", "maxlength", "255", "placeholder", "Short description (accessibility)", 1, "form-control", "form-control-sm", 3, "input", "value", "disabled"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-sm", "btn-outline-danger", "position-absolute", "lh-md", "top-0", "end-0", "m-1", "py-0", "px-2", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm"], ["role", "status"]], template: function UpsertResort_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "form", 2);
      \u0275\u0275listener("ngSubmit", function UpsertResort_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function UpsertResort_Template_button_click_6_listener() {
        return ctx.onCloseOrCancel();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "label", 8);
      \u0275\u0275text(10, " Resort name ");
      \u0275\u0275elementStart(11, "span", 9);
      \u0275\u0275text(12, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "input", 10);
      \u0275\u0275conditionalCreate(14, UpsertResort_Conditional_14_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 12);
      \u0275\u0275text(17, " Description ");
      \u0275\u0275elementStart(18, "span", 9);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "textarea", 13);
      \u0275\u0275conditionalCreate(21, UpsertResort_Conditional_21_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7)(23, "label", 14);
      \u0275\u0275text(24, " Destination ");
      \u0275\u0275elementStart(25, "span", 9);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "textarea", 15);
      \u0275\u0275conditionalCreate(28, UpsertResort_Conditional_28_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "label", 18);
      \u0275\u0275text(32, " Phone ");
      \u0275\u0275elementStart(33, "span", 9);
      \u0275\u0275text(34, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "input", 19);
      \u0275\u0275conditionalCreate(36, UpsertResort_Conditional_36_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 17)(38, "label", 20);
      \u0275\u0275text(39, " Email ");
      \u0275\u0275elementStart(40, "span", 9);
      \u0275\u0275text(41, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "input", 21);
      \u0275\u0275conditionalCreate(43, UpsertResort_Conditional_43_Template, 4, 3, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 7)(45, "div", 22);
      \u0275\u0275element(46, "hr", 23);
      \u0275\u0275elementStart(47, "span", 24);
      \u0275\u0275text(48, " Facilities ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "hr", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 25)(51, "button", 26);
      \u0275\u0275listener("click", function UpsertResort_Template_button_click_51_listener() {
        return ctx.addFacilityRow();
      });
      \u0275\u0275text(52, " Add facility ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 27);
      \u0275\u0275listener("cdkDropListDropped", function UpsertResort_Template_div_cdkDropListDropped_53_listener($event) {
        return ctx.onFacilitiesDrop($event);
      });
      \u0275\u0275repeaterCreate(54, UpsertResort_For_55_Template, 28, 17, "div", 28, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 7)(57, "div", 22);
      \u0275\u0275element(58, "hr", 23);
      \u0275\u0275elementStart(59, "span", 24);
      \u0275\u0275text(60, " Stats ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "hr", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 25)(63, "button", 26);
      \u0275\u0275listener("click", function UpsertResort_Template_button_click_63_listener() {
        return ctx.addStatRow();
      });
      \u0275\u0275text(64, " Add stat ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 29);
      \u0275\u0275listener("cdkDropListDropped", function UpsertResort_Template_div_cdkDropListDropped_65_listener($event) {
        return ctx.onStatsDrop($event);
      });
      \u0275\u0275repeaterCreate(66, UpsertResort_For_67_Template, 28, 17, "div", 28, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 30)(69, "div", 22);
      \u0275\u0275element(70, "hr", 23);
      \u0275\u0275elementStart(71, "span", 24);
      \u0275\u0275text(72, " Location map ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "hr", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 31)(75, "div", 32)(76, "label", 33);
      \u0275\u0275text(77, " Address ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 32)(80, "label", 35);
      \u0275\u0275text(81, " Map embed URL ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "input", 36);
      \u0275\u0275listener("blur", function UpsertResort_Template_input_blur_82_listener() {
        return ctx.onMapUrlBlur();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 37)(84, "div", 32)(85, "label", 38);
      \u0275\u0275text(86, " Map preview ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(87, UpsertResort_Conditional_87_Template, 4, 2);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 39)(89, "label", 40);
      \u0275\u0275text(90, " Images ");
      \u0275\u0275elementStart(91, "span", 9);
      \u0275\u0275text(92, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 41)(94, "input", 42);
      \u0275\u0275listener("change", function UpsertResort_Template_input_change_94_listener($event) {
        return ctx.onPickFiles($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span", 43);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 16);
      \u0275\u0275repeaterCreate(98, UpsertResort_For_99_Template, 10, 4, "div", 44, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 45)(101, "button", 46);
      \u0275\u0275listener("click", function UpsertResort_Template_button_click_101_listener() {
        return ctx.onCloseOrCancel();
      });
      \u0275\u0275text(102, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "button", 47);
      \u0275\u0275conditionalCreate(104, UpsertResort_Conditional_104_Template, 2, 1, "span")(105, UpsertResort_Conditional_105_Template, 3, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit" : "Create", " Resort ");
      \u0275\u0275advance(9);
      \u0275\u0275conditional((ctx.f_title == null ? null : ctx.f_title.touched) && (ctx.f_title == null ? null : ctx.f_title.errors) ? 14 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_description == null ? null : ctx.f_description.touched) && (ctx.f_description == null ? null : ctx.f_description.errors) ? 21 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_destination == null ? null : ctx.f_destination.touched) && (ctx.f_destination == null ? null : ctx.f_destination.errors) ? 28 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional((ctx.f_phone == null ? null : ctx.f_phone.touched) && (ctx.f_phone == null ? null : ctx.f_phone.errors) ? 36 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_email == null ? null : ctx.f_email.touched) && (ctx.f_email == null ? null : ctx.f_email.errors) ? 43 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.f_facilities.controls);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.f_stats.controls);
      \u0275\u0275advance(21);
      \u0275\u0275conditional(ctx.mapUrlPreviewUrl && ctx.getResolvedMapUrl() ? 87 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.displayedImages.length >= ctx.maxImages);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Up to ", ctx.maxImages);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.displayedImages);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("disabled", ctx.isReqAlive);
      \u0275\u0275property("disabled", ctx.isReqAlive);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isReqAlive ? 104 : 105);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FormArrayName,
    AppSrc,
    IconDropdown,
    CdkDrag,
    CdkDropList,
    CdkDragHandle
  ], styles: ['@charset "UTF-8";\n\n\n\n.map-preview-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 280px;\n  border: 0;\n  display: block;\n}\n.resort-icon-thumb-well[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  aspect-ratio: 1;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.8);\n  background-color: var(--bs-secondary-bg, #e9ecef);\n  border: 1px solid #dee2e6;\n}\n.resort-icon-thumb-well[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 2rem;\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: contain;\n  object-position: center;\n  display: block;\n  filter: invert(0.8);\n}\n/*# sourceMappingURL=upsert-resort.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpsertResort, [{
    type: Component,
    args: [{ selector: "app-upsert-resort", imports: [
      ReactiveFormsModule,
      AppSrc,
      IconDropdown,
      CdkDrag,
      CdkDropList,
      CdkDragHandle
    ], template: `<div class="modal d-block">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <form class="modal-content shadow-lg" [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-capitalize">
                    {{isEditMode ? 'Edit' : 'Create'}} Resort
                </h1>
                <button type="button" class="btn-close" (click)="onCloseOrCancel()"></button>
            </div>

            <div class="modal-body">
                <div class="mb-3">
                    <label for="title" class="form-label">
                        Resort name <span class="text-danger">*</span>
                    </label>
                    <input type="text" id="title" formControlName="title" class="form-control" placeholder="Name">
                    @if(f_title?.touched && f_title?.errors){
                    <div class="invalid-feedback d-block">
                        @if(f_title?.errors?.['required']){
                        <span>Resort name is required.</span>
                        }
                        @if(f_title?.errors?.['maxlength']){
                        <span>
                            Resort name cannot exceed {{f_title?.errors?.['maxlength']?.requiredLength}} characters.
                        </span>
                        }
                    </div>
                    }
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">
                        Description <span class="text-danger">*</span>
                    </label>
                    <textarea id="description" formControlName="description" class="form-control" rows="3"
                        placeholder="Description"></textarea>
                    @if(f_description?.touched && f_description?.errors){
                    <div class="invalid-feedback d-block">
                        @if(f_description?.errors?.['required']){ <span>Description is required.</span> }
                    </div>
                    }
                </div>

                <div class="mb-3">
                    <label for="destination" class="form-label">
                        Destination <span class="text-danger">*</span>
                    </label>
                    <textarea id="destination" formControlName="destination" class="form-control" rows="2"
                        placeholder="Destination"></textarea>
                    @if(f_destination?.touched && f_destination?.errors){
                    <div class="invalid-feedback d-block">
                        @if(f_destination?.errors?.['required']){ <span>Destination is required.</span> }
                        @if(f_destination?.errors?.['maxlength']){
                        <span>
                            Destination cannot exceed {{f_destination?.errors?.['maxlength']?.requiredLength}}
                            characters.
                        </span>
                        }
                    </div>
                    }
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="phone" class="form-label">
                            Phone <span class="text-danger">*</span>
                        </label>
                        <input type="text" id="phone" formControlName="phone" class="form-control"
                            placeholder="Phone number">
                        @if(f_phone?.touched && f_phone?.errors){
                        <div class="invalid-feedback d-block">
                            @if(f_phone?.errors?.['required']){ <span>Phone is required.</span> }
                            @if(f_phone?.errors?.['maxlength']){
                            <span>
                                Phone cannot exceed {{f_phone?.errors?.['maxlength']?.requiredLength}} characters.
                            </span>
                            }
                        </div>
                        }
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="email" class="form-label">
                            Email <span class="text-danger">*</span>
                        </label>
                        <input type="email" id="email" formControlName="email" class="form-control"
                            placeholder="Email address">
                        @if(f_email?.touched && f_email?.errors){
                        <div class="invalid-feedback d-block">
                            @if(f_email?.errors?.['required']){ <span>Email is required.</span> }
                            @if(f_email?.errors?.['email']){ <span>Please enter a valid email address.</span> }
                            @if(f_email?.errors?.['maxlength']){
                            <span>
                                Email cannot exceed {{f_email?.errors?.['maxlength']?.requiredLength}} characters.
                            </span>
                            }
                        </div>
                        }
                    </div>
                </div>

                <!-- Facilities -->
                <div class="mb-3">
                    <div class="mt-3 mb-2 d-flex justify-content-center align-items-center">
                        <hr class="w-100">
                        <span class="mx-3 fw-bold text-nowrap text-muted fs-6">
                            Facilities
                        </span>
                        <hr class="w-100">
                    </div>
                    <div class="d-flex justify-content-end mb-2">
                        <button type="button" class="btn btn-sm btn-outline-primary" (click)="addFacilityRow()">
                            Add facility
                        </button>
                    </div>
                    <div formArrayName="facilities" cdkDropList cdkDropListOrientation="mixed"
                        (cdkDropListDropped)="onFacilitiesDrop($event)" class="d-flex flex-column gap-2">
                        @for (_ of f_facilities.controls; track $index; let i = $index) {
                        <div [formGroupName]="i" class="border rounded p-2 bg-light position-relative" cdkDrag>
                            <button type="button" (click)="removeFacilityRow(i)" tabindex="-1"
                                class="btn btn-sm btn-outline-danger position-absolute lh-md top-0 end-0 m-1 py-0 px-2">
                                X
                            </button>
                            <div class="d-flex flex-wrap gap-2 align-items-start pe-5">
                                <div cdkDragHandle class="lh-md user-select-none text-muted cursor-grab"
                                    title="Drag to reorder">
                                    ::
                                </div>
                                <div class="flex-shrink-0">
                                    @let iconUrl =
                                    iconDropdownSelection(f_facilities.at(i).get('icon')?.value)?.value;
                                    @if (iconUrl) {
                                    <div class="resort-icon-thumb-well">
                                        <img [appSrc]="iconUrl" alt="" draggable="false">
                                    </div>
                                    }
                                </div>
                                <div class="flex-grow-1" style="min-width: 10rem;">
                                    <span class="form-label small mb-1 d-block">
                                        Icon <span class="text-danger">*</span>
                                    </span>
                                    <app-icon-dropdown [optionsList]="iconOptions" placeholder="Select icon"
                                        uniqueKey="key" displayKey1="key" thumbKey="value" [filterKeys]="['key']"
                                        [selectedOption]="iconDropdownSelection(f_facilities.at(i).get('icon')?.value)"
                                        [usedInModal]="true" btnClass="btn-sm"
                                        (onSelect)="onFacilityIconChange(i, $event)" />

                                    @if (f_facilities.at(i).get('icon')?.touched &&
                                    f_facilities.at(i).get('icon')?.errors?.['required']) {
                                    <span class="invalid-feedback d-block small">
                                        Icon is required.
                                    </span>
                                    }
                                </div>
                                <div class="flex-grow-1" style="min-width: 8rem;">
                                    <label class="form-label small mb-1 d-block" [attr.for]="'facility-label-'+i">
                                        Label <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control form-control-sm" id="facility-label-{{i}}"
                                        formControlName="label" placeholder="Label">
                                    @if (f_facilities.at(i).get('label')?.touched &&
                                    f_facilities.at(i).get('label')?.errors?.['required']) {
                                    <span class="invalid-feedback d-block small">
                                        Label is required.
                                    </span>
                                    }
                                    @if (f_facilities.at(i).get('label')?.touched &&
                                    f_facilities.at(i).get('label')?.errors?.['maxlength']) {
                                    <span class="invalid-feedback d-block small">
                                        Label cannot exceed
                                        {{f_facilities.at(i).get('label')?.errors?.['maxlength']?.requiredLength}}
                                        characters.
                                    </span>
                                    }
                                </div>
                                <div class="flex-grow-1" style="min-width: 8rem;">
                                    <label class="form-label small mb-1 d-block" [attr.for]="'facility-value-'+i">
                                        Value
                                    </label>
                                    <input type="text" class="form-control form-control-sm" id="facility-value-{{i}}"
                                        formControlName="value" placeholder="Value">
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>

                <!-- Stats -->
                <div class="mb-3">
                    <div class="mt-3 mb-2 d-flex justify-content-center align-items-center">
                        <hr class="w-100">
                        <span class="mx-3 fw-bold text-nowrap text-muted fs-6">
                            Stats
                        </span>
                        <hr class="w-100">
                    </div>
                    <div class="d-flex justify-content-end mb-2">
                        <button type="button" class="btn btn-sm btn-outline-primary" (click)="addStatRow()">
                            Add stat
                        </button>
                    </div>
                    <div formArrayName="stats" cdkDropList cdkDropListOrientation="mixed"
                        (cdkDropListDropped)="onStatsDrop($event)" class="d-flex flex-column gap-2">
                        @for (_ of f_stats.controls; track $index; let i = $index) {
                        <div [formGroupName]="i" class="border rounded p-2 bg-light position-relative" cdkDrag>
                            <button type="button" tabindex="-1" (click)="removeStatRow(i)"
                                class="btn btn-sm btn-outline-danger position-absolute lh-md top-0 end-0 m-1 py-0 px-2">
                                X
                            </button>
                            <div class="d-flex flex-wrap gap-2 align-items-start pe-5">
                                <div cdkDragHandle class="lh-md user-select-none text-muted cursor-grab"
                                    title="Drag to reorder">
                                    ::
                                </div>
                                <div class="flex-shrink-0">
                                    @let statIconUrl =
                                    iconDropdownSelection(f_stats.at(i).get('icon')?.value)?.value;
                                    @if (statIconUrl) {
                                    <div class="resort-icon-thumb-well">
                                        <img [appSrc]="statIconUrl" alt="" draggable="false">
                                    </div>
                                    }
                                </div>
                                <div class="flex-grow-1" style="min-width: 10rem;">
                                    <span class="form-label small mb-1 d-block">
                                        Icon <span class="text-danger">*</span>
                                    </span>
                                    <app-icon-dropdown
                                        [selectedOption]="iconDropdownSelection(f_stats.at(i).get('icon')?.value)"
                                        [optionsList]="iconOptions" placeholder="Select icon" uniqueKey="key"
                                        displayKey1="key" thumbKey="value" [filterKeys]="['key']" [usedInModal]="true"
                                        btnClass="btn-sm" (onSelect)="onStatIconChange(i, $event)" />

                                    @if (f_stats.at(i).get('icon')?.touched &&
                                    f_stats.at(i).get('icon')?.errors?.['required']) {
                                    <span class="invalid-feedback d-block small">
                                        Icon is required.
                                    </span>
                                    }
                                </div>
                                <div class="flex-grow-1" style="min-width: 8rem;">
                                    <label class="form-label small mb-1 d-block" [attr.for]="'stat-label-'+i">
                                        Label <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control form-control-sm" id="stat-label-{{i}}"
                                        formControlName="label" placeholder="Label">

                                    @if (f_stats.at(i).get('label')?.touched &&
                                    f_stats.at(i).get('label')?.errors?.['required']) {
                                    <span class="invalid-feedback d-block small">
                                        Label is required.
                                    </span>
                                    }
                                    @if (f_stats.at(i).get('label')?.touched &&
                                    f_stats.at(i).get('label')?.errors?.['maxlength']) {
                                    <span class="invalid-feedback d-block small">
                                        Label cannot exceed
                                        {{f_stats.at(i).get('label')?.errors?.['maxlength']?.requiredLength}}
                                        characters.
                                    </span>
                                    }
                                </div>
                                <div class="flex-grow-1" style="min-width: 8rem;">
                                    <label class="form-label small mb-1 d-block" [attr.for]="'stat-value-'+i">
                                        Value
                                    </label>
                                    <input type="text" class="form-control form-control-sm" id="stat-value-{{i}}"
                                        formControlName="value" placeholder="Value">
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>

                <!-- Location (embedded map URL + address on map card) -->
                <div class="row mb-3">
                    <div class="mt-3 mb-2 d-flex justify-content-center align-items-center">
                        <hr class="w-100">
                        <span class="mx-3 fw-bold text-nowrap text-muted fs-6">
                            Location map
                        </span>
                        <hr class="w-100">
                    </div>
                    <div class="col-xl-6 row align-content-start mb-3" formGroupName="location">
                        <div class="col-12 mb-3">
                            <label for="resort-location-address" class="form-label">
                                Address
                            </label>
                            <input type="text" id="resort-location-address" formControlName="address"
                                class="form-control" placeholder="Address shown with the map">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="resort-location-mapUrl" class="form-label">
                                Map embed URL
                            </label>
                            <input type="text" id="resort-location-mapUrl" formControlName="mapUrl" class="form-control"
                                placeholder="Paste map URL or embed iframe code" (blur)="onMapUrlBlur()">
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="col-12 mb-3">
                            <label class="form-label text-muted small">
                                Map preview
                            </label>
                            @if (mapUrlPreviewUrl && getResolvedMapUrl()) {
                            <div class="border rounded overflow-hidden bg-light">
                                <iframe [src]="mapUrlPreviewUrl" title="Map preview" class="map-preview-iframe"
                                    loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <a [href]="getMapUrlViewUrl()" target="_blank" rel="noopener noreferrer"
                                class="small text-primary mt-1 d-inline-block">
                                Open in new tab
                            </a>
                            }
                        </div>
                    </div>
                </div>

                <div class="mb-2">
                    <label class="form-label">
                        Images <span class="text-danger">*</span>
                    </label>
                    <div class="d-flex flex-wrap gap-2 align-items-center mb-2">
                        <input type="file" class="form-control" accept="image/*" multiple
                            [disabled]="displayedImages.length >= maxImages" (change)="onPickFiles($event)">
                        <span class="text-muted small">Up to {{ maxImages }}</span>
                    </div>

                    <div class="row">
                        @for (row of displayedImages; track row.id) {
                        <div class="col-12 col-md-6 mb-3">
                            <div class="border rounded p-2 bg-light position-relative">
                                <div class="flex-shrink-0 border rounded bg-white p-1 mx-auto mb-2"
                                    style="max-width: 250px; aspect-ratio: 16/9;">
                                    @if (isRowUploading(row)) {
                                    <div class="spinner-border spinner-border-sm text-primary"></div>
                                    } @else if (row.url) {
                                    <img [appSrc]="row.url" [attr.alt]="row.alt || 'Resort image'"
                                        class="rounded d-block w-100 h-100 img-cover" draggable="false" loading="lazy">
                                    } @else {
                                    <span class="text-muted small">\u2026</span>
                                    }
                                </div>
                                <div class="flex-grow-1 d-flex align-items-center gap-2">
                                    <input type="text" class="form-control form-control-sm" [value]="row.alt"
                                        (input)="onAltInput(row, $event)" [disabled]="!row.url || isRowUploading(row)"
                                        maxlength="255" placeholder="Short description (accessibility)">
                                </div>
                                <button type="button" tabindex="-1" (click)="removeImage(row)"
                                    [disabled]="isRowUploading(row)"
                                    class="btn btn-sm btn-outline-danger position-absolute lh-md top-0 end-0 m-1 py-0 px-2">
                                    X
                                </button>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary me-3" (click)="onCloseOrCancel()">
                    Cancel
                </button>
                <button class="btn btn-primary d-flex align-items-center justify-content-center"
                    [class.disabled]="isReqAlive" [disabled]="isReqAlive">
                    @if(!isReqAlive) {
                    <span>
                        {{isEditMode ? 'Save changes' : 'Create'}}
                    </span>
                    } @else {
                    <span class="spinner-border spinner-border-sm"></span>
                    <span role="status">&nbsp; Please wait\u2026</span>
                    }
                </button>
            </div>
        </form>
    </div>
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/resort/upsert-resort/upsert-resort.scss */\n.map-preview-iframe {\n  width: 100%;\n  height: 280px;\n  border: 0;\n  display: block;\n}\n.resort-icon-thumb-well {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  aspect-ratio: 1;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.8);\n  background-color: var(--bs-secondary-bg, #e9ecef);\n  border: 1px solid #dee2e6;\n}\n.resort-icon-thumb-well img {\n  max-width: 2rem;\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: contain;\n  object-position: center;\n  display: block;\n  filter: invert(0.8);\n}\n/*# sourceMappingURL=upsert-resort.css.map */\n'] }]
  }], null, { data: [{
    type: Input,
    args: ["data"]
  }], upsert: [{
    type: Output,
    args: ["upsert"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpsertResort, { className: "UpsertResort", filePath: "src/app/pages/resort/upsert-resort/upsert-resort.ts", lineNumber: 38 });
})();

// src/app/pages/resort/resort.ts
var _forTrack02 = ($index, $item) => $item._id;
function Resort_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function Resort_Conditional_9_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const resort_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("appSrc", resort_r2.images[0].url);
  }
}
function Resort_Conditional_9_For_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function Resort_Conditional_9_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, Resort_Conditional_9_For_16_Conditional_4_Template, 1, 1, "img", 15)(5, Resort_Conditional_9_For_16_Conditional_5_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 19)(12, "button", 20);
    \u0275\u0275listener("click", function Resort_Conditional_9_For_16_Template_button_click_12_listener() {
      const resort_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEditResort(resort_r2));
    });
    \u0275\u0275text(13, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 21);
    \u0275\u0275listener("click", function Resort_Conditional_9_For_16_Template_button_click_14_listener() {
      const resort_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDeleteResort(resort_r2));
    });
    \u0275\u0275text(15, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const resort_r2 = ctx.$implicit;
    const \u0275$index_46_r4 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_46_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((resort_r2.images == null ? null : resort_r2.images[0] == null ? null : resort_r2.images[0].url) ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(resort_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resort_r2.address || "\u2014");
  }
}
function Resort_Conditional_9_ForEmpty_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, " No resorts found ");
    \u0275\u0275elementEnd()();
  }
}
function Resort_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 11)(2, "thead", 12)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Thumb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 13);
    \u0275\u0275text(13, " Actions ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 14);
    \u0275\u0275repeaterCreate(15, Resort_Conditional_9_For_16_Template, 16, 4, "tr", null, _forTrack02, false, Resort_Conditional_9_ForEmpty_17_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.resorts);
  }
}
function Resort_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-upsert-resort", 23);
    \u0275\u0275listener("upsert", function Resort_Conditional_11_Template_app_upsert_resort_upsert_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpsertResort($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r2.resortData);
  }
}
function Resort_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "h1", 27);
    \u0275\u0275text(5, " Delete resort ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function Resort_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeleteResortCancel());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29)(8, "p");
    \u0275\u0275text(9, " Are you sure you want to delete ");
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 31)(14, "button", 32);
    \u0275\u0275listener("click", function Resort_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeleteResortCancel());
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 33);
    \u0275\u0275listener("click", function Resort_Conditional_13_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onConfirmDeleteResort());
    });
    \u0275\u0275text(17, " Confirm delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r2.resortData == null ? null : ctx_r2.resortData.title, " ");
  }
}
var Resort = class _Resort {
  _apiFs = inject(ApiFacadeService);
  _coreService = inject(CoreFacadeService);
  upsertResortModalId = "upsert-resort-modal";
  deleteResortModalId = "delete-resort-modal";
  resorts = [];
  isReqAlive = false;
  loading = false;
  resortData = null;
  ngOnInit() {
    this.loadList();
  }
  loadList() {
    this.loading = true;
    this._apiFs.resort.list({}).subscribe({
      next: (res) => {
        if (res.code === "OK" && res.data) {
          const list = res.data?.list;
          this.resorts = Array.isArray(list) ? list : [];
        } else {
          this.resorts = [];
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.log("Error while fetch resorts", err);
      }
    });
  }
  onCreateNew() {
    this.resortData = null;
    this._coreService.modal.open(this.upsertResortModalId);
  }
  onEditResort(resort) {
    this.resortData = resort;
    this._coreService.modal.open(this.upsertResortModalId);
  }
  onUpsertResort(event) {
    this.resortData = null;
    if (event) {
      if (event.refreshList) {
        this.loadList();
      } else {
        const i = this.resorts.findIndex((c) => c._id === event._id);
        if (i !== -1) {
          this.resorts[i] = event;
        } else {
          this.loadList();
        }
      }
    }
    this._coreService.modal.close(this.upsertResortModalId);
  }
  onDeleteResort(resort) {
    this.resortData = resort;
    this._coreService.modal.open(this.deleteResortModalId);
  }
  onDeleteResortCancel() {
    this.resortData = null;
    this._coreService.modal.close(this.deleteResortModalId);
  }
  onConfirmDeleteResort() {
    if (!this.resortData || this.isReqAlive)
      return;
    this.isReqAlive = true;
    this._apiFs.resort.delete(this.resortData._id).subscribe({
      next: (res) => {
        this.isReqAlive = false;
        if (res.code === "DELETED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Resort deleted successfully");
          this.loadList();
          this.onDeleteResortCancel();
        } else {
          const msg = res.message || "Something went wrong. Please try again later";
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
          this.onDeleteResortCancel();
        }
      },
      error: (err) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  static \u0275fac = function Resort_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Resort)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Resort, selectors: [["app-resort"]], decls: 14, vars: 6, consts: [[1, "d-flex", "gap-2", "justify-content-between"], [1, "mb-3"], [1, "bg-white", "rounded-3", "shadow", "p-2", "pt-3"], [1, "mb-3", "d-flex", "gap-2", "justify-content-between"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "text-center"], [1, "table-responsive"], ["bgLayer", "bg-gray-light", 3, "appRegisterModalLayer"], [3, "data"], [1, "modal", "d-block"], [1, "spinner-border", "text-primary"], [1, "table", "table-striped", "table-hover"], [1, "table-light"], [1, "text-center", "w-1-percent"], [1, "align-middle"], ["alt", "", 1, "rounded", "border", "object-fit-cover", 2, "width", "56px", "height", "56px", 3, "appSrc"], [1, "text-muted"], [1, "text-capitalize"], [1, "text-muted", "small"], [1, "d-flex", "gap-3", "align-items-center"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["colspan", "5", 1, "text-center"], [3, "upsert", "data"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "shadow-lg"], [1, "modal-header"], [1, "modal-title", "fs-5"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-danger", "fw-bold", "text-capitalize"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function Resort_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, " Resorts ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
      \u0275\u0275element(5, "div");
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function Resort_Template_button_click_6_listener() {
        return ctx.onCreateNew();
      });
      \u0275\u0275text(7, " + Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, Resort_Conditional_8_Template, 2, 0, "div", 5);
      \u0275\u0275conditionalCreate(9, Resort_Conditional_9_Template, 18, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-modal-layer", 7);
      \u0275\u0275conditionalCreate(11, Resort_Conditional_11_Template, 1, 1, "app-upsert-resort", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-modal-layer", 7);
      \u0275\u0275conditionalCreate(13, Resort_Conditional_13_Template, 18, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.upsertResortModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.upsertResortModalId) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.deleteResortModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.deleteResortModalId) ? 13 : -1);
    }
  }, dependencies: [
    ModalLayer,
    RegisterModalLayer,
    UpsertResort,
    AppSrc
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Resort, [{
    type: Component,
    args: [{ selector: "app-resort", imports: [
      ModalLayer,
      RegisterModalLayer,
      UpsertResort,
      AppSrc
    ], template: `<div class="d-flex gap-2 justify-content-between">
    <h4 class="mb-3">
        Resorts
    </h4>
</div>

<div class="bg-white rounded-3 shadow p-2 pt-3">
    <div class="mb-3 d-flex gap-2 justify-content-between">
        <div></div>
        <button class="btn btn-outline-primary" (click)="onCreateNew()">
            + Add New
        </button>
    </div>

    @if(loading){
    <div class="text-center">
        <div class="spinner-border text-primary"></div>
    </div>
    }

    @if(!loading){
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Thumb</th>
                    <th>Title</th>
                    <th>Address</th>
                    <th class="text-center w-1-percent">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody class="align-middle">
                @for (resort of resorts; track resort._id; let i = $index) {
                <tr>
                    <td>{{ i + 1 }}</td>
                    <td>
                        @if (resort.images?.[0]?.url) {
                        <img [appSrc]="resort.images[0].url" alt="" class="rounded border object-fit-cover"
                            style="width: 56px; height: 56px;">
                        } @else {
                        <span class="text-muted">\u2014</span>
                        }
                    </td>
                    <td class="text-capitalize">{{ resort.title }}</td>
                    <td class="text-muted small">{{ resort.address || '\u2014' }}</td>
                    <td>
                        <div class="d-flex gap-3 align-items-center">
                            <button class="btn btn-sm btn-outline-dark" (click)="onEditResort(resort)">
                                Edit
                            </button>
                            <button class="btn btn-sm btn-outline-danger" (click)="onDeleteResort(resort)">
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
                }@empty{
                <tr>
                    <td colspan="5" class="text-center">
                        No resorts found
                    </td>
                </tr>
                }
            </tbody>
        </table>
    </div>
    }
</div>


<!-- Upsert resort modal -->
<app-modal-layer [appRegisterModalLayer]="upsertResortModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(upsertResortModalId)) {
    <app-upsert-resort [data]="resortData" (upsert)="onUpsertResort($event)" />
    }
</app-modal-layer>

<!-- Delete resort modal -->
<app-modal-layer [appRegisterModalLayer]="deleteResortModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(deleteResortModalId)) {
    <div class="modal d-block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        Delete resort
                    </h1>
                    <button type="button" class="btn-close" (click)="onDeleteResortCancel()"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Are you sure you want to delete
                        <span class="text-danger fw-bold text-capitalize">
                            {{ resortData?.title }}
                        </span>?
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-3" (click)="onDeleteResortCancel()">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger" (click)="onConfirmDeleteResort()">
                        Confirm delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
</app-modal-layer>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Resort, { className: "Resort", filePath: "src/app/pages/resort/resort.ts", lineNumber: 25 });
})();

// src/app/pages/property/upsert-property/upsert-property.ts
var _c02 = () => ["title"];
function UpsertProperty_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Resort is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertProperty_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, UpsertProperty_Conditional_15_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_resort == null ? null : ctx_r0.f_resort.errors == null ? null : ctx_r0.f_resort.errors["required"]) ? 1 : -1);
  }
}
function UpsertProperty_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Title is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertProperty_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Only letters, numbers, spaces, and & / - , . ( ) are allowed (max 150 characters). ");
    \u0275\u0275elementEnd();
  }
}
function UpsertProperty_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, UpsertProperty_Conditional_22_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertProperty_Conditional_22_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_title == null ? null : ctx_r0.f_title.errors == null ? null : ctx_r0.f_title.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_title == null ? null : ctx_r0.f_title.errors == null ? null : ctx_r0.f_title.errors["pattern"]) ? 2 : -1);
  }
}
function UpsertProperty_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Description is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertProperty_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Description cannot exceed ", ctx_r0.f_description == null ? null : ctx_r0.f_description.errors == null ? null : ctx_r0.f_description.errors["maxlength"] == null ? null : ctx_r0.f_description.errors["maxlength"].requiredLength, " characters. ");
  }
}
function UpsertProperty_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, UpsertProperty_Conditional_29_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertProperty_Conditional_29_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_description == null ? null : ctx_r0.f_description.errors == null ? null : ctx_r0.f_description.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_description == null ? null : ctx_r0.f_description.errors == null ? null : ctx_r0.f_description.errors["maxlength"]) ? 2 : -1);
  }
}
function UpsertProperty_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Save Changes" : "Create New", " ");
  }
}
function UpsertProperty_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
    \u0275\u0275elementStart(1, "span", 25);
    \u0275\u0275text(2, " \xA0 Please wait... ");
    \u0275\u0275elementEnd();
  }
}
var UpsertProperty = class _UpsertProperty {
  // Inject Services
  _fb = inject(FormBuilder);
  _coreService = inject(CoreFacadeService);
  _apiFs = inject(ApiFacadeService);
  data = null;
  resortOptions = [];
  defaultResortForCreate = null;
  upsert = new EventEmitter();
  isEditMode = false;
  form = this._fb.group({
    resort: [null, [Validators.required]],
    title: [null, [Validators.required, Validators.pattern(new RegExp("^(?!\\s)[A-Za-z0-9 &\\/\\-,\\.\\(\\)]{1,150}(?<!\\s)$"))]],
    description: [null, [Validators.required, Validators.maxLength(700)]],
    isPublished: [false, [Validators.required]]
  });
  ngOnChanges(changes) {
    if (!changes["data"]?.currentValue && changes["data"]?.firstChange) {
      this.resetCreateForm();
    } else if (changes["data"]?.currentValue) {
      this.patchEditForm();
    }
  }
  patchEditForm() {
    this.isEditMode = true;
    const resortId = this.data?.resortId?._id ?? this.data?.resortId;
    this.form.patchValue({
      title: this.data.title,
      description: this.data.description,
      isPublished: this.data.isPublished ?? false,
      resort: this.resortOptions?.find((r) => r._id === resortId) || null
    });
  }
  resetCreateForm() {
    this.isEditMode = false;
    this.form.reset({
      title: null,
      description: null,
      isPublished: false,
      resort: this.defaultResortForCreate || null
    });
  }
  get f_resort() {
    return this.form.get("resort");
  }
  get f_title() {
    return this.form.get("title");
  }
  get f_description() {
    return this.form.get("description");
  }
  get f_isPublished() {
    return this.form.get("isPublished");
  }
  onResortSelected(resort) {
    this.form.get("resort")?.setValue(resort || null);
    this.form.get("resort")?.markAsTouched();
  }
  isReqAlive = false;
  onSubmit() {
    if (this.isReqAlive)
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const form = this.form.value;
    const body = {
      resortId: form.resort?._id,
      title: form.title?.trim(),
      description: form.description?.trim(),
      isPublished: form.isPublished
    };
    this.isReqAlive = true;
    if (this.isEditMode) {
      this._apiFs.property.update(this.data._id, body).subscribe({
        next: (res) => {
          this.isReqAlive = false;
          if (res.code === "UPDATED") {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, "Property updated successfully");
            this.upsert.emit(res.data);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || "Something went wrong. Please try again later";
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    } else {
      this._apiFs.property.create(body).subscribe({
        next: (res) => {
          this.isReqAlive = false;
          if (res.code === "CREATED") {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, "Property created successfully");
            this.upsert.emit(res.data);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || "Something went wrong. Please try again later";
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    }
  }
  onCloseOrCancel() {
    this.upsert.emit(null);
  }
  static \u0275fac = function UpsertProperty_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpsertProperty)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpsertProperty, selectors: [["app-upsert-property"]], inputs: { data: "data", resortOptions: "resortOptions", defaultResortForCreate: "defaultResortForCreate" }, outputs: { upsert: "upsert" }, features: [\u0275\u0275NgOnChangesFeature], decls: 41, vars: 15, consts: [[1, "modal", "d-block"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "shadow-lg"], [3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title", "fs-5"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], [1, "d-inline-block", "form-label"], [1, "text-danger"], ["placeholder", "Select resort", "displayKey1", "title", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "usedInModal"], [1, "invalid-feedback", "d-block"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Enter title", 1, "form-control"], ["for", "description", 1, "form-label"], ["type", "text", "id", "description", "formControlName", "description", "placeholder", "Enter description", 1, "form-control"], [1, "mb-3", "d-flex"], [1, "form-check", "form-switch", "my-auto", "ps-5"], ["type", "checkbox", "id", "isPublished", "formControlName", "isPublished", 1, "form-check-input", "fs-5", 3, "checked"], ["for", "isPublished", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "me-3", 3, "click"], [1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", 3, "disabled"], [1, "spinner-border", "spinner-border-sm"], ["role", "status"]], template: function UpsertProperty_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function UpsertProperty_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function UpsertProperty_Template_button_click_7_listener() {
        return ctx.onCloseOrCancel();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "span", 9);
      \u0275\u0275text(11, " Resort ");
      \u0275\u0275elementStart(12, "span", 10);
      \u0275\u0275text(13, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "app-common-dropdown", 11);
      \u0275\u0275listener("onSelect", function UpsertProperty_Template_app_common_dropdown_onSelect_14_listener($event) {
        return ctx.onResortSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, UpsertProperty_Conditional_15_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 13);
      \u0275\u0275text(18, " Title ");
      \u0275\u0275elementStart(19, "span", 10);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "input", 14);
      \u0275\u0275conditionalCreate(22, UpsertProperty_Conditional_22_Template, 3, 2, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 8)(24, "label", 15);
      \u0275\u0275text(25, " Description ");
      \u0275\u0275elementStart(26, "span", 10);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 16);
      \u0275\u0275conditionalCreate(29, UpsertProperty_Conditional_29_Template, 3, 2, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
      \u0275\u0275element(32, "input", 19);
      \u0275\u0275elementStart(33, "label", 20);
      \u0275\u0275text(34, " Is Published ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 21)(36, "button", 22);
      \u0275\u0275listener("click", function UpsertProperty_Template_button_click_36_listener() {
        return ctx.onCloseOrCancel();
      });
      \u0275\u0275text(37, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 23);
      \u0275\u0275conditionalCreate(39, UpsertProperty_Conditional_39_Template, 2, 1, "span")(40, UpsertProperty_Conditional_40_Template, 3, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit" : "Create", " Property ");
      \u0275\u0275advance(8);
      \u0275\u0275property("selectedOption", ctx.f_resort == null ? null : ctx.f_resort.value)("optionsList", ctx.resortOptions)("filterKeys", \u0275\u0275pureFunction0(14, _c02))("usedInModal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.f_resort == null ? null : ctx.f_resort.touched) && (ctx.f_resort == null ? null : ctx.f_resort.errors) ? 15 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_title == null ? null : ctx.f_title.touched) && (ctx.f_title == null ? null : ctx.f_title.errors) ? 22 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_description == null ? null : ctx.f_description.touched) && (ctx.f_description == null ? null : ctx.f_description.errors) ? 29 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.f_isPublished == null ? null : ctx.f_isPublished.value);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("disabled", ctx.isReqAlive);
      \u0275\u0275property("disabled", ctx.isReqAlive);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isReqAlive ? 39 : 40);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonDropdown], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpsertProperty, [{
    type: Component,
    args: [{ selector: "app-upsert-property", imports: [
      ReactiveFormsModule,
      CommonDropdown
    ], template: `<div class="modal d-block">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow-lg">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        {{isEditMode ? 'Edit' : 'Create'}} Property
                    </h1>
                    <button type="button" class="btn-close" (click)="onCloseOrCancel()"></button>
                </div>

                <div class="modal-body">
                    <!-- Resort -->
                    <div class="mb-3">
                        <span class="d-inline-block form-label">
                            Resort <span class="text-danger">*</span>
                        </span>
                        <app-common-dropdown [selectedOption]="f_resort?.value" [optionsList]="resortOptions"
                            placeholder="Select resort" [filterKeys]="['title']" displayKey1="title"
                            [usedInModal]="true" (onSelect)="onResortSelected($event)" />

                        @if(f_resort?.touched && f_resort?.errors){
                        <div class="invalid-feedback d-block">
                            @if(f_resort?.errors?.['required']){
                            <span>
                                Resort is required.
                            </span>
                            }
                        </div>
                        }
                    </div>
                    <!-- Title -->
                    <div class="mb-3">
                        <label for="title" class="form-label">
                            Title <span class="text-danger">*</span>
                        </label>
                        <input type="text" id="title" formControlName="title" class="form-control"
                            placeholder="Enter title">

                        @if(f_title?.touched && f_title?.errors){
                        <div class="invalid-feedback d-block">
                            @if(f_title?.errors?.['required']){
                            <span>
                                Title is required.
                            </span>
                            }
                            @if(f_title?.errors?.['pattern']){
                            <span>
                                Only letters, numbers, spaces, and & / - , . ( ) are allowed (max 150 characters).
                            </span>
                            }
                        </div>
                        }
                    </div>
                    <!-- Description -->
                    <div class="mb-3">
                        <label for="description" class="form-label">
                            Description <span class="text-danger">*</span>
                        </label>
                        <input type="text" id="description" formControlName="description" class="form-control"
                            placeholder="Enter description">

                        @if(f_description?.touched && f_description?.errors){
                        <div class="invalid-feedback d-block">
                            @if(f_description?.errors?.['required']){
                            <span>
                                Description is required.
                            </span>
                            }
                            @if(f_description?.errors?.['maxlength']){
                            <span>
                                Description cannot exceed
                                {{f_description?.errors?.['maxlength']?.requiredLength}}
                                characters.
                            </span>
                            }
                        </div>
                        }
                    </div>
                    <!-- Is Published -->
                    <div class="mb-3 d-flex">
                        <div class="form-check form-switch my-auto ps-5">
                            <input class="form-check-input fs-5" type="checkbox" id="isPublished"
                                formControlName="isPublished" [checked]="f_isPublished?.value">
                            <label class="form-check-label" for="isPublished">
                                Is Published
                            </label>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-3" (click)="onCloseOrCancel()">
                        Cancel
                    </button>
                    <button class="btn btn-primary d-flex align-items-center justify-content-center"
                        [class.disabled]="isReqAlive" [disabled]="isReqAlive">
                        @if(!isReqAlive) {
                        <span>
                            {{isEditMode ? 'Save Changes' : 'Create New'}}
                        </span>
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
</div>` }]
  }], null, { data: [{
    type: Input,
    args: ["data"]
  }], resortOptions: [{
    type: Input,
    args: ["resortOptions"]
  }], defaultResortForCreate: [{
    type: Input,
    args: ["defaultResortForCreate"]
  }], upsert: [{
    type: Output,
    args: ["upsert"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpsertProperty, { className: "UpsertProperty", filePath: "src/app/pages/property/upsert-property/upsert-property.ts", lineNumber: 21 });
})();

// src/app/pages/property/property.ts
var _c03 = () => ["title"];
var _forTrack03 = ($index, $item) => $item._id;
function Property_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
function Property_Conditional_12_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 18);
    \u0275\u0275listener("click", function Property_Conditional_12_For_20_Template_span_click_8_listener() {
      const property_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onChangePropertyStatus(property_r2));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 19);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 19);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 20)(18, "button", 21);
    \u0275\u0275listener("click", function Property_Conditional_12_For_20_Template_button_click_18_listener() {
      const property_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEditProperty(property_r2));
    });
    \u0275\u0275text(19, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 22);
    \u0275\u0275listener("click", function Property_Conditional_12_For_20_Template_button_click_20_listener() {
      const property_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDeleteProperty(property_r2));
    });
    \u0275\u0275text(21, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const property_r2 = ctx.$implicit;
    const \u0275$index_57_r4 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_57_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(property_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(property_r2.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(property_r2.isPublished ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", property_r2.isPublished ? "Published" : "Unpublished", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 8, property_r2.createdAt, "yyyy-MM-dd"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 11, property_r2.updatedAt, "yyyy-MM-dd"), " ");
  }
}
function Property_Conditional_12_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, " No properties found ");
    \u0275\u0275elementEnd()();
  }
}
function Property_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 14)(2, "thead", 15)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Updated At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 16);
    \u0275\u0275text(17, " Actions ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, Property_Conditional_12_For_20_Template, 22, 14, "tr", null, _forTrack03, false, Property_Conditional_12_ForEmpty_21_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.filteredProperties);
  }
}
function Property_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-upsert-property", 24);
    \u0275\u0275listener("upsert", function Property_Conditional_14_Template_app_upsert_property_upsert_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpsertProperty($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r2.propertyData)("resortOptions", ctx_r2.resortList)("defaultResortForCreate", ctx_r2.selectedResort);
  }
}
function Property_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "h1", 28);
    \u0275\u0275text(5, " Delete Property ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function Property_Conditional_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeletePropertyCancel());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "p");
    \u0275\u0275text(9, " Are you sure you want to delete ");
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " property? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 32)(14, "button", 33);
    \u0275\u0275listener("click", function Property_Conditional_16_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeletePropertyCancel());
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 34);
    \u0275\u0275listener("click", function Property_Conditional_16_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onConfirmDeleteProperty());
    });
    \u0275\u0275text(17, " Confirm Delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r2.propertyData == null ? null : ctx_r2.propertyData.title, " ");
  }
}
function Property_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "h1", 28);
    \u0275\u0275text(5, " Change Property Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function Property_Conditional_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangePropertyStatusCancel());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "p");
    \u0275\u0275text(9, " Are you sure you want to change the status of ");
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " property to ");
    \u0275\u0275elementStart(13, "span", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32)(17, "button", 33);
    \u0275\u0275listener("click", function Property_Conditional_18_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangePropertyStatusCancel());
    });
    \u0275\u0275text(18, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 35);
    \u0275\u0275listener("click", function Property_Conditional_18_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onConfirmChangePropertyStatus());
    });
    \u0275\u0275text(20, " Confirm Change ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r2.propertyData == null ? null : ctx_r2.propertyData.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.propertyData == null ? null : ctx_r2.propertyData.isPublished) ? "Unpublished" : "Published", " ");
  }
}
var Property = class _Property {
  // Inject Services
  _apiFs = inject(ApiFacadeService);
  _coreService = inject(CoreFacadeService);
  isUpsertModalOpen = false;
  upsertPropertyModalId = "upsert-property-modal";
  deletePropertyModalId = "delete-property-modal";
  changePropertyStatusModalId = "change-property-status-modal";
  properties = [];
  isReqAlive = false;
  loading = false;
  resortList = [];
  selectedResort = null;
  get filteredProperties() {
    const resortId = this.selectedResort?._id;
    if (!resortId) {
      return this.properties;
    }
    return this.properties.filter((p) => p.resortId === resortId);
  }
  ngOnInit() {
    this.loadList();
    this.getOptionsData();
  }
  loadList() {
    this.loading = true;
    this._apiFs.property.list().subscribe({
      next: (res) => {
        if (res.code === "OK") {
          const data = res.data;
          if (Array.isArray(data)) {
            this.properties = data;
          }
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.log("Error while fetch list", err);
      }
    });
  }
  getOptionsData() {
    this._apiFs.resort.optionsData({ dropdownList: "dropdownList" }).subscribe({
      next: (res) => {
        if (res.code === "OK") {
          const data = res.data;
          this.resortList = data?.dropdownList ?? [];
        }
      }
    });
  }
  onResortFilterSelected(resort) {
    this.selectedResort = resort || null;
  }
  onClearFilters() {
    if (!this.selectedResort?._id)
      return;
    this.selectedResort = null;
    this.loadList();
  }
  onCreateNew() {
    this.propertyData = null;
    this._coreService.modal.open(this.upsertPropertyModalId);
  }
  propertyData = null;
  onEditProperty(property) {
    this.propertyData = property;
    this._coreService.modal.open(this.upsertPropertyModalId);
  }
  onUpsertProperty(event) {
    this.propertyData = null;
    if (event) {
      const propertyIndex = this.properties.findIndex((p) => p._id === event._id);
      if (propertyIndex !== -1) {
        this.properties[propertyIndex] = event;
      } else {
        this.loadList();
      }
    }
    this._coreService.modal.close(this.upsertPropertyModalId);
  }
  onDeleteProperty(property) {
    this.propertyData = property;
    this._coreService.modal.open(this.deletePropertyModalId);
  }
  onDeletePropertyCancel() {
    this.propertyData = null;
    this._coreService.modal.close(this.deletePropertyModalId);
  }
  onConfirmDeleteProperty() {
    if (!this.propertyData || this.isReqAlive)
      return;
    this.isReqAlive = true;
    this._apiFs.property.delete(this.propertyData._id).subscribe({
      next: (res) => {
        this.isReqAlive = false;
        if (res.code === "DELETED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Property deleted successfully");
          this.loadList();
          this.onDeletePropertyCancel();
        } else {
          const msg = res.message || "Something went wrong. Please try again later";
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
          this.onDeletePropertyCancel();
        }
      },
      error: (err) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  onChangePropertyStatus(property) {
    this.propertyData = property;
    this._coreService.modal.open(this.changePropertyStatusModalId);
  }
  onChangePropertyStatusCancel() {
    this.propertyData = null;
    this._coreService.modal.close(this.changePropertyStatusModalId);
  }
  onConfirmChangePropertyStatus() {
    if (!this.propertyData || this.isReqAlive)
      return;
    this.isReqAlive = true;
    this._apiFs.property.changeStatus(this.propertyData._id, { isPublished: !this.propertyData.isPublished }).subscribe({
      next: (res) => {
        this.isReqAlive = false;
        if (res.code === "UPDATED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Property status changed successfully");
          const propertyIndex = this.properties.findIndex((p) => p._id === this.propertyData._id);
          if (propertyIndex !== -1) {
            this.properties[propertyIndex] = res.data;
          } else {
            this.loadList();
          }
          this.onChangePropertyStatusCancel();
        }
      },
      error: (err) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  static \u0275fac = function Property_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Property)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Property, selectors: [["app-property"]], decls: 19, vars: 13, consts: [[1, "d-flex", "gap-2", "justify-content-between"], [1, "mb-3"], [1, "bg-white", "rounded-3", "shadow", "p-2", "pt-3"], [1, "mb-3", "d-flex", "gap-2", "justify-content-between"], [1, "d-flex", "gap-2", "align-items-center", "flex-wrap", "flex-grow-1"], ["placeholder", "All resorts", "displayKey1", "title", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "enableSameSelectRemove"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "text-center"], [1, "table-responsive"], ["bgLayer", "bg-gray-light", 3, "appRegisterModalLayer"], [3, "data", "resortOptions", "defaultResortForCreate"], [1, "modal", "d-block"], [1, "spinner-border", "text-primary"], [1, "table", "table-striped", "table-hover"], [1, "table-light"], [1, "text-center", "w-1-percent"], [1, "text-capitalize"], [1, "badge", "rounded-pill", "cursor-pointer", 3, "click"], [1, "text-muted"], [1, "d-flex", "gap-3", "align-items-center"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["colspan", "7", 1, "text-center"], [3, "upsert", "data", "resortOptions", "defaultResortForCreate"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "shadow-lg"], [1, "modal-header"], [1, "modal-title", "fs-5"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-danger", "fw-bold", "text-capitalize"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function Property_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, " Properties ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-common-dropdown", 5);
      \u0275\u0275listener("onSelect", function Property_Template_app_common_dropdown_onSelect_6_listener($event) {
        return ctx.onResortFilterSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function Property_Template_button_click_7_listener() {
        return ctx.onClearFilters();
      });
      \u0275\u0275text(8, " Clear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function Property_Template_button_click_9_listener() {
        return ctx.onCreateNew();
      });
      \u0275\u0275text(10, " + Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, Property_Conditional_11_Template, 2, 0, "div", 8);
      \u0275\u0275conditionalCreate(12, Property_Conditional_12_Template, 22, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-modal-layer", 10);
      \u0275\u0275conditionalCreate(14, Property_Conditional_14_Template, 1, 3, "app-upsert-property", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-modal-layer", 10);
      \u0275\u0275conditionalCreate(16, Property_Conditional_16_Template, 18, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "app-modal-layer", 10);
      \u0275\u0275conditionalCreate(18, Property_Conditional_18_Template, 21, 2, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("selectedOption", ctx.selectedResort)("optionsList", ctx.resortList)("filterKeys", \u0275\u0275pureFunction0(12, _c03))("enableSameSelectRemove", true);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.upsertPropertyModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.upsertPropertyModalId) ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.deletePropertyModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.deletePropertyModalId) ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.changePropertyStatusModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.changePropertyStatusModalId) ? 18 : -1);
    }
  }, dependencies: [
    UpsertProperty,
    ModalLayer,
    RegisterModalLayer,
    CommonDropdown,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Property, [{
    type: Component,
    args: [{ selector: "app-property", imports: [
      UpsertProperty,
      ModalLayer,
      RegisterModalLayer,
      DatePipe,
      CommonDropdown
    ], template: `<div class="d-flex gap-2 justify-content-between">
    <h4 class="mb-3">
        Properties
    </h4>
</div>

<div class="bg-white rounded-3 shadow p-2 pt-3">
    <div class="mb-3 d-flex gap-2 justify-content-between">
        <div class="d-flex gap-2 align-items-center flex-wrap flex-grow-1">
            <app-common-dropdown [selectedOption]="selectedResort" [optionsList]="resortList" placeholder="All resorts"
                [filterKeys]="['title']" displayKey1="title" [enableSameSelectRemove]="true"
                (onSelect)="onResortFilterSelected($event)" />

            <button type="button" class="btn btn-sm btn-outline-secondary" (click)="onClearFilters()">
                Clear
            </button>
        </div>
        <button class="btn btn-outline-primary" (click)="onCreateNew()">
            + Add New
        </button>
    </div>
    <!-- Loader -->
    @if(loading){
    <div class="text-center">
        <div class="spinner-border text-primary"></div>
    </div>
    }

    <!-- Table -->
    @if(!loading){
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th class="text-center w-1-percent">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                @for (property of filteredProperties; track property._id; let i = $index;) {
                <tr>
                    <td>{{ i + 1 }}</td>
                    <td class="text-capitalize">{{ property.title }}</td>
                    <td>{{ property.description || '-' }}</td>
                    <td>
                        <span class="badge rounded-pill cursor-pointer"
                            [class]="property.isPublished ? 'bg-success' : 'bg-danger'"
                            (click)="onChangePropertyStatus(property)">
                            {{ property.isPublished ? 'Published' : 'Unpublished' }}
                        </span>
                    </td>
                    <td class="text-muted">
                        {{ property.createdAt | date:'yyyy-MM-dd' }}
                    </td>
                    <td class="text-muted">
                        {{ property.updatedAt | date:'yyyy-MM-dd' }}
                    </td>
                    <td>
                        <div class="d-flex gap-3 align-items-center">
                            <button class="btn btn-sm btn-outline-dark" (click)="onEditProperty(property)">
                                Edit
                            </button>
                            <button class="btn btn-sm btn-outline-danger" (click)="onDeleteProperty(property)">
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
                }@empty{
                <tr>
                    <td colspan="7" class="text-center">
                        No properties found
                    </td>
                </tr>
                }
            </tbody>
        </table>
    </div>
    }
</div>


<!-- Upsert Property Modal -->
<app-modal-layer [appRegisterModalLayer]="upsertPropertyModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(upsertPropertyModalId)) {
    <app-upsert-property [data]="propertyData" [resortOptions]="resortList" [defaultResortForCreate]="selectedResort"
        (upsert)="onUpsertProperty($event)" />
    }
</app-modal-layer>

<!-- Delete Property Modal -->
<app-modal-layer [appRegisterModalLayer]="deletePropertyModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(deletePropertyModalId)) {
    <div class="modal d-block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        Delete Property
                    </h1>
                    <button type="button" class="btn-close" (click)="onDeletePropertyCancel()"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Are you sure you want to delete
                        <span class="text-danger fw-bold text-capitalize">
                            {{ propertyData?.title }}
                        </span>
                        property?
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-3" (click)="onDeletePropertyCancel()">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger" (click)="onConfirmDeleteProperty()">
                        Confirm Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
</app-modal-layer>

<!-- Change property status modal -->
<app-modal-layer [appRegisterModalLayer]="changePropertyStatusModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(changePropertyStatusModalId)) {
    <div class="modal d-block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        Change Property Status
                    </h1>
                    <button type="button" class="btn-close" (click)="onChangePropertyStatusCancel()"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Are you sure you want to change the status of
                        <span class="text-danger fw-bold text-capitalize">
                            {{ propertyData?.title }}
                        </span>
                        property to
                        <span class="text-danger fw-bold text-capitalize">
                            {{ propertyData?.isPublished ? 'Unpublished' : 'Published' }}
                        </span>?
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-3" (click)="onChangePropertyStatusCancel()">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary" (click)="onConfirmChangePropertyStatus()">
                        Confirm Change
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
</app-modal-layer>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Property, { className: "Property", filePath: "src/app/pages/property/property.ts", lineNumber: 27 });
})();

// src/app/pages/calendar/calendar.ts
var import_moment = __toESM(require_moment());
var _c04 = () => ["title", "propertyTitle"];
var _forTrack04 = ($index, $item) => $item.url;
var _forTrack1 = ($index, $item) => $item.date;
var _forTrack2 = ($index, $item) => $item.orderId;
var _forTrack3 = ($index, $item) => $item.uid;
function Calendar_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function Calendar_Conditional_6_For_2_Template_button_click_0_listener() {
      const \u0275$index_15_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAssetImages(\u0275$index_15_r2));
    });
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("appSrc", img_r4.url)("alt", img_r4.alt || "");
  }
}
function Calendar_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, Calendar_Conditional_6_For_2_Template, 2, 2, "button", 13, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.assetImagesPreview);
  }
}
function Calendar_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, " No images ");
    \u0275\u0275elementEnd();
  }
}
function Calendar_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4, " Select an asset to view its booking calendar ");
    \u0275\u0275elementEnd()();
  }
}
function Calendar_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3, " Loading calendar\u2026 ");
    \u0275\u0275elementEnd()();
  }
}
function Calendar_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r2.weekStart, "d MMM"), " \u2013 ", \u0275\u0275pipeBind2(2, 5, ctx_r2.weekEnd, "d MMM yyyy"), " ");
  }
}
function Calendar_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.monthYearLabel, " ");
  }
}
function Calendar_Conditional_10_For_37_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r6.otherMonthLabel, " ");
  }
}
function Calendar_Conditional_10_For_37_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function Calendar_Conditional_10_For_37_For_10_Template_div_click_0_listener($event) {
      const bar_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const slot_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.openDetailsByBar(slot_r6, bar_r8));
    });
    \u0275\u0275elementStart(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r8 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("calendar-stay-bar calendar-stay-bar-", bar_r8.type));
    \u0275\u0275classProp("calendar-stay-bar-start", bar_r8.isStart)("calendar-stay-bar-end", bar_r8.isEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bar_r8.label, " ");
  }
}
function Calendar_Conditional_10_For_37_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function Calendar_Conditional_10_For_37_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const slot_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.availableUnits(slot_r6), " free ");
  }
}
function Calendar_Conditional_10_For_37_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Full ");
  }
}
function Calendar_Conditional_10_For_37_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275conditionalCreate(1, Calendar_Conditional_10_For_37_Conditional_13_Conditional_1_Template, 1, 1)(2, Calendar_Conditional_10_For_37_Conditional_13_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55)(4, "button", 56);
    \u0275\u0275listener("click", function Calendar_Conditional_10_For_37_Conditional_13_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const slot_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.openDetailsByDate(slot_r6));
    });
    \u0275\u0275text(5, " View ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("calendar-avail-badge-zero", ctx_r2.availableUnits(slot_r6) === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.availableUnits(slot_r6) > 0 ? 1 : 2);
  }
}
function Calendar_Conditional_10_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275conditionalCreate(6, Calendar_Conditional_10_For_37_Conditional_6_Template, 2, 1, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 48);
    \u0275\u0275repeaterCreate(9, Calendar_Conditional_10_For_37_For_10_Template, 3, 8, "div", 49, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 50);
    \u0275\u0275conditionalCreate(12, Calendar_Conditional_10_For_37_Conditional_12_Template, 2, 0, "span", 51)(13, Calendar_Conditional_10_For_37_Conditional_13_Template, 6, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slot_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("calendar-cell-today", slot_r6.isToday)("calendar-cell-stay-full", ctx_r2.isStayFull(slot_r6))("calendar-cell-other-month", slot_r6.isOtherMonth);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("calendar-bar-label-header-full", slot_r6.totalQuantity > 0 && ctx_r2.usedUnits(slot_r6) >= slot_r6.totalQuantity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.usedUnits(slot_r6), "/", slot_r6.totalQuantity, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-primary", slot_r6.isToday)("calendar-day-other-month", slot_r6.isOtherMonth);
    \u0275\u0275advance();
    \u0275\u0275conditional(slot_r6.otherMonthLabel ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r6.dayOfMonth, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(slot_r6.stayBars);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(slot_r6.isOtherMonth ? 12 : 13);
  }
}
function Calendar_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "button", 24);
    \u0275\u0275listener("click", function Calendar_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPeriod());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 25);
    \u0275\u0275element(5, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 27);
    \u0275\u0275listener("click", function Calendar_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToToday());
    });
    \u0275\u0275text(7, " Today ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function Calendar_Conditional_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPeriod());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 25);
    \u0275\u0275element(10, "path", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275conditionalCreate(12, Calendar_Conditional_10_Conditional_12_Template, 3, 8)(13, Calendar_Conditional_10_Conditional_13_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30)(15, "button", 31);
    \u0275\u0275listener("click", function Calendar_Conditional_10_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setViewType("weekly"));
    });
    \u0275\u0275text(16, " Week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 31);
    \u0275\u0275listener("click", function Calendar_Conditional_10_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setViewType("monthly"));
    });
    \u0275\u0275text(18, " Month ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 32)(20, "div", 33)(21, "div", 34);
    \u0275\u0275text(22, "Mon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 34);
    \u0275\u0275text(24, "Tue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 34);
    \u0275\u0275text(26, "Wed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 34);
    \u0275\u0275text(28, "Thu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 34);
    \u0275\u0275text(30, "Fri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 34);
    \u0275\u0275text(32, "Sat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 34);
    \u0275\u0275text(34, "Sun");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 35);
    \u0275\u0275repeaterCreate(36, Calendar_Conditional_10_For_37_Template, 14, 17, "div", 36, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 37)(39, "span", 38);
    \u0275\u0275element(40, "span", 39);
    \u0275\u0275text(41, " Booked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 38);
    \u0275\u0275element(43, "span", 40);
    \u0275\u0275text(44, " Processing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 38);
    \u0275\u0275element(46, "span", 41);
    \u0275\u0275text(47, " In queue");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("calendar-grid-month", ctx_r2.viewType === "monthly");
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r2.viewType === "weekly" ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("calendar-view-tab-active", ctx_r2.viewType === "weekly");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("calendar-view-tab-active", ctx_r2.viewType === "monthly");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.daySlots);
  }
}
function Calendar_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" No data for this ", ctx_r2.viewType === "weekly" ? "week" : "month", ". ");
  }
}
function Calendar_Conditional_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function Calendar_Conditional_13_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prevAssetImage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 75);
    \u0275\u0275elementEnd()();
  }
}
function Calendar_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedAssetImages[ctx_r2.assetImageIndex].alt);
  }
}
function Calendar_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function Calendar_Conditional_13_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextAssetImage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 77);
    \u0275\u0275elementEnd()();
  }
}
function Calendar_Conditional_13_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function Calendar_Conditional_13_Conditional_16_For_2_Template_button_click_0_listener() {
      const \u0275$index_222_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.assetImageIndex = \u0275$index_222_r14);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_222_r14 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("calendar-asset-images-dot-active", \u0275$index_222_r14 === ctx_r2.assetImageIndex);
    \u0275\u0275attribute("aria-label", "Image " + (\u0275$index_222_r14 + 1));
  }
}
function Calendar_Conditional_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275repeaterCreate(1, Calendar_Conditional_13_Conditional_16_For_2_Template, 1, 3, "button", 78, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedAssetImages);
  }
}
function Calendar_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 58)(2, "div", 59)(3, "div", 60)(4, "h2", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 62);
    \u0275\u0275listener("click", function Calendar_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAssetImages());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 63);
    \u0275\u0275element(8, "path", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 65)(10, "div", 66);
    \u0275\u0275conditionalCreate(11, Calendar_Conditional_13_Conditional_11_Template, 3, 0, "button", 67);
    \u0275\u0275elementStart(12, "div", 68);
    \u0275\u0275element(13, "img", 69);
    \u0275\u0275conditionalCreate(14, Calendar_Conditional_13_Conditional_14_Template, 2, 1, "p", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Calendar_Conditional_13_Conditional_15_Template, 3, 0, "button", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, Calendar_Conditional_13_Conditional_16_Template, 3, 0, "div", 72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedAsset == null ? null : ctx_r2.selectedAsset.title, " \u2013 Images ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.selectedAssetImages.length > 1 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("appSrc", ctx_r2.selectedAssetImages[ctx_r2.assetImageIndex].url)("alt", ctx_r2.selectedAssetImages[ctx_r2.assetImageIndex].alt || "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedAssetImages[ctx_r2.assetImageIndex].alt ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedAssetImages.length > 1 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedAssetImages.length > 1 ? 16 : -1);
  }
}
function Calendar_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Booking details", (ctx_r2.detailsData == null ? null : ctx_r2.detailsData.date) ? " \u2013 " + \u0275\u0275pipeBind2(3, 1, ctx_r2.detailsData.date, "fullDate") : "", " ");
  }
}
function Calendar_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.detailsData == null ? null : ctx_r2.detailsData.orderNo) != null ? "Order #" + ctx_r2.detailsData.orderNo : "Order details", " ");
  }
}
function Calendar_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "div", 91);
    \u0275\u0275elementStart(2, "p", 92);
    \u0275\u0275text(3, "Loading details\u2026");
    \u0275\u0275elementEnd()();
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "mailto:" + item_r16.guestDetails.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r16.guestDetails.email, " ");
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + item_r16.guestDetails.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r16.guestDetails.phone, " ");
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r16.guestDetails.address, " ");
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275conditionalCreate(1, Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Conditional_1_Template, 5, 2, "span", 111);
    \u0275\u0275conditionalCreate(2, Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Conditional_2_Template, 5, 2, "span", 111);
    \u0275\u0275conditionalCreate(3, Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Conditional_3_Template, 4, 1, "span", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r16.guestDetails.email ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r16.guestDetails.phone ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r16.guestDetails.address ? 3 : -1);
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 108);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 109);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Conditional_10_Template, 4, 3, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (item_r16.guestDetails == null ? null : item_r16.guestDetails.guestName) ?? "Guest", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 6, item_r16.startDate, "shortDate"), " \u2013 ", \u0275\u0275pipeBind2(6, 9, item_r16.endDate, "shortDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", item_r16.units, " unit(s) \xB7 ", \u0275\u0275pipeBind2(9, 12, item_r16.amountToPay, "INR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r16.guestDetails ? 10 : -1);
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 98)(1, "div", 99)(2, "span", 100);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 102)(7, "span", 103)(8, "span", 104);
    \u0275\u0275text(9, "Order date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 105)(14, "span", 104);
    \u0275\u0275text(15, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(19, Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_For_20_Template, 11, 15, "div", 106, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Order #", order_r17.orderNo, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("calendar-details-badge-success", order_r17.status === "success")("calendar-details-badge-pending", order_r17.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r17.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 8, order_r17.orderDate, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 11, order_r17.amountToPay, "INR"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(order_r17.lineItems);
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 93)(1, "h3", 95);
    \u0275\u0275element(2, "span", 96);
    \u0275\u0275text(3, " Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 97);
    \u0275\u0275repeaterCreate(5, Calendar_Conditional_15_Conditional_12_Conditional_1_For_6_Template, 21, 14, "article", 98, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.detailsData.bookings);
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "mailto:" + item_r18.guest.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r18.guest.email, " ");
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + item_r18.guest.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r18.guest.phone, " ");
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275conditionalCreate(1, Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_9_Conditional_1_Template, 5, 2, "span", 111);
    \u0275\u0275conditionalCreate(2, Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_9_Conditional_2_Template, 5, 2, "span", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r18.guest.email ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r18.guest.phone ? 2 : -1);
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103)(1, "span", 104);
    \u0275\u0275text(2, "Added");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, item_r18.issuedAt, "medium"), " ");
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 114)(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 108);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 109);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_9_Template, 3, 2, "div", 110);
    \u0275\u0275conditionalCreate(10, Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Conditional_10_Template, 5, 4, "span", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (item_r18.guest == null ? null : item_r18.guest.guestName) ?? "Guest", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 6, item_r18.startDate, "shortDate"), " \u2013 ", \u0275\u0275pipeBind2(6, 9, item_r18.endDate, "shortDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r18.units, " unit(s) ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r18.guest ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r18.issuedAt ? 10 : -1);
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 93)(1, "h3", 95);
    \u0275\u0275element(2, "span", 113);
    \u0275\u0275text(3, " In queue ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 97);
    \u0275\u0275repeaterCreate(5, Calendar_Conditional_15_Conditional_12_Conditional_2_For_6_Template, 11, 12, "article", 114, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.detailsData.basketItems);
  }
}
function Calendar_Conditional_15_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 115);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No bookings or items in queue for this day.");
    \u0275\u0275elementEnd()();
  }
}
function Calendar_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, Calendar_Conditional_15_Conditional_12_Conditional_1_Template, 7, 0, "section", 93);
    \u0275\u0275conditionalCreate(2, Calendar_Conditional_15_Conditional_12_Conditional_2_Template, 7, 0, "section", 93);
    \u0275\u0275conditionalCreate(3, Calendar_Conditional_15_Conditional_12_Conditional_3_Template, 5, 0, "div", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.detailsData.bookings == null ? null : ctx_r2.detailsData.bookings.length) ?? 0) > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.detailsData.basketItems == null ? null : ctx_r2.detailsData.basketItems.length) ?? 0) > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.detailsData.bookings == null ? null : ctx_r2.detailsData.bookings.length) ?? 0) === 0 && ((ctx_r2.detailsData.basketItems == null ? null : ctx_r2.detailsData.basketItems.length) ?? 0) === 0 ? 3 : -1);
  }
}
function Calendar_Conditional_15_Conditional_13_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "mailto:" + ctx_r2.detailsData.userId.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailsData.userId.email, " ");
  }
}
function Calendar_Conditional_15_Conditional_13_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + ctx_r2.detailsData.userId.mobile, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailsData.userId.mobile, " ");
  }
}
function Calendar_Conditional_15_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 104);
    \u0275\u0275text(2, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 110);
    \u0275\u0275conditionalCreate(6, Calendar_Conditional_15_Conditional_13_Conditional_10_Conditional_6_Template, 5, 2, "span", 111);
    \u0275\u0275conditionalCreate(7, Calendar_Conditional_15_Conditional_13_Conditional_10_Conditional_7_Template, 5, 2, "span", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailsData.userId == null ? null : ctx_r2.detailsData.userId.fullname, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.detailsData.userId.email ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.detailsData.userId.mobile ? 7 : -1);
  }
}
function Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "mailto:" + item_r19.guestDetails.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r19.guestDetails.email);
  }
}
function Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + item_r19.guestDetails.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r19.guestDetails.phone);
  }
}
function Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "span", 104);
    \u0275\u0275text(2, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r19.guestDetails.address, " ");
  }
}
function Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Conditional_3_Template, 5, 2, "span", 111);
    \u0275\u0275conditionalCreate(4, Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Conditional_4_Template, 5, 2, "span", 111);
    \u0275\u0275conditionalCreate(5, Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Conditional_5_Template, 4, 1, "span", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r19.guestDetails.guestName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.guestDetails.email ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.guestDetails.phone ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.guestDetails.address ? 5 : -1);
  }
}
function Calendar_Conditional_15_Conditional_13_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 120)(1, "div", 99)(2, "span", 122);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 123);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 108);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Calendar_Conditional_15_Conditional_13_For_16_Conditional_11_Template, 6, 4, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r19.assetId == null ? null : item_r19.assetId.title) ?? "Asset", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, item_r19.amountToPay, "INR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(9, 9, item_r19.startDate, "shortDate"), " \u2013 ", \u0275\u0275pipeBind2(10, 12, item_r19.endDate, "shortDate"), " \xB7 ", item_r19.units, " unit(s) ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r19.guestDetails ? 11 : -1);
  }
}
function Calendar_Conditional_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 116)(2, "span", 101);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 118);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, Calendar_Conditional_15_Conditional_13_Conditional_10_Template, 8, 3, "div", 119);
    \u0275\u0275elementStart(11, "section", 93)(12, "h3", 95);
    \u0275\u0275text(13, " Line items ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 97);
    \u0275\u0275repeaterCreate(15, Calendar_Conditional_15_Conditional_13_For_16_Template, 12, 15, "article", 120, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("calendar-details-badge-success", ctx_r2.detailsData.status === "success")("calendar-details-badge-pending", ctx_r2.detailsData.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailsData.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Order date: ", \u0275\u0275pipeBind2(6, 8, ctx_r2.detailsData.orderDate, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 11, ctx_r2.detailsData.amountToPay, "INR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.detailsData.userId ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.detailsData.lineItems);
  }
}
function Calendar_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 80)(2, "div", 81)(3, "div", 82)(4, "h2", 83);
    \u0275\u0275conditionalCreate(5, Calendar_Conditional_15_Conditional_5_Template, 4, 4)(6, Calendar_Conditional_15_Conditional_6_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 62);
    \u0275\u0275listener("click", function Calendar_Conditional_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetails());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 63);
    \u0275\u0275element(9, "path", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 84);
    \u0275\u0275conditionalCreate(11, Calendar_Conditional_15_Conditional_11_Template, 4, 0, "div", 85)(12, Calendar_Conditional_15_Conditional_12_Template, 4, 3, "div", 86)(13, Calendar_Conditional_15_Conditional_13_Template, 17, 14, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 88)(15, "button", 89);
    \u0275\u0275listener("click", function Calendar_Conditional_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetails());
    });
    \u0275\u0275text(16, " Close ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.detailsKind === "date" ? 5 : 6);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.detailsLoading ? 11 : ctx_r2.detailsKind === "date" && ctx_r2.detailsData ? 12 : ctx_r2.detailsKind === "order" && ctx_r2.detailsData ? 13 : -1);
  }
}
var CALENDAR_REFRESH_INTERVAL_MS = 60 * 1e3 / 10;
var DAY_NAMES_MON_FIRST = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var Calendar = class _Calendar {
  _apiFs = inject(ApiFacadeService);
  _coreService = inject(CoreFacadeService);
  _refreshTimer = null;
  calendarDetailsModalId = "calendar-details-modal";
  assetImagesModalId = "calendar-asset-images-modal";
  detailsLoading = false;
  detailsData = null;
  /** 'date' = day's bookings+basket; 'order' = single order */
  detailsKind = null;
  /** Current image index in asset images gallery */
  assetImageIndex = 0;
  assetList = [];
  selectedAsset = null;
  loading = false;
  calendarData = null;
  daySlots = [];
  weekStart = null;
  weekEnd = null;
  currentViewDate = (0, import_moment.default)();
  viewType = "weekly";
  monthYearLabel = "";
  ngOnInit() {
    this.loadAssetList();
  }
  clearRefreshTimer() {
    if (this._refreshTimer != null) {
      clearInterval(this._refreshTimer);
      this._refreshTimer = null;
    }
  }
  startRefreshTimer() {
    this.clearRefreshTimer();
    this._refreshTimer = setInterval(() => {
      if (this.selectedAsset?._id) {
        this.loadCalendar(true);
      } else {
        this.clearRefreshTimer();
      }
    }, CALENDAR_REFRESH_INTERVAL_MS);
  }
  onAssetSelected(asset) {
    this.selectedAsset = asset ?? null;
    if (!this.selectedAsset) {
      this.clearRefreshTimer();
      return;
    }
    if (this.selectedAsset?.quantity != null) {
      this.loadCalendar();
    }
  }
  setViewType(view) {
    if (this.viewType === view)
      return;
    this.viewType = view;
    this.loadCalendar();
  }
  loadAssetList() {
    this._apiFs.asset.masterData({ calendarList: "list" }).subscribe({
      next: (res) => {
        if (res.code === "OK" && res.data != null) {
          this.assetList = (res.data?.list ?? []).map((item) => __spreadProps(__spreadValues({}, item), {
            propertyTitle: item?.propertyId?.title ?? ""
          }));
        }
      },
      error: (err) => console.error("Error loading assets", err)
    });
  }
  loadCalendar(silentRefresh = false) {
    if (!this.selectedAsset?._id || !silentRefresh && this.loading)
      return;
    const dateStr = this.currentViewDate.format("YYYY-MM-DD");
    const dateRange = {};
    if (!silentRefresh) {
      this.loading = true;
      const period = this.viewType === "weekly" ? "isoWeek" : "month";
      dateRange.startDate = this.currentViewDate.clone().startOf(period).format("YYYY-MM-DD");
      dateRange.endDate = this.currentViewDate.clone().endOf(period).format("YYYY-MM-DD");
    }
    const body = {
      assetId: this.selectedAsset._id,
      view: this.viewType,
      date: dateStr
    };
    this._apiFs.calendar.view(body).subscribe({
      next: (res) => {
        this.loading = false;
        if (res?.code === "OK") {
          const data = res.data;
          this.calendarData = data;
          this.buildDaySlots();
          this.startRefreshTimer();
        }
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }
  /** Parse to moment for consistent date handling */
  parseMoment(s) {
    const m = (0, import_moment.default)(s);
    return m.isValid() ? m : (0, import_moment.default)();
  }
  /** Check if a day (YYYY-MM-DD) falls within [start, end] inclusive. E.g. start 25, end 27 = booked for 25, 26, 27. */
  dayOverlapsRange(dayYMD, startISO, endISO) {
    const day = (0, import_moment.default)(dayYMD).startOf("day");
    const start = this.parseMoment(startISO).startOf("day");
    const end = this.parseMoment(endISO).startOf("day");
    return !day.isBefore(start, "day") && !day.isAfter(end, "day");
  }
  buildDaySlots() {
    const data = this.calendarData;
    if (!data?.range) {
      this.daySlots = [];
      return;
    }
    const start = this.parseMoment(data.range.start).startOf("day");
    const quantity = this.selectedAsset?.quantity ?? 0;
    const slots = [];
    const todayYMD = (0, import_moment.default)().format("YYYY-MM-DD");
    if (this.viewType === "weekly") {
      for (let i = 0; i < 7; i++) {
        const d = start.clone().add(i, "days");
        slots.push(this.buildOneSlot(d, quantity, todayYMD, data));
      }
      this.daySlots = slots;
      this.weekStart = slots.length ? (0, import_moment.default)(slots[0].date).toDate() : null;
      this.weekEnd = slots.length ? (0, import_moment.default)(slots[slots.length - 1].date).toDate() : null;
      this.monthYearLabel = "";
    } else {
      this.monthYearLabel = start.format("MMMM YYYY");
      const firstDayOfWeek = start.isoWeekday();
      const leadingCount = firstDayOfWeek - 1;
      const daysInMonth = start.daysInMonth();
      const prevMonth = start.clone().subtract(1, "month");
      const prevMonthDays = prevMonth.daysInMonth();
      let prevDayNum = prevMonthDays - leadingCount + 1;
      for (let i = 0; i < leadingCount; i++) {
        const d = prevMonth.clone().date(prevDayNum);
        const slot = this.buildOneSlot(d, quantity, todayYMD, { bookings: [], basketItems: [] });
        slot.isOtherMonth = true;
        slots.push(slot);
        prevDayNum++;
      }
      for (let day = 1; day <= daysInMonth; day++) {
        const d = start.clone().date(day);
        slots.push(this.buildOneSlot(d, quantity, todayYMD, data));
      }
      const filled = leadingCount + daysInMonth;
      const trailingCount = filled % 7 === 0 ? 0 : 7 - filled % 7;
      const nextMonth = start.clone().add(1, "month");
      for (let i = 1; i <= trailingCount; i++) {
        const d = nextMonth.clone().date(i);
        const slot = this.buildOneSlot(d, quantity, todayYMD, { bookings: [], basketItems: [] });
        slot.isOtherMonth = true;
        slots.push(slot);
      }
      if (leadingCount > 0 && slots[0]) {
        slots[0].otherMonthLabel = prevMonth.format("MMM");
      }
      const firstNextMonthIndex = leadingCount + daysInMonth;
      if (trailingCount > 0 && slots[firstNextMonthIndex]) {
        slots[firstNextMonthIndex].otherMonthLabel = nextMonth.format("MMM");
      }
      this.daySlots = slots;
      this.weekStart = slots.length ? (0, import_moment.default)(slots[0].date).toDate() : null;
      this.weekEnd = slots.length ? (0, import_moment.default)(slots[slots.length - 1].date).toDate() : null;
    }
  }
  buildOneSlot(d, quantity, todayYMD, data) {
    const dateStr = d.format("YYYY-MM-DD");
    let bookedUnits = 0;
    let pendingUnits = 0;
    let basketUnits = 0;
    const stayBars = [];
    (data.bookings ?? []).forEach((b) => {
      if (!this.dayOverlapsRange(dateStr, b.startDate, b.endDate))
        return;
      const start = this.parseMoment(b.startDate).startOf("day");
      const end = this.parseMoment(b.endDate).startOf("day");
      const units = b.units ?? 1;
      const guest = b.guestDetails?.guestName?.trim();
      const label = `Order #${b.orderNo} \xB7 ${units} unit${units !== 1 ? "s" : ""}${guest ? ` (${guest})` : ""}`;
      const orderId = b.orderId ?? b._id ?? void 0;
      const stayBar = {
        type: "booked",
        isStart: d.isSame(start, "day"),
        isEnd: d.isSame(end, "day"),
        label: label || "Booked",
        units: b.units,
        orderId
      };
      if (b.status === "success") {
        bookedUnits += b.units ?? 0;
        stayBar.type = "booked";
      } else if (b.status === "pending") {
        pendingUnits += b.units ?? 0;
        stayBar.type = "pending";
      }
      stayBars.push(stayBar);
    });
    (data.basketItems ?? []).forEach((b) => {
      if (!this.dayOverlapsRange(dateStr, b.startDate, b.endDate))
        return;
      basketUnits += b.units ?? 0;
      const start = this.parseMoment(b.startDate).startOf("day");
      const end = this.parseMoment(b.endDate).startOf("day");
      stayBars.push({
        type: "basket",
        isStart: d.isSame(start, "day"),
        isEnd: d.isSame(end, "day"),
        label: `#${b.uid ?? "In queue"}${b.guest?.guestName ? `(${b.guest?.guestName})` : ""}`,
        units: b.units
      });
    });
    const dayIndex = d.isoWeekday() - 1;
    const obj = {
      date: dateStr,
      label: DAY_NAMES_MON_FIRST[dayIndex],
      dayOfMonth: d.date(),
      bookedUnits,
      pendingUnits,
      basketUnits,
      bookedBarPct: 0,
      basketBarPct: 0,
      totalQuantity: quantity,
      isToday: dateStr === todayYMD,
      stayBars
    };
    obj.bookedBarPct = this.getBookedBarPct(obj);
    obj.basketBarPct = this.getBasketBarPct(obj);
    return obj;
  }
  prevPeriod() {
    this.currentViewDate.subtract(this.viewType === "weekly" ? 7 : 1, this.viewType === "weekly" ? "days" : "month");
    this.loadCalendar();
  }
  nextPeriod() {
    this.currentViewDate.add(this.viewType === "weekly" ? 7 : 1, this.viewType === "weekly" ? "days" : "month");
    this.loadCalendar();
  }
  goToToday() {
    const today = (0, import_moment.default)();
    if (this.loading || this.currentViewDate?.isSame(today, "day"))
      return;
    this.currentViewDate = today;
    this.loadCalendar();
  }
  usedUnits(slot) {
    return slot.bookedUnits + slot.pendingUnits + slot.basketUnits;
  }
  /** True when the day is fully occupied (no free units), for “stay full” styling. */
  isStayFull(slot) {
    if (slot.isOtherMonth || !slot.totalQuantity)
      return false;
    return this.usedUnits(slot) >= slot.totalQuantity;
  }
  availableUnits(slot) {
    return Math.max(0, slot.totalQuantity - this.usedUnits(slot));
  }
  getBookedBarPct(slot) {
    const total = slot.totalQuantity || 0;
    if (total === 0)
      return 0;
    const used = this.usedUnits(slot);
    if (used <= total)
      return slot.bookedUnits / total * 100;
    return used > 0 ? slot.bookedUnits / used * 100 : 0;
  }
  getBasketBarPct(slot) {
    const total = slot.totalQuantity || 0;
    if (total === 0)
      return 0;
    const used = this.usedUnits(slot);
    if (used <= total)
      return slot.basketUnits / total * 100;
    return used > 0 ? slot.basketUnits / used * 100 : 0;
  }
  /** Open details popup for a day (bookings + basket items). */
  openDetailsByDate(slot) {
    if (slot.isOtherMonth || !this.selectedAsset?._id)
      return;
    this.detailsKind = "date";
    this.detailsData = null;
    this.detailsLoading = true;
    this._coreService.modal.open(this.calendarDetailsModalId);
    this._apiFs.calendar.details({
      type: "date",
      date: slot.date,
      assetId: this.selectedAsset._id
    }).subscribe({
      next: (res) => {
        this.detailsLoading = false;
        if (res.code === "OK" && res.data != null)
          this.detailsData = res.data;
      },
      error: () => {
        this.detailsLoading = false;
      }
    });
  }
  /** Open details popup for an order (full order) or fallback to date for basket items. */
  openDetailsByBar(slot, bar) {
    if (bar.orderId) {
      this.detailsKind = "order";
      this.detailsData = null;
      this.detailsLoading = true;
      this._coreService.modal.open(this.calendarDetailsModalId);
      this._apiFs.calendar.details({ type: "order", orderId: bar.orderId }).subscribe({
        next: (res) => {
          this.detailsLoading = false;
          if (res.code === "OK" && res.data != null) {
            this.detailsData = res.data;
          }
        },
        error: () => {
          this.detailsLoading = false;
        }
      });
    } else {
      this.openDetailsByDate(slot);
    }
  }
  closeDetails() {
    this._coreService.modal.close(this.calendarDetailsModalId);
    this.detailsData = null;
    this.detailsKind = null;
  }
  /** Images array of the selected asset (url, alt). */
  get selectedAssetImages() {
    return this.selectedAsset?.images ?? [];
  }
  /** First 2 images for thumbnail preview. */
  get assetImagesPreview() {
    return this.selectedAssetImages.slice(0, 2);
  }
  get hasAssetImages() {
    return this.selectedAssetImages.length > 0;
  }
  openAssetImages(index = 0) {
    this.assetImageIndex = index;
    this._coreService.modal.open(this.assetImagesModalId);
  }
  closeAssetImages() {
    this._coreService.modal.close(this.assetImagesModalId);
  }
  prevAssetImage() {
    const len = this.selectedAssetImages.length;
    if (len === 0)
      return;
    this.assetImageIndex = (this.assetImageIndex - 1 + len) % len;
  }
  nextAssetImage() {
    const len = this.selectedAssetImages.length;
    if (len === 0)
      return;
    this.assetImageIndex = (this.assetImageIndex + 1) % len;
  }
  ngOnDestroy() {
    this.clearRefreshTimer();
  }
  static \u0275fac = function Calendar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Calendar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Calendar, selectors: [["app-calendar"]], decls: 16, vars: 11, consts: [[1, "calendar-page"], [1, "calendar-page-header"], [1, "m-0"], [1, "d-flex", "flex-wrap", "gap-3", "align-items-center"], ["placeholder", "Select asset", "displayKey1", "title", "displayKey2", "propertyTitle", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "enableSameSelectRemove"], [1, "calendar-asset-thumbs"], [1, "calendar-asset-no-images", "text-muted", "small"], [1, "calendar-placeholder"], [1, "calendar-loading"], [1, "calendar-placeholder", "calendar-placeholder-empty"], ["bgLayer", "bg-gray-light", 3, "appRegisterModalLayer"], [1, "modal", "d-block", "calendar-asset-images-modal-wrap"], [1, "modal", "d-block", "calendar-details-modal-wrap"], ["type", "button", 1, "calendar-asset-thumb"], ["type", "button", 1, "calendar-asset-thumb", 3, "click"], ["defaultSrc", "images/placeholder.svg", 3, "appSrc", "alt"], ["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "opacity-25", "mb-3"], ["d", "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"], [1, "mb-0", "fs-6"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "mb-0", "text-muted", "small"], [1, "calendar-card"], [1, "calendar-range-header"], [1, "calendar-nav"], ["type", "button", 1, "calendar-nav-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16"], ["fill-rule", "evenodd", "d", "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], ["type", "button", 1, "calendar-nav-btn", "calendar-nav-btn-today", 3, "click"], ["fill-rule", "evenodd", "d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"], [1, "calendar-range-header-label"], [1, "calendar-view-toggle"], ["type", "button", 1, "calendar-view-tab", 3, "click"], [1, "calendar-grid"], [1, "calendar-row", "calendar-row-head"], [1, "calendar-cell", "calendar-cell-head"], [1, "calendar-row", "calendar-row-body"], [1, "calendar-cell", "calendar-cell-body", 3, "calendar-cell-today", "calendar-cell-stay-full", "calendar-cell-other-month"], [1, "calendar-legend"], [1, "legend-item"], [1, "legend-dot", "legend-dot-booked"], [1, "legend-dot", "legend-dot-pending"], [1, "legend-dot", "legend-dot-basket"], [1, "calendar-cell", "calendar-cell-body"], [1, "calendar-cell-inner"], [1, "calendar-cell-header"], [1, "calendar-bar-label", "calendar-bar-label-header"], [1, "calendar-day-num"], [1, "calendar-other-month-label"], ["role", "list", 1, "calendar-stay-bars"], ["role", "listitem", 3, "class", "calendar-stay-bar-start", "calendar-stay-bar-end"], [1, "calendar-cell-footer"], [1, "calendar-avail-muted"], ["role", "listitem", 3, "click"], [1, "calendar-stay-bar-label"], [1, "calendar-avail-badge"], [1, "action-wrap"], ["type", "button", 1, "calendar-cell-view-btn", 3, "click"], [1, "mb-0"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "calendar-asset-images-modal"], [1, "calendar-asset-images-modal-header"], [1, "calendar-asset-images-modal-title"], ["type", "button", "aria-label", "Close", 1, "calendar-details-modal-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], [1, "calendar-asset-images-modal-body"], [1, "calendar-asset-images-gallery"], ["type", "button", "aria-label", "Previous image", 1, "calendar-asset-images-nav", "calendar-asset-images-prev"], [1, "calendar-asset-images-main"], ["defaultSrc", "images/placeholder.svg", 1, "calendar-asset-images-img", 3, "appSrc", "alt"], [1, "calendar-asset-images-caption"], ["type", "button", "aria-label", "Next image", 1, "calendar-asset-images-nav", "calendar-asset-images-next"], [1, "calendar-asset-images-dots"], ["type", "button", "aria-label", "Previous image", 1, "calendar-asset-images-nav", "calendar-asset-images-prev", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], ["type", "button", "aria-label", "Next image", 1, "calendar-asset-images-nav", "calendar-asset-images-next", 3, "click"], ["d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"], ["type", "button", 1, "calendar-asset-images-dot", 3, "calendar-asset-images-dot-active"], ["type", "button", 1, "calendar-asset-images-dot", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable", "modal-lg"], [1, "modal-content", "calendar-details-modal"], [1, "calendar-details-modal-header"], [1, "calendar-details-modal-title"], [1, "modal-body", "calendar-details-modal-body"], [1, "calendar-details-loading"], [1, "calendar-details-date"], [1, "calendar-details-order"], [1, "calendar-details-modal-footer"], ["type", "button", 1, "calendar-details-btn-close", "ms-auto", 3, "click"], ["aria-hidden", "true", 1, "calendar-details-modal-title-icon"], [1, "calendar-details-loading-spinner"], [1, "calendar-details-loading-text"], [1, "calendar-details-section"], [1, "calendar-details-empty"], [1, "calendar-details-section-title"], [1, "calendar-details-section-dot", "calendar-details-section-dot-booked"], [1, "calendar-details-cards"], [1, "calendar-details-card", "calendar-details-card-booking"], [1, "calendar-details-card-head"], [1, "calendar-details-card-order"], [1, "calendar-details-badge"], [1, "calendar-details-card-meta"], [1, "calendar-details-meta-item"], [1, "calendar-details-meta-label"], [1, "calendar-details-meta-item", "calendar-details-meta-amount"], [1, "calendar-details-guest-block"], [1, "calendar-details-guest-name"], [1, "calendar-details-guest-dates"], [1, "calendar-details-guest-units"], [1, "calendar-details-guest-full"], [1, "calendar-details-detail-row"], [3, "href"], [1, "calendar-details-section-dot", "calendar-details-section-dot-queue"], [1, "calendar-details-card", "calendar-details-card-queue"], ["aria-hidden", "true", 1, "calendar-details-empty-icon"], [1, "calendar-details-order-summary"], [1, "calendar-details-order-meta"], [1, "calendar-details-order-amount"], [1, "calendar-details-customer"], [1, "calendar-details-card", "calendar-details-card-line"], [1, "calendar-details-customer-name"], [1, "text-capitalize"], [1, "calendar-details-line-amount"]], template: function Calendar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, " Booking Calendar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "app-common-dropdown", 4);
      \u0275\u0275listener("onSelect", function Calendar_Template_app_common_dropdown_onSelect_5_listener($event) {
        return ctx.onAssetSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, Calendar_Conditional_6_Template, 3, 0, "div", 5)(7, Calendar_Conditional_7_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, Calendar_Conditional_8_Template, 5, 0, "div", 7)(9, Calendar_Conditional_9_Template, 4, 0, "div", 8)(10, Calendar_Conditional_10_Template, 48, 7)(11, Calendar_Conditional_11_Template, 3, 1, "div", 9);
      \u0275\u0275elementStart(12, "app-modal-layer", 10);
      \u0275\u0275conditionalCreate(13, Calendar_Conditional_13_Template, 17, 7, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-modal-layer", 10);
      \u0275\u0275conditionalCreate(15, Calendar_Conditional_15_Template, 17, 2, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("selectedOption", ctx.selectedAsset)("optionsList", ctx.assetList)("filterKeys", \u0275\u0275pureFunction0(10, _c04))("enableSameSelectRemove", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedAsset && ctx.hasAssetImages ? 6 : ctx.selectedAsset && ctx.selectedAssetImages.length === 0 ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.selectedAsset ? 8 : ctx.loading ? 9 : ctx.calendarData && ctx.daySlots.length ? 10 : ctx.selectedAsset && !ctx.loading ? 11 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("appRegisterModalLayer", ctx.assetImagesModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.assetImagesModalId) && ctx.hasAssetImages ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.calendarDetailsModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.calendarDetailsModalId) ? 15 : -1);
    }
  }, dependencies: [
    FormsModule,
    AppSrc,
    CommonDropdown,
    ModalLayer,
    RegisterModalLayer,
    DatePipe,
    CurrencyPipe
  ], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body[_ngcontent-%COMP%]   .form-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-flex-row-gap[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .req-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%], \n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .limitation[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .textarea-limitation[_ngcontent-%COMP%] {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%] {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.calendar-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n}\n.calendar-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.calendar-page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.calendar-asset-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n}\n.calendar-asset-thumbs[_ngcontent-%COMP%]   .calendar-asset-thumb[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  display: block;\n  height: 60px;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.calendar-asset-thumbs[_ngcontent-%COMP%]   .calendar-asset-thumb[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.calendar-asset-thumbs[_ngcontent-%COMP%]   .calendar-asset-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.calendar-asset-thumbs[_ngcontent-%COMP%]   .calendar-asset-no-images[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-header[_ngcontent-%COMP%] {\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #fff;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-header[_ngcontent-%COMP%]   .calendar-asset-images-modal-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1.25rem;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-gallery[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n  min-height: 280px;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-gallery[_ngcontent-%COMP%]   .calendar-asset-images-nav[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 50%;\n  color: #475569;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  transition: background 0.2s ease, color 0.2s ease;\n  width: 40px;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-gallery[_ngcontent-%COMP%]   .calendar-asset-images-nav[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-gallery[_ngcontent-%COMP%]   .calendar-asset-images-main[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-align: center;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-gallery[_ngcontent-%COMP%]   .calendar-asset-images-main[_ngcontent-%COMP%]   .calendar-asset-images-img[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 320px;\n  max-width: 100%;\n  object-fit: cover;\n  width: 100%;\n  aspect-ratio: 16/9;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-gallery[_ngcontent-%COMP%]   .calendar-asset-images-main[_ngcontent-%COMP%]   .calendar-asset-images-caption[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8125rem;\n  margin: 0;\n  padding: 0.5rem 0.75rem;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-dots[_ngcontent-%COMP%]   .calendar-asset-images-dot[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50%;\n  background: #cbd5e1;\n  cursor: pointer;\n  height: 8px;\n  padding: 0;\n  transition: background 0.2s ease;\n  width: 8px;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-dots[_ngcontent-%COMP%]   .calendar-asset-images-dot[_ngcontent-%COMP%]:hover {\n  background: #94a3b8;\n}\n.calendar-asset-images-modal-wrap[_ngcontent-%COMP%]   .calendar-asset-images-modal[_ngcontent-%COMP%]   .calendar-asset-images-modal-body[_ngcontent-%COMP%]   .calendar-asset-images-dots[_ngcontent-%COMP%]   .calendar-asset-images-dot.calendar-asset-images-dot-active[_ngcontent-%COMP%] {\n  background: var(--bs-primary, #0d6efd);\n  transform: scale(1.2);\n}\n.calendar-placeholder[_ngcontent-%COMP%], \n.calendar-loading[_ngcontent-%COMP%] {\n  min-height: 280px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2.5rem;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);\n  color: #64748b;\n}\n.calendar-placeholder-empty[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.calendar-loading[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #e2e8f0;\n}\n.calendar-range-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0.75rem 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-bottom: 1px solid #e2e8f0;\n  color: #334155;\n}\n.calendar-range-header[_ngcontent-%COMP%]   .calendar-nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.calendar-range-header[_ngcontent-%COMP%]   .calendar-range-header-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #1e293b;\n}\n.calendar-range-header[_ngcontent-%COMP%]   .calendar-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.calendar-nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.25rem;\n  height: 2.25rem;\n  padding: 0 0.5rem;\n  border: 1px solid rgba(var(--bs-primary-rgb, 13, 110, 253), 0.4);\n  border-radius: 9999px;\n  background: #fff;\n  color: var(--bs-primary, #0d6efd);\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s,\n    transform 0.15s;\n}\n.calendar-nav-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n  border-color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 2px 8px rgba(var(--bs-primary-rgb, 13, 110, 253), 0.2);\n}\n.calendar-nav-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.calendar-nav-btn.calendar-nav-btn-today[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n}\n.calendar-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px;\n  border-radius: 9999px;\n  background: #e2e8f0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\n}\n.calendar-view-tab[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  border: none;\n  border-radius: 9999px;\n  background: transparent;\n  color: #64748b;\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition:\n    background 0.2s,\n    color 0.2s,\n    box-shadow 0.2s;\n}\n.calendar-view-tab[_ngcontent-%COMP%]:hover:not(.calendar-view-tab-active) {\n  color: #475569;\n  background: rgba(255, 255, 255, 0.7);\n}\n.calendar-view-tab.calendar-view-tab-active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.calendar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  gap: 0;\n  width: 100%;\n}\n.calendar-row-head[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-bottom: 2px solid #e2e8f0;\n}\n.calendar-cell[_ngcontent-%COMP%] {\n  min-width: 0;\n  border-right: 1px solid #e2e8f0;\n  padding: 0.75rem;\n}\n.calendar-cell[_ngcontent-%COMP%]:nth-child(7n) {\n  border-right: none;\n}\n.calendar-cell-head[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #475569;\n}\n.calendar-cell-head.calendar-cell-today[_ngcontent-%COMP%] {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-day-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 0.2rem;\n  color: #64748b;\n}\n.calendar-row-body[_ngcontent-%COMP%]   .calendar-cell[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.calendar-cell-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  cursor: default;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n}\n.calendar-cell-body[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  z-index: 1;\n  cursor: pointer;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);\n}\n.calendar-cell-body.calendar-cell-today[_ngcontent-%COMP%] {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.04);\n  box-shadow: inset 3px 0 0 0 var(--bs-primary, #0d6efd);\n}\n.calendar-cell-body.calendar-cell-today[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n}\n.calendar-cell-body.calendar-cell-stay-full[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.06);\n  box-shadow: inset 3px 0 0 0 #b91c1c;\n}\n.calendar-cell-body.calendar-cell-stay-full[_ngcontent-%COMP%]:hover {\n  background: rgba(185, 28, 28, 0.1);\n}\n.calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%]   .calendar-cell-header[_ngcontent-%COMP%]   .calendar-day-num[_ngcontent-%COMP%], \n.calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%]   .calendar-stats[_ngcontent-%COMP%], \n.calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%]   .calendar-bar-label[_ngcontent-%COMP%], \n.calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%]   .calendar-avail[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  opacity: 0.85;\n}\n.calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%]   .calendar-bar[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n.calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.calendar-other-month-label-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0.15rem;\n}\n.calendar-other-month-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: #94a3b8;\n}\n.calendar-cell-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.35rem;\n  min-height: 1.5rem;\n}\n.calendar-cell-header[_ngcontent-%COMP%]   .calendar-day-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.calendar-cell-header[_ngcontent-%COMP%]   .calendar-bar-label-header[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.calendar-cell-header[_ngcontent-%COMP%]   .calendar-bar-label-header.calendar-bar-label-header-full[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 700;\n}\n.calendar-stay-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-height: 0;\n  flex: 1;\n  min-width: 0;\n}\n.calendar-stay-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 22px;\n  padding: 3px 8px;\n  border-radius: 0;\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n}\n.calendar-stay-bar.calendar-stay-bar-start[_ngcontent-%COMP%] {\n  border-radius: 1rem 0 0 1rem;\n}\n.calendar-stay-bar.calendar-stay-bar-end[_ngcontent-%COMP%] {\n  border-radius: 0 1rem 1rem 0;\n}\n.calendar-stay-bar.calendar-stay-bar-start.calendar-stay-bar-end[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n.calendar-stay-bar.calendar-stay-bar-booked[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #15803d 0%,\n      #22c55e 100%);\n}\n.calendar-stay-bar.calendar-stay-bar-pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #3b82f6 100%);\n}\n.calendar-stay-bar.calendar-stay-bar-basket[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #c2410c 0%,\n      #ea580c 100%);\n}\n.calendar-stay-bar-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.calendar-cell-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.35rem;\n  margin-top: auto;\n  min-height: 1.25rem;\n}\n.calendar-stay-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  font-size: 0.7rem;\n}\n.calendar-day-other-month[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-weight: 500;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-row-head[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-bottom: 2px solid #cbd5e1;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-head-week[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.15rem;\n  padding: 0.85rem 0.5rem;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-head-week.calendar-cell-today[_ngcontent-%COMP%] {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.12);\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-head-week.calendar-cell-today[_ngcontent-%COMP%]   .calendar-day-name[_ngcontent-%COMP%] {\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-day-name[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-day-num-head[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-row-body[_ngcontent-%COMP%]   .calendar-cell-body[_ngcontent-%COMP%] {\n  min-height: 200px;\n  padding: 0.75rem 0.65rem;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-inner[_ngcontent-%COMP%] {\n  min-height: 100%;\n  gap: 0.65rem;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  min-height: auto;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-occupancy-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem 0.65rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #475569;\n  background: #f1f5f9;\n  border-radius: 9999px;\n  border: 1px solid #e2e8f0;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-occupancy-pill.calendar-occupancy-pill-full[_ngcontent-%COMP%] {\n  color: #991b1b;\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-stay-bars[_ngcontent-%COMP%] {\n  gap: 6px;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-stay-bar[_ngcontent-%COMP%] {\n  min-height: 28px;\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-footer[_ngcontent-%COMP%] {\n  padding-top: 0.35rem;\n  border-top: 1px solid #f1f5f9;\n  align-items: center;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-avail-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  background: #ecfdf5;\n  color: #047857;\n  border: 1px solid #a7f3d0;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-avail-badge.calendar-avail-badge-zero[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgba(var(--bs-primary-rgb, 13, 110, 253), 0.35);\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--bs-primary, #0d6efd);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-view-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  opacity: 0.85;\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-view-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n  border-color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 2px 8px rgba(var(--bs-primary-rgb, 13, 110, 253), 0.15);\n}\n.calendar-grid-week[_ngcontent-%COMP%]   .calendar-cell-view-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--bs-primary, #0d6efd);\n  outline-offset: 2px;\n}\n.calendar-avail-muted[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.calendar-avail-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  line-height: normal;\n  padding: 0.15rem 0.4rem;\n  border-radius: 4px;\n  background: #ecfdf5;\n  color: #047857;\n  border: 1px solid #a7f3d0;\n}\n.calendar-avail-badge.calendar-avail-badge-zero[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.action-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.action-wrap[_ngcontent-%COMP%]   .calendar-cell-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.4rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: #f8fafc;\n  font-size: 0.6rem;\n  font-weight: 500;\n  line-height: normal;\n  color: var(--bs-primary, #0d6efd);\n  cursor: pointer;\n}\n.action-wrap[_ngcontent-%COMP%]   .calendar-cell-view-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-cell-head[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.25rem;\n  font-size: 0.75rem;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-cell-body[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-cell-body.calendar-cell-empty[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-cell-body.calendar-cell-other-month[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-cell-header[_ngcontent-%COMP%]   .calendar-day-num[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-cell-inner[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n  gap: 0.25rem;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-stay-bar[_ngcontent-%COMP%] {\n  min-height: 18px;\n  padding: 2px 6px;\n  font-size: 0.6rem;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-stat[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-bar[_ngcontent-%COMP%] {\n  height: 6px;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-bar-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-avail[_ngcontent-%COMP%], \n.calendar-grid-month[_ngcontent-%COMP%]   .calendar-full[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.calendar-cell-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.35rem 0;\n  animation: insetBlink 2s ease-in-out infinite;\n}\n.calendar-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.calendar-stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.calendar-stat-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.calendar-stat-booked[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.calendar-stat-booked[_ngcontent-%COMP%]   .calendar-stat-dot[_ngcontent-%COMP%] {\n  background: #0d9488;\n}\n.calendar-stat-basket[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.calendar-stat-basket[_ngcontent-%COMP%]   .calendar-stat-dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.calendar-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.calendar-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n}\n.calendar-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 0;\n  transition: width 0.2s ease;\n}\n.calendar-bar-booked[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #0d9488 0%,\n      #14b8a6 100%);\n}\n.calendar-bar-basket[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #d97706 0%,\n      #f59e0b 100%);\n}\n.calendar-bar-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.calendar-avail[_ngcontent-%COMP%], \n.calendar-full[_ngcontent-%COMP%] {\n  display: block;\n}\n.calendar-full[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 600;\n}\n.calendar-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1.5rem;\n  margin-top: 1.25rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.calendar-legend[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.calendar-legend[_ngcontent-%COMP%]   .legend-dot-booked[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.calendar-legend[_ngcontent-%COMP%]   .legend-dot-pending[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.calendar-legend[_ngcontent-%COMP%]   .legend-dot-basket[_ngcontent-%COMP%] {\n  background: #ea580c;\n}\n.calendar-details-modal-wrap[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n.calendar-details-modal[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.18), 0 12px 24px rgba(15, 23, 42, 0.12);\n}\n.calendar-details-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #fff;\n}\n.calendar-details-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.3;\n}\n.calendar-details-modal-title-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 0.95;\n}\n.calendar-details-modal-close[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border: none;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.15s ease;\n}\n.calendar-details-modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.calendar-details-modal-close[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.calendar-details-modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: #f8fafc;\n}\n.calendar-details-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n}\n.calendar-details-loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: var(--bs-primary, #0d6efd);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_calendar-details-spin 0.8s linear infinite;\n}\n.calendar-details-loading-text[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n@keyframes _ngcontent-%COMP%_calendar-details-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.calendar-details-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.calendar-details-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.calendar-details-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 0 0.75rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #475569;\n}\n.calendar-details-section-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-details-section-dot-booked[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);\n}\n.calendar-details-section-dot-queue[_ngcontent-%COMP%] {\n  background: #ea580c;\n  box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.3);\n}\n.calendar-details-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.calendar-details-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n}\n.calendar-details-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.calendar-details-card-booking[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.calendar-details-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.calendar-details-card-order[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.6rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-radius: 6px;\n  background: #f1f5f9;\n  color: #475569;\n}\n.calendar-details-badge.calendar-details-badge-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #166534;\n}\n.calendar-details-badge.calendar-details-badge-pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #1e40af;\n}\n.calendar-details-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem 1.5rem;\n}\n.calendar-details-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-details-meta-item.calendar-details-meta-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-meta-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #94a3b8;\n}\n.calendar-details-guest-block[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border-left: 3px solid var(--bs-primary, #0d6efd);\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.calendar-details-guest-name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.calendar-details-guest-dates[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.calendar-details-guest-units[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-details-guest-full[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.calendar-details-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 0.35rem 0.75rem;\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-details-detail-row[_ngcontent-%COMP%]   .calendar-details-meta-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  min-width: 4rem;\n}\n.calendar-details-detail-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--bs-primary, #0d6efd);\n  text-decoration: none;\n  word-break: break-all;\n}\n.calendar-details-detail-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.calendar-details-card-queue[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  border-left: 3px solid #ea580c;\n}\n.calendar-details-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem 1.5rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px dashed #cbd5e1;\n  color: #64748b;\n}\n.calendar-details-empty[_ngcontent-%COMP%]   .calendar-details-empty-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n.calendar-details-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n}\n.calendar-details-order-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem 1.25rem;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.calendar-details-order-meta[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.calendar-details-order-amount[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-customer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.calendar-details-customer-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.calendar-details-card-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.calendar-details-card-line[_ngcontent-%COMP%]   .calendar-details-line-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n}\n.calendar-details-btn-close[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    color 0.2s ease;\n}\n.calendar-details-btn-close[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n/*# sourceMappingURL=calendar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Calendar, [{
    type: Component,
    args: [{ selector: "app-calendar", imports: [
      FormsModule,
      DatePipe,
      CurrencyPipe,
      AppSrc,
      CommonDropdown,
      ModalLayer,
      RegisterModalLayer
    ], template: `<div class="calendar-page">
  <div class="calendar-page-header">
    <h4 class="m-0">
      Booking Calendar
    </h4>

    <div class="d-flex flex-wrap gap-3 align-items-center">
      <app-common-dropdown [selectedOption]="selectedAsset" [optionsList]="assetList" placeholder="Select asset"
        [filterKeys]="['title', 'propertyTitle']" displayKey1="title" displayKey2="propertyTitle"
        [enableSameSelectRemove]="true" (onSelect)="onAssetSelected($event)">
      </app-common-dropdown>

      @if (selectedAsset && hasAssetImages) {
      <div class="calendar-asset-thumbs">
        @for (img of assetImagesPreview; track img.url; let i = $index) {
        <button type="button" class="calendar-asset-thumb" (click)="openAssetImages(i)">
          <img [appSrc]="img.url" [alt]="img.alt || ''" defaultSrc="images/placeholder.svg" />
        </button>
        }
      </div>
      } @else if (selectedAsset && selectedAssetImages.length === 0) {
      <span class="calendar-asset-no-images text-muted small">
        No images
      </span>
      }
    </div>
  </div>

  @if (!selectedAsset) {
  <div class="calendar-placeholder">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="opacity-25 mb-3"
      viewBox="0 0 16 16">
      <path
        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
    </svg>
    <p class="mb-0 fs-6">
      Select an asset to view its booking calendar
    </p>
  </div>
  } @else if (loading) {
  <div class="calendar-loading">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-2 mb-0 text-muted small">
      Loading calendar\u2026
    </p>
  </div>
  } @else if (calendarData && daySlots.length) {
  <div class="calendar-card" [class.calendar-grid-month]="viewType === 'monthly'">
    <div class="calendar-range-header">
      <div class="calendar-nav">
        <button type="button" class="calendar-nav-btn" (click)="prevPeriod()">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>
        <button type="button" class="calendar-nav-btn calendar-nav-btn-today" (click)="goToToday()">
          Today
        </button>
        <button type="button" class="calendar-nav-btn" (click)="nextPeriod()">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      <span class="calendar-range-header-label">
        @if (viewType === 'weekly') {
        {{ weekStart | date:'d MMM' }} \u2013 {{ weekEnd | date:'d MMM yyyy' }}
        } @else {
        {{ monthYearLabel }}
        }
      </span>
      <div class="calendar-view-toggle">
        <button type="button" class="calendar-view-tab" (click)="setViewType('weekly')"
          [class.calendar-view-tab-active]="viewType === 'weekly'">
          Week
        </button>
        <button type="button" class="calendar-view-tab" (click)="setViewType('monthly')"
          [class.calendar-view-tab-active]="viewType === 'monthly'">
          Month
        </button>
      </div>
    </div>

    <div class="calendar-grid">
      <div class="calendar-row calendar-row-head">
        <div class="calendar-cell calendar-cell-head">Mon</div>
        <div class="calendar-cell calendar-cell-head">Tue</div>
        <div class="calendar-cell calendar-cell-head">Wed</div>
        <div class="calendar-cell calendar-cell-head">Thu</div>
        <div class="calendar-cell calendar-cell-head">Fri</div>
        <div class="calendar-cell calendar-cell-head">Sat</div>
        <div class="calendar-cell calendar-cell-head">Sun</div>
      </div>

      <div class="calendar-row calendar-row-body">
        @for (slot of daySlots; track slot.date; let idx = $index;) {
        <div class="calendar-cell calendar-cell-body" [class.calendar-cell-today]="slot.isToday"
          [class.calendar-cell-stay-full]="isStayFull(slot)" [class.calendar-cell-other-month]="slot.isOtherMonth">
          <div class="calendar-cell-inner">
            <div class="calendar-cell-header">
              <span class="calendar-bar-label calendar-bar-label-header"
                [class.calendar-bar-label-header-full]="slot.totalQuantity > 0 && usedUnits(slot) >= slot.totalQuantity">
                {{usedUnits(slot)}}/{{slot.totalQuantity}}
              </span>
              <span class="calendar-day-num" [class.text-primary]="slot.isToday"
                [class.calendar-day-other-month]="slot.isOtherMonth">
                @if (slot.otherMonthLabel) {
                <span class="calendar-other-month-label">
                  {{ slot.otherMonthLabel }}
                </span>
                }
                {{ slot.dayOfMonth }}
              </span>
            </div>
            <div class="calendar-stay-bars" role="list">
              @for (bar of slot.stayBars; track $index) {
              <div class="calendar-stay-bar calendar-stay-bar-{{ bar.type }}"
                [class.calendar-stay-bar-start]="bar.isStart" [class.calendar-stay-bar-end]="bar.isEnd" role="listitem"
                (click)="$event.stopPropagation(); openDetailsByBar(slot, bar)">
                <span class="calendar-stay-bar-label">
                  {{bar.label}}
                </span>
              </div>
              }
            </div>
            <div class="calendar-cell-footer">
              @if (slot.isOtherMonth) {
              <span class="calendar-avail-muted">\u2014</span>
              } @else {
              <span class="calendar-avail-badge" [class.calendar-avail-badge-zero]="availableUnits(slot) === 0">
                @if (availableUnits(slot) > 0) {
                {{availableUnits(slot)}} free
                } @else {
                Full
                }
              </span>
              <div class="action-wrap">
                <button type="button" class="calendar-cell-view-btn"
                  (click)="$event.stopPropagation(); openDetailsByDate(slot)">
                  View
                </button>
              </div>
              }
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  </div>

  <!-- Legend for the calendar -->
  <div class="calendar-legend">
    <span class="legend-item"><span class="legend-dot legend-dot-booked"></span> Booked</span>
    <span class="legend-item"><span class="legend-dot legend-dot-pending"></span> Processing</span>
    <span class="legend-item"><span class="legend-dot legend-dot-basket"></span> In queue</span>
  </div>
  } @else if (selectedAsset && !loading) {
  <div class="calendar-placeholder calendar-placeholder-empty">
    <p class="mb-0">
      No data for this {{ viewType === 'weekly' ? 'week' : 'month' }}.
    </p>
  </div>
  }



  <!-- Asset images gallery modal -->
  <app-modal-layer [appRegisterModalLayer]="assetImagesModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(assetImagesModalId) && hasAssetImages) {
    <div class="modal d-block calendar-asset-images-modal-wrap">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content calendar-asset-images-modal">
          <div class="calendar-asset-images-modal-header">
            <h2 class="calendar-asset-images-modal-title">
              {{ selectedAsset?.title }} \u2013 Images
            </h2>
            <button type="button" class="calendar-details-modal-close" (click)="closeAssetImages()" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
          <div class="calendar-asset-images-modal-body">
            <div class="calendar-asset-images-gallery">
              @if (selectedAssetImages.length > 1) {
              <button type="button" class="calendar-asset-images-nav calendar-asset-images-prev"
                (click)="prevAssetImage()" aria-label="Previous image">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </button>
              }
              <div class="calendar-asset-images-main">
                <img [appSrc]="selectedAssetImages[assetImageIndex].url"
                  [alt]="selectedAssetImages[assetImageIndex].alt || ''" defaultSrc="images/placeholder.svg"
                  class="calendar-asset-images-img" />
                @if (selectedAssetImages[assetImageIndex].alt) {
                <p class="calendar-asset-images-caption">{{ selectedAssetImages[assetImageIndex].alt }}</p>
                }
              </div>
              @if (selectedAssetImages.length > 1) {
              <button type="button" class="calendar-asset-images-nav calendar-asset-images-next"
                (click)="nextAssetImage()" aria-label="Next image">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
              }
            </div>
            @if (selectedAssetImages.length > 1) {
            <div class="calendar-asset-images-dots">
              @for (img of selectedAssetImages; track img.url; let i = $index) {
              <button type="button" class="calendar-asset-images-dot"
                [class.calendar-asset-images-dot-active]="i === assetImageIndex" (click)="assetImageIndex = i"
                [attr.aria-label]="'Image ' + (i + 1)"></button>
              }
            </div>
            }
          </div>
        </div>
      </div>
    </div>
    }
  </app-modal-layer>

  <!-- Calendar details popup modal -->
  <app-modal-layer [appRegisterModalLayer]="calendarDetailsModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(calendarDetailsModalId)) {
    <div class="modal d-block calendar-details-modal-wrap">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content calendar-details-modal">
          <div class="calendar-details-modal-header">
            <h2 class="calendar-details-modal-title">
              @if (detailsKind === 'date') {
              <span class="calendar-details-modal-title-icon" aria-hidden="true">\u{1F4C5}</span>
              Booking details{{ detailsData?.date ? (' \u2013 ' + (detailsData.date | date:'fullDate')) : '' }}
              } @else {
              <span class="calendar-details-modal-title-icon" aria-hidden="true">\u{1F4CB}</span>
              {{ detailsData?.orderNo != null ? ('Order #' + detailsData.orderNo) : 'Order details' }}
              }
            </h2>
            <button type="button" class="calendar-details-modal-close" (click)="closeDetails()" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
          <div class="modal-body calendar-details-modal-body">
            @if (detailsLoading) {
            <div class="calendar-details-loading">
              <div class="calendar-details-loading-spinner"></div>
              <p class="calendar-details-loading-text">Loading details\u2026</p>
            </div>
            } @else if (detailsKind === 'date' && detailsData) {
            <div class="calendar-details-date">
              @if ((detailsData.bookings?.length ?? 0) > 0) {
              <section class="calendar-details-section">
                <h3 class="calendar-details-section-title">
                  <span class="calendar-details-section-dot calendar-details-section-dot-booked"></span>
                  Bookings
                </h3>
                <div class="calendar-details-cards">
                  @for (order of detailsData.bookings; track order.orderId) {
                  <article class="calendar-details-card calendar-details-card-booking">
                    <div class="calendar-details-card-head">
                      <span class="calendar-details-card-order">
                        Order #{{ order.orderNo }}
                      </span>
                      <span class="calendar-details-badge"
                        [class.calendar-details-badge-success]="order.status === 'success'"
                        [class.calendar-details-badge-pending]="order.status === 'pending'">
                        {{order.status}}
                      </span>
                    </div>
                    <div class="calendar-details-card-meta">
                      <span class="calendar-details-meta-item">
                        <span class="calendar-details-meta-label">Order date</span>
                        <span>{{ order.orderDate | date:'mediumDate' }}</span>
                      </span>
                      <span class="calendar-details-meta-item calendar-details-meta-amount">
                        <span class="calendar-details-meta-label">Amount</span>
                        <span>{{ order.amountToPay | currency:'INR' }}</span>
                      </span>
                    </div>
                    @for (item of order.lineItems; track $index) {
                    <div class="calendar-details-guest-block">
                      <span class="calendar-details-guest-name">
                        {{ item.guestDetails?.guestName ?? 'Guest' }}
                      </span>
                      <span class="calendar-details-guest-dates">
                        {{item.startDate|date:'shortDate'}} \u2013 {{item.endDate|date:'shortDate'}}
                      </span>
                      <span class="calendar-details-guest-units">
                        {{ item.units }} unit(s) \xB7 {{item.amountToPay|currency:'INR'}}
                      </span>
                      @if (item.guestDetails) {
                      <div class="calendar-details-guest-full">
                        @if (item.guestDetails.email) {
                        <span class="calendar-details-detail-row">
                          <span class="calendar-details-meta-label">Email</span>
                          <a [href]="'mailto:' + item.guestDetails.email">
                            {{item.guestDetails.email}}
                          </a>
                        </span>
                        }
                        @if (item.guestDetails.phone) {
                        <span class="calendar-details-detail-row">
                          <span class="calendar-details-meta-label">Phone</span>
                          <a [href]="'tel:' + item.guestDetails.phone">
                            {{item.guestDetails.phone}}
                          </a>
                        </span>
                        }
                        @if (item.guestDetails.address) {
                        <span class="calendar-details-detail-row">
                          <span class="calendar-details-meta-label">Address</span>
                          {{ item.guestDetails.address }}
                        </span>
                        }
                      </div>
                      }
                    </div>
                    }
                  </article>
                  }
                </div>
              </section>
              }
              @if ((detailsData.basketItems?.length ?? 0) > 0) {
              <section class="calendar-details-section">
                <h3 class="calendar-details-section-title">
                  <span class="calendar-details-section-dot calendar-details-section-dot-queue"></span>
                  In queue
                </h3>
                <div class="calendar-details-cards">
                  @for (item of detailsData.basketItems; track item.uid) {
                  <article class="calendar-details-card calendar-details-card-queue">
                    <span class="calendar-details-guest-name">
                      {{item.guest?.guestName ?? 'Guest' }}
                    </span>
                    <span class="calendar-details-guest-dates">
                      {{item.startDate|date:'shortDate'}} \u2013 {{item.endDate|date:'shortDate'}}
                    </span>
                    <span class="calendar-details-guest-units">
                      {{item.units }} unit(s)
                    </span>
                    @if (item.guest) {
                    <div class="calendar-details-guest-full">
                      @if (item.guest.email) {
                      <span class="calendar-details-detail-row">
                        <span class="calendar-details-meta-label">Email</span>
                        <a [href]="'mailto:' + item.guest.email">
                          {{item.guest.email}}
                        </a>
                      </span>
                      }
                      @if (item.guest.phone) {
                      <span class="calendar-details-detail-row">
                        <span class="calendar-details-meta-label">Phone</span>
                        <a [href]="'tel:' + item.guest.phone">
                          {{item.guest.phone }}
                        </a>
                      </span>
                      }
                    </div>
                    }
                    @if (item.issuedAt) {
                    <span class="calendar-details-meta-item">
                      <span class="calendar-details-meta-label">Added</span>
                      {{item.issuedAt|date:'medium'}}
                    </span>
                    }
                  </article>
                  }
                </div>
              </section>
              }
              @if ((detailsData.bookings?.length ?? 0) === 0 && (detailsData.basketItems?.length ?? 0) === 0) {
              <div class="calendar-details-empty">
                <span class="calendar-details-empty-icon" aria-hidden="true">\u{1F4ED}</span>
                <p>No bookings or items in queue for this day.</p>
              </div>
              }
            </div>
            } @else if (detailsKind === 'order' && detailsData) {
            <div class="calendar-details-order">
              <div class="calendar-details-order-summary">
                <span class="calendar-details-badge"
                  [class.calendar-details-badge-success]="detailsData.status === 'success'"
                  [class.calendar-details-badge-pending]="detailsData.status === 'pending'">
                  {{ detailsData.status}}
                </span>
                <span class="calendar-details-order-meta">
                  Order date: {{detailsData.orderDate|date:'mediumDate'}}
                </span>
                <span class="calendar-details-order-amount">
                  {{detailsData.amountToPay|currency:'INR'}}
                </span>
              </div>
              @if (detailsData.userId) {
              <div class="calendar-details-customer">
                <span class="calendar-details-meta-label">Customer</span>
                <span class="calendar-details-customer-name">
                  {{detailsData.userId?.fullname}}
                </span>
                <div class="calendar-details-guest-full">
                  @if (detailsData.userId.email) {
                  <span class="calendar-details-detail-row">
                    <span class="calendar-details-meta-label">Email</span>
                    <a [href]="'mailto:' + detailsData.userId.email">
                      {{detailsData.userId.email}}
                    </a>
                  </span>
                  }
                  @if (detailsData.userId.mobile) {
                  <span class="calendar-details-detail-row">
                    <span class="calendar-details-meta-label">Phone</span>
                    <a [href]="'tel:' + detailsData.userId.mobile">
                      {{detailsData.userId.mobile}}
                    </a>
                  </span>
                  }
                </div>
              </div>
              }
              <section class="calendar-details-section">
                <h3 class="calendar-details-section-title">
                  Line items
                </h3>
                <div class="calendar-details-cards">
                  @for (item of detailsData.lineItems; track $index) {
                  <article class="calendar-details-card calendar-details-card-line">
                    <div class="calendar-details-card-head">
                      <span class="text-capitalize">
                        {{item.assetId?.title ?? 'Asset'}}
                      </span>
                      <span class="calendar-details-line-amount">
                        {{item.amountToPay|currency:'INR'}}
                      </span>
                    </div>
                    <span class="calendar-details-guest-dates">
                      {{item.startDate|date:'shortDate'}} \u2013 {{item.endDate|date:'shortDate'}} \xB7 {{item.units}} unit(s)
                    </span>
                    @if (item.guestDetails) {
                    <div class="calendar-details-guest-full">
                      <span class="calendar-details-guest-name">
                        {{item.guestDetails.guestName}}
                      </span>
                      @if (item.guestDetails.email) {
                      <span class="calendar-details-detail-row">
                        <span class="calendar-details-meta-label">Email</span>
                        <a [href]="'mailto:' + item.guestDetails.email">{{ item.guestDetails.email }}</a>
                      </span>
                      }
                      @if (item.guestDetails.phone) {
                      <span class="calendar-details-detail-row">
                        <span class="calendar-details-meta-label">Phone</span>
                        <a [href]="'tel:' + item.guestDetails.phone">{{ item.guestDetails.phone }}</a>
                      </span>
                      }
                      @if (item.guestDetails.address) {
                      <span class="calendar-details-detail-row">
                        <span class="calendar-details-meta-label">Address</span>
                        {{ item.guestDetails.address }}
                      </span>
                      }
                    </div>
                    }
                  </article>
                  }
                </div>
              </section>
            </div>
            }
          </div>
          <div class="calendar-details-modal-footer">
            <button type="button" class="calendar-details-btn-close ms-auto" (click)="closeDetails()">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    }
  </app-modal-layer>
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n/* src/app/pages/calendar/calendar.scss */\n:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body .form-flex-row {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body .input-group {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body .input-group .form-flex-row-gap {\n  gap: 2px;\n}\n.form-body .input-group .input-label {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body .input-group .req-indicator {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body .input-group .optional,\n.form-body .input-group .limitation {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body .input-group .info-icon-wrap {\n  flex-shrink: 0;\n}\n.form-body .input-group .info-icon-wrap .info-icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body .input-group .input-wrap {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body .input-group .input-wrap .input-field {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-wrap .input-field::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-textarea-group .input-textarea {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-scrollbar {\n  display: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .textarea-limitation {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body .input-group .error-wrap {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body .input-group .error-wrap .error-msg {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.calendar-page {\n  width: 100%;\n  max-width: 100%;\n}\n.calendar-page-header {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.calendar-page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.calendar-asset-thumbs {\n  display: flex;\n  gap: 0.35rem;\n}\n.calendar-asset-thumbs .calendar-asset-thumb {\n  margin: 0;\n  padding: 0;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  display: block;\n  height: 60px;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.calendar-asset-thumbs .calendar-asset-thumb:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.calendar-asset-thumbs .calendar-asset-thumb img {\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.calendar-asset-thumbs .calendar-asset-no-images {\n  font-size: 0.8125rem;\n}\n.calendar-asset-images-modal-wrap .modal-dialog {\n  max-width: 560px;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal {\n  border: none;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-header {\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #fff;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-header .calendar-asset-images-modal-title {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body {\n  background: #f8fafc;\n  padding: 1.25rem;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-gallery {\n  align-items: center;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n  min-height: 280px;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-gallery .calendar-asset-images-nav {\n  align-items: center;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 50%;\n  color: #475569;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  transition: background 0.2s ease, color 0.2s ease;\n  width: 40px;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-gallery .calendar-asset-images-nav:hover {\n  background: #f1f5f9;\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-gallery .calendar-asset-images-main {\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-align: center;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-gallery .calendar-asset-images-main .calendar-asset-images-img {\n  display: block;\n  max-height: 320px;\n  max-width: 100%;\n  object-fit: cover;\n  width: 100%;\n  aspect-ratio: 16/9;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-gallery .calendar-asset-images-main .calendar-asset-images-caption {\n  color: #64748b;\n  font-size: 0.8125rem;\n  margin: 0;\n  padding: 0.5rem 0.75rem;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-dots {\n  display: flex;\n  gap: 0.35rem;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-dots .calendar-asset-images-dot {\n  border: none;\n  border-radius: 50%;\n  background: #cbd5e1;\n  cursor: pointer;\n  height: 8px;\n  padding: 0;\n  transition: background 0.2s ease;\n  width: 8px;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-dots .calendar-asset-images-dot:hover {\n  background: #94a3b8;\n}\n.calendar-asset-images-modal-wrap .calendar-asset-images-modal .calendar-asset-images-modal-body .calendar-asset-images-dots .calendar-asset-images-dot.calendar-asset-images-dot-active {\n  background: var(--bs-primary, #0d6efd);\n  transform: scale(1.2);\n}\n.calendar-placeholder,\n.calendar-loading {\n  min-height: 280px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2.5rem;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);\n  color: #64748b;\n}\n.calendar-placeholder-empty {\n  text-align: center;\n}\n.calendar-loading .spinner-border {\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-card {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #e2e8f0;\n}\n.calendar-range-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0.75rem 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-bottom: 1px solid #e2e8f0;\n  color: #334155;\n}\n.calendar-range-header .calendar-nav {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.calendar-range-header .calendar-range-header-label {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #1e293b;\n}\n.calendar-range-header .calendar-view-toggle {\n  display: inline-flex;\n}\n.calendar-nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.25rem;\n  height: 2.25rem;\n  padding: 0 0.5rem;\n  border: 1px solid rgba(var(--bs-primary-rgb, 13, 110, 253), 0.4);\n  border-radius: 9999px;\n  background: #fff;\n  color: var(--bs-primary, #0d6efd);\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s,\n    transform 0.15s;\n}\n.calendar-nav-btn:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n  border-color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 2px 8px rgba(var(--bs-primary-rgb, 13, 110, 253), 0.2);\n}\n.calendar-nav-btn:active {\n  transform: scale(0.97);\n}\n.calendar-nav-btn.calendar-nav-btn-today {\n  padding: 0 0.75rem;\n}\n.calendar-view-toggle {\n  display: inline-flex;\n  padding: 4px;\n  border-radius: 9999px;\n  background: #e2e8f0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\n}\n.calendar-view-tab {\n  padding: 0.4rem 1rem;\n  border: none;\n  border-radius: 9999px;\n  background: transparent;\n  color: #64748b;\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition:\n    background 0.2s,\n    color 0.2s,\n    box-shadow 0.2s;\n}\n.calendar-view-tab:hover:not(.calendar-view-tab-active) {\n  color: #475569;\n  background: rgba(255, 255, 255, 0.7);\n}\n.calendar-view-tab.calendar-view-tab-active {\n  background: #fff;\n  color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);\n}\n.calendar-grid {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.calendar-row {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  gap: 0;\n  width: 100%;\n}\n.calendar-row-head {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-bottom: 2px solid #e2e8f0;\n}\n.calendar-cell {\n  min-width: 0;\n  border-right: 1px solid #e2e8f0;\n  padding: 0.75rem;\n}\n.calendar-cell:nth-child(7n) {\n  border-right: none;\n}\n.calendar-cell-head {\n  text-align: center;\n  padding: 0.75rem 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #475569;\n}\n.calendar-cell-head.calendar-cell-today {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-day-name {\n  display: block;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 0.2rem;\n  color: #64748b;\n}\n.calendar-row-body .calendar-cell {\n  padding: 0.5rem;\n}\n.calendar-cell-body {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  cursor: default;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n}\n.calendar-cell-body:hover {\n  background: #f8fafc;\n  z-index: 1;\n  cursor: pointer;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);\n}\n.calendar-cell-body.calendar-cell-today {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.04);\n  box-shadow: inset 3px 0 0 0 var(--bs-primary, #0d6efd);\n}\n.calendar-cell-body.calendar-cell-today:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n}\n.calendar-cell-body.calendar-cell-stay-full {\n  background: rgba(185, 28, 28, 0.06);\n  box-shadow: inset 3px 0 0 0 #b91c1c;\n}\n.calendar-cell-body.calendar-cell-stay-full:hover {\n  background: rgba(185, 28, 28, 0.1);\n}\n.calendar-cell-body.calendar-cell-other-month {\n  background: #fafafa;\n}\n.calendar-cell-body.calendar-cell-other-month .calendar-cell-header .calendar-day-num,\n.calendar-cell-body.calendar-cell-other-month .calendar-stats,\n.calendar-cell-body.calendar-cell-other-month .calendar-bar-label,\n.calendar-cell-body.calendar-cell-other-month .calendar-avail {\n  color: #94a3b8;\n  opacity: 0.85;\n}\n.calendar-cell-body.calendar-cell-other-month .calendar-bar {\n  background: #e2e8f0;\n}\n.calendar-cell-body.calendar-cell-other-month:hover {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.calendar-other-month-label-wrap {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0.15rem;\n}\n.calendar-other-month-label {\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: #94a3b8;\n}\n.calendar-cell-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.35rem;\n  min-height: 1.5rem;\n}\n.calendar-cell-header .calendar-day-num {\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.calendar-cell-header .calendar-bar-label-header {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.calendar-cell-header .calendar-bar-label-header.calendar-bar-label-header-full {\n  color: #b91c1c;\n  font-weight: 700;\n}\n.calendar-stay-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-height: 0;\n  flex: 1;\n  min-width: 0;\n}\n.calendar-stay-bar {\n  display: flex;\n  align-items: center;\n  min-height: 22px;\n  padding: 3px 8px;\n  border-radius: 0;\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n}\n.calendar-stay-bar.calendar-stay-bar-start {\n  border-radius: 1rem 0 0 1rem;\n}\n.calendar-stay-bar.calendar-stay-bar-end {\n  border-radius: 0 1rem 1rem 0;\n}\n.calendar-stay-bar.calendar-stay-bar-start.calendar-stay-bar-end {\n  border-radius: 1rem;\n}\n.calendar-stay-bar.calendar-stay-bar-booked {\n  background:\n    linear-gradient(\n      135deg,\n      #15803d 0%,\n      #22c55e 100%);\n}\n.calendar-stay-bar.calendar-stay-bar-pending {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #3b82f6 100%);\n}\n.calendar-stay-bar.calendar-stay-bar-basket {\n  background:\n    linear-gradient(\n      135deg,\n      #c2410c 0%,\n      #ea580c 100%);\n}\n.calendar-stay-bar-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.calendar-cell-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.35rem;\n  margin-top: auto;\n  min-height: 1.25rem;\n}\n.calendar-stay-empty {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  font-size: 0.7rem;\n}\n.calendar-day-other-month {\n  color: #64748b !important;\n  font-weight: 500;\n}\n.calendar-grid-week .calendar-row-head {\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-bottom: 2px solid #cbd5e1;\n}\n.calendar-grid-week .calendar-cell-head-week {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.15rem;\n  padding: 0.85rem 0.5rem;\n}\n.calendar-grid-week .calendar-cell-head-week.calendar-cell-today {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.12);\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-grid-week .calendar-cell-head-week.calendar-cell-today .calendar-day-name {\n  color: var(--bs-primary, #0d6efd);\n}\n.calendar-grid-week .calendar-day-name {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.calendar-grid-week .calendar-day-num-head {\n  font-size: 1.5rem;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.calendar-grid-week .calendar-row-body .calendar-cell-body {\n  min-height: 200px;\n  padding: 0.75rem 0.65rem;\n}\n.calendar-grid-week .calendar-cell-inner {\n  min-height: 100%;\n  gap: 0.65rem;\n}\n.calendar-grid-week .calendar-cell-header {\n  justify-content: center;\n  min-height: auto;\n}\n.calendar-grid-week .calendar-occupancy-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem 0.65rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #475569;\n  background: #f1f5f9;\n  border-radius: 9999px;\n  border: 1px solid #e2e8f0;\n}\n.calendar-grid-week .calendar-occupancy-pill.calendar-occupancy-pill-full {\n  color: #991b1b;\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.calendar-grid-week .calendar-stay-bars {\n  gap: 6px;\n}\n.calendar-grid-week .calendar-stay-bar {\n  min-height: 28px;\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.calendar-grid-week .calendar-cell-footer {\n  padding-top: 0.35rem;\n  border-top: 1px solid #f1f5f9;\n  align-items: center;\n}\n.calendar-grid-week .calendar-avail-badge {\n  font-size: 0.7rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  background: #ecfdf5;\n  color: #047857;\n  border: 1px solid #a7f3d0;\n}\n.calendar-grid-week .calendar-avail-badge.calendar-avail-badge-zero {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.calendar-grid-week .calendar-cell-view-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgba(var(--bs-primary-rgb, 13, 110, 253), 0.35);\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--bs-primary, #0d6efd);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.calendar-grid-week .calendar-cell-view-btn svg {\n  flex-shrink: 0;\n  opacity: 0.85;\n}\n.calendar-grid-week .calendar-cell-view-btn:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n  border-color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 2px 8px rgba(var(--bs-primary-rgb, 13, 110, 253), 0.15);\n}\n.calendar-grid-week .calendar-cell-view-btn:focus-visible {\n  outline: 2px solid var(--bs-primary, #0d6efd);\n  outline-offset: 2px;\n}\n.calendar-avail-muted {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.calendar-avail-badge {\n  font-size: 0.65rem;\n  font-weight: 600;\n  line-height: normal;\n  padding: 0.15rem 0.4rem;\n  border-radius: 4px;\n  background: #ecfdf5;\n  color: #047857;\n  border: 1px solid #a7f3d0;\n}\n.calendar-avail-badge.calendar-avail-badge-zero {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.action-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.action-wrap .calendar-cell-view-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.4rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: #f8fafc;\n  font-size: 0.6rem;\n  font-weight: 500;\n  line-height: normal;\n  color: var(--bs-primary, #0d6efd);\n  cursor: pointer;\n}\n.action-wrap .calendar-cell-view-btn:hover {\n  background: rgba(var(--bs-primary-rgb, 13, 110, 253), 0.08);\n}\n.calendar-grid-month .calendar-cell-head {\n  padding: 0.4rem 0.25rem;\n  font-size: 0.75rem;\n}\n.calendar-grid-month .calendar-cell-body {\n  min-height: 72px;\n}\n.calendar-grid-month .calendar-cell-body.calendar-cell-empty {\n  min-height: 72px;\n}\n.calendar-grid-month .calendar-cell-body.calendar-cell-other-month {\n  min-height: 72px;\n}\n.calendar-grid-month .calendar-cell-header .calendar-day-num {\n  font-size: 1rem;\n}\n.calendar-grid-month .calendar-cell-inner {\n  padding: 0.25rem 0;\n  gap: 0.25rem;\n}\n.calendar-grid-month .calendar-stay-bar {\n  min-height: 18px;\n  padding: 2px 6px;\n  font-size: 0.6rem;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.calendar-grid-month .calendar-stat {\n  font-size: 0.7rem;\n}\n.calendar-grid-month .calendar-bar {\n  height: 6px;\n}\n.calendar-grid-month .calendar-bar-label {\n  font-size: 0.65rem;\n}\n.calendar-grid-month .calendar-avail,\n.calendar-grid-month .calendar-full {\n  font-size: 0.65rem;\n}\n.calendar-cell-inner {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.35rem 0;\n  animation: insetBlink 2s ease-in-out infinite;\n}\n.calendar-stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.calendar-stat {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.calendar-stat-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.calendar-stat-booked {\n  color: #0d9488;\n}\n.calendar-stat-booked .calendar-stat-dot {\n  background: #0d9488;\n}\n.calendar-stat-basket {\n  color: #d97706;\n}\n.calendar-stat-basket .calendar-stat-dot {\n  background: #d97706;\n}\n.calendar-bar-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.calendar-bar {\n  flex: 1;\n  min-width: 0;\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n}\n.calendar-bar-fill {\n  height: 100%;\n  min-width: 0;\n  transition: width 0.2s ease;\n}\n.calendar-bar-booked {\n  background:\n    linear-gradient(\n      90deg,\n      #0d9488 0%,\n      #14b8a6 100%);\n}\n.calendar-bar-basket {\n  background:\n    linear-gradient(\n      90deg,\n      #d97706 0%,\n      #f59e0b 100%);\n}\n.calendar-bar-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.calendar-avail,\n.calendar-full {\n  display: block;\n}\n.calendar-full {\n  color: #b91c1c;\n  font-weight: 600;\n}\n.calendar-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1.5rem;\n  margin-top: 1.25rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-legend .legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.calendar-legend .legend-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.calendar-legend .legend-dot-booked {\n  background: #22c55e;\n}\n.calendar-legend .legend-dot-pending {\n  background: #3b82f6;\n}\n.calendar-legend .legend-dot-basket {\n  background: #ea580c;\n}\n.calendar-details-modal-wrap .modal-dialog {\n  max-width: 540px;\n}\n.calendar-details-modal {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.18), 0 12px 24px rgba(15, 23, 42, 0.12);\n}\n.calendar-details-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #fff;\n}\n.calendar-details-modal-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.3;\n}\n.calendar-details-modal-title-icon {\n  font-size: 1.25rem;\n  opacity: 0.95;\n}\n.calendar-details-modal-close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border: none;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.15s ease;\n}\n.calendar-details-modal-close:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.calendar-details-modal-close:active {\n  transform: scale(0.95);\n}\n.calendar-details-modal-body {\n  padding: 1.5rem;\n  background: #f8fafc;\n}\n.calendar-details-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n}\n.calendar-details-loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: var(--bs-primary, #0d6efd);\n  border-radius: 50%;\n  animation: calendar-details-spin 0.8s linear infinite;\n}\n.calendar-details-loading-text {\n  margin: 1rem 0 0;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n@keyframes calendar-details-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.calendar-details-section {\n  margin-bottom: 1.25rem;\n}\n.calendar-details-section:last-child {\n  margin-bottom: 0;\n}\n.calendar-details-section-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 0 0.75rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #475569;\n}\n.calendar-details-section-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-details-section-dot-booked {\n  background: #22c55e;\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);\n}\n.calendar-details-section-dot-queue {\n  background: #ea580c;\n  box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.3);\n}\n.calendar-details-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.calendar-details-card {\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n}\n.calendar-details-card:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.calendar-details-card-booking {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.calendar-details-card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.calendar-details-card-order {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-badge {\n  padding: 0.25rem 0.6rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-radius: 6px;\n  background: #f1f5f9;\n  color: #475569;\n}\n.calendar-details-badge.calendar-details-badge-success {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #166534;\n}\n.calendar-details-badge.calendar-details-badge-pending {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #1e40af;\n}\n.calendar-details-card-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem 1.5rem;\n}\n.calendar-details-meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-details-meta-item.calendar-details-meta-amount {\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-meta-label {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #94a3b8;\n}\n.calendar-details-guest-block {\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  border-left: 3px solid var(--bs-primary, #0d6efd);\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.calendar-details-guest-name {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.calendar-details-guest-dates {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.calendar-details-guest-units {\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-details-guest-full {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.calendar-details-detail-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 0.35rem 0.75rem;\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.calendar-details-detail-row .calendar-details-meta-label {\n  flex-shrink: 0;\n  min-width: 4rem;\n}\n.calendar-details-detail-row a {\n  color: var(--bs-primary, #0d6efd);\n  text-decoration: none;\n  word-break: break-all;\n}\n.calendar-details-detail-row a:hover {\n  text-decoration: underline;\n}\n.calendar-details-card-queue {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  border-left: 3px solid #ea580c;\n}\n.calendar-details-empty {\n  text-align: center;\n  padding: 2.5rem 1.5rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px dashed #cbd5e1;\n  color: #64748b;\n}\n.calendar-details-empty .calendar-details-empty-icon {\n  display: block;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n.calendar-details-empty p {\n  margin: 0;\n  font-size: 0.9375rem;\n}\n.calendar-details-order-summary {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem 1.25rem;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.calendar-details-order-meta {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.calendar-details-order-amount {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-customer {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.25rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.calendar-details-customer-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.calendar-details-card-line {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.calendar-details-card-line .calendar-details-line-amount {\n  font-weight: 700;\n  color: #0f172a;\n}\n.calendar-details-modal-footer {\n  padding: 1rem 1.5rem;\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n}\n.calendar-details-btn-close {\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    color 0.2s ease;\n}\n.calendar-details-btn-close:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n/*# sourceMappingURL=calendar.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Calendar, { className: "Calendar", filePath: "src/app/pages/calendar/calendar.ts", lineNumber: 67 });
})();

// src/app/pages/pages.routes.ts
var routes = [
  {
    path: "",
    redirectTo: ROUTES.CALENDAR,
    pathMatch: "full"
  },
  {
    path: ROUTES.RESORTS,
    title: APP_PAGE_TITLE.RESORTS,
    component: Resort
  },
  {
    path: ROUTES.PROPERTY,
    title: APP_PAGE_TITLE.PROPERTY,
    component: Property
  },
  {
    path: ROUTES.ASSET.BASE,
    title: APP_PAGE_TITLE.ASSET.BASE,
    component: CommonOutlet,
    loadChildren: () => import("./chunk-EU7NT3CT.js").then((m) => m.routes)
  },
  {
    path: ROUTES.CALENDAR,
    title: APP_PAGE_TITLE.CALENDAR,
    component: Calendar
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-ISBJBFII.js.map
