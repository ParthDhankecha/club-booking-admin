import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocus {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    // Small timeout ensures focus works after Angular renders view
    setTimeout(() => {
      this.el.nativeElement?.focus?.();
    }, 0);
  }
}