import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryoverviewRoutingModule } from './recoveryoverview-routing.module';
import { RecoveryoverviewComponent } from './recoveryoverview.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    RecoveryoverviewRoutingModule,
    FormsModule,
    ChartModule,
    MyDatePickerModule,
  ],
  declarations: [RecoveryoverviewComponent]
})
export class RecoveryoverviewModule { }
