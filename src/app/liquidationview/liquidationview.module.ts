import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiquidationviewRoutingModule } from './liquidationview-routing.module';
import { LiquidationviewComponent } from './liquidationview.component';

@NgModule({
  imports: [
    CommonModule,
    LiquidationviewRoutingModule
  ],
  declarations: [LiquidationviewComponent]
})
export class LiquidationviewModule { }
