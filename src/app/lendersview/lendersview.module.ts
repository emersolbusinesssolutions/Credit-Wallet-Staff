import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LendersviewRoutingModule } from './lendersview-routing.module';
import { LendersviewComponent } from './lendersview.component';

@NgModule({
  imports: [
    CommonModule,
    LendersviewRoutingModule
  ],
  declarations: [LendersviewComponent]
})
export class LendersviewModule { }
