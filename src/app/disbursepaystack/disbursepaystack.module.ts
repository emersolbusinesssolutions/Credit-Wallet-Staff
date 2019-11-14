import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisbursepaystackRoutingModule } from './disbursepaystack-routing.module';
import { DisbursepaystackComponent } from './disbursepaystack.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    MyDatePickerModule,
    DisbursepaystackRoutingModule
  ],
  declarations: [DisbursepaystackComponent]
})
export class DisbursepaystackModule { }
