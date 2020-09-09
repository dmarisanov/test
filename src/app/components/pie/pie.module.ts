import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PieComponent } from './pie.component';
import {ChartModule} from 'primeng/chart';

const routes: Routes = [
  {
    path: '',
    component: PieComponent,
  },
];

@NgModule({
  declarations: [PieComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ChartModule
    ]
})
export class PieModule { }
