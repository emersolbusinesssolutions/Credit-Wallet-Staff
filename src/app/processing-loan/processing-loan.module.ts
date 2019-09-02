import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingLoanRoutingModule } from './processing-loan-routing.module';
import { FormsModule } from '@angular/forms';
import { ProcessingLoanComponent } from './processing-loan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProcessingLoanRoutingModule
  ],
  declarations: [ProcessingLoanComponent]
})
export class ProcessingLoanModule { }
