import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

export function NamedPattern(name: string, pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return pattern.test(control.value) ? null : {[name]: true};
  };
}

export function PhoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return IsValidPhoneNumber(control.value, 373) === true ? null : {'invalid number': true};
  };
}

function IsValidPhoneNumber(phoneNumber: string, countryCode: number): boolean {
  try {
    const phoneNumberUtil = PhoneNumberUtil.getInstance();

    const regionCode = phoneNumberUtil.getRegionCodeForCountryCode(countryCode);
    const parsedPhoneNumber = phoneNumberUtil.parse(phoneNumber, regionCode);
    const isValidPhoneNumber = phoneNumberUtil.isValidNumber(parsedPhoneNumber);

    return isValidPhoneNumber;
  } catch {
    return false;
  }
}
