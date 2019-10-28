import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesreportRoutingModule } from './salesreport-routing.module';
import { SalesreportComponent } from './salesreport.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SalesreportRoutingModule
  ],
  declarations: [SalesreportComponent]
})
export class SalesreportModule { }
