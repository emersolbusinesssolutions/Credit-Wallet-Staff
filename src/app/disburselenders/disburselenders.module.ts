import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisburselendersRoutingModule } from './disburselenders-routing.module';
import { FormsModule } from '@angular/forms';
import { DisburselendersComponent } from './disburselenders.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    DisburselendersRoutingModule
  ],
  declarations: [DisburselendersComponent]
})
export class DisburselendersModule { }
