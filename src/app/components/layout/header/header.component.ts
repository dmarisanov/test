import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';
import {AuthenticationComponent} from '../../authentication/authentication.component';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {log} from 'util';
import {take} from 'rxjs/operators';
import {IuserInfo} from '../../../helpers/userInfo.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userName: string;
  public menuItems = [
    {
      name: 'Info',
      link: 'info',
    },
    {
      name: 'Form',
      link: 'form',
    },
    {
      name: 'Table',
      link: 'table',
    },
  ];

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.userService.userInfo.subscribe((r) => {
      const nameFromStorage = JSON.parse(localStorage.getItem('__USER__')) as IuserInfo;
      this.userName = r?.firstName || nameFromStorage?.firstName;
    });
  }

  public logIn(): void {
    this.authService.openAuthModal();
  }

  public logOut() {
    localStorage.removeItem('__TOKEN__');
    this.authService.newUser.next(null);

    return this.router.navigate(['/']);
  }
}
