import {
  AppSrc,
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  CommonDropdown,
  ModalLayer,
  RegisterModalLayer,
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CNIHTPF4.js";
import {
  APP_PAGE_TITLE,
  ActivatedRoute,
  ApiFacadeService,
  Component,
  CoreFacadeService,
  DatePipe,
  DomSanitizer,
  EventEmitter,
  Input,
  Output,
  ROUTES,
  Router,
  __spreadValues,
  forkJoin,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-K5BQJCWW.js";

// src/app/shared/components/pagination/pagination.ts
function Pagination_Conditional_0_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 8)(1, "span", 13);
    \u0275\u0275text(2, "...");
    \u0275\u0275domElementEnd()();
  }
}
function Pagination_Conditional_0_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 14)(1, "button", 15);
    \u0275\u0275domListener("click", function Pagination_Conditional_0_For_10_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const page_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r4));
    });
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const page_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r4 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r4, " ");
  }
}
function Pagination_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Pagination_Conditional_0_For_10_Conditional_0_Template, 3, 0, "li", 8)(1, Pagination_Conditional_0_For_10_Conditional_1_Template, 3, 3, "li", 12);
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isEllipsis(page_r4) ? 0 : 1);
  }
}
function Pagination_Conditional_0_ForEmpty_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 8)(1, "span", 13);
    \u0275\u0275text(2, "1");
    \u0275\u0275domElementEnd()();
  }
}
function Pagination_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "nav", 0)(1, "small", 1);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "ul", 2)(4, "li", 3)(5, "button", 4);
    \u0275\u0275domListener("click", function Pagination_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(6, "svg", 5);
    \u0275\u0275domElement(7, "path", 6)(8, "path", 7);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275repeaterCreate(9, Pagination_Conditional_0_For_10_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity, false, Pagination_Conditional_0_ForEmpty_11_Template, 3, 0, "li", 8);
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(12, "li", 9)(13, "button", 4);
    \u0275\u0275domListener("click", function Pagination_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(14, "svg", 5);
    \u0275\u0275domElement(15, "path", 10)(16, "path", 11);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.startEntry, " to ", ctx_r1.endEntry, " of ", ctx_r1.totalEntries, " entries ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.pages);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var Pagination = class _Pagination {
  totalPages = 0;
  // Total number of pages
  totalEntries = 0;
  // Total number of entries
  currentPage = 0;
  // Current page
  pageSize = 10;
  // Records per page
  pageChange = new EventEmitter();
  pages = [];
  gap = 2;
  // Number of pages before/after the current page to show
  maxPageCount = 5;
  // Max number of pages to show (including ellipsis)
  ngOnChanges(changes) {
    if (changes["totalPages"]?.currentValue || changes["currentPage"]?.currentValue || changes["pageSize"]?.currentValue || changes["totalEntries"]?.currentValue) {
      this.totalPages = this.totalEntries > 0 ? Math.ceil(this.totalEntries / this.pageSize) : 1;
      this.calculatePages();
    }
  }
  // Calculate the visible pages based on currentPage and totalPages
  calculatePages() {
    this.pages = [];
    const pages = [];
    if (this.totalPages > 1) {
      this.pages.push(1);
    }
    if (this.currentPage - this.gap > 2) {
      this.pages.push(-this.pages.length - 1);
    }
    const startPage = Math.max(2, this.currentPage - this.gap);
    const endPage = Math.min(this.totalPages - 1, this.currentPage + this.gap);
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
    if (this.currentPage + this.gap < this.totalPages - 1) {
      this.pages.push(-this.pages.length - 1);
    }
    if (this.totalPages > 1) {
      this.pages.push(this.totalPages);
    }
  }
  // Change the current page
  onPageChange(page) {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(page);
      this.calculatePages();
    }
  }
  // Check if the page is an ellipsis
  isEllipsis(page) {
    return page < 0;
  }
  get startEntry() {
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endEntry() {
    return Math.min(this.currentPage * this.pageSize, this.totalEntries);
  }
  static \u0275fac = function Pagination_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pagination)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pagination, selectors: [["app-pagination"]], inputs: { totalPages: "totalPages", totalEntries: "totalEntries", currentPage: "currentPage", pageSize: "pageSize" }, outputs: { pageChange: "pageChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["aria-label", "Page navigation", 1, "d-flex", "gap-2", "align-items-center"], [1, "me-auto", "text-muted"], [1, "pagination", "justify-content-center", "m-0", "user-select-none"], ["title", "previous", 1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "d-block"], ["d", "m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z", "fill", "currentColor"], ["d", "M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z", "fill", "currentColor"], [1, "page-item", "disabled"], ["title", "next", 1, "page-item"], ["d", "M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z", "fill", "currentColor"], ["d", "M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z", "fill", "currentColor"], [1, "page-item", 3, "active"], [1, "page-link"], [1, "page-item"], [1, "page-link", 3, "click"]], template: function Pagination_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Pagination_Conditional_0_Template, 17, 10, "nav", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.totalEntries !== 0 ? 0 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pagination, [{
    type: Component,
    args: [{ selector: "app-pagination", imports: [], template: `@if(totalEntries !== 0){
<nav class="d-flex gap-2 align-items-center" aria-label="Page navigation">
    <small class="me-auto text-muted">
        Showing {{startEntry}} to {{endEntry}} of {{totalEntries}} entries
    </small>

    <ul class="pagination justify-content-center m-0 user-select-none">
        <!-- Previous Button -->
        <li class="page-item" [class.disabled]="currentPage === 1" title="previous">
            <button class="page-link" (click)="onPageChange(currentPage - 1)" [disabled]="currentPage === 1">
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' class="d-block">
                    <path d='m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z'
                        fill="currentColor" />
                    <path d='M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z'
                        fill="currentColor" />
                </svg>
            </button>
        </li>
        <!-- Loop through pages and display them -->
        @for(page of pages; track page){
        <!-- Ellipsis -->
        @if(isEllipsis(page)){
        <li class="page-item disabled">
            <span class="page-link">...</span>
        </li>
        }@else {
        <!-- Normal Page Number -->
        <li class="page-item" [class.active]="page === currentPage">
            <button class="page-link" (click)="onPageChange(page)">
                {{ page }}
            </button>
        </li>
        }
        <!-- No pages to display -->
        }@empty{
        <li class="page-item disabled">
            <span class="page-link">1</span>
        </li>
        }
        <!-- Next Button -->
        <li class="page-item" [class.disabled]="currentPage === totalPages" title="next">
            <button class="page-link" (click)="onPageChange(currentPage + 1)" [disabled]="currentPage === totalPages">
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' class="d-block">
                    <path d='M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z'
                        fill="currentColor" />
                    <path d='M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z' fill="currentColor" />
                </svg>
            </button>
        </li>
    </ul>
</nav>
}` }]
  }], null, { totalPages: [{
    type: Input
  }], totalEntries: [{
    type: Input
  }], currentPage: [{
    type: Input
  }], pageSize: [{
    type: Input
  }], pageChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pagination, { className: "Pagination", filePath: "src/app/shared/components/pagination/pagination.ts", lineNumber: 10 });
})();

