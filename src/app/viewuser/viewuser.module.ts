import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewuserRoutingModule } from './viewuser-routing.module';
import { ViewuserComponent } from './viewuser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ViewuserRoutingModule
  ],
  declarations: [ViewuserComponent]
})
export class ViewuserModule { }
