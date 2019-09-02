import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicmailRoutingModule } from './electronicmail-routing.module';
import { FormsModule } from '@angular/forms';
import { ElectronicmailComponent } from './electronicmail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ElectronicmailRoutingModule
  ],
  declarations: [ElectronicmailComponent]
})
export class ElectronicmailModule { }
