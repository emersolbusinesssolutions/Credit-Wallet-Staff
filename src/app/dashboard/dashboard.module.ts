import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    MyDatePickerModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent
]
})
export class DashboardModule { }
