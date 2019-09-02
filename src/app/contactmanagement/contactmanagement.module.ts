import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagementRoutingModule } from './contactmanagement-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactmanagementComponent } from './contactmanagement.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    ContactmanagementRoutingModule
  ],
  declarations: [ContactmanagementComponent]
})
export class ContactmanagementModule { }
