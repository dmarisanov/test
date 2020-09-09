import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthenticationComponent} from '../components/authentication/authentication.component';
import {DialogService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public newUser = new BehaviorSubject<string>(localStorage.getItem('__TOKEN__'));

  public get isAuthenticated(): Observable<boolean> {
    return this.newUser.pipe(
      map((user) => (
        Boolean(user)
      )),
    );
  }

  constructor(
    private dialogService: DialogService,
  ) {
  }

  public openAuthModal(): void{
    this.dialogService.open(AuthenticationComponent, {
      showHeader: false,
      closeOnEscape: true,
      dismissableMask: true,
    });
  }
}
