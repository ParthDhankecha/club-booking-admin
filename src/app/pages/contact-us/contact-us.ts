import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Pagination } from '@src/app/shared/components/pagination/pagination';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { IResponse } from '@src/app/models/http-response.model';


@Component({
  selector: 'app-contact-us',
  imports: [
    DatePipe,
    FormsModule,
    Pagination
  ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  private readonly _apiFs = inject(ApiFacadeService);

  protected loading = false;
  protected contactList: any[] = [];

  protected currentPage = 1;
  protected pageSize = 10;
  protected totalEntries = 0;
  protected totalPages = 0;

  protected filters = {
    email: '',
    mobile: '',
  };


  ngOnInit(): void {
    this.getContactUsList();
  }


  protected onSearch(): void {
    this.currentPage = 1;
    this.getContactUsList();
  }

  protected onClearFilters(): void {
    this.filters.email = '';
    this.filters.mobile = '';
    this.currentPage = 1;
    this.getContactUsList();
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.getContactUsList();
  }

  private getContactUsList(): void {
    this.loading = true;

    const hasFilters = this.filters.email.trim() || this.filters.mobile.trim();
    const body: any = {
      page: this.currentPage,
      limit: this.pageSize,
      filters: hasFilters ? {
        ...(this.filters.email.trim() && { email: this.filters.email.trim() }),
        ...(this.filters.mobile.trim() && { mobile: this.filters.mobile.trim() }),
      } : null
    };

    this._apiFs.contactUs.list(body).subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK') {
          const data = res.data;
          this.contactList = data?.list ?? [];
          this.totalEntries = data?.count ?? 0;
          this.totalPages = Math.ceil(this.totalEntries / this.pageSize);
        } else {
          this.contactList = [];
          this.totalEntries = 0;
          this.totalPages = 0;
        }
        this.loading = false;
      },
      error: (err: any) => {
        console.log('Error while fetching contact-us list', err);
        this.loading = false;
      }
    });
  }
}