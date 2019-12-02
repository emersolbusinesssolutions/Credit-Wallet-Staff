import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisbursementreconcillationRoutingModule } from './disbursementreconcillation-routing.module';
import { DisbursementreconcillationComponent } from './disbursementreconcillation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DisbursementreconcillationRoutingModule
  ],
  declarations: [DisbursementreconcillationComponent]
})
export class DisbursementreconcillationModule { }
