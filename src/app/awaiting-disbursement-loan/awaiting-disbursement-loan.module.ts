import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwaitingDisbursementLoanRoutingModule } from './awaiting-disbursement-loan-routing.module';
import { AwaitingDisbursementLoanComponent } from './awaiting-disbursement-loan.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    AwaitingDisbursementLoanRoutingModule
  ],
  declarations: [AwaitingDisbursementLoanComponent]
})
export class AwaitingDisbursementLoanModule { }
