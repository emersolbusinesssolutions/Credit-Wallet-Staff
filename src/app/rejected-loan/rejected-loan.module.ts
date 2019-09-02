import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RejectedLoanRoutingModule } from './rejected-loan-routing.module';
import { FormsModule } from '@angular/forms';
import { RejectedLoanComponent } from './rejected-loan.component';

@NgModule({
  imports: [
    CommonModule,
    RejectedLoanRoutingModule,
    FormsModule
  ],
  declarations: [RejectedLoanComponent]
})
export class RejectedLoanModule { }
