import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeductionsRoutingModule } from './deductions-routing.module';
import { FormsModule } from '@angular/forms';
import { DeductionsComponent } from './deductions.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    DeductionsRoutingModule
  ],
  declarations: [DeductionsComponent]
})
export class DeductionsModule { }
