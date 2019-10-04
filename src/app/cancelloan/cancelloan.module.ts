import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelloanRoutingModule } from './cancelloan-routing.module';
import { CancelloanComponent } from './cancelloan.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    FormsModule,
    CancelloanRoutingModule
  ],
  declarations: [CancelloanComponent]
})
export class CancelloanModule { }
