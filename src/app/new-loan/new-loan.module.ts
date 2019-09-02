import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLoanRoutingModule } from './new-loan-routing.module';
import { NewLoanComponent } from './new-loan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewLoanComponent],
  imports: [
    CommonModule,
    FormsModule,
    NewLoanRoutingModule
  ],
  
})
export class NewLoanModule { }


