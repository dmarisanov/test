import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogRef} from 'primeng/api';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  public static TOKEN = '__TOKEN__';

  public login = 'Login';
  public password = 'Password';

  public registrationForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private dialogRef: DynamicDialogRef,
    private authService: AuthService,
  ) {
  }

  public ngOnInit(): void {
  }

  public logIn(): void {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.get('login').value;
      this.authService.newUser.next(user);

      localStorage.setItem(AuthenticationComponent.TOKEN, this.generateToken());
      this.dialogRef.close();
    }
  }

  public generateToken(): string{
    return Math.random().toString(36).substr(2);
  }
}
