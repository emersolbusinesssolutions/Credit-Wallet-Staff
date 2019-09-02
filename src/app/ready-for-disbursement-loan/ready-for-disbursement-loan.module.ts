import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadyForDisbursementLoanRoutingModule } from './ready-for-disbursement-loan-routing.module';
import { ReadyForDisbursementLoanComponent } from './ready-for-disbursement-loan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReadyForDisbursementLoanRoutingModule
  ],
  declarations: [ReadyForDisbursementLoanComponent]
})
export class ReadyForDisbursementLoanModule { }
