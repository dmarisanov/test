import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IuserInfo} from '../helpers/userInfo.interface';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public static USER_INFO = '__USER__';
  public userInfo = new BehaviorSubject<IuserInfo>(null);

  constructor() {
  }

  public rememberUserInfo(): void {
    this.userInfo.pipe(
      take(1)
    ).subscribe((user) => {
      localStorage.setItem(UserService.USER_INFO, JSON.stringify(user));
    });
  }
}
