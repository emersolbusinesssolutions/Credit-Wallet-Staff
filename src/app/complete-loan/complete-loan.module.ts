import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteLoanRoutingModule } from './complete-loan-routing.module';
import { FormsModule } from '@angular/forms';
import { CompleteLoanComponent } from './complete-loan.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    CompleteLoanRoutingModule
  ],
  declarations: [CompleteLoanComponent]
})
export class CompleteLoanModule { }
