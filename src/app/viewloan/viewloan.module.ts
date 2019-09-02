import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewloanRoutingModule } from './viewloan-routing.module';
import { ViewloanComponent } from './viewloan.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    FormsModule,
    ViewloanRoutingModule
  ],
  declarations: [ViewloanComponent]
})
export class ViewloanModule { }
