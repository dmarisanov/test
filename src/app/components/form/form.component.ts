import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NamedPattern, PhoneValidator} from '../../helpers/validator.halpers';
import {EMAIL_REGEX} from '../../helpers/regExp.helper';
import {UserService} from '../../services/user.service';
import {IuserInfo} from '../../helpers/userInfo.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, NamedPattern('invalid email', EMAIL_REGEX)]),
    phone: new FormControl('', [Validators.required, PhoneValidator()]),
  });

  constructor(
    private userService: UserService
  ) {
  }

  public ngOnInit(): void {
    this.setFormData();
  }

  public getControlError(controlName: string): string {
    const validationErrors = this.userForm.get(controlName).errors;

    if (!validationErrors) {
      return;
    }

    const validationErrorKey = Object.keys(validationErrors)[0];

    return `${validationErrorKey}`;
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);

    return control.invalid && (control.touched || control.dirty);
  }

  public setFormData(): void{
    const data = JSON.parse(localStorage.getItem('__USER__')) as IuserInfo;
    this.userForm.get('firstName').setValue(data?.firstName );
    this.userForm.get('lastName').setValue(data?.lastName);
    this.userForm.get('email').setValue(data?.email);
    this.userForm.get('phone').setValue(data?.phone);
  }

  public submitForm(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.userService.userInfo.next(user);
      this.userService.rememberUserInfo();
    }
  }
}
