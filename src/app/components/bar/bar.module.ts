import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { RouterModule, Routes } from '@angular/router';
import {ChartModule} from 'primeng/chart';

const routes: Routes = [
  {
    path: '',
    component: BarComponent,
  },
];

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule,
  ]
})
export class BarModule { }
