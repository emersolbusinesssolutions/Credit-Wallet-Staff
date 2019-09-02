import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewdeductionsRoutingModule } from './newdeductions-routing.module';
import { FormsModule } from '@angular/forms';
import { NewdeductionsComponent } from './newdeductions.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    NewdeductionsRoutingModule
  ],
  declarations: [NewdeductionsComponent]
})
export class NewdeductionsModule { }
