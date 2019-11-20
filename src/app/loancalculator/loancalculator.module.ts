import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoancalculatorRoutingModule } from './loancalculator-routing.module';
import { LoancalculatorComponent } from './loancalculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoancalculatorRoutingModule,
    FormsModule
  ],
  declarations: [LoancalculatorComponent]
})
export class LoancalculatorModule { }
