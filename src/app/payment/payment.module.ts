import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MyDatePickerModule,
    FormsModule,
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
