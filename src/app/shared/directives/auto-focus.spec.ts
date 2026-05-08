import { ElementRef } from '@angular/core';
import { AutoFocus } from './auto-focus';

describe('AutoFocus', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('input'));
    const directive = new AutoFocus(mockElementRef);
    expect(directive).toBeTruthy();
  });
});