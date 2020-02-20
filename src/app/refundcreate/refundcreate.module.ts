import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundcreateRoutingModule } from './refundcreate-routing.module';
import { RefundcreateComponent } from './refundcreate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RefundcreateRoutingModule
  ],
  declarations: [RefundcreateComponent]
})
export class RefundcreateModule { }
