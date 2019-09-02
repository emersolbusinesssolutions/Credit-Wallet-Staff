import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeductionspaidRoutingModule } from './deductionspaid-routing.module';
import { FormsModule } from '@angular/forms';
import { DeductionspaidComponent } from './deductionspaid.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    DeductionspaidRoutingModule
  ],
  declarations: [DeductionspaidComponent]
})
export class DeductionspaidModule { }
