import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaaspaymentRoutingModule } from './plaaspayment-routing.module';
import { PlaaspaymentComponent } from './plaaspayment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlaaspaymentRoutingModule
  ],
  declarations: [PlaaspaymentComponent]
})
export class PlaaspaymentModule { }
