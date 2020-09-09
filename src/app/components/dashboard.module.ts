import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'bar',
        loadChildren: () => import('../components/bar/bar.module').then(m => m.BarModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'line',
        loadChildren: () => import('../components/line/line.module').then(m => m.LineModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'pie',
        loadChildren: () => import('../components/pie/pie.module').then(m => m.PieModule),
        canActivate: [AuthGuard],
      },
    ]),
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
