import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

import { SearchInput } from '../search-input/search-input';
import { AppSrc } from '../../directives/src';


@Component({
  selector: 'app-icon-dropdown',
  imports: [SearchInput, AppSrc],
  templateUrl: './icon-dropdown.html',
  styleUrl: './icon-dropdown.scss',
})
export class IconDropdown {
  @Input('placeholder') placeholder: string = '';
  @Input('optionsList') optionsList: Array<any> = [];
  @Input('selectedOption') selectedOption!: any;

  @Input('uniqueKey') uniqueKey: string = '_id';
  @Input('displayKey1') displayKey1: string = '';
  @Input('thumbKey') thumbKey: string = '';

  @Input('filterKeys') filterKeys: string[] = [];
  @Input('disableSameSelect') disableSameSelect: boolean = false;
  @Input('enableSameSelectRemove') enableSameSelectRemove: boolean = false;
  @Input('disableSearch') disableSearch: boolean = false;
  @Input('disabled') disabled: boolean = false;
  @Input('listWrapClass') listWrapClass: string = '';
  @Input('btnClass') btnClass: string = '';
  @Input('btnStyle') btnStyle: string = '';
  @Input('usedInModal') usedInModal: boolean = false;

  @Output('onSelect') onSelect: EventEmitter<any> = new EventEmitter<any>();

  protected cacheSearchTerms: string = '';
  protected filteredList: Array<any> = [];

  protected ngOnChanges(changes: SimpleChanges): void {
    if (changes['optionsList'] && changes['optionsList'].currentValue) {
      this.filteredList = [...(this.optionsList || [])];
      if (this.cacheSearchTerms) this.onSearchTerms(this.cacheSearchTerms);
    }
    if (changes['selectedOption'] && changes['selectedOption'].currentValue) {
      this.selectedOption = changes['selectedOption'].currentValue;
    }
  }

  protected get displayText(): string {
    if (!this.selectedOption) return '';
    if (this.displayKey1) return this.selectedOption[this.displayKey1] ?? '';
    return this.selectedOption?.toString() ?? '';
  }

  protected trackByUniqueKey = (index: number, item: any) => item[this.uniqueKey] ?? index;

  protected onSearchTerms(event: string): void {
    this.cacheSearchTerms = event;
    event = event?.trim()?.toLowerCase() ?? '';
    if (this.filterKeys.length > 0) {
      this.filteredList =
        this.optionsList?.filter((item: any) =>
          this.filterKeys.some((key: string) => item?.[key]?.toLowerCase().includes(event))
        ) || [];
    } else if (this.displayKey1) {
      this.filteredList =
        this.optionsList?.filter((item: any) =>
          item?.[this.displayKey1]?.toLowerCase().includes(event)
        ) || [];
    } else {
      this.filteredList =
        this.optionsList?.filter((item: any) => item?.toLowerCase().includes(event)) || [];
    }
  }

  protected isSelected(option: any): boolean {
    if (!this.selectedOption || !option) return false;
    if (this.uniqueKey) {
      return this.selectedOption?.[this.uniqueKey] === option?.[this.uniqueKey];
    }
    return this.selectedOption === option;
  }

  protected onOptionChange(option: any): void {
    if (this.disabled || !option) return;

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
      if (this.cacheSearchTerms) this.onSearchTerms('');
      return;
    }
    this.onSelect.emit(option);
    if (this.cacheSearchTerms) this.onSearchTerms('');
  }

  protected labelTitle(option: any): string {
    const v = option?.[this.displayKey1];
    return v != null ? String(v) : '';
  }
}
