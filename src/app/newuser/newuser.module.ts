import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewuserRoutingModule } from './newuser-routing.module';
import { NewuserComponent } from './newuser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewuserRoutingModule
  ],
  declarations: [NewuserComponent]
})
export class NewuserModule { }