// src/app/pages/asset/upsert-asset/upsert-asset.ts
var _c0 = () => ["title"];
function UpsertAsset_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Resort is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_16_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_resort == null ? null : ctx_r0.f_resort.errors == null ? null : ctx_r0.f_resort.errors["required"]) ? 1 : -1);
  }
}
function UpsertAsset_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Property is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_23_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_property == null ? null : ctx_r0.f_property.errors == null ? null : ctx_r0.f_property.errors["required"]) ? 1 : -1);
  }
}
function UpsertAsset_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Title is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Only letters, numbers, spaces, and & / - , . ( ) are allowed (max 150 characters). ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_30_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertAsset_Conditional_30_Conditional_2_Template, 2, 0, "span");
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
function UpsertAsset_Conditional_35_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Price is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Price must be greater than 0. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_35_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertAsset_Conditional_35_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_price == null ? null : ctx_r0.f_price.errors == null ? null : ctx_r0.f_price.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_price == null ? null : ctx_r0.f_price.errors == null ? null : ctx_r0.f_price.errors["min"]) ? 2 : -1);
  }
}
function UpsertAsset_Conditional_42_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Quantity is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_42_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Quantity must be greater than 0. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_42_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertAsset_Conditional_42_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_quantity == null ? null : ctx_r0.f_quantity.errors == null ? null : ctx_r0.f_quantity.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_quantity == null ? null : ctx_r0.f_quantity.errors == null ? null : ctx_r0.f_quantity.errors["min"]) ? 2 : -1);
  }
}
function UpsertAsset_Conditional_49_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Description is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_49_Conditional_2_Template(rf, ctx) {
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
function UpsertAsset_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_49_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertAsset_Conditional_49_Conditional_2_Template, 2, 1, "span");
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
function UpsertAsset_Conditional_62_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Max adults is required.");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_62_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Must be 1 or greater.");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_62_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertAsset_Conditional_62_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_maxLimit == null ? null : (tmp_1_0 = ctx_r0.f_maxLimit.get("adults")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_maxLimit == null ? null : (tmp_2_0 = ctx_r0.f_maxLimit.get("adults")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["min"]) ? 2 : -1);
  }
}
function UpsertAsset_Conditional_69_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Max kids is required.");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_69_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Must be 0 or greater.");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_69_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertAsset_Conditional_69_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_maxLimit == null ? null : (tmp_1_0 = ctx_r0.f_maxLimit.get("kids")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_maxLimit == null ? null : (tmp_2_0 = ctx_r0.f_maxLimit.get("kids")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["min"]) ? 2 : -1);
  }
}
function UpsertAsset_Conditional_70_For_7_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Day unit is required. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_70_For_7_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Day unit must be greater than 0. ");
    \u0275\u0275elementEnd();
  }
}
function UpsertAsset_Conditional_70_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, UpsertAsset_Conditional_70_For_7_Conditional_7_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UpsertAsset_Conditional_70_For_7_Conditional_7_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_dayUnits == null ? null : (tmp_12_0 = ctx_r0.f_dayUnits.get(key_r2)) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_dayUnits == null ? null : (tmp_13_0 = ctx_r0.f_dayUnits.get(key_r2)) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["min"]) ? 2 : -1);
  }
}
function UpsertAsset_Conditional_70_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div")(2, "label", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, UpsertAsset_Conditional_70_For_7_Conditional_7_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const key_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", \u0275\u0275interpolate1("dayUnit-", key_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.assetConfigs.dayUnits[key_r2], " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("dayUnit-", key_r2))("formControlName", key_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.f_dayUnits == null ? null : (tmp_15_0 = ctx_r0.f_dayUnits.get(key_r2)) == null ? null : tmp_15_0.touched) && (ctx_r0.f_dayUnits == null ? null : (tmp_15_0 = ctx_r0.f_dayUnits.get(key_r2)) == null ? null : tmp_15_0.errors) ? 7 : -1);
  }
}
function UpsertAsset_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "hr", 25);
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3, " Day Units ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "hr", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275repeaterCreate(6, UpsertAsset_Conditional_70_For_7_Template, 8, 7, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.dayUnitsKeys);
  }
}
function UpsertAsset_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "iframe", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 72);
    \u0275\u0275text(3, " Open in new tab ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.mapLinkPreviewUrl, \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.getMapLinkViewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function UpsertAsset_Conditional_138_Template(rf, ctx) {
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
function UpsertAsset_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 73);
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275text(2, " \xA0 Please wait... ");
    \u0275\u0275elementEnd();
  }
}
var UpsertAsset = class _UpsertAsset {
  // Inject Services
  _fb = inject(FormBuilder);
  _coreService = inject(CoreFacadeService);
  _apiFs = inject(ApiFacadeService);
  _sanitizer = inject(DomSanitizer);
  assetConfigs = null;
  propertyList = [];
  resortList = [];
  selectedResort = null;
  selectedProperty = null;
  data = null;
  upsert = new EventEmitter();
  propertyDropdownList = [];
  dayUnitsKeys = [];
  isEditMode = false;
  form = this._fb.group({
    resort: [null, [Validators.required]],
    property: [null, [Validators.required]],
    title: [null, [Validators.required, Validators.pattern(new RegExp("^(?!\\s)[A-Za-z0-9 &\\/\\-,\\.\\(\\)]{1,150}(?<!\\s)$"))]],
    maxLimit: this._fb.group({
      adults: [null, [Validators.required, Validators.min(1)]],
      kids: [null, [Validators.required, Validators.min(0)]]
    }),
    description: [null, [Validators.required, Validators.maxLength(5e3)]],
    price: [null, [Validators.min(0)]],
    quantity: [null, [Validators.required, Validators.min(1)]],
    location: this._fb.group({
      mapLink: [""],
      address: [""]
    }),
    information: this._fb.group({
      size: this._fb.group({
        value: [null, [Validators.min(0)]],
        unit: [""]
      }),
      buildings: [null, [Validators.min(0)]],
      basement: [null, [Validators.min(0)]],
      balcony: [false],
      bedRooms: [""],
      bathrooms: [null, [Validators.min(0)]],
      floorHeight: this._fb.group({
        value: [null, [Validators.min(0)]],
        unit: [""]
      }),
      carParking: [false]
    })
  });
  ngOnChanges(changes) {
    if (changes["resortList"]?.currentValue) {
      const resortId = !this.data?.resortId && this.selectedResort?._id;
      if (resortId) {
        this.f_resort?.setValue(this.resortList?.find((r) => r._id === resortId) ?? null);
      }
    }
    if (changes["propertyList"]?.currentValue) {
      const resortId = this.f_resort?.value?._id;
      if (resortId) {
        this.propertyDropdownList = [...this.propertyList || []].filter((p) => p.resortId === resortId);
      }
      const propertyId = !this.data?.propertyId?._id && this.selectedProperty?._id;
      if (resortId && propertyId) {
        this.f_property?.setValue(this.propertyDropdownList?.find((p) => p._id === propertyId) ?? null);
      }
    }
    if (changes["assetConfigs"]?.currentValue) {
      Object.assign(this.assetConfigs, changes["assetConfigs"]?.currentValue);
      if (this.assetConfigs) {
        this.dayUnitsKeys = Object.keys(this.assetConfigs.dayUnits);
      }
      const dayUnits = this.assetConfigs?.dayUnits;
      if (dayUnits) {
        const dayUnitsGroup = {};
        Object.keys(dayUnits).forEach((key) => {
          dayUnitsGroup[key] = [null, [Validators.required, Validators.min(0)]];
        });
        this.form.addControl("dayUnits", this._fb.group(dayUnitsGroup));
      }
    }
    if (changes["data"]?.currentValue) {
      this._fetchAssetData();
    }
  }
  applyResortFilterToPropertyList() {
    const rid = this.f_resort?.value?._id;
    const all = this.propertyList || [];
    if (!rid) {
      this.propertyDropdownList = [];
      return;
    }
    this.propertyDropdownList = all.filter((p) => p.resortId === rid);
  }
  isDataLoading = false;
  _fetchAssetData() {
    if (!this.data?._id || this.isDataLoading)
      return;
    this.isDataLoading = true;
    this.isEditMode = true;
    this._apiFs.asset.getPartialDetails(this.data._id, { baseData: true }).subscribe({
      next: (res) => {
        this.isDataLoading = false;
        if (res.code === "OK") {
          this.data = __spreadValues({}, res.data);
          const resortId = this.data?.resortId?._id ?? this.data?.resortId;
          this.form.patchValue({
            title: this.data.title,
            maxLimit: {
              adults: this.data.maxLimit?.adults ?? 0,
              kids: this.data.maxLimit?.kids ?? 0
            },
            description: this.data.description,
            price: this.data.price,
            quantity: this.data.quantity,
            resort: (resortId && this.resortList?.find((r) => r._id === resortId)) ?? null
          });
          this.applyResortFilterToPropertyList();
          const propertyId = this.data?.propertyId?._id ?? this.data?.propertyId;
          this.form.patchValue({
            property: (propertyId && this.propertyDropdownList?.find((p) => p._id === propertyId)) ?? null
          });
          if (this.data.location) {
            this.f_location?.patchValue({
              mapLink: this.data.location.mapLink ?? "",
              address: this.data.location.address ?? ""
            });
          }
          if (this.f_dayUnits) {
            this.f_dayUnits.patchValue(this.data.dayUnits);
          }
          if (this.data.information && this.f_information) {
            this.f_information.patchValue({
              size: this.data.information.size ?? { value: null, unit: "" },
              buildings: this.data.information.buildings ?? null,
              basement: this.data.information.basement ?? null,
              balcony: this.data.information.balcony ?? false,
              bedRooms: this.data.information.bedRooms ?? "",
              bathrooms: this.data.information.bathrooms ?? null,
              floorHeight: this.data.information.floorHeight ?? { value: null, unit: "" },
              carParking: this.data.information.carParking ?? false
            });
          }
        }
      },
      error: (err) => {
        this.isDataLoading = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  get f_resort() {
    return this.form.get("resort");
  }
  get f_property() {
    return this.form.get("property");
  }
  get f_title() {
    return this.form.get("title");
  }
  get f_maxLimit() {
    return this.form.get("maxLimit");
  }
  get f_description() {
    return this.form.get("description");
  }
  get f_price() {
    return this.form.get("price");
  }
  get f_quantity() {
    return this.form.get("quantity");
  }
  get f_dayUnits() {
    return this.form.get("dayUnits");
  }
  get f_location() {
    return this.form.get("location");
  }
  get f_information() {
    return this.form.get("information");
  }
  /** Extracts the actual URL from map link value (handles pasted iframe HTML). */
  getResolvedMapLinkUrl() {
    const raw = this.f_location?.get("mapLink")?.value?.trim() ?? "";
    if (!raw)
      return "";
    const iframeSrcMatch = raw.match(/src\s*=\s*["']([^"']+)["']/i);
    return iframeSrcMatch ? iframeSrcMatch[1].trim() : raw;
  }
  /** Sanitized map link URL for iframe preview. */
  get mapLinkPreviewUrl() {
    const url = this.getResolvedMapLinkUrl();
    if (!url)
      return null;
    try {
      return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    } catch {
      return null;
    }
  }
  /** URL for "Open in new tab": converts Google embed URL to viewable maps URL. */
  getMapLinkViewUrl() {
    const url = this.getResolvedMapLinkUrl();
    if (!url)
      return "";
    if (url.includes("google.com/maps/embed")) {
      return url.replace(/\/maps\/embed\?/, "/maps?");
    }
    return url;
  }
  /** Normalize map link on blur: if pasted iframe HTML, store only the embed URL. */
  onMapLinkBlur() {
    const url = this.getResolvedMapLinkUrl();
    const control = this.f_location?.get("mapLink");
    if (control && url && url !== control.value?.trim()) {
      control.patchValue(url, { emitEvent: false });
    }
  }
  onResortChange(resort) {
    this.f_resort?.setValue(resort ?? null);
    this.f_resort?.markAsTouched();
    this.applyResortFilterToPropertyList();
    this.f_property?.setValue(null);
  }
  onPropertyChange(property) {
    if (!property)
      return;
    this.f_property?.patchValue(property);
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
    const info = form.information;
    const upsertObj = {
      title: form.title?.trim(),
      maxLimit: {
        adults: form.maxLimit?.adults,
        kids: form.maxLimit?.kids
      },
      description: form.description?.trim(),
      price: form.price,
      quantity: form.quantity,
      resortId: form.resort?._id,
      propertyId: form.property?._id,
      dayUnits: form.dayUnits,
      location: {
        mapLink: this.getResolvedMapLinkUrl(),
        address: form.location?.address?.trim() ?? ""
      },
      information: {
        size: info?.size?.value != null || info?.size?.unit ? { value: info.size.value ?? null, unit: info.size.unit?.trim() ?? "" } : void 0,
        buildings: info?.buildings ?? void 0,
        basement: info?.basement ?? void 0,
        balcony: info?.balcony ?? void 0,
        bedRooms: info?.bedRooms?.trim() || void 0,
        bathrooms: info?.bathrooms ?? void 0,
        floorHeight: info?.floorHeight?.value != null || info?.floorHeight?.unit ? { value: info.floorHeight.value ?? null, unit: info.floorHeight.unit?.trim() ?? "" } : void 0,
        carParking: info?.carParking ?? void 0
      }
    };
    Object.keys(upsertObj.information).forEach((k) => {
      if (upsertObj.information[k] === void 0)
        delete upsertObj.information[k];
    });
    this.isReqAlive = true;
    if (this.isEditMode) {
      this._apiFs.asset.update(this.data._id, upsertObj).subscribe({
        next: (res) => {
          this.isReqAlive = false;
          if (res.code === "UPDATED") {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, "Asset updated successfully");
            this.upsert.emit(true);
          }
        },
        error: (err) => {
          this.isReqAlive = false;
          const msg = err?.error?.message || "Something went wrong. Please try again later";
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      });
    } else {
      this._apiFs.asset.create(upsertObj).subscribe({
        next: (res) => {
          this.isReqAlive = false;
          if (res.code === "CREATED") {
            this.form.reset();
            this._coreService.utils.showToaster(EToasterType.Success, "Asset created successfully");
            this.upsert.emit(true);
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
  static \u0275fac = function UpsertAsset_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpsertAsset)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpsertAsset, selectors: [["app-upsert-asset"]], inputs: { assetConfigs: "assetConfigs", propertyList: "propertyList", resortList: "resortList", selectedResort: "selectedResort", selectedProperty: "selectedProperty", data: "data" }, outputs: { upsert: "upsert" }, features: [\u0275\u0275NgOnChangesFeature], decls: 140, vars: 26, consts: [[1, "modal", "modal-xl", "d-block"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "shadow-lg"], [3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title", "fs-5"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "mb-0"], [1, "col-xl-6", "mb-3"], [1, "d-inline-block", "form-label"], [1, "text-danger"], ["placeholder", "Select resort", "displayKey1", "title", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "usedInModal"], [1, "invalid-feedback", "d-block"], ["placeholder", "Select property", "displayKey1", "title", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "usedInModal"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Enter title", 1, "form-control"], ["for", "price", 1, "form-label"], ["type", "number", "id", "price", "formControlName", "price", "placeholder", "Enter price", 1, "form-control", "number-input"], ["for", "quantity", 1, "form-label"], ["type", "number", "id", "quantity", "formControlName", "quantity", "placeholder", "Enter quantity", 1, "form-control", "number-input"], [1, "col-12", "mb-3"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "5", "placeholder", "Enter description", 1, "form-control", "description-input"], [1, "mt-3", "mb-2", "d-flex", "justify-content-center", "align-items-center"], [1, "w-100"], [1, "mx-3", "fw-bold", "text-nowrap", "text-muted", "fs-6"], ["formGroupName", "maxLimit", 1, "row"], ["for", "maxLimit-adults", 1, "form-label"], ["type", "number", "id", "maxLimit-adults", "formControlName", "adults", "placeholder", "Enter max allowed adults", 1, "form-control", "number-input"], ["for", "maxLimit-kids", 1, "form-label"], ["type", "number", "id", "maxLimit-kids", "formControlName", "kids", "placeholder", "Enter max allowed kids", 1, "form-control", "number-input"], ["formGroupName", "information", 1, "row"], ["formGroupName", "size", 1, "col-xl-6", "mb-3"], ["for", "info-size", 1, "form-label"], [1, "input-group"], ["type", "number", "id", "info-size", "name", "value", "formControlName", "value", "placeholder", "Value", "min", "0", 1, "form-control", "number-input"], ["type", "text", "name", "unit", "formControlName", "unit", "placeholder", "Unit (e.g. sqft)", 1, "form-control", 2, "max-width", "10rem"], ["for", "info-buildings", 1, "form-label"], ["type", "number", "id", "info-buildings", "name", "buildings", "formControlName", "buildings", "placeholder", "Number of buildings", "min", "0", 1, "form-control", "number-input"], ["for", "info-basement", 1, "form-label"], ["type", "number", "id", "info-basement", "name", "basement", "formControlName", "basement", "placeholder", "Number", "min", "0", 1, "form-control", "number-input"], ["for", "info-bedRooms", 1, "form-label"], ["type", "text", "id", "info-bedRooms", "name", "bedRooms", "formControlName", "bedRooms", "placeholder", "e.g. 3 BHK", 1, "form-control"], ["for", "info-bathrooms", 1, "form-label"], ["type", "number", "id", "info-bathrooms", "name", "bathrooms", "formControlName", "bathrooms", "placeholder", "Number", "min", "0", 1, "form-control", "number-input"], ["formGroupName", "floorHeight", 1, "col-xl-6", "mb-3"], ["for", "info-floorHeight", 1, "form-label"], ["type", "number", "id", "info-floorHeight", "name", "value", "formControlName", "value", "placeholder", "Value", "min", "0", 1, "form-control", "number-input"], ["type", "text", "name", "unit", "formControlName", "unit", "placeholder", "Unit (e.g. ft)", 1, "form-control", 2, "max-width", "10rem"], [1, "col-xl-6", "mb-3", "d-flex", "align-items-end", "gap-3"], [1, "form-check"], ["type", "checkbox", "id", "info-balcony", "name", "balcony", "formControlName", "balcony", 1, "form-check-input"], ["for", "info-balcony", 1, "form-check-label"], ["type", "checkbox", "id", "info-carParking", "name", "carParking", "formControlName", "carParking", 1, "form-check-input"], ["for", "info-carParking", 1, "form-check-label"], [1, "row"], ["formGroupName", "location", 1, "col-xl-6", "row", "align-content-start", "mb-3"], ["for", "location-address", 1, "form-label"], ["type", "text", "id", "location-address", "formControlName", "address", "placeholder", "Enter address", 1, "form-control"], ["for", "location-mapLink", 1, "form-label"], ["type", "text", "id", "location-mapLink", "formControlName", "mapLink", "placeholder", "Paste map URL or embed iframe code", 1, "form-control", 3, "blur"], [1, "col-xl-6"], [1, "form-label", "text-muted", "small"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "me-3", 3, "click"], [1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", 3, "disabled"], ["formGroupName", "dayUnits", 1, "row"], [1, "form-label", 3, "for"], ["type", "number", "formControlName", "key", "placeholder", "Enter day unit", 1, "form-control", "number-input", 3, "id", "formControlName"], [1, "border", "rounded", "overflow-hidden", "bg-light"], ["title", "Map preview", "loading", "lazy", "allowfullscreen", "", "referrerpolicy", "no-referrer-when-downgrade", 1, "map-preview-iframe", 3, "src"], ["target", "_blank", "rel", "noopener noreferrer", 1, "small", "text-primary", "mt-1", "d-inline-block", 3, "href"], [1, "spinner-border", "spinner-border-sm"], ["role", "status"]], template: function UpsertAsset_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function UpsertAsset_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function UpsertAsset_Template_button_click_7_listener() {
        return ctx.onCloseOrCancel();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12, " Resort ");
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "app-common-dropdown", 12);
      \u0275\u0275listener("onSelect", function UpsertAsset_Template_app_common_dropdown_onSelect_15_listener($event) {
        return ctx.onResortChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, UpsertAsset_Conditional_16_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9)(18, "span", 10);
      \u0275\u0275text(19, " Property ");
      \u0275\u0275elementStart(20, "span", 11);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "app-common-dropdown", 14);
      \u0275\u0275listener("onSelect", function UpsertAsset_Template_app_common_dropdown_onSelect_22_listener($event) {
        return ctx.onPropertyChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, UpsertAsset_Conditional_23_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 9)(25, "label", 15);
      \u0275\u0275text(26, " Title ");
      \u0275\u0275elementStart(27, "span", 11);
      \u0275\u0275text(28, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "input", 16);
      \u0275\u0275conditionalCreate(30, UpsertAsset_Conditional_30_Template, 3, 2, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "label", 17);
      \u0275\u0275text(33, " Price ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 18);
      \u0275\u0275conditionalCreate(35, UpsertAsset_Conditional_35_Template, 3, 2, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9)(37, "label", 19);
      \u0275\u0275text(38, " Quantity ");
      \u0275\u0275elementStart(39, "span", 11);
      \u0275\u0275text(40, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "input", 20);
      \u0275\u0275conditionalCreate(42, UpsertAsset_Conditional_42_Template, 3, 2, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 21)(44, "label", 22);
      \u0275\u0275text(45, " Description ");
      \u0275\u0275elementStart(46, "span", 11);
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "textarea", 23);
      \u0275\u0275conditionalCreate(49, UpsertAsset_Conditional_49_Template, 3, 2, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 24);
      \u0275\u0275element(51, "hr", 25);
      \u0275\u0275elementStart(52, "span", 26);
      \u0275\u0275text(53, " Limitations ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "hr", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 27)(56, "div", 9)(57, "label", 28);
      \u0275\u0275text(58, " Max adults ");
      \u0275\u0275elementStart(59, "span", 11);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "input", 29);
      \u0275\u0275conditionalCreate(62, UpsertAsset_Conditional_62_Template, 3, 2, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 9)(64, "label", 30);
      \u0275\u0275text(65, " Max kids ");
      \u0275\u0275elementStart(66, "span", 11);
      \u0275\u0275text(67, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "input", 31);
      \u0275\u0275conditionalCreate(69, UpsertAsset_Conditional_69_Template, 3, 2, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(70, UpsertAsset_Conditional_70_Template, 8, 0);
      \u0275\u0275elementStart(71, "div", 32)(72, "div", 24);
      \u0275\u0275element(73, "hr", 25);
      \u0275\u0275elementStart(74, "span", 26);
      \u0275\u0275text(75, " Information ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "hr", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 33)(78, "label", 34);
      \u0275\u0275text(79, "Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 35);
      \u0275\u0275element(81, "input", 36)(82, "input", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 9)(84, "label", 38);
      \u0275\u0275text(85, "Buildings");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 9)(88, "label", 40);
      \u0275\u0275text(89, "Basement");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 9)(92, "label", 42);
      \u0275\u0275text(93, "Bed Rooms");
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 9)(96, "label", 44);
      \u0275\u0275text(97, "Bathrooms");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 46)(100, "label", 47);
      \u0275\u0275text(101, "Floor Height");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 35);
      \u0275\u0275element(103, "input", 48)(104, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 50)(106, "div", 51);
      \u0275\u0275element(107, "input", 52);
      \u0275\u0275elementStart(108, "label", 53);
      \u0275\u0275text(109, "Balcony");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 51);
      \u0275\u0275element(111, "input", 54);
      \u0275\u0275elementStart(112, "label", 55);
      \u0275\u0275text(113, "Car Parking");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "div", 56)(115, "div", 24);
      \u0275\u0275element(116, "hr", 25);
      \u0275\u0275elementStart(117, "span", 26);
      \u0275\u0275text(118, " Location ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(119, "hr", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 57)(121, "div", 21)(122, "label", 58);
      \u0275\u0275text(123, " Address ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(124, "input", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 21)(126, "label", 60);
      \u0275\u0275text(127, " Map Link ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "input", 61);
      \u0275\u0275listener("blur", function UpsertAsset_Template_input_blur_128_listener() {
        return ctx.onMapLinkBlur();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 62)(130, "div", 21)(131, "label", 63);
      \u0275\u0275text(132, " Map preview ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(133, UpsertAsset_Conditional_133_Template, 4, 2);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(134, "div", 64)(135, "button", 65);
      \u0275\u0275listener("click", function UpsertAsset_Template_button_click_135_listener() {
        return ctx.onCloseOrCancel();
      });
      \u0275\u0275text(136, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "button", 66);
      \u0275\u0275conditionalCreate(138, UpsertAsset_Conditional_138_Template, 2, 1, "span")(139, UpsertAsset_Conditional_139_Template, 3, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_16_0;
      let tmp_17_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit" : "Create", " Asset ");
      \u0275\u0275advance(9);
      \u0275\u0275property("selectedOption", ctx.f_resort == null ? null : ctx.f_resort.value)("optionsList", ctx.resortList)("filterKeys", \u0275\u0275pureFunction0(24, _c0))("usedInModal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.f_resort == null ? null : ctx.f_resort.touched) && (ctx.f_resort == null ? null : ctx.f_resort.errors) ? 16 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("selectedOption", ctx.f_property == null ? null : ctx.f_property.value)("optionsList", ctx.propertyDropdownList)("filterKeys", \u0275\u0275pureFunction0(25, _c0))("usedInModal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.f_property == null ? null : ctx.f_property.touched) && (ctx.f_property == null ? null : ctx.f_property.errors) ? 23 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_title == null ? null : ctx.f_title.touched) && (ctx.f_title == null ? null : ctx.f_title.errors) ? 30 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((ctx.f_price == null ? null : ctx.f_price.touched) && (ctx.f_price == null ? null : ctx.f_price.errors) ? 35 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_quantity == null ? null : ctx.f_quantity.touched) && (ctx.f_quantity == null ? null : ctx.f_quantity.errors) ? 42 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_description == null ? null : ctx.f_description.touched) && (ctx.f_description == null ? null : ctx.f_description.errors) ? 49 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275conditional((ctx.f_maxLimit == null ? null : (tmp_16_0 = ctx.f_maxLimit.get("adults")) == null ? null : tmp_16_0.touched) && (ctx.f_maxLimit == null ? null : (tmp_16_0 = ctx.f_maxLimit.get("adults")) == null ? null : tmp_16_0.errors) ? 62 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.f_maxLimit == null ? null : (tmp_17_0 = ctx.f_maxLimit.get("kids")) == null ? null : tmp_17_0.touched) && (ctx.f_maxLimit == null ? null : (tmp_17_0 = ctx.f_maxLimit.get("kids")) == null ? null : tmp_17_0.errors) ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.contains("dayUnits") && ctx.dayUnitsKeys.length ? 70 : -1);
      \u0275\u0275advance(63);
      \u0275\u0275conditional(ctx.mapLinkPreviewUrl && ctx.getResolvedMapLinkUrl() ? 133 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("disabled", ctx.isReqAlive);
      \u0275\u0275property("disabled", ctx.isReqAlive);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isReqAlive ? 138 : 139);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, CommonDropdown], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body[_ngcontent-%COMP%]   .form-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-flex-row-gap[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .req-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%], \n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .limitation[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .textarea-limitation[_ngcontent-%COMP%] {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%] {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.number-input[_ngcontent-%COMP%] {\n}\n.number-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.number-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.number-input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.number-input[type=number][_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.description-input[_ngcontent-%COMP%] {\n  max-height: 10lh !important;\n}\n.map-preview-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 280px;\n  border: 0;\n  display: block;\n}\n/*# sourceMappingURL=upsert-asset.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpsertAsset, [{
    type: Component,
    args: [{ selector: "app-upsert-asset", imports: [
      ReactiveFormsModule,
      CommonDropdown
    ], template: `<div class="modal modal-xl d-block">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow-lg">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        {{isEditMode ? 'Edit' : 'Create'}} Asset
                    </h1>
                    <button type="button" class="btn-close" (click)="onCloseOrCancel()"></button>
                </div>

                <div class="modal-body">
                    <div class="row mb-0">
                        <!-- Resort -->
                        <div class="col-xl-6 mb-3">
                            <span class="d-inline-block form-label">
                                Resort <span class="text-danger">*</span>
                            </span>
                            <app-common-dropdown [selectedOption]="f_resort?.value" [optionsList]="resortList"
                                placeholder="Select resort" [filterKeys]="['title']" displayKey1="title"
                                [usedInModal]="true" (onSelect)="onResortChange($event)" />

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
                        <!-- Property -->
                        <div class="col-xl-6 mb-3">
                            <span class="d-inline-block form-label">
                                Property <span class="text-danger">*</span>
                            </span>
                            <app-common-dropdown [selectedOption]="f_property?.value"
                                [optionsList]="propertyDropdownList" placeholder="Select property"
                                [filterKeys]="['title']" displayKey1="title" [usedInModal]="true"
                                (onSelect)="onPropertyChange($event)" />

                            @if(f_property?.touched && f_property?.errors){
                            <div class="invalid-feedback d-block">
                                @if(f_property?.errors?.['required']){
                                <span>
                                    Property is required.
                                </span>
                                }
                            </div>
                            }
                        </div>
                        <!-- Title -->
                        <div class="col-xl-6 mb-3">
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
                        <!-- Price -->
                        <div class="col-xl-6 mb-3">
                            <label for="price" class="form-label">
                                Price
                            </label>
                            <input type="number" id="price" formControlName="price" class="form-control number-input"
                                placeholder="Enter price">

                            @if(f_price?.touched && f_price?.errors){
                            <div class="invalid-feedback d-block">
                                @if(f_price?.errors?.['required']){
                                <span>
                                    Price is required.
                                </span>
                                }
                                @if(f_price?.errors?.['min']){
                                <span>
                                    Price must be greater than 0.
                                </span>
                                }
                            </div>
                            }
                        </div>
                        <!-- Quantity -->
                        <div class="col-xl-6 mb-3">
                            <label for="quantity" class="form-label">
                                Quantity <span class="text-danger">*</span>
                            </label>
                            <input type="number" id="quantity" formControlName="quantity"
                                class="form-control number-input" placeholder="Enter quantity">

                            @if(f_quantity?.touched && f_quantity?.errors){
                            <div class="invalid-feedback d-block">
                                @if(f_quantity?.errors?.['required']){
                                <span>
                                    Quantity is required.
                                </span>
                                }
                                @if(f_quantity?.errors?.['min']){
                                <span>
                                    Quantity must be greater than 0.
                                </span>
                                }
                            </div>
                            }
                        </div>
                        <!-- Description -->
                        <div class="col-12 mb-3">
                            <label for="description" class="form-label">
                                Description <span class="text-danger">*</span>
                            </label>
                            <textarea id="description" formControlName="description" rows="5"
                                class="form-control description-input" placeholder="Enter description"></textarea>

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
                    </div>

                    <!-- Limitations -->
                    <div class="mt-3 mb-2 d-flex justify-content-center align-items-center">
                        <hr class="w-100">
                        <span class="mx-3 fw-bold text-nowrap text-muted fs-6">
                            Limitations
                        </span>
                        <hr class="w-100">
                    </div>
                    <!-- Max limit -->
                    <div class="row" formGroupName="maxLimit">
                        <div class="col-xl-6 mb-3">
                            <label for="maxLimit-adults" class="form-label">
                                Max adults <span class="text-danger">*</span>
                            </label>
                            <input type="number" id="maxLimit-adults" formControlName="adults"
                                class="form-control number-input" placeholder="Enter max allowed adults">

                            @if(f_maxLimit?.get('adults')?.touched && f_maxLimit?.get('adults')?.errors){
                            <div class="invalid-feedback d-block">
                                @if(f_maxLimit?.get('adults')?.errors?.['required']){
                                <span>Max adults is required.</span>
                                }
                                @if(f_maxLimit?.get('adults')?.errors?.['min']){
                                <span>Must be 1 or greater.</span>
                                }
                            </div>
                            }
                        </div>

                        <div class="col-xl-6 mb-3">
                            <label for="maxLimit-kids" class="form-label">
                                Max kids <span class="text-danger">*</span>
                            </label>
                            <input type="number" id="maxLimit-kids" formControlName="kids"
                                class="form-control number-input" placeholder="Enter max allowed kids">

                            @if(f_maxLimit?.get('kids')?.touched && f_maxLimit?.get('kids')?.errors){
                            <div class="invalid-feedback d-block">
                                @if(f_maxLimit?.get('kids')?.errors?.['required']){
                                <span>Max kids is required.</span>
                                }
                                @if(f_maxLimit?.get('kids')?.errors?.['min']){
                                <span>Must be 0 or greater.</span>
                                }
                            </div>
                            }
                        </div>
                    </div>

                    <!-- Day Units(Credits - Membership) -->
                    @if(form.contains('dayUnits') && dayUnitsKeys.length) {
                    <div class="mt-3 mb-2 d-flex justify-content-center align-items-center">
                        <hr class="w-100">
                        <span class="mx-3 fw-bold text-nowrap text-muted fs-6">
                            Day Units
                        </span>
                        <hr class="w-100">
                    </div>
                    <!-- Day Units form group -->
                    <div class="row" formGroupName="dayUnits">
                        @for (key of dayUnitsKeys; track key;) {
                        <div class="col-xl-6 mb-3">
                            <div>
                                <label for="dayUnit-{{key}}" class="form-label">
                                    {{assetConfigs.dayUnits[key]}} <span class="text-danger">*</span>
                                </label>
                                <input type="number" id="dayUnit-{{key}}" formControlName="key" [formControlName]="key"
                                    class="form-control number-input" placeholder="Enter day unit">
                            </div>
                            @if(f_dayUnits?.get(key)?.touched && f_dayUnits?.get(key)?.errors){
                            <div class="invalid-feedback d-block">
                                @if(f_dayUnits?.get(key)?.errors?.['required']){
                                <span>
                                    Day unit is required.
                                </span>
                                }
                                @if(f_dayUnits?.get(key)?.errors?.['min']){
                                <span>
                                    Day unit must be greater than 0.
                                </span>
                                }
                            </div>
                            }
                        </div>
                        }
                    </div>
                    }

                    <!-- Information (optional) -->
                    <div class="row" formGroupName="information">
                        <div class="mt-3 mb-2 d-flex justify-content-center align-items-center">
                            <hr class="w-100">
                            <span class="mx-3 fw-bold text-nowrap text-muted fs-6">
                                Information
                            </span>
                            <hr class="w-100">
                        </div>
                        <div class="col-xl-6 mb-3" formGroupName="size">
                            <label for="info-size" class="form-label">Size</label>
                            <div class="input-group">
                                <input type="number" id="info-size" name="value" formControlName="value"
                                    class="form-control number-input" placeholder="Value" min="0">
                                <input type="text" name="unit" formControlName="unit" class="form-control"
                                    placeholder="Unit (e.g. sqft)" style="max-width: 10rem;">
                            </div>
                        </div>
                        <div class="col-xl-6 mb-3">
                            <label for="info-buildings" class="form-label">Buildings</label>
                            <input type="number" id="info-buildings" name="buildings" formControlName="buildings"
                                class="form-control number-input" placeholder="Number of buildings" min="0">
                        </div>
                        <div class="col-xl-6 mb-3">
                            <label for="info-basement" class="form-label">Basement</label>
                            <input type="number" id="info-basement" name="basement" formControlName="basement"
                                class="form-control number-input" placeholder="Number" min="0">
                        </div>
                        <div class="col-xl-6 mb-3">
                            <label for="info-bedRooms" class="form-label">Bed Rooms</label>
                            <input type="text" id="info-bedRooms" name="bedRooms" formControlName="bedRooms"
                                class="form-control" placeholder="e.g. 3 BHK">
                        </div>
                        <div class="col-xl-6 mb-3">
                            <label for="info-bathrooms" class="form-label">Bathrooms</label>
                            <input type="number" id="info-bathrooms" name="bathrooms" formControlName="bathrooms"
                                class="form-control number-input" placeholder="Number" min="0">
                        </div>
                        <div class="col-xl-6 mb-3" formGroupName="floorHeight">
                            <label for="info-floorHeight" class="form-label">Floor Height</label>
                            <div class="input-group">
                                <input type="number" id="info-floorHeight" name="value" formControlName="value"
                                    class="form-control number-input" placeholder="Value" min="0">
                                <input type="text" name="unit" formControlName="unit" class="form-control"
                                    placeholder="Unit (e.g. ft)" style="max-width: 10rem;">
                            </div>
                        </div>
                        <div class="col-xl-6 mb-3 d-flex align-items-end gap-3">
                            <div class="form-check">
                                <input type="checkbox" id="info-balcony" name="balcony" formControlName="balcony"
                                    class="form-check-input">
                                <label for="info-balcony" class="form-check-label">Balcony</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" id="info-carParking" name="carParking"
                                    formControlName="carParking" class="form-check-input">
                                <label for="info-carParking" class="form-check-label">Car Parking</label>
                            </div>
                        </div>
                    </div>

                    <!-- Location -->
                    <div class="row">
                        <div class="mt-3 mb-2 d-flex justify-content-center align-items-center">
                            <hr class="w-100">
                            <span class="mx-3 fw-bold text-nowrap text-muted fs-6">
                                Location
                            </span>
                            <hr class="w-100">
                        </div>
                        <div class="col-xl-6 row align-content-start mb-3" formGroupName="location">
                            <div class="col-12 mb-3">
                                <label for="location-address" class="form-label">
                                    Address
                                </label>
                                <input type="text" id="location-address" formControlName="address" class="form-control"
                                    placeholder="Enter address">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="location-mapLink" class="form-label">
                                    Map Link
                                </label>
                                <input type="text" id="location-mapLink" formControlName="mapLink" class="form-control"
                                    placeholder="Paste map URL or embed iframe code" (blur)="onMapLinkBlur()">
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="col-12 mb-3">
                                <label class="form-label text-muted small">
                                    Map preview
                                </label>
                                @if (mapLinkPreviewUrl && getResolvedMapLinkUrl()) {
                                <div class="border rounded overflow-hidden bg-light">
                                    <iframe [src]="mapLinkPreviewUrl" title="Map preview" class="map-preview-iframe"
                                        loading="lazy" allowfullscreen
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <a [href]="getMapLinkViewUrl()" target="_blank" rel="noopener noreferrer"
                                    class="small text-primary mt-1 d-inline-block">
                                    Open in new tab
                                </a>
                                }
                            </div>
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
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n/* src/app/pages/asset/upsert-asset/upsert-asset.scss */\n:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body .form-flex-row {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body .input-group {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body .input-group .form-flex-row-gap {\n  gap: 2px;\n}\n.form-body .input-group .input-label {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body .input-group .req-indicator {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body .input-group .optional,\n.form-body .input-group .limitation {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body .input-group .info-icon-wrap {\n  flex-shrink: 0;\n}\n.form-body .input-group .info-icon-wrap .info-icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body .input-group .input-wrap {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body .input-group .input-wrap .input-field {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-wrap .input-field::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-textarea-group .input-textarea {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-scrollbar {\n  display: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .textarea-limitation {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body .input-group .error-wrap {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body .input-group .error-wrap .error-msg {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.number-input {\n}\n.number-input::-webkit-outer-spin-button,\n.number-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.number-input[type=number] {\n  -moz-appearance: textfield;\n}\n.number-input[type=number]::-ms-expand {\n  display: none;\n}\n.description-input {\n  max-height: 10lh !important;\n}\n.map-preview-iframe {\n  width: 100%;\n  height: 280px;\n  border: 0;\n  display: block;\n}\n/*# sourceMappingURL=upsert-asset.css.map */\n'] }]
  }], null, { assetConfigs: [{
    type: Input,
    args: ["assetConfigs"]
  }], propertyList: [{
    type: Input,
    args: ["propertyList"]
  }], resortList: [{
    type: Input,
    args: ["resortList"]
  }], selectedResort: [{
    type: Input,
    args: ["selectedResort"]
  }], selectedProperty: [{
    type: Input,
    args: ["selectedProperty"]
  }], data: [{
    type: Input,
    args: ["data"]
  }], upsert: [{
    type: Output,
    args: ["upsert"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpsertAsset, { className: "UpsertAsset", filePath: "src/app/pages/asset/upsert-asset/upsert-asset.ts", lineNumber: 22 });
})();

// src/app/pages/asset/asset.ts
var _c02 = () => ["title"];
var _forTrack0 = ($index, $item) => $item._id;
function Asset_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function Asset_Conditional_16_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "p", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 24);
    \u0275\u0275listener("click", function Asset_Conditional_16_For_26_Template_span_click_15_listener() {
      const asset_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onChangeAssetStatus(asset_r3));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 25);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 26)(25, "button", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 28);
    \u0275\u0275element(27, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "ul", 30)(29, "li")(30, "button", 31);
    \u0275\u0275listener("click", function Asset_Conditional_16_For_26_Template_button_click_30_listener() {
      const asset_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onEditAmenities(asset_r3));
    });
    \u0275\u0275text(31, " Amenities ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li")(33, "button", 31);
    \u0275\u0275listener("click", function Asset_Conditional_16_For_26_Template_button_click_33_listener() {
      const asset_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onEditImages(asset_r3));
    });
    \u0275\u0275text(34, " Images ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275element(36, "hr", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li")(38, "button", 31);
    \u0275\u0275listener("click", function Asset_Conditional_16_For_26_Template_button_click_38_listener() {
      const asset_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onEditAsset(asset_r3));
    });
    \u0275\u0275text(39, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li")(41, "button", 33);
    \u0275\u0275listener("click", function Asset_Conditional_16_For_26_Template_button_click_41_listener() {
      const asset_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDeleteAsset(asset_r3));
    });
    \u0275\u0275text(42, " Delete ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const asset_r3 = ctx.$implicit;
    const \u0275$index_73_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.currentPage - 1) * ctx_r3.pageSize + \u0275$index_73_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r3.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", asset_r3.description || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r3.price, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r3.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r3 == null ? null : asset_r3.propertyId == null ? null : asset_r3.propertyId.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(asset_r3.isPublished ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r3.isPublished ? "Published" : "Unpublished", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 11, asset_r3.createdAt, "yyyy-MM-dd"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 14, asset_r3.updatedAt, "yyyy-MM-dd"), " ");
  }
}
function Asset_Conditional_16_ForEmpty_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2, " No assets found ");
    \u0275\u0275elementEnd()();
  }
}
function Asset_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 17)(2, "thead", 18)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Property");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 19);
    \u0275\u0275text(19, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 19);
    \u0275\u0275text(21, "Updated At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 20);
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, Asset_Conditional_16_For_26_Template, 43, 17, "tr", null, _forTrack0, false, Asset_Conditional_16_ForEmpty_27_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "app-pagination", 21);
    \u0275\u0275listener("pageChange", function Asset_Conditional_16_Template_app_pagination_pageChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(25);
    \u0275\u0275repeater(ctx_r3.assets);
    \u0275\u0275advance(3);
    \u0275\u0275property("totalPages", ctx_r3.totalPages)("totalEntries", ctx_r3.totalEntries)("currentPage", ctx_r3.currentPage)("pageSize", ctx_r3.pageSize);
  }
}
function Asset_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-upsert-asset", 35);
    \u0275\u0275listener("upsert", function Asset_Conditional_18_Template_app_upsert_asset_upsert_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onUpsertAsset($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r3.assetData)("propertyList", ctx_r3._propertyList)("resortList", ctx_r3.resortList)("selectedResort", ctx_r3.selectedResort)("selectedProperty", ctx_r3.selectedProperty)("assetConfigs", ctx_r3.assetConfigs);
  }
}
function Asset_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 36)(2, "div", 37)(3, "div", 38)(4, "h1", 39);
    \u0275\u0275text(5, " Change Asset Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275listener("click", function Asset_Conditional_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onChangeAssetStatusCancel());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "p");
    \u0275\u0275text(9, " Are you sure you want to change the status of ");
    \u0275\u0275elementStart(10, "span", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " asset to ");
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 43)(17, "button", 44);
    \u0275\u0275listener("click", function Asset_Conditional_20_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onChangeAssetStatusCancel());
    });
    \u0275\u0275text(18, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 45);
    \u0275\u0275listener("click", function Asset_Conditional_20_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onConfirmChangeAssetStatus());
    });
    \u0275\u0275text(20, " Confirm Change ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r3.assetData == null ? null : ctx_r3.assetData.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.assetData == null ? null : ctx_r3.assetData.isPublished) ? "Unpublished" : "Published", " ");
  }
}
function Asset_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 36)(2, "div", 37)(3, "div", 38)(4, "h1", 39);
    \u0275\u0275text(5, " Delete Asset ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275listener("click", function Asset_Conditional_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDeleteAssetCancel());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "p");
    \u0275\u0275text(9, " Are you sure you want to delete ");
    \u0275\u0275elementStart(10, "span", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " asset under property ");
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 43)(17, "button", 44);
    \u0275\u0275listener("click", function Asset_Conditional_22_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDeleteAssetCancel());
    });
    \u0275\u0275text(18, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 45);
    \u0275\u0275listener("click", function Asset_Conditional_22_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onConfirmDeleteAsset());
    });
    \u0275\u0275text(20, " Confirm Delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r3.assetData == null ? null : ctx_r3.assetData.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.assetData == null ? null : ctx_r3.assetData.propertyId == null ? null : ctx_r3.assetData.propertyId.title, " ");
  }
}
var Asset = class _Asset {
  // Inject Services
  _apiFs = inject(ApiFacadeService);
  _coreService = inject(CoreFacadeService);
  _router = inject(Router);
  isUpsertModalOpen = false;
  upsertAssetModalId = "upsert-asset-modal";
  deleteAssetModalId = "delete-asset-modal";
  changeAssetStatusModalId = "change-asset-status-modal";
  assets = [];
  assetData = null;
  isReqAlive = false;
  loading = false;
  // pagination
  totalPages = 0;
  totalEntries = 0;
  currentPage = 1;
  pageSize = 10;
  ngOnInit() {
    this.getOptionsData();
    this.getAssets();
  }
  _propertyList = [];
  propertyList = [];
  resortList = [];
  assetConfigs = null;
  getOptionsData() {
    forkJoin({
      property: this._apiFs.property.optionsData({ dropdownList: "list" }),
      asset: this._apiFs.asset.configuration({ dayUnits: "dayUnits" }),
      resort: this._apiFs.resort.optionsData({ dropdownList: "dropdownList" })
    }).subscribe({
      next: (res) => {
        if (res.property.code === "OK") {
          const data = res.property.data;
          this._propertyList = data?.list ?? [];
          this.propertyList = [...this._propertyList];
        }
        if (res.asset.code === "OK") {
          const data = res.asset.data;
          this.assetConfigs = data;
        }
        if (res.resort.code === "OK") {
          const data = res.resort.data;
          this.resortList = data?.dropdownList ?? [];
        }
      },
      error: (err) => {
        console.log("Error while fetch options data", err);
      }
    });
  }
  selectedResort = null;
  onResortFilterSelected(resort) {
    this.selectedResort = resort || null;
    if (!resort?._id) {
      this.propertyList = [...this._propertyList];
    } else {
      this.propertyList = this._propertyList.filter((p) => p.resortId === resort._id);
      if (this.selectedProperty?._id && !this.propertyList.some((p) => p._id === this.selectedProperty._id)) {
        this.selectedProperty = null;
      }
    }
  }
  selectedProperty = null;
  searchProperty = "";
  onPropertySelected(property) {
    this.selectedProperty = property || null;
  }
  onSearch() {
    this.currentPage = 1;
    this.getAssets();
  }
  onClearFilters() {
    this.selectedResort = null;
    this.selectedProperty = null;
    this.searchProperty = "";
    this.propertyList = [...this._propertyList];
    this.currentPage = 1;
    this.getAssets();
  }
  getAssets() {
    this.loading = true;
    const payload = {
      page: this.currentPage,
      limit: this.pageSize,
      filters: null
    };
    if (this.selectedProperty?._id || this.searchProperty?.trim() || this.selectedResort?._id) {
      payload.filters = __spreadValues(__spreadValues(__spreadValues({}, this.searchProperty?.trim() && { search: this.searchProperty?.trim() }), this.selectedProperty?._id && { propertyId: this.selectedProperty?._id }), this.selectedResort?._id && { resortId: this.selectedResort._id });
    }
    this._apiFs.asset.list(payload).subscribe({
      next: (res) => {
        if (res.code === "OK") {
          const data = res.data;
          this.assets = data?.list ?? [];
          this.totalEntries = data?.count ?? 0;
          this.totalPages = Math.ceil(this.totalEntries / this.pageSize);
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.log("Error while fetch list", err);
      }
    });
  }
  onPageChange(page) {
    this.currentPage = page;
    this.getAssets();
  }
  // create new asset
  onCreateNew() {
    if (!this._propertyList?.length) {
      this._coreService.utils.showToaster(EToasterType.Warning, "No properties found. Please add properties first");
      return;
    }
    if (!this.resortList?.length) {
      this._coreService.utils.showToaster(EToasterType.Warning, "No resorts found. Please add resorts first");
      return;
    }
    this.assetData = null;
    this._coreService.modal.open(this.upsertAssetModalId);
  }
  // change asset status
  isCasReqAlive = false;
  onChangeAssetStatus(asset) {
    if (!asset || this.isCasReqAlive)
      return;
    this.assetData = asset;
    this._coreService.modal.open(this.changeAssetStatusModalId);
  }
  onChangeAssetStatusCancel() {
    this.assetData = null;
    this._coreService.modal.close(this.changeAssetStatusModalId);
  }
  onConfirmChangeAssetStatus() {
    if (!this.assetData?._id || this.isCasReqAlive)
      return;
    this.isCasReqAlive = true;
    this._apiFs.asset.changeStatus(this.assetData._id, { isPublished: !this.assetData.isPublished }).subscribe({
      next: (res) => {
        this.isCasReqAlive = false;
        if (res.code === "UPDATED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Asset status changed successfully");
          const index = this.assets.findIndex((a) => a._id === this.assetData._id);
          if (index !== -1) {
            this.assets[index] = res.data;
          }
          this.onChangeAssetStatusCancel();
        }
      },
      error: (err) => {
        this.isCasReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  // edit asset
  onEditAsset(asset) {
    if (!asset)
      return;
    this.assetData = __spreadValues({}, asset);
    this._coreService.modal.open(this.upsertAssetModalId);
  }
  onUpsertAsset(event) {
    this.assetData = null;
    if (event) {
      this.getAssets();
    }
    this._coreService.modal.close(this.upsertAssetModalId);
  }
  // edit amenities
  onEditAmenities(asset) {
    if (!asset?._id)
      return;
    this._router.navigate([ROUTES.getFullRoute(ROUTES.ASSET.BASE, ROUTES.ASSET.UPSERT_AMENITIES?.replace(":id", asset._id))]);
  }
  // edit images
  onEditImages(asset) {
    if (!asset?._id)
      return;
    this._router.navigate([ROUTES.getFullRoute(ROUTES.ASSET.BASE, ROUTES.ASSET.UPSERT_IMAGES?.replace(":id", asset._id))]);
  }
  // delete asset
  onDeleteAsset(asset) {
    if (this.assetData || this.isReqAlive)
      return;
    this.assetData = asset;
    this._coreService.modal.open(this.deleteAssetModalId);
  }
  onDeleteAssetCancel() {
    this.assetData = null;
    this._coreService.modal.close(this.deleteAssetModalId);
  }
  onConfirmDeleteAsset() {
    if (!this.assetData?._id || this.isReqAlive)
      return;
    this.isReqAlive = true;
    this._apiFs.asset.delete(this.assetData._id).subscribe({
      next: (res) => {
        this.isReqAlive = false;
        if (res.code === "DELETED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Asset deleted successfully");
          this.getAssets();
          this.onDeleteAssetCancel();
        }
      },
      error: (err) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  static \u0275fac = function Asset_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Asset)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Asset, selectors: [["app-asset"]], decls: 23, vars: 19, consts: [[1, "d-flex", "gap-2", "justify-content-between"], [1, "mb-3"], [1, "bg-white", "rounded-3", "shadow", "p-2", "pt-3"], [1, "mb-3", "d-flex", "gap-2", "justify-content-between", "flex-wrap"], [1, "d-flex", "gap-2", "align-items-center", "flex-wrap", "flex-grow-1"], ["placeholder", "All resorts", "displayKey1", "title", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "enableSameSelectRemove"], ["type", "text", "name", "searchProperty", "placeholder", "Search property", 1, "form-control", "w-auto", "mw-100", 3, "ngModelChange", "ngModel"], ["placeholder", "Select property", "displayKey1", "title", 3, "onSelect", "selectedOption", "optionsList", "filterKeys", "enableSameSelectRemove"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "text-center"], ["bgLayer", "bg-gray-light", 3, "appRegisterModalLayer"], [3, "data", "propertyList", "resortList", "selectedResort", "selectedProperty", "assetConfigs"], [1, "modal", "d-block"], [1, "spinner-border", "text-primary"], [1, "table-responsive-xl"], [1, "table", "table-striped", "table-hover"], [1, "table-light"], [1, "text-nowrap"], [1, "text-center", "w-1-percent"], [3, "pageChange", "totalPages", "totalEntries", "currentPage", "pageSize"], [1, "text-capitalize"], [1, "description-text"], [1, "badge", "rounded-pill", "cursor-pointer", 3, "click"], [1, "text-muted"], [1, "dropdown", "d-block", "text-center"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "title", "More options", 1, "btn", "btn-sm", "btn-outline-secondary", "rounded-circle", "border-0", "outline-none", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-three-dots-vertical"], ["d", "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], ["type", "button", 1, "dropdown-item", "text-danger", 3, "click"], ["colspan", "10", 1, "text-center"], [3, "upsert", "data", "propertyList", "resortList", "selectedResort", "selectedProperty", "assetConfigs"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "shadow-lg"], [1, "modal-header"], [1, "modal-title", "fs-5"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-danger", "fw-bold", "text-capitalize"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function Asset_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, " Assets ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "app-common-dropdown", 5);
      \u0275\u0275listener("onSelect", function Asset_Template_app_common_dropdown_onSelect_6_listener($event) {
        return ctx.onResortFilterSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function Asset_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchProperty, $event) || (ctx.searchProperty = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-common-dropdown", 7);
      \u0275\u0275listener("onSelect", function Asset_Template_app_common_dropdown_onSelect_8_listener($event) {
        return ctx.onPropertySelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function Asset_Template_button_click_9_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275text(10, " Search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function Asset_Template_button_click_11_listener() {
        return ctx.onClearFilters();
      });
      \u0275\u0275text(12, " Clear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275listener("click", function Asset_Template_button_click_13_listener() {
        return ctx.onCreateNew();
      });
      \u0275\u0275text(14, " + Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, Asset_Conditional_15_Template, 2, 0, "div", 11);
      \u0275\u0275conditionalCreate(16, Asset_Conditional_16_Template, 29, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "app-modal-layer", 12);
      \u0275\u0275conditionalCreate(18, Asset_Conditional_18_Template, 1, 6, "app-upsert-asset", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-modal-layer", 12);
      \u0275\u0275conditionalCreate(20, Asset_Conditional_20_Template, 21, 2, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "app-modal-layer", 12);
      \u0275\u0275conditionalCreate(22, Asset_Conditional_22_Template, 21, 2, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("selectedOption", ctx.selectedResort)("optionsList", ctx.resortList)("filterKeys", \u0275\u0275pureFunction0(17, _c02))("enableSameSelectRemove", true);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.searchProperty);
      \u0275\u0275advance();
      \u0275\u0275property("selectedOption", ctx.selectedProperty)("optionsList", ctx.propertyList)("filterKeys", \u0275\u0275pureFunction0(18, _c02))("enableSameSelectRemove", true);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.upsertAssetModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.upsertAssetModalId) ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.changeAssetStatusModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.changeAssetStatusModalId) ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("appRegisterModalLayer", ctx.deleteAssetModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.deleteAssetModalId) ? 22 : -1);
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ModalLayer,
    RegisterModalLayer,
    UpsertAsset,
    Pagination,
    CommonDropdown,
    DatePipe
  ], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body[_ngcontent-%COMP%]   .form-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-flex-row-gap[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .req-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%], \n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .limitation[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .textarea-limitation[_ngcontent-%COMP%] {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%] {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.description-text[_ngcontent-%COMP%] {\n  max-width: 80ch;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 2;\n  -webkit-line-clamp: 2;\n  word-break: break-all;\n}\n/*# sourceMappingURL=asset.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Asset, [{
    type: Component,
    args: [{ selector: "app-asset", imports: [
      FormsModule,
      ModalLayer,
      RegisterModalLayer,
      UpsertAsset,
      DatePipe,
      Pagination,
      CommonDropdown
    ], template: `<div class="d-flex gap-2 justify-content-between">
    <h4 class="mb-3">
        Assets
    </h4>
</div>

<div class="bg-white rounded-3 shadow p-2 pt-3">
    <div class="mb-3 d-flex gap-2 justify-content-between flex-wrap">
        <div class="d-flex gap-2 align-items-center flex-wrap flex-grow-1">
            <app-common-dropdown [selectedOption]="selectedResort" [optionsList]="resortList" placeholder="All resorts"
                [filterKeys]="['title']" displayKey1="title" [enableSameSelectRemove]="true"
                (onSelect)="onResortFilterSelected($event)" />

            <input type="text" name="searchProperty" class="form-control w-auto mw-100" placeholder="Search property"
                [(ngModel)]="searchProperty" />

            <app-common-dropdown [selectedOption]="selectedProperty" [optionsList]="propertyList"
                placeholder="Select property" [filterKeys]="['title']" displayKey1="title"
                [enableSameSelectRemove]="true" (onSelect)="onPropertySelected($event)" />

            <button class="btn btn-sm btn-outline-primary" (click)="onSearch()">
                Search
            </button>
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
    <div class="table-responsive-xl">
        <table class="table table-striped table-hover">
            <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Property</th>
                    <th>Status</th>
                    <th class="text-nowrap">Created At</th>
                    <th class="text-nowrap">Updated At</th>
                    <th class="text-center w-1-percent">Actions</th>
                </tr>
            </thead>
            <tbody>
                @for (asset of assets; track asset._id; let i = $index;) {
                <tr>
                    <td>{{ (currentPage - 1) * pageSize + i + 1 }}</td>
                    <td class="text-capitalize">
                        {{ asset.title }}
                    </td>
                    <td>
                        <p class="description-text">
                            {{ asset.description || '-' }}
                        </p>
                    </td>
                    <td>
                        {{ asset.price }}
                    </td>
                    <td>
                        {{ asset.quantity }}
                    </td>
                    <td class="text-capitalize">
                        {{ asset?.propertyId?.title }}
                    </td>
                    <td>
                        <span class="badge rounded-pill cursor-pointer"
                            [class]="asset.isPublished ? 'bg-success' : 'bg-danger'"
                            (click)="onChangeAssetStatus(asset)">
                            {{ asset.isPublished ? 'Published' : 'Unpublished' }}
                        </span>
                    <td class="text-muted">
                        {{ asset.createdAt | date:'yyyy-MM-dd' }}
                    </td>
                    <td class="text-muted">
                        {{ asset.updatedAt | date:'yyyy-MM-dd' }}
                    </td>
                    <td>
                        <div class="dropdown d-block text-center">
                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false" title="More options"
                                class="btn btn-sm btn-outline-secondary rounded-circle border-0 outline-none shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path
                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <button class="dropdown-item" type="button" (click)="onEditAmenities(asset)">
                                        Amenities
                                    </button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button" (click)="onEditImages(asset)">
                                        Images
                                    </button>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button" (click)="onEditAsset(asset)">
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button class="dropdown-item text-danger" type="button"
                                        (click)="onDeleteAsset(asset)">
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                }@empty{
                <tr>
                    <td colspan="10" class="text-center">
                        No assets found
                    </td>
                </tr>
                }
            </tbody>
        </table>
    </div>
    <app-pagination [totalPages]="totalPages" [totalEntries]="totalEntries" [currentPage]="currentPage"
        [pageSize]="pageSize" (pageChange)="onPageChange($event)" />
    }
</div>


<!-- Upsert Asset Modal -->
<app-modal-layer [appRegisterModalLayer]="upsertAssetModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(upsertAssetModalId)) {
    <app-upsert-asset [data]="assetData" [propertyList]="_propertyList" [resortList]="resortList"
        [selectedResort]="selectedResort" [selectedProperty]="selectedProperty" [assetConfigs]="assetConfigs"
        (upsert)="onUpsertAsset($event)" />
    }
</app-modal-layer>

<!-- Change Asset Status Modal -->
<app-modal-layer [appRegisterModalLayer]="changeAssetStatusModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(changeAssetStatusModalId)) {
    <div class="modal d-block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        Change Asset Status
                    </h1>
                    <button type="button" class="btn-close" (click)="onChangeAssetStatusCancel()"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Are you sure you want to change the status of
                        <span class="text-danger fw-bold text-capitalize">
                            {{ assetData?.title }}
                        </span>
                        asset to
                        <span class="text-danger fw-bold text-capitalize">
                            {{ assetData?.isPublished ? 'Unpublished' : 'Published' }}
                        </span>?
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-3" (click)="onChangeAssetStatusCancel()">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger" (click)="onConfirmChangeAssetStatus()">
                        Confirm Change
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
</app-modal-layer>

<!-- Delete Asset Modal -->
<app-modal-layer [appRegisterModalLayer]="deleteAssetModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(deleteAssetModalId)) {
    <div class="modal d-block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        Delete Asset
                    </h1>
                    <button type="button" class="btn-close" (click)="onDeleteAssetCancel()"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Are you sure you want to delete
                        <span class="text-danger fw-bold text-capitalize">
                            {{ assetData?.title }}
                        </span>
                        asset under property
                        <span class="text-danger fw-bold text-capitalize">
                            {{ assetData?.propertyId?.title }}
                        </span>?
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-3" (click)="onDeleteAssetCancel()">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger" (click)="onConfirmDeleteAsset()">
                        Confirm Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
</app-modal-layer>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n/* src/app/pages/asset/asset.scss */\n:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body .form-flex-row {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body .input-group {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body .input-group .form-flex-row-gap {\n  gap: 2px;\n}\n.form-body .input-group .input-label {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body .input-group .req-indicator {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body .input-group .optional,\n.form-body .input-group .limitation {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body .input-group .info-icon-wrap {\n  flex-shrink: 0;\n}\n.form-body .input-group .info-icon-wrap .info-icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body .input-group .input-wrap {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body .input-group .input-wrap .input-field {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-wrap .input-field::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-textarea-group .input-textarea {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-scrollbar {\n  display: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .textarea-limitation {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body .input-group .error-wrap {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body .input-group .error-wrap .error-msg {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.description-text {\n  max-width: 80ch;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 2;\n  -webkit-line-clamp: 2;\n  word-break: break-all;\n}\n/*# sourceMappingURL=asset.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Asset, { className: "Asset", filePath: "src/app/pages/asset/asset.ts", lineNumber: 34 });
})();

// src/app/pages/asset/pages/upsert-amenities/upsert-amenities.ts
function UpsertAmenities_Conditional_15_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 15);
    \u0275\u0275elementStart(2, "label", 16);
    \u0275\u0275element(3, "img", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const amenity_r1 = ctx.$implicit;
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", \u0275\u0275interpolate2("amenity-", key_r2, "-", amenity_r1))("formControlName", amenity_r1);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate2("amenity-", key_r2, "-", amenity_r1));
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(amenity_r1))("appSrc", ctx_r2.assetConfigs == null ? null : ctx_r2.assetConfigs.iconsMap == null ? null : ctx_r2.assetConfigs.iconsMap[amenity_r1]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", amenity_r1, " ");
  }
}
function UpsertAmenities_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275repeaterCreate(4, UpsertAmenities_Conditional_15_For_2_For_5_Template, 5, 11, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.assetConfigs.amenitiesMap[key_r2], " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroupName", key_r2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.assetConfigs.amenities[key_r2]);
  }
}
function UpsertAmenities_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, UpsertAmenities_Conditional_15_For_2_Template, 6, 2, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.amenitiesKeys);
  }
}
var UpsertAmenities = class _UpsertAmenities {
  _route;
  // Inject Services
  _fb = inject(FormBuilder);
  _coreService = inject(CoreFacadeService);
  _apiFs = inject(ApiFacadeService);
  constructor(_route) {
    this._route = _route;
    const assetId = this._route.snapshot.params["id"];
    if (assetId) {
      this.assetId = assetId;
      this.loadData();
    }
  }
  assetConfigs = {};
  dayUnitsKeys;
  amenitiesKeys;
  assetId;
  assetData;
  form = this._fb.group({});
  loadData() {
    forkJoin({
      asset: this._apiFs.asset.getPartialDetails(this.assetId, { amenities: true }),
      configuration: this._apiFs.asset.configuration({ amenities: "amenities" })
    }).subscribe({
      next: (res) => {
        if (res.asset?.code === "OK") {
          this.assetData = res.asset.data;
        }
        if (res.configuration?.code === "OK") {
          this.setAssetData(res.configuration.data);
        }
      },
      error: (err) => {
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  setAssetData(data) {
    if (!data)
      return;
    Object.assign(this.assetConfigs, data);
    if (this.assetConfigs) {
      this.amenitiesKeys = Object.keys(this.assetConfigs.amenities);
      const amenities = this.assetConfigs?.amenities;
      const savedAmenities = this.assetData?.amenities ?? {};
      if (amenities) {
        const amenitiesGroup = {};
        for (const key of Object.keys(amenities)) {
          const group = {};
          if (savedAmenities[key]) {
            for (const item of amenities[key]) {
              group[item] = [savedAmenities[key]?.includes?.(item) ?? false, []];
            }
          } else {
            for (const item of amenities[key]) {
              group[item] = [false, []];
            }
          }
          amenitiesGroup[key] = this._fb.group(group);
        }
        this.form.addControl("amenities", this._fb.group(amenitiesGroup));
      }
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const form = this.form.value;
    const body = {
      amenities: {}
    };
    for (const key of Object.keys(form.amenities)) {
      const amenities = Object.entries(form.amenities[key]).filter((item) => item[1]).map((item) => item[0]);
      if (amenities.length > 0) {
        body.amenities[key] = amenities;
      }
    }
    this._apiFs.asset.update(this.assetId, body).subscribe({
      next: (res) => {
        if (res.code === "UPDATED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Amenities updated successfully");
        }
      },
      error: (err) => {
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  static \u0275fac = function UpsertAmenities_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpsertAmenities)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpsertAmenities, selectors: [["app-upsert-amenities"]], decls: 19, vars: 7, consts: [[1, "d-flex", "gap-2", "justify-content-between"], [1, "mb-3"], [1, "bg-white", "rounded-3", "shadow", "p-3", "pt-4"], [1, "mb-3", "border-bottom", "pb-2"], [1, "mb-0", "fw-semibold", "fs-6", "text-center", "text-muted"], [1, "text-capitalize", "fw-bold", "text-gray"], [1, "badge", "rounded-pill", "text-uppercase"], [3, "ngSubmit", "formGroup"], ["formGroupName", "amenities", 1, "row", "mb-3"], [1, "d-flex", "gap-2", "mt-3", "mb-2"], [1, "btn", "btn-outline-primary", "mx-auto", "w-25"], [1, "col-md-6", "col-lg-4", "mb-3"], [1, "d-inline-block", "form-label", "mb-2", "fw-semibold", "text-capitalize"], [1, "d-flex", "flex-wrap", "column-gap-3", "row-gap-1", 3, "formGroupName"], [1, "form-check", "form-switch"], ["type", "checkbox", 1, "form-check-input", 3, "id", "formControlName"], [1, "form-check-label", "text-capitalize", 3, "for"], ["width", "24", "height", "24", "defaultSrc", "images/placeholder.svg", 1, "me-1", "bg-secondary", "rounded", 2, "padding", "2px", 3, "appSrc", "alt"]], template: function UpsertAmenities_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, " Amenities ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h2", 4)(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " under ");
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " property ");
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "form", 7);
      \u0275\u0275listener("ngSubmit", function UpsertAmenities_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275conditionalCreate(15, UpsertAmenities_Conditional_15_Template, 3, 0, "div", 8);
      \u0275\u0275elementStart(16, "div", 9)(17, "button", 10);
      \u0275\u0275text(18, " Save Changes ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.assetData == null ? null : ctx.assetData.title, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.assetData == null ? null : ctx.assetData.propertyId == null ? null : ctx.assetData.propertyId.title, " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap((ctx.assetData == null ? null : ctx.assetData.isPublished) ? "bg-success" : "bg-danger");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.assetData == null ? null : ctx.assetData.isPublished) ? "Published" : "Unpublished", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.contains("amenities") && ctx.amenitiesKeys.length > 0 ? 15 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, AppSrc], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpsertAmenities, [{
    type: Component,
    args: [{ selector: "app-upsert-amenities", imports: [
      ReactiveFormsModule,
      AppSrc
    ], template: `<div class="d-flex gap-2 justify-content-between">
    <h4 class="mb-3">
        Amenities
    </h4>
</div>

<div class="bg-white rounded-3 shadow p-3 pt-4">
    <div class="mb-3 border-bottom pb-2">
        <!-- show asset details here -->
        <h2 class="mb-0 fw-semibold fs-6 text-center text-muted">
            <span class="text-capitalize fw-bold text-gray">
                {{assetData?.title}}
            </span>
            under
            <span class="text-capitalize fw-bold text-gray">
                {{assetData?.propertyId?.title}}
            </span>
            property
            <span class="badge rounded-pill text-uppercase"
                [class]="assetData?.isPublished? 'bg-success' : 'bg-danger'">
                {{assetData?.isPublished ? 'Published' : 'Unpublished'}}
            </span>
        </h2>
    </div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <!-- Amenities -->
        @if(form.contains('amenities') && amenitiesKeys.length > 0) {
        <div class="row mb-3" formGroupName="amenities">
            @for (key of amenitiesKeys; track key;) {
            <div class="col-md-6 col-lg-4 mb-3">
                <span class="d-inline-block form-label mb-2 fw-semibold text-capitalize">
                    {{assetConfigs.amenitiesMap[key]}}
                </span>
                <div [formGroupName]="key" class="d-flex flex-wrap column-gap-3 row-gap-1">
                    @for (amenity of assetConfigs.amenities[key]; track amenity;) {
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="amenity-{{key}}-{{amenity}}"
                            [formControlName]="amenity">
                        <label class="form-check-label text-capitalize" for="amenity-{{key}}-{{amenity}}">
                            <img width="24" height="24" [appSrc]="assetConfigs?.iconsMap?.[amenity]"
                                style="padding: 2px;" defaultSrc="images/placeholder.svg" alt="{{amenity}}"
                                class="me-1 bg-secondary rounded">
                            {{amenity}}
                        </label>
                    </div>
                    }
                </div>
            </div>
            }
        </div>
        }

        <div class="d-flex gap-2 mt-3 mb-2">
            <button class="btn btn-outline-primary mx-auto w-25">
                Save Changes
            </button>
        </div>
    </form>
</div>` }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpsertAmenities, { className: "UpsertAmenities", filePath: "src/app/pages/asset/pages/upsert-amenities/upsert-amenities.ts", lineNumber: 22 });
})();

// src/app/pages/asset/pages/upsert-images/upsert-images.ts
var _forTrack02 = ($index, $item) => $item.value.id;
function UpsertImages_For_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275element(2, "span", 25);
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4, " \xA0 Saving... ");
    \u0275\u0275elementEnd()()();
  }
}
function UpsertImages_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 15)(2, "div", 16)(3, "input", 17);
    \u0275\u0275listener("change", function UpsertImages_For_17_Template_input_change_3_listener($event) {
      const \u0275$index_27_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangeImage($event, \u0275$index_27_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function UpsertImages_For_17_Template_button_click_4_listener() {
      const \u0275$index_27_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeleteImage(\u0275$index_27_r2));
    });
    \u0275\u0275text(5, " Delete ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275element(7, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275element(9, "textarea", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, UpsertImages_For_17_Conditional_10_Template, 5, 0, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const image_r4 = ctx.$implicit;
    const \u0275$index_27_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroupName", \u0275$index_27_r2);
    \u0275\u0275advance(6);
    \u0275\u0275property("appSrc", image_r4.value.url);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", image_r4 == null ? null : (tmp_13_0 = image_r4.get("alt")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["maxlength"]);
    \u0275\u0275property("name", "alt-" + \u0275$index_27_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.uploadIndexes[\u0275$index_27_r2] ? 10 : -1);
  }
}
function UpsertImages_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 27)(2, "div", 28)(3, "div", 29)(4, "h1", 30);
    \u0275\u0275text(5, " Delete Image ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function UpsertImages_Conditional_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeleteImageCancel());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "p", 33);
    \u0275\u0275text(9, " Are you sure you want to delete this image? ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "img", 34);
    \u0275\u0275elementStart(11, "span", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 36)(14, "button", 37);
    \u0275\u0275listener("click", function UpsertImages_Conditional_24_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeleteImageCancel());
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275listener("click", function UpsertImages_Conditional_24_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onConfirmDeleteImage());
    });
    \u0275\u0275text(17, " Confirm Delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("appSrc", ctx_r2.imageData.url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ALT: ", ctx_r2.imageData.alt, " ");
  }
}
var UpsertImages = class _UpsertImages {
  _route;
  // Inject Services
  _fb = inject(FormBuilder);
  _coreService = inject(CoreFacadeService);
  _apiFs = inject(ApiFacadeService);
  constructor(_route) {
    this._route = _route;
    const assetId = this._route.snapshot.params["id"];
    if (assetId) {
      this.getAssetDetails(assetId);
    }
  }
  assetData;
  uploadIndexes = {};
  form = this._fb.group({
    images: this._fb.array([])
  });
  deleteImageModalId = "delete-image-modal";
  imageData = null;
  get f_images() {
    return this.form.get("images");
  }
  getAssetDetails(assetId) {
    this._apiFs.asset.getPartialDetails(assetId, { images: true }).subscribe({
      next: (res) => {
        if (res.code === "OK") {
          this.assetData = res.data;
          this.setImagesInForm();
        }
      },
      error: (err) => {
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  setImagesInForm() {
    this.f_images.clear();
    const images = this.assetData?.images || [];
    if (images.length === 0) {
      this.f_images.push(this._fb.group({
        id: [this.f_images.length + 1, []],
        file: [null, []],
        url: [null, [Validators.required]],
        alt: ["", [Validators.maxLength(255)]]
      }));
      return;
    }
    for (const image of images) {
      this.f_images.push(this._fb.group({
        id: [this.f_images.length + 1, []],
        file: [null, []],
        url: [image.url, [Validators.required]],
        alt: [image.alt, [Validators.maxLength(255)]]
      }));
    }
  }
  onAddImage() {
    if (this.f_images.value.length >= 10) {
      this._coreService.utils.showToaster(EToasterType.Warning, "You can only add up to 10 images");
      return;
    }
    this.f_images.push(this._fb.group({
      id: [this.f_images.length + 1, []],
      file: [null, []],
      url: [null, [Validators.required]],
      alt: ["", [Validators.maxLength(255)]]
    }));
  }
  onChangeImage(event, index) {
    const fileInput = event.target;
    const file = fileInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const state = this.f_images.at(index).value;
        this.f_images.at(index).patchValue({
          file,
          url: reader.result
        });
        this.uploadImage(index, { state, fileEvent: event });
      };
      reader.readAsDataURL(file);
    }
  }
  uploadImage(index, { state, fileEvent }) {
    if (!this.assetData?._id || this.uploadIndexes[index])
      return;
    this.uploadIndexes[index] = true;
    const image = this.f_images.at(index).value;
    const formData = new FormData();
    formData.append("image", image.file);
    formData.append("alt", image.alt ?? "");
    formData.append("index", index.toString());
    this._apiFs.asset.upsertImage(this.assetData._id, formData).subscribe({
      next: (res) => {
        if (res.code === "OK") {
          this.uploadIndexes[index] = false;
          const location = res.data?.location;
          if (location) {
            this.f_images.at(index).patchValue({
              file: null,
              url: location
            });
          }
        }
      },
      error: (err) => {
        this.uploadIndexes[index] = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
        this.f_images.at(index).patchValue(state);
        fileEvent.target.value = "";
      }
    });
  }
  onDrop(event) {
    moveItemInArray(this.f_images.controls, event.previousIndex, event.currentIndex);
    this.f_images.updateValueAndValidity();
  }
  onDeleteImage(index) {
    this.imageData = this.f_images.at(index).value;
    if (!this.assetData?.images?.some((image) => image.url === this.imageData.url)) {
      this.f_images.removeAt(index);
      return;
    }
    this.imageData.index = index;
    this._coreService.modal.open(this.deleteImageModalId);
  }
  onDeleteImageCancel() {
    this._coreService.modal.close(this.deleteImageModalId);
    this.imageData = null;
  }
  isDeleteReqAlive = false;
  onConfirmDeleteImage() {
    if (!this.imageData || this.isDeleteReqAlive)
      return;
    this.isDeleteReqAlive = true;
    const body = {
      url: this.imageData.url,
      index: this.imageData.index
    };
    this._apiFs.asset.removeImage(this.assetData._id, body).subscribe({
      next: (res) => {
        this.isDeleteReqAlive = false;
        if (res.code === "UPDATED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Image deleted successfully");
          this.onDeleteImageCancel();
          this.f_images.removeAt(this.imageData.index);
        }
      },
      error: (err) => {
        this.isDeleteReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  isReqAlive = false;
  onSubmit() {
    if (this.isReqAlive)
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const hasPlaceholderImage = this.f_images.value.some((image) => !image.url);
      if (hasPlaceholderImage) {
        const msg = this.f_images.value.length > 1 ? "Please remove extra images." : "Please add at least one image.";
        this._coreService.utils.showToaster(EToasterType.Warning, msg);
      }
      return;
    }
    if (this.f_images.value.length === 0) {
      this._coreService.utils.showToaster(EToasterType.Warning, "At least one image is required to save the changes.");
      return;
    }
    this.isReqAlive = true;
    const body = {
      images: this.f_images.value.map((image) => ({
        url: image.url,
        alt: image.alt
      }))
    };
    this._apiFs.asset.update(this.assetData._id, body).subscribe({
      next: (res) => {
        this.isReqAlive = false;
        if (res.code === "UPDATED") {
          this._coreService.utils.showToaster(EToasterType.Success, "Images updated successfully");
        }
      },
      error: (err) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || "Something went wrong. Please try again later";
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
  static \u0275fac = function UpsertImages_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpsertImages)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpsertImages, selectors: [["app-upsert-images"]], decls: 25, vars: 8, consts: [[1, "d-flex", "gap-2", "justify-content-between"], [1, "mb-3"], [1, "bg-white", "rounded-3", "shadow", "p-3", "pt-4"], [1, "mb-3", "border-bottom", "pb-2"], [1, "mb-0", "fw-semibold", "fs-6", "text-center", "text-muted"], [1, "text-capitalize", "fw-bold", "text-gray"], [1, "badge", "rounded-pill", "text-uppercase"], [3, "formGroup"], ["formArrayName", "images", "cdkDropList", "", "cdkDropListOrientation", "mixed", 1, "row", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "col-md-6", "col-xl-4", "col-xxl-3", "mb-3", "overflow-hidden"], [1, "d-flex", "column-gap-4", "mt-3", "mb-2", "justify-content-center", "align-items-center", "flex-wrap"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["bgLayer", "bg-gray-light", 3, "appRegisterModalLayer"], [1, "modal", "d-block"], [1, "card", "shadow-sm", "h-100", "position-relative", 3, "formGroupName"], [1, "card-header", "d-flex", "gap-2", "align-items-center"], ["type", "file", "accept", "image/*", 1, "form-control", "form-control-sm", "flex-grow-1", 3, "change"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], ["cdkDragHandle", "", 1, "card-body", "p-2"], ["alt", "", "draggable", "false", 1, "asset-thumb", "rounded", "user-select-none", 3, "appSrc"], [1, "card-footer"], ["formControlName", "alt", "rows", "1", "placeholder", "Enter image alt text", 1, "form-control", "img-alt-textarea", 3, "name"], [1, "text-center", "position-absolute", "top-0", "start-0", "end-0", "bottom-0"], [1, "d-flex", "justify-content-center", "align-items-center", "h-100", "bg-dark", "bg-opacity-10", "rounded", "fs-5"], [1, "spinner-border", "spinner-border"], ["role", "status"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "shadow-lg"], [1, "modal-header"], [1, "modal-title", "fs-5"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3", "text-center"], ["alt", "", "draggable", "false", 1, "asset-thumb", "rounded", "user-select-none", "mb-3", 3, "appSrc"], [1, "text-capitalize", "text-muted"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function UpsertImages_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, " Images ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h2", 4)(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " under ");
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " property ");
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "form", 7)(15, "div", 8);
      \u0275\u0275listener("cdkDropListDropped", function UpsertImages_Template_div_cdkDropListDropped_15_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275repeaterCreate(16, UpsertImages_For_17_Template, 11, 6, "div", 9, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      \u0275\u0275listener("click", function UpsertImages_Template_button_click_19_listener() {
        return ctx.onAddImage();
      });
      \u0275\u0275text(20, " + Add Image ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275listener("click", function UpsertImages_Template_button_click_21_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(22, " Save Changes ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "app-modal-layer", 13);
      \u0275\u0275conditionalCreate(24, UpsertImages_Conditional_24_Template, 18, 2, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.assetData == null ? null : ctx.assetData.title, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.assetData == null ? null : ctx.assetData.propertyId == null ? null : ctx.assetData.propertyId.title, " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap((ctx.assetData == null ? null : ctx.assetData.isPublished) ? "bg-success" : "bg-danger");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.assetData == null ? null : ctx.assetData.isPublished) ? "Published" : "Unpublished", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.f_images.controls);
      \u0275\u0275advance(7);
      \u0275\u0275property("appRegisterModalLayer", ctx.deleteImageModalId);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._coreService.modal.isOpen(ctx.deleteImageModalId) ? 24 : -1);
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
    ModalLayer,
    RegisterModalLayer,
    CdkDrag,
    CdkDropList,
    CdkDragHandle
  ], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body[_ngcontent-%COMP%]   .form-flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-flex-row-gap[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .req-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%], \n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .limitation[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .input-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #99A0AE;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-textarea-group[_ngcontent-%COMP%]   .textarea-limitation[_ngcontent-%COMP%] {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%] {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .error-wrap[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.asset-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  object-position: center;\n}\n.img-alt-textarea[_ngcontent-%COMP%] {\n  max-height: 3lh !important;\n}\n/*# sourceMappingURL=upsert-images.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpsertImages, [{
    type: Component,
    args: [{ selector: "app-upsert-images", imports: [
      ReactiveFormsModule,
      AppSrc,
      ModalLayer,
      RegisterModalLayer,
      CdkDrag,
      CdkDropList,
      CdkDragHandle
    ], template: `<div class="d-flex gap-2 justify-content-between">
    <h4 class="mb-3">
        Images
    </h4>
</div>

<div class="bg-white rounded-3 shadow p-3 pt-4">
    <div class="mb-3 border-bottom pb-2">
        <!-- show asset details here -->
        <h2 class="mb-0 fw-semibold fs-6 text-center text-muted">
            <span class="text-capitalize fw-bold text-gray">
                {{assetData?.title}}
            </span>
            under
            <span class="text-capitalize fw-bold text-gray">
                {{assetData?.propertyId?.title}}
            </span>
            property
            <span class="badge rounded-pill text-uppercase"
                [class]="assetData?.isPublished? 'bg-success' : 'bg-danger'">
                {{assetData?.isPublished ? 'Published' : 'Unpublished'}}
            </span>
        </h2>
    </div>

    <form [formGroup]="form">
        <!-- Images -->
        <div formArrayName="images" class="row" cdkDropList cdkDropListOrientation="mixed"
            (cdkDropListDropped)="onDrop($event)">
            @for (image of f_images.controls; track image.value.id; let index = $index;) {
            <div class="col-md-6 col-xl-4 col-xxl-3 mb-3 overflow-hidden" cdkDrag>
                <div [formGroupName]="index" class="card shadow-sm h-100 position-relative">
                    <div class="card-header d-flex gap-2 align-items-center">
                        <input type="file" class="form-control form-control-sm flex-grow-1" accept="image/*"
                            (change)="onChangeImage($event, index)">
                        <button type="button" class="btn btn-outline-danger btn-sm" (click)="onDeleteImage(index)">
                            Delete
                        </button>
                    </div>
                    <div cdkDragHandle class="card-body p-2">
                        <img [appSrc]="image.value.url" alt="" class="asset-thumb rounded user-select-none"
                            draggable="false">
                    </div>
                    <div class="card-footer">
                        <textarea class="form-control img-alt-textarea" [name]="'alt-'+index" formControlName="alt"
                            [class.is-invalid]="image?.get('alt')?.errors?.['maxlength']" rows="1"
                            placeholder="Enter image alt text"></textarea>
                    </div>

                    @if(uploadIndexes[index]) {
                    <div class="text-center position-absolute top-0 start-0 end-0 bottom-0">
                        <div
                            class="d-flex justify-content-center align-items-center h-100 bg-dark bg-opacity-10 rounded fs-5">
                            <span class="spinner-border spinner-border"></span>
                            <span role="status">
                                &nbsp; Saving...
                            </span>
                        </div>
                    </div>
                    }
                </div>
            </div>
            }
        </div>

        <div class="d-flex column-gap-4 mt-3 mb-2 justify-content-center align-items-center flex-wrap">
            <button type="button" class="btn btn-outline-secondary" (click)="onAddImage()">
                + Add Image
            </button>
            <button type="button" class="btn btn-outline-primary" (click)="onSubmit()">
                Save Changes
            </button>
        </div>
    </form>
</div>


<!-- Delete Image Modal -->
<app-modal-layer [appRegisterModalLayer]="deleteImageModalId" bgLayer="bg-gray-light">
    @if (_coreService.modal.isOpen(deleteImageModalId)) {
    <div class="modal d-block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        Delete Image
                    </h1>
                    <button type="button" class="btn-close" (click)="onDeleteImageCancel()"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-3 text-center">
                        Are you sure you want to delete this image?
                    </p>
                    <img [appSrc]="imageData.url" alt="" class="asset-thumb rounded user-select-none mb-3"
                        draggable="false">
                    <span class="text-capitalize text-muted">
                        ALT: {{ imageData.alt }}
                    </span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-3" (click)="onDeleteImageCancel()">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger" (click)="onConfirmDeleteImage()">
                        Confirm Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
</app-modal-layer>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700;800&display=swap";\n\n/* src/app/pages/asset/pages/upsert-images/upsert-images.scss */\n:root {\n  --color-primary: #0B0BCF;\n  --color-primary-400: #5386E4;\n  --color-primary-50: #ECECFE;\n  --color-accent: #F8A41D;\n  --color-text: #141C25;\n  --color-border: rgb(216, 216, 255);\n  --color-divider: rgb(236, 236, 254);\n  --surface-weak: rgba(236, 236, 254, 0.5);\n}\n.form-body {\n  padding: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 16px;\n}\n.form-body .form-flex-row {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form-body .input-group {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 4px;\n}\n.form-body .input-group .form-flex-row-gap {\n  gap: 2px;\n}\n.form-body .input-group .input-label {\n  flex-shrink: 0;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.form-body .input-group .req-indicator {\n  flex-shrink: 0;\n  color: #FB3748;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 500;\n}\n.form-body .input-group .optional,\n.form-body .input-group .limitation {\n  flex-shrink: 0;\n  color: #525866;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n}\n.form-body .input-group .info-icon-wrap {\n  flex-shrink: 0;\n}\n.form-body .input-group .info-icon-wrap .info-icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.form-body .input-group .input-wrap {\n  width: 100%;\n  margin: 0 !important;\n}\n.form-body .input-group .input-wrap .input-field {\n  width: 100%;\n  margin: 0;\n  padding: 9px 12px;\n  outline: none;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border-radius: 6px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-wrap .input-field::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-wrap .input-field::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid #E1E4EA;\n  background: #FFF;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);\n}\n.form-body .input-group .input-textarea-group .input-textarea {\n  margin: 0 0 8px;\n  padding: 0;\n  position: relative;\n  field-sizing: content;\n  width: 100%;\n  min-height: 1.5lh;\n  max-height: 6lh;\n  color: #0E121B;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: -0.084px;\n  font-weight: 400;\n  border: none;\n  outline: none;\n  resize: none;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-scrollbar {\n  display: none;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-webkit-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-moz-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea:-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::-ms-input-placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .input-textarea::placeholder {\n  color: #99A0AE;\n}\n.form-body .input-group .input-textarea-group .textarea-limitation {\n  display: block;\n  color: #99A0AE;\n  text-align: right;\n  font-feature-settings:\n    "ss11" on,\n    "cv09" on,\n    "liga" off,\n    "calt" off;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: 0.22px;\n}\n.form-body .input-group .error-wrap {\n  padding: 2px 0 0;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3px;\n}\n.form-body .input-group .error-wrap .error-msg {\n  color: #FB3748;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n.asset-thumb {\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  object-position: center;\n}\n.img-alt-textarea {\n  max-height: 3lh !important;\n}\n/*# sourceMappingURL=upsert-images.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpsertImages, { className: "UpsertImages", filePath: "src/app/pages/asset/pages/upsert-images/upsert-images.ts", lineNumber: 29 });
})();

// src/app/pages/asset/asset.routes.ts
var routes = [
  {
    path: "",
    title: APP_PAGE_TITLE.ASSET.BASE,
    component: Asset
  },
  {
    path: ROUTES.ASSET.UPSERT_AMENITIES,
    title: APP_PAGE_TITLE.ASSET.UPSERT_AMENITIES,
    component: UpsertAmenities
  },
  {
    path: ROUTES.ASSET.UPSERT_IMAGES,
    title: APP_PAGE_TITLE.ASSET.UPSERT_IMAGES,
    component: UpsertImages
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-EU7NT3CT.js.map
