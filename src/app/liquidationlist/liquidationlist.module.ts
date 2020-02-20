import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiquidationlistRoutingModule } from './liquidationlist-routing.module';
import { LiquidationlistComponent } from './liquidationlist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiquidationlistRoutingModule
  ],
  declarations: [LiquidationlistComponent]
})
export class LiquidationlistModule { }
