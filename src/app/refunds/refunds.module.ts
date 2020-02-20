import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundsRoutingModule } from './refunds-routing.module';
import { RefundsComponent } from './refunds.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RefundsRoutingModule
  ],
  declarations: [RefundsComponent]
})
export class RefundsModule { }
