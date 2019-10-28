import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiquidationRoutingModule } from './liquidation-routing.module';
import { LiquidationComponent } from './liquidation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LiquidationRoutingModule,
    FormsModule
  ],
  declarations: [LiquidationComponent]
})
export class LiquidationModule { }
