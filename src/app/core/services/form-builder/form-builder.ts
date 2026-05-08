import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormBuilder {

  lockFormControls(formGroup: FormGroup, controls: string[], isLocked: boolean = false): void {
    for (const name of controls) {
      const ctrl = formGroup.get(name);

      if (ctrl) {
        ctrl.disable({ emitEvent: false });

        // Keep original typed functions, so we can handle parameters and return types correctly
        const originalSetValue: AbstractControl['setValue'] = ctrl.setValue.bind(ctrl);
        const originalPatchValue: AbstractControl['patchValue'] = ctrl.patchValue.bind(ctrl);

        // Override with no-op(do nothing) if locked
        ctrl.setValue = ((...args: Parameters<AbstractControl['setValue']>) => {
          if (isLocked) return;
          originalSetValue(...(args as Parameters<AbstractControl['setValue']>));
        });
        // Override with no-op(do nothing) if locked
        ctrl.patchValue = ((...args: Parameters<AbstractControl['patchValue']>) => {
          if (isLocked) return;
          originalPatchValue(...(args as Parameters<AbstractControl['patchValue']>));
        });
      }
    }
  }
}