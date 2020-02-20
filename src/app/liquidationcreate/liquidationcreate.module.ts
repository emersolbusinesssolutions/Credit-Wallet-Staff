import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiquidationcreateRoutingModule } from './liquidationcreate-routing.module';
import { LiquidationcreateComponent } from './liquidationcreate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiquidationcreateRoutingModule
  ],
  declarations: [LiquidationcreateComponent]
})
export class LiquidationcreateModule { }
