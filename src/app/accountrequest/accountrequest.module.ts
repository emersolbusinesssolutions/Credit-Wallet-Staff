import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountrequestRoutingModule } from './accountrequest-routing.module';
import { AccountrequestComponent } from './accountrequest.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountrequestRoutingModule
  ],
  declarations: [AccountrequestComponent]
})
export class AccountrequestModule { }
