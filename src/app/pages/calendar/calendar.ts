import { Component, inject, OnDestroy } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
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

export type CalendarViewType = 'weekly' | 'monthly';

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
    CurrencyPipe,
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

  protected assetList: any[] = [];
  protected selectedAsset: any = null;
  protected loading = false;
  protected calendarData: {
    range: { start: string; end: string };
    view: string;
    assetId: string;
    bookings: any[];
    basketItems: any[];
  } | null = null;
  protected daySlots: IDaySlot[] = [];
  protected weekStart: Date | null = null;
  protected weekEnd: Date | null = null;
  protected currentViewDate: Moment = moment();
  protected viewType: CalendarViewType = 'weekly';
  protected monthYearLabel: string = '';


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
    this._refreshTimer = setInterval(() => {
      if (this.selectedAsset?._id) {
        this.loadCalendar(true);
      } else {
        this.clearRefreshTimer();
      }
    }, CALENDAR_REFRESH_INTERVAL_MS);
  }

  protected onAssetSelected(asset: any): void {
    this.selectedAsset = asset ?? null;
    if (!this.selectedAsset) {
      this.clearRefreshTimer();
      return;
    }
    if (this.selectedAsset?.quantity != null) {
      this.loadCalendar();
    }
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
          this.assetList = (res.data?.list ?? []).map((item: any) => ({
            ...item,
            propertyTitle: item?.propertyId?.title ?? '',
          }));
        }
      },
      error: (err) => console.error('Error loading assets', err),
    });
  }

  protected loadCalendar(silentRefresh = false): void {
    if (!this.selectedAsset?._id || (!silentRefresh && this.loading)) return;

    const dateStr = this.currentViewDate.format('YYYY-MM-DD');
    const dateRange: any = {};
    if (!silentRefresh) {
      this.loading = true;
      const period = this.viewType === 'weekly' ? 'isoWeek' : 'month';
      dateRange.startDate = this.currentViewDate.clone().startOf(period).format('YYYY-MM-DD');
      dateRange.endDate = this.currentViewDate.clone().endOf(period).format('YYYY-MM-DD');
    }

    const body = {
      assetId: this.selectedAsset._id,
      view: this.viewType,
      date: dateStr,
    };
    this._apiFs.calendar.view(body).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res?.code === 'OK') {
          const data = res.data;
          this.calendarData = data;
          this.buildDaySlots();
          this.startRefreshTimer();
        }
      },
      error: (err: any) => {
        this.loading = false;
      }
    });
  }

  /** Parse to moment for consistent date handling */
  private parseMoment(s: string): Moment {
    const m = moment(s);
    return m.isValid() ? m : moment();
  }

  /** Check if a day (YYYY-MM-DD) falls within [start, end] inclusive. E.g. start 25, end 27 = booked for 25, 26, 27. */
  private dayOverlapsRange(dayYMD: string, startISO: string, endISO: string): boolean {
    const day = moment(dayYMD).startOf('day');
    const start = this.parseMoment(startISO).startOf('day');
    const end = this.parseMoment(endISO).startOf('day');
    return !day.isBefore(start, 'day') && !day.isAfter(end, 'day');
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

    if (this.viewType === 'weekly') {
      for (let i = 0; i < 7; i++) {
        const d = start.clone().add(i, 'days');
        slots.push(this.buildOneSlot(d, quantity, todayYMD, data));
      }
      this.daySlots = slots;
      this.weekStart = slots.length ? moment(slots[0].date).toDate() : null;
      this.weekEnd = slots.length ? moment(slots[slots.length - 1].date).toDate() : null;
      this.monthYearLabel = '';
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

      // Current month: 1..daysInMonth so we never miss the last day (e.g. March 31)
      for (let day = 1; day <= daysInMonth; day++) {
        const d = start.clone().date(day);
        slots.push(this.buildOneSlot(d, quantity, todayYMD, data));
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
    }
  }

  private buildOneSlot(d: Moment, quantity: number, todayYMD: string, data: { bookings?: any[]; basketItems?: any[] }): IDaySlot {
    const dateStr = d.format('YYYY-MM-DD');
    let bookedUnits = 0;
    let pendingUnits = 0;
    let basketUnits = 0;
    const stayBars: IStayBar[] = [];

    (data.bookings ?? []).forEach((b: any) => {
      if (!this.dayOverlapsRange(dateStr, b.startDate, b.endDate)) return;
      const start = this.parseMoment(b.startDate).startOf('day');
      const end = this.parseMoment(b.endDate).startOf('day');
      const units = b.units ?? 1;
      const guest = b.guestDetails?.guestName?.trim();
      const label = `Order #${b.orderNo} · ${units} unit${units !== 1 ? 's' : ''}${guest ? ` (${guest})` : ''}`;
      const orderId = b.orderId ?? b._id ?? undefined;
      const stayBar: IStayBar = {
        type: 'booked',
        isStart: d.isSame(start, 'day'),
        isEnd: d.isSame(end, 'day'),
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
      if (!this.dayOverlapsRange(dateStr, b.startDate, b.endDate)) return;
      basketUnits += b.units ?? 0;
      const start = this.parseMoment(b.startDate).startOf('day');
      const end = this.parseMoment(b.endDate).startOf('day');
      stayBars.push({
        type: 'basket',
        isStart: d.isSame(start, 'day'),
        isEnd: d.isSame(end, 'day'),
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
    this.currentViewDate.subtract(this.viewType === 'weekly' ? 7 : 1, this.viewType === 'weekly' ? 'days' : 'month');
    this.loadCalendar();
  }

  protected nextPeriod(): void {
    this.currentViewDate.add(this.viewType === 'weekly' ? 7 : 1, this.viewType === 'weekly' ? 'days' : 'month');
    this.loadCalendar();
  }

  protected goToToday(): void {
    const today = moment();
    if (this.loading || this.currentViewDate?.isSame(today, 'day')) return;
    this.currentViewDate = today;
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
    if (slot.isOtherMonth || !this.selectedAsset?._id) return;
    this.detailsKind = 'date';
    this.detailsData = null;
    this.detailsLoading = true;
    this._coreService.modal.open(this.calendarDetailsModalId);
    this._apiFs.calendar.details({
      type: 'date',
      date: slot.date,
      assetId: this.selectedAsset._id,
    }).subscribe({
      next: (res: IResponse) => {
        this.detailsLoading = false;
        if (res.code === 'OK' && res.data != null) this.detailsData = res.data;
      },
      error: () => {
        this.detailsLoading = false;
      },
    });
  }

  /** Open details popup for an order (full order) or fallback to date for basket items. */
  protected openDetailsByBar(slot: IDaySlot, bar: IStayBar): void {
    if (bar.orderId) {
      this.detailsKind = 'order';
      this.detailsData = null;
      this.detailsLoading = true;
      this._coreService.modal.open(this.calendarDetailsModalId);
      this._apiFs.calendar.details({ type: 'order', orderId: bar.orderId }).subscribe({
        next: (res: IResponse) => {
          this.detailsLoading = false;
          if (res.code === 'OK' && res.data != null) {
            this.detailsData = res.data;
          }
        },
        error: () => {
          this.detailsLoading = false;
        },
      });
    } else {
      this.openDetailsByDate(slot);
    }
  }

  protected closeDetails(): void {
    this._coreService.modal.close(this.calendarDetailsModalId);
    this.detailsData = null;
    this.detailsKind = null;
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
    this.assetImageIndex = (this.assetImageIndex + 1) % len;
  }


  ngOnDestroy(): void {
    this.clearRefreshTimer();
  }
}