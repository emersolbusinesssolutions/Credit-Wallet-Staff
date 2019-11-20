import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LendersRoutingModule } from './lenders-routing.module';
import { LendersComponent } from './lenders.component';

@NgModule({
  imports: [
    CommonModule,
    LendersRoutingModule
  ],
  declarations: [LendersComponent]
})
export class LendersModule { }
