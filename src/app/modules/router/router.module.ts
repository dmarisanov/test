import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from '../../components/info/info.component';
import { TableComponent } from '../../components/table/table.component';
import { AuthGuard } from '../../guard/auth.guard';
import { FormComponent } from '../../components/form/form.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'table',
    component: TableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
