import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditlogRoutingModule } from './auditlog-routing.module';
import { AuditlogComponent } from './auditlog.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    AuditlogRoutingModule
  ],
  declarations: [AuditlogComponent]
})
export class AuditlogModule { }
