import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveLoanRoutingModule } from './active-loan-routing.module';
import { ActiveLoanComponent } from './active-loan.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    ActiveLoanRoutingModule
  ],
  declarations: [ActiveLoanComponent]
})
export class ActiveLoanModule { }
