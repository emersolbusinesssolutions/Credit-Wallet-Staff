import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentoneRoutingModule } from './investmentone-routing.module';
import { InvestmentoneComponent } from './investmentone.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InvestmentoneRoutingModule
  ],
  declarations: [InvestmentoneComponent]
})
export class InvestmentoneModule { }
