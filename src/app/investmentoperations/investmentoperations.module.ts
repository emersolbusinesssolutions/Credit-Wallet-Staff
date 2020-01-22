import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentoperationsRoutingModule } from './investmentoperations-routing.module';
import { InvestmentoperationsComponent } from './investmentoperations.component';

@NgModule({
  imports: [
    CommonModule,
    InvestmentoperationsRoutingModule
  ],
  declarations: [InvestmentoperationsComponent]
})
export class InvestmentoperationsModule { }
