import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';
import { InvestmentreportRoutingModule } from './investmentreport-routing.module';
import { InvestmentreportComponent } from './investmentreport.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    InvestmentreportRoutingModule
  ],
  declarations: [InvestmentreportComponent]
})
export class InvestmentreportModule { }
