import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {dashboard} from '@helpers/constants';
import {AuthService} from '../../services/auth.service';
import {take} from 'rxjs/operators';
import {Router, RouterModule} from '@angular/router';

interface IDashboard {
  name: string;
  link: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboard: IDashboard[] = dashboard;
  public collapse: boolean;

  @ViewChild('dashBoard', {static: false})
  public dashBoard: ElementRef<HTMLElement>;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
  }

  public toggleDashboard(collapse: boolean): void {
    this.collapse = collapse;

    if (!this.collapse) {
      this.dashBoard.nativeElement.style.width = '30px';

      return;
    }

    this.dashBoard.nativeElement.style.width = '300px';
  }

  public onContinue(link): void {
    this.authService.isAuthenticated.pipe(
      take(1),
    ).subscribe((authenticated) => {
      if (!authenticated) {
        this.authService.openAuthModal();
      }
      this.router.navigate([link]);
    });
  }
}
