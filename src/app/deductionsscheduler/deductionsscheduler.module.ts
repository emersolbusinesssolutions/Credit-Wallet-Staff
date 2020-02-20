import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeductionsschedulerRoutingModule } from './deductionsscheduler-routing.module';
import { DeductionsschedulerComponent } from './deductionsscheduler.component';

@NgModule({
  imports: [
    CommonModule,
    DeductionsschedulerRoutingModule
  ],
  declarations: [DeductionsschedulerComponent]
})
export class DeductionsschedulerModule { }
