import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingspaymentRoutingModule } from './savingspayment-routing.module';
import { SavingspaymentComponent } from './savingspayment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SavingspaymentRoutingModule
  ],
  declarations: [SavingspaymentComponent]
})
export class SavingspaymentModule { }
