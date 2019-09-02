import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { UsermanagementComponent } from './usermanagement.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsermanagementRoutingModule
  ],
  declarations: [UsermanagementComponent]
})
export class UsermanagementModule { }
