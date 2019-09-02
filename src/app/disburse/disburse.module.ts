import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisburseRoutingModule } from './disburse-routing.module';
import { DisburseComponent } from './disburse.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    DisburseRoutingModule
  ],
  declarations: [DisburseComponent]
})
export class DisburseModule { }
