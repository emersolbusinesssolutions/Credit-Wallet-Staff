import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { FormsModule } from '@angular/forms';
import { ChangepasswordComponent } from './changepassword.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    ChangepasswordRoutingModule
  ],
  declarations: [ChangepasswordComponent]
})
export class ChangepasswordModule { }
