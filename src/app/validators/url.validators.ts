import { AbstractControl } from '@angular/forms';

export function validateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.com')) {
    return { validUrl: true };
  }
  return null;
}
