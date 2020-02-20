import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundsviewRoutingModule } from './refundsview-routing.module';
import { RefundsviewComponent } from './refundsview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RefundsviewRoutingModule
  ],
  declarations: [RefundsviewComponent]
})
export class RefundsviewModule { }
