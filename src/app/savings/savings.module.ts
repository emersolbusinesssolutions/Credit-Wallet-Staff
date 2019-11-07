import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsComponent } from './savings.component';

@NgModule({
  imports: [
    CommonModule,
    SavingsRoutingModule
  ],
  declarations: [SavingsComponent]
})
export class SavingsModule { }
