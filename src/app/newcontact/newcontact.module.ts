import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcontactRoutingModule } from './newcontact-routing.module';
import { NewcontactComponent } from './newcontact.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    FormsModule,
    NewcontactRoutingModule
  ],
  declarations: [NewcontactComponent]
})
export class NewcontactModule { }
