import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Pagination } from '@src/app/shared/components/pagination/pagination';
import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { IResponse } from '@src/app/models/http-response.model';
import { EToasterType } from '@src/app/models/utils.model';


type RefundTab = 'all' | 'refunded' | 'non-refunded';

interface RefundTarget {
  orderId: string;
  orderNo: number | string;
  lineItems: any[];
  totalCredits: number;
  refundCredits: number;
}


@Component({
  selector: 'app-cancelled-orders-to-refund',
  imports: [
    DatePipe,
    FormsModule,
    Pagination,
    ModalLayer,
    RegisterModalLayer,
  ],
  templateUrl: './cancelled-orders-to-refund.html',
  styleUrl: './cancelled-orders-to-refund.scss',
})
export class CancelledOrdersToRefund {
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);

  protected readonly refundTabs: { key: RefundTab; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'refunded', label: 'Refunded' },
    { key: 'non-refunded', label: 'Non-refunded' },
  ];

  protected readonly viewOrderModalId = 'cancelled-order-view-modal';
  protected readonly refundConfirmModalId = 'cancelled-order-refund-confirm-modal';

  protected activeTab: RefundTab = 'all';
  protected loading = false;
  protected isRefunding = false;
  protected orderList: any[] = [];
  protected selectedOrder: any = null;
  protected refundTarget: RefundTarget | null = null;

  protected currentPage = 1;
  protected pageSize = 10;
  protected totalEntries = 0;
  protected totalPages = 0;

  protected filters = {
    orderNo: '',
    email: '',
  };


  ngOnInit(): void {
    this.getCancelledOrdersList();
  }


  protected onTabChange(tab: RefundTab): void {
    if (this.activeTab === tab) {
      return;
    }

    this.activeTab = tab;
    this.currentPage = 1;
    this.getCancelledOrdersList();
  }

  protected onSearch(): void {
    this.currentPage = 1;
    this.getCancelledOrdersList();
  }

  protected onClearFilters(): void {
    this.filters.orderNo = '';
    this.filters.email = '';
    this.currentPage = 1;
    this.getCancelledOrdersList();
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.getCancelledOrdersList();
  }

  protected openViewOrder(order: any): void {
    if (!order?._id) return;
    this.selectedOrder = order;
    this._coreService.modal.open(this.viewOrderModalId);
  }

  protected closeViewOrder(): void {
    this.selectedOrder = null;
    this._coreService.modal.close(this.viewOrderModalId);
  }

  protected getPendingLineItems(order: any): any[] {
    return (order?.lineItems ?? []).filter((li: any) => !li.refundInfo);
  }

  protected hasPendingRefunds(order: any): boolean {
    return this.getPendingLineItems(order).length > 0;
  }

  protected getLineItemCredits(item: any): number {
    return Number(item?.credit?.used ?? 0);
  }

  protected formatCredits(value: number | null | undefined): string {
    if (value == null || Number.isNaN(value)) {
      return '0 credits';
    }
    const credits = Number(value);
    return `${credits} credit${credits === 1 ? '' : 's'}`;
  }

  protected openRefundConfirm(lineItems: any[]): void {
    if (!this.selectedOrder?._id || !lineItems.length) return;

    const pendingCredits = lineItems.reduce((sum, li) => sum + this.getLineItemCredits(li), 0);
    this.refundTarget = {
      orderId: this.selectedOrder._id,
      orderNo: this.selectedOrder.orderNo,
      lineItems,
      totalCredits: pendingCredits,
      refundCredits: pendingCredits,
    };
    this._coreService.modal.open(this.refundConfirmModalId);
  }

  protected openRefundConfirmForAllPending(): void {
    if (!this.selectedOrder) return;
    this.openRefundConfirm(this.getPendingLineItems(this.selectedOrder));
  }

  protected closeRefundConfirm(): void {
    this.refundTarget = null;
    this._coreService.modal.close(this.refundConfirmModalId);
  }

  protected canConfirmRefund(): boolean {
    const credits = this.refundTarget?.refundCredits;
    return credits != null && !Number.isNaN(credits) && credits > 0;
  }

  protected confirmRefund(): void {
    if (!this.refundTarget || this.isRefunding || !this.canConfirmRefund()) return;

    const lineItemIds = this.refundTarget.lineItems.map((li) => li._id).filter(Boolean);
    if (!lineItemIds.length) return;

    this.isRefunding = true;
    this._apiFs.order.refund({
      orderId: this.refundTarget.orderId,
      lineItems: lineItemIds,
      refundAmount: this.refundTarget.refundCredits,
    }).subscribe({
      next: (res: IResponse) => {
        this.isRefunding = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(
            EToasterType.Success,
            'Credits refunded successfully',
          );
          this.closeRefundConfirm();
          this.getCancelledOrdersList(true);
        } else {
          const msg = res.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
        }
      },
      error: (err: any) => {
        this.isRefunding = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      },
    });
  }

  protected formatKids(kids: any[] | undefined): string {
    if (!kids?.length) {
      return '-';
    }

    return kids.map((kid) => `${kid.count} (age ${kid.age})`).join(', ');
  }


  private _setOrderResponse(data: any): void {
    this.orderList = (data?.list ?? []).map((o: any) => {
      const assetMap = o.assets.reduce((acc: any, asset: any) => {
        acc[asset._id] = asset.title;
        return acc;
      }, {});
      o.lineItems.forEach((li: any) => {
        li.assetTitle = assetMap[li.assetId] ?? '-';
        li.kidsLabel = this.formatKids(li.kids);
        li.creditsUsed = this.getLineItemCredits(li);
        li.hasGuestContact = !!(
          li.guestDetails?.email ||
          li.guestDetails?.phone ||
          li.guestDetails?.address
        );
      });
      delete o.assets;

      o.cancelledStay = o.lineItems.length;
      const refundCount = o.lineItems.filter((li: any) => !!li.refundInfo).length;
      o.status = 'pending';
      if (refundCount === o.cancelledStay) {
        o.status = 'refunded';
      } else if (refundCount > 0) {
        o.status = 'partial';
      }

      o.user = o.user?.[0] ?? null;

      o.kids = this.formatKids(o.kids);
      return o;
    });
    this.totalEntries = data?.count ?? 0;
    this.totalPages = Math.ceil(this.totalEntries / this.pageSize);
  }

  private getCancelledOrdersList(preserveSelectedOrder = false): void {
    if (this.loading) return;

    const selectedOrderId = preserveSelectedOrder ? this.selectedOrder?._id : null;
    this.loading = true;

    const filterPayload: Record<string, string | number> = {
      listType: this.activeTab,
    };

    if (this.filters.orderNo.trim()) {
      filterPayload['orderNo'] = Number(this.filters.orderNo.trim());
    }
    if (this.filters.email.trim()) {
      filterPayload['email'] = this.filters.email.trim().toLowerCase();
    }

    const body: any = {
      page: this.currentPage,
      limit: this.pageSize,
      filters: Object.keys(filterPayload).length ? filterPayload : null,
    };

    this._apiFs.order.listCancelledToRefund(body).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK') {
          this._setOrderResponse(res.data);

          if (selectedOrderId) {
            const updatedOrder = this.orderList.find((o) => o._id === selectedOrderId);
            if (updatedOrder) {
              this.selectedOrder = updatedOrder;
            } else {
              this.closeViewOrder();
            }
          }
        }
        this.loading = false;
      },
      error: (err: any) => {
        console.log('Error while fetching cancelled orders to refund', err);
        this.loading = false;
      },
    });
  }
}