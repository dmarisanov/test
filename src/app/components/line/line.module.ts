import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LineComponent } from './line.component';
import {ChartModule} from 'primeng/chart';

const routes: Routes = [
  {
    path: '',
    component: LineComponent,
  },
];

@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule
  ]
})
export class LineModule { }
