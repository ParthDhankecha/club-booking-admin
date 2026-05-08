import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {

  @Input() totalPages: number = 0;  // Total number of pages
  @Input() totalEntries: number = 0; // Total number of entries
  @Input() currentPage: number = 0; // Current page
  @Input() pageSize: number = 10; // Records per page
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  protected pages: number[] = [];
  protected gap: number = 2; // Number of pages before/after the current page to show
  protected maxPageCount: number = 5; // Max number of pages to show (including ellipsis)


  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['totalPages']?.currentValue ||
      changes['currentPage']?.currentValue ||
      changes['pageSize']?.currentValue ||
      changes['totalEntries']?.currentValue
    ) {
      this.totalPages = this.totalEntries > 0 ? Math.ceil(this.totalEntries / this.pageSize) : 1;
      this.calculatePages();
    }
  }


  // Calculate the visible pages based on currentPage and totalPages
  private calculatePages(): void {
    this.pages = [];

    const pages = [];
    // Always show the first page
    if (this.totalPages > 1) {
      this.pages.push(1);
    }

    // Show gap (ellipsis) if needed
    if (this.currentPage - this.gap > 2) {
      this.pages.push(-this.pages.length - 1); // Represents the ellipsis
    }

    // Show pages around the current page
    const startPage = Math.max(2, this.currentPage - this.gap);
    const endPage = Math.min(this.totalPages - 1, this.currentPage + this.gap);
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }

    // Show gap (ellipsis) if needed
    if (this.currentPage + this.gap < this.totalPages - 1) {
      this.pages.push(-this.pages.length - 1); // Represents the ellipsis
    }

    // Always show the last page
    if (this.totalPages > 1) {
      this.pages.push(this.totalPages);
    }
  }

  // Change the current page
  protected onPageChange(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(page);
      this.calculatePages();
    }
  }

  // Check if the page is an ellipsis
  protected isEllipsis(page: number): boolean {
    return page < 0;
  }


  get startEntry(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endEntry(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalEntries);
  }
}