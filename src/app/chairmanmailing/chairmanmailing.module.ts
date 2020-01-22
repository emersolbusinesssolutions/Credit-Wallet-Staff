import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChairmanmailingRoutingModule } from './chairmanmailing-routing.module';
import { ChairmanmailingComponent } from './chairmanmailing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChairmanmailingRoutingModule
  ],
  declarations: [ChairmanmailingComponent]
})
export class ChairmanmailingModule { }
