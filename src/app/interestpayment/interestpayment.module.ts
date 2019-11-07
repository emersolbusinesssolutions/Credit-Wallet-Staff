import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestpaymentRoutingModule } from './interestpayment-routing.module';
import { InterestpaymentComponent } from './interestpayment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InterestpaymentRoutingModule
  ],
  declarations: [InterestpaymentComponent]
})
export class InterestpaymentModule { }
