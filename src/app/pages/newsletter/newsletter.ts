import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Pagination } from '@src/app/shared/components/pagination/pagination';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { IResponse } from '@src/app/models/http-response.model';


@Component({
  selector: 'app-newsletter',
  imports: [
    DatePipe,
    FormsModule,
    Pagination
  ],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class Newsletter {
  private readonly _apiFs = inject(ApiFacadeService);

  protected loading = false;
  protected newsletterList: any[] = [];

  protected currentPage = 1;
  protected pageSize = 10;
  protected totalEntries = 0;
  protected totalPages = 0;

  protected filters = {
    email: '',
    isSubscribed: 'all',
  };


  ngOnInit(): void {
    this.getNewsletterList();
  }


  protected onSearch(): void {
    this.currentPage = 1;
    this.getNewsletterList();
  }

  protected onClearFilters(): void {
    this.filters.email = '';
    this.filters.isSubscribed = 'all';
    this.currentPage = 1;
    this.getNewsletterList();
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.getNewsletterList();
  }

  private getNewsletterList(): void {
    this.loading = true;

    const isSubscribedFilter = this.filters.isSubscribed === 'all'
      ? null
      : this.filters.isSubscribed === 'subscribed';
    const hasFilters = this.filters.email.trim() || isSubscribedFilter != null;
    const body: any = {
      page: this.currentPage,
      limit: this.pageSize,
      filters: hasFilters ? {
        ...(this.filters.email.trim() && { email: this.filters.email.trim() }),
        ...(isSubscribedFilter != null && { isSubscribed: isSubscribedFilter }),
      } : null
    };

    this._apiFs.newsletter.list(body).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK') {
          const data = res.data;
          this.newsletterList = data?.list ?? [];
          this.totalEntries = data?.count ?? 0;
          this.totalPages = Math.ceil(this.totalEntries / this.pageSize);
        } else {
          this.newsletterList = [];
          this.totalEntries = 0;
          this.totalPages = 0;
        }
        this.loading = false;
      },
      error: (err: any) => {
        console.log('Error while fetching newsletter list', err);
        this.loading = false;
      }
    });
  }
}