import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeductionsonetimeRoutingModule } from './deductionsonetime-routing.module';
import { FormsModule } from '@angular/forms';
import { DeductionsonetimeComponent } from './deductionsonetime.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    DeductionsonetimeRoutingModule
  ],
  declarations: [DeductionsonetimeComponent]
})
export class DeductionsonetimeModule { }
