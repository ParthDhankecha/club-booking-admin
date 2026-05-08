import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBreadcrumbItem } from '@src/app/models/utils.model';


@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class Breadcrumb {

  @Input('items') items: IBreadcrumbItem[] = [];
  @Output('navigate') onClick: EventEmitter<IBreadcrumbItem> = new EventEmitter<IBreadcrumbItem>();


  protected onBreadcrumbItem(item: IBreadcrumbItem, last: boolean): void {
    if (last) return;
    this.onClick.emit(item);
  }
}