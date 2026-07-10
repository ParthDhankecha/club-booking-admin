import { Component, inject, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import moment, { Moment } from 'moment';

import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';

import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';
import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { AppSrc } from '@src/app/shared/directives/src';
import { IResponse } from '@src/app/models/http-response.model';

/** Refresh calendar data 10 times per minute (every 6 seconds) */
const CALENDAR_REFRESH_INTERVAL_MS = (60 * 1000) / 10;

export type CalendarViewType = 'weekly' | 'monthly' | 'full-day';

/** Day names Monday-first to match front calendar (moment isoWeekday: Mon=1 .. Sun=7) */
const DAY_NAMES_MON_FIRST = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/** One segment of a stay/booking span for Google Calendar–style bars (start/middle/end per day) */
export interface IStayBar {
  type: 'booked' | 'pending' | 'basket';
  isStart: boolean;
  isEnd: boolean;
  label: string;
  units?: number;
  /** Set for bookings (not basket items); used to open order details popup */
  orderId?: string;
}

/** One card in the full-day (all assets) horizontal row */
export interface IFullDayItemCard {
  kind: 'order' | 'basket';
  _id?: string;
  orderId?: string;
  orderNo?: number;
  status?: string;
  uid?: number;
  units: number;
  adults?: number;
  kids?: { age: number; count: number }[];
  guest?: {
    guestName?: string;
    fullname?: string;
    phone?: string;
    mobile?: string;
    isCoMember?: boolean;
    emergencyContact?: string;
  };
}

/** One asset row in the full-day board */
export interface IFullDayAssetRow {
  assetId: string;
  assetTitle: string;
  bookingCount: number;
  queueCount: number;
  items: IFullDayItemCard[];
}

interface IDaySlot {
  date: string; // YYYY-MM-DD
  label: string; // Mon, Tue, ...
  dayOfMonth: number;
  bookedUnits: number;
  pendingUnits: number;
  basketUnits: number;
  totalQuantity: number;
  bookedBarPct: number;
  basketBarPct: number;
  isToday: boolean;
  isOtherMonth?: boolean;
  /** For monthly view: show this month name on one cell only (first of prev/next month group), e.g. "Feb", "Apr" */
  otherMonthLabel?: string;
  /** Per-day segments so a bar can span multiple cells (rounded left on start, right on end) */
  stayBars: IStayBar[];
}

@Component({
  selector: 'app-calendar',
  imports: [
    FormsModule,
    DatePipe,
    AppSrc,
    CommonDropdown,
    ModalLayer,
    RegisterModalLayer
  ],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar implements OnDestroy {
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);
  private _refreshTimer: ReturnType<typeof setInterval> | null = null;

  protected readonly calendarDetailsModalId = 'calendar-details-modal';
  protected readonly assetImagesModalId = 'calendar-asset-images-modal';
  protected detailsLoading = false;
  protected detailsData: any = null;
  /** 'date' = day's bookings+basket; 'order' = single order */
  protected detailsKind: 'date' | 'order' | null = null;
  /** Current image index in asset images gallery */
  protected assetImageIndex = 0;

  protected readonly autoRefreshIntervalSec = CALENDAR_REFRESH_INTERVAL_MS / 1000;
  protected autoRefreshEnabled = false;
  protected autoRefreshTitle: string = '';

  protected assetList: any[] = [];
  private _assetTitleMap: Map<string, string> = new Map();
  protected selectedAsset: any = null;
  protected isAllAssetsMode: boolean = true;
  protected loading = false;
  protected calendarData: {
    range: { start: string; end: string };
    view: string;
    assetId?: string | null;
    bookings: any[];
    basketItems: Record<string, any[]> | any[];
  } | null = null;
  protected fullDayAssetRows: IFullDayAssetRow[] = [];
  protected fullDayTotalBookings = 0;
  protected fullDayTotalQueue = 0;
  protected daySlots: IDaySlot[] = [];
  protected weekStart: Date | null = null;
  protected weekEnd: Date | null = null;
  protected currentViewDate: Moment = moment();
  protected viewType: CalendarViewType = 'weekly';
  protected monthYearLabel: string = '';
  protected fullDayDateLabel: string = '';


  ngOnInit(): void {
    this.loadAssetList();
  }


  private clearRefreshTimer(): void {
    if (this._refreshTimer != null) {
      clearInterval(this._refreshTimer);
      this._refreshTimer = null;
    }
  }

  private startRefreshTimer(): void {
    this.clearRefreshTimer();
    if (!this.autoRefreshEnabled) {
      return;
    }

    this._refreshTimer = setInterval(() => {
      this.loadCalendar(true);
    }, CALENDAR_REFRESH_INTERVAL_MS);
  }

  protected toggleAutoRefresh(): void {
    this.autoRefreshEnabled = !this.autoRefreshEnabled;
    if (this.autoRefreshEnabled) {
      this.autoRefreshTitle = `Auto refresh on (every ${this.autoRefreshIntervalSec}s)`;
      this.startRefreshTimer();
    } else {
      this.autoRefreshTitle = 'Auto refresh off';
      this.clearRefreshTimer();
    }
  }

  protected getAssetTitle(assetId: string | undefined | null): string {
    if (!assetId) return 'Asset';
    const id = String(assetId);
    return this.assetList.find((a) => String(a._id) === id)?.title ?? 'Asset';
  }

  protected onAssetSelected(asset: any): void {
    this.selectedAsset = asset ?? null;
    this.isAllAssetsMode = !asset?._id;
    this.loadCalendar();
  }

  protected setViewType(view: CalendarViewType): void {
    if (this.viewType === view) return;
    this.viewType = view;
    this.loadCalendar();
  }

  private loadAssetList(): void {
    this._apiFs.asset.masterData({ calendarList: 'list' }).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK' && res.data != null) {
          this.assetList = (res.data?.list ?? res.data?.calendarList ?? []).map((item: any) => {
            this._assetTitleMap.set(item._id, item.title);
            return {
              ...item,
              propertyTitle: item?.propertyId?.title ?? '',
            };
          });
          this.loadCalendar();
        }
      },
      error: (err) => console.error('Error loading assets', err),
    });
  }

  protected loadCalendar(silentRefresh = false): void {
    if (!silentRefresh && this.loading) return;

    const dateStr = this.currentViewDate.format('YYYY-MM-DD');
    if (!silentRefresh) {
      this.loading = true;
    }

    const view = this.isAllAssetsMode ? 'full-day' : this.viewType;
    const body = {
      view,
      date: dateStr,
      ...(this.isAllAssetsMode ? {} : { assetId: this.selectedAsset?._id }),
    } as any;

    this._apiFs.calendar.view(body).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res?.code === 'OK') {
          const data = res.data;
          this.calendarData = data;
          if (view === 'full-day') {
            this.buildFullDayAssetRows(data);
          } else {
            this.fullDayAssetRows = [];
            this.fullDayTotalBookings = 0;
            this.fullDayTotalQueue = 0;
          }
          this.buildDaySlots();
          this.startRefreshTimer();
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  /** Parse to moment for consistent date handling */
  private parseMoment(s: string): Moment {
    const m = moment(s);
    return m.isValid() ? m : moment();
  }

  /** Occupied nights for a stay: [checkIn, checkOut) — check-in inclusive, check-out exclusive. */
  private dayInStayRange(dayYMD: string, checkInISO: string, checkOutISO: string): boolean {
    const day = moment(dayYMD).startOf('day');
    const checkIn = this.parseMoment(checkInISO).startOf('day');
    const checkOut = this.parseMoment(checkOutISO).startOf('day');
    return !day.isBefore(checkIn, 'day') && day.isBefore(checkOut, 'day');
  }

  private buildFullDayAssetRows(data: {
    bookings?: { _id: string; orders?: any[] }[];
    basketItems?: Record<string, any[]>;
  }): void {
    const bookingsByAsset = new Map<string, any[]>();
    for (const group of data.bookings ?? []) {
      bookingsByAsset.set(String(group._id), group.orders ?? []);
    }

    const basketItemsMap: Record<string, any[]> = data.basketItems ?? {};
    const assetIds = new Set<string>([
      ...bookingsByAsset.keys(),
      ...Object.keys(basketItemsMap),
    ]);

    const rows: IFullDayAssetRow[] = [];
    let totalBookings = 0;
    let totalQueue = 0;

    for (const assetId of assetIds) {
      const orders = bookingsByAsset.get(assetId) ?? [];
      const basketItems = basketItemsMap[assetId] ?? [];
      const items: IFullDayItemCard[] = [];

      for (const order of orders) {
        items.push({
          kind: 'order',
          _id: order._id,
          orderId: order.orderId,
          orderNo: order.orderNo,
          status: order.status,
          units: order.units ?? 1,
          adults: order.adults,
          kids: order.kids,
          guest: order.guest,
        });
      }

      for (const item of basketItems) {
        items.push({
          kind: 'basket',
          _id: `basket-${item.uid}`,
          uid: item.uid,
          units: item.units ?? 1,
          adults: item.data?.adults ?? item.adults,
          kids: item.data?.kids ?? item.kids,
          guest: item.guest,
        });
      }

      totalBookings += orders.length;
      totalQueue += basketItems.length;

      rows.push({
        assetId,
        assetTitle: this._assetTitleMap.get(assetId) ?? this.getAssetTitle(assetId),
        bookingCount: orders.length,
        queueCount: basketItems.length,
        items,
      });
    }

    rows.sort((a, b) => a.assetTitle.localeCompare(b.assetTitle));
    this.fullDayAssetRows = rows;
    this.fullDayTotalBookings = totalBookings;
    this.fullDayTotalQueue = totalQueue;
  }

  protected fullDayItemTrack(item: IFullDayItemCard, idx: number): string | number {
    return item.kind === 'order' ? (`${item.orderId ?? item.orderNo}-${idx}`) : `${item.uid}-${idx}`;
  }

  private buildDaySlots(): void {
    const data = this.calendarData;
    if (!data?.range) {
      this.daySlots = [];
      return;
    }

    const start = this.parseMoment(data.range.start).startOf('day');
    const quantity = this.selectedAsset?.quantity ?? 0;
    const slots: IDaySlot[] = [];
    const todayYMD = moment().format('YYYY-MM-DD');
    const view = this.isAllAssetsMode ? 'full-day' : this.viewType;

    if (view === 'full-day') {
      slots.push(this.buildOneSlot(start, quantity, todayYMD, { bookings: [], basketItems: [] }));
      this.daySlots = slots;
      this.weekStart = moment(slots[0].date).toDate();
      this.weekEnd = this.weekStart;
      this.monthYearLabel = '';
      this.fullDayDateLabel = start.format('dddd, D MMMM YYYY');
    } else if (view === 'weekly') {
      const slotData = this.slotDataForGrid(data);
      for (let i = 0; i < 7; i++) {
        const d = start.clone().add(i, 'days');
        slots.push(this.buildOneSlot(d, quantity, todayYMD, slotData));
      }
      this.daySlots = slots;
      this.weekStart = slots.length ? moment(slots[0].date).toDate() : null;
      this.weekEnd = slots.length ? moment(slots[slots.length - 1].date).toDate() : null;
      this.monthYearLabel = '';
      this.fullDayDateLabel = '';
    } else {
      this.monthYearLabel = start.format('MMMM YYYY');
      const firstDayOfWeek = start.isoWeekday(); // Monday=1, Sunday=7
      const leadingCount = firstDayOfWeek - 1;
      const daysInMonth = start.daysInMonth();

      // Previous month days to complete first week (Monday-first)
      const prevMonth = start.clone().subtract(1, 'month');
      const prevMonthDays = prevMonth.daysInMonth();
      let prevDayNum = prevMonthDays - leadingCount + 1;
      for (let i = 0; i < leadingCount; i++) {
        const d = prevMonth.clone().date(prevDayNum);
        const slot = this.buildOneSlot(d, quantity, todayYMD, { bookings: [], basketItems: [] });
        slot.isOtherMonth = true;
        slots.push(slot);
        prevDayNum++;
      }

      const slotData = this.slotDataForGrid(data);
      // Current month: 1..daysInMonth so we never miss the last day (e.g. March 31)
      for (let day = 1; day <= daysInMonth; day++) {
        const d = start.clone().date(day);
        slots.push(this.buildOneSlot(d, quantity, todayYMD, slotData));
      }

      // Next month days to complete last week
      const filled = leadingCount + daysInMonth;
      const trailingCount = filled % 7 === 0 ? 0 : 7 - (filled % 7);
      const nextMonth = start.clone().add(1, 'month');
      for (let i = 1; i <= trailingCount; i++) {
        const d = nextMonth.clone().date(i);
        const slot = this.buildOneSlot(d, quantity, todayYMD, { bookings: [], basketItems: [] });
        slot.isOtherMonth = true;
        slots.push(slot);
      }

      if (leadingCount > 0 && slots[0]) {
        slots[0].otherMonthLabel = prevMonth.format('MMM');
      }
      const firstNextMonthIndex = leadingCount + daysInMonth;
      if (trailingCount > 0 && slots[firstNextMonthIndex]) {
        slots[firstNextMonthIndex].otherMonthLabel = nextMonth.format('MMM');
      }

      this.daySlots = slots;
      this.weekStart = slots.length ? moment(slots[0].date).toDate() : null;
      this.weekEnd = slots.length ? moment(slots[slots.length - 1].date).toDate() : null;
      this.fullDayDateLabel = '';
    }
  }

  private slotDataForGrid(data: {
    bookings?: any[]; basketItems?: any[] | Record<string, any[]>;
  } | null): { bookings: any[]; basketItems: any[] } {
    if (!data) {
      return { bookings: [], basketItems: [] };
    }
    return {
      bookings: data.bookings ?? [],
      basketItems: Array.isArray(data.basketItems) ? data.basketItems : [],
    };
  }

  private buildOneSlot(d: Moment, quantity: number, todayYMD: string, data: { bookings?: any[]; basketItems?: any[] }): IDaySlot {
    const dateStr = d.format('YYYY-MM-DD');
    let bookedUnits = 0;
    let pendingUnits = 0;
    let basketUnits = 0;
    const stayBars: IStayBar[] = [];

    (data.bookings ?? []).forEach((b: any) => {
      if (!this.dayInStayRange(dateStr, b.startDate, b.endDate)) return;
      const checkIn = this.parseMoment(b.startDate).startOf('day');
      const checkOut = this.parseMoment(b.endDate).startOf('day');
      const lastNight = checkOut.clone().subtract(1, 'day');
      const units = b.units ?? 1;
      const guest = typeof b.guest === 'string' ? b.guest : b.guest?.guestName ?? '';
      const label = `Order #${b.orderNo} · ${units} unit${units !== 1 ? 's' : ''}${guest ? ` (${guest})` : ''}`;
      const orderId = b.orderId ?? b._id ?? undefined;
      const stayBar: IStayBar = {
        type: 'booked',
        isStart: d.isSame(checkIn, 'day'),
        isEnd: d.isSame(lastNight, 'day'),
        label: label || 'Booked',
        units: b.units,
        orderId,
      };
      if (b.status === 'success') {
        bookedUnits += b.units ?? 0;
        stayBar.type = 'booked';
      } else if (b.status === 'pending') {
        pendingUnits += b.units ?? 0;
        stayBar.type = 'pending';
      }
      stayBars.push(stayBar);
    });

    (data.basketItems ?? []).forEach((b: any) => {
      if (!this.dayInStayRange(dateStr, b.startDate, b.endDate)) return;
      basketUnits += b.units ?? 0;
      const checkIn = this.parseMoment(b.startDate).startOf('day');
      const checkOut = this.parseMoment(b.endDate).startOf('day');
      const lastNight = checkOut.clone().subtract(1, 'day');
      stayBars.push({
        type: 'basket',
        isStart: d.isSame(checkIn, 'day'),
        isEnd: d.isSame(lastNight, 'day'),
        label: `#${b.uid ?? 'In queue'}${b.guest?.guestName ? `(${b.guest?.guestName})` : ''}`,
        units: b.units,
      });
    });

    const dayIndex = d.isoWeekday() - 1; // Monday=0 .. Sunday=6
    const obj: IDaySlot = {
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
      stayBars,
    };
    obj.bookedBarPct = this.getBookedBarPct(obj);
    obj.basketBarPct = this.getBasketBarPct(obj);
    return obj;
  }

  protected prevPeriod(): void {
    if (this.viewType === 'weekly' && !this.isAllAssetsMode) {
      this.currentViewDate.subtract(7, 'days');
    } else if (this.viewType === 'full-day' || this.isAllAssetsMode) {
      this.currentViewDate.subtract(1, 'day');
    } else {
      this.currentViewDate.subtract(1, 'month');
    }
    this.loadCalendar();
  }

  protected nextPeriod(): void {
    if (this.viewType === 'weekly' && !this.isAllAssetsMode) {
      this.currentViewDate.add(7, 'days');
    } else if (this.viewType === 'full-day' || this.isAllAssetsMode) {
      this.currentViewDate.add(1, 'day');
    } else {
      this.currentViewDate.add(1, 'month');
    }
    this.loadCalendar();
  }

  protected goToToday(): void {
    const today = moment();
    if (this.loading || this.currentViewDate?.isSame(today, 'day')) return;
    this.currentViewDate = today;
    this.loadCalendar();
  }

  protected refreshCalendar(): void {
    this.loadCalendar();
  }

  protected usedUnits(slot: IDaySlot): number {
    return slot.bookedUnits + slot.pendingUnits + slot.basketUnits;
  }

  /** True when the day is fully occupied (no free units), for “stay full” styling. */
  protected isStayFull(slot: IDaySlot): boolean {
    if (slot.isOtherMonth || !slot.totalQuantity) return false;
    return this.usedUnits(slot) >= slot.totalQuantity;
  }

  protected availableUnits(slot: IDaySlot): number {
    return Math.max(0, slot.totalQuantity - this.usedUnits(slot));
  }

  protected getBookedBarPct(slot: IDaySlot): number {
    const total = slot.totalQuantity || 0;
    if (total === 0) return 0;
    const used = this.usedUnits(slot);
    if (used <= total) return (slot.bookedUnits / total) * 100;
    return used > 0 ? (slot.bookedUnits / used) * 100 : 0;
  }

  protected getBasketBarPct(slot: IDaySlot): number {
    const total = slot.totalQuantity || 0;
    if (total === 0) return 0;
    const used = this.usedUnits(slot);
    if (used <= total) return (slot.basketUnits / total) * 100;
    return used > 0 ? (slot.basketUnits / used) * 100 : 0;
  }

  /** Open details popup for a day (bookings + basket items). */
  protected openDetailsByDate(slot: IDaySlot): void {
    if (slot.isOtherMonth) return;
    this.detailsKind = 'date';
    this.detailsData = null;
    this.detailsLoading = true;
    this._coreService.modal.open(this.calendarDetailsModalId);
    const payload: { type: 'date'; date: string; assetId?: string } = {
      type: 'date',
      date: slot.date,
    };
    if (this.selectedAsset?._id) {
      payload.assetId = this.selectedAsset._id;
    }
    this._apiFs.calendar.details(payload).subscribe({
      next: (res: IResponse) => {
        this.detailsLoading = false;
        if (res.code === 'OK' && res.data != null) this.detailsData = res.data;
      },
      error: () => {
        this.detailsLoading = false;
      },
    });
  }

  /** Switch from date view to full order details for one booking. */
  protected openDetailsByOrderId(orderId: string): void {
    if (!orderId) return;

    this.detailsKind = 'order';
    this.detailsData = null;
    this.detailsLoading = true;

    this._apiFs.calendar.details({ type: 'order', orderId }).subscribe({
      next: (res: IResponse) => {
        this.detailsLoading = false;
        if (res.code === 'OK' && res.data != null) this.detailsData = res.data;
      },
      error: () => {
        this.detailsLoading = false;
      },
    });
  }

  protected openOrderDetailsModal(orderId?: string): void {
    if (!orderId) return;

    this._coreService.modal.open(this.calendarDetailsModalId);
    this.openDetailsByOrderId(orderId);
  }

  /** Open details popup for an order (full order) or fallback to date for basket items. */
  protected openDetailsByBar(slot: IDaySlot, bar: IStayBar): void {
    if (bar.orderId) {
      this._coreService.modal.open(this.calendarDetailsModalId);
      this.openDetailsByOrderId(bar.orderId);
    } else {
      this.openDetailsByDate(slot);
    }
  }

  protected closeDetails(): void {
    this._coreService.modal.close(this.calendarDetailsModalId);
    this.detailsData = null;
    this.detailsKind = null;
  }

  protected formatLineKids(kids: { age: number; count: number }[] | undefined): string {
    if (!kids?.length) {
      return '';
    }

    return kids.map((kid) => `${kid.count} kid${kid.count === 1 ? '' : 's'} (age ${kid.age})`).join(', ');
  }

  protected guestTypeLabel(guest: any): string {
    if (!guest) return '';
    if (guest.memberId) return 'Member';
    if (guest.isCoMember === true) return 'Co-member';
    if (guest.isCoMember === false) return 'Family member';
    if (guest.guestName) return 'Other guest';
    return '';
  }

  /** Club orders use credits instead of currency amounts. */
  protected formatCredits(value: number | null | undefined): string {
    if (value == null || Number.isNaN(value)) {
      return '0 credits';
    }
    const credits = Number(value);
    return `${credits} credit${credits === 1 ? '' : 's'}`;
  }


  /** Images array of the selected asset (url, alt). */
  protected get selectedAssetImages(): { url: string; alt?: string }[] {
    return this.selectedAsset?.images ?? [];
  }

  /** First 2 images for thumbnail preview. */
  protected get assetImagesPreview(): { url: string; alt?: string }[] {
    return this.selectedAssetImages.slice(0, 2);
  }

  protected get hasAssetImages(): boolean {
    return this.selectedAssetImages.length > 0;
  }

  protected openAssetImages(index = 0): void {
    this.assetImageIndex = index;
    this._coreService.modal.open(this.assetImagesModalId);
  }

  protected closeAssetImages(): void {
    this._coreService.modal.close(this.assetImagesModalId);
  }

  protected prevAssetImage(): void {
    const len = this.selectedAssetImages.length;
    if (len === 0) return;
    this.assetImageIndex = (this.assetImageIndex - 1 + len) % len;
  }

  protected nextAssetImage(): void {
    const len = this.selectedAssetImages.length;
    if (len === 0) return;
    this.assetImageIndex = (this.assetImageIndex + 1 + len) % len;
  }


  ngOnDestroy(): void {
    this.clearRefreshTimer();
  }
}