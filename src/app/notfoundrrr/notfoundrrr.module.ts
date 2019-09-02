import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundrrrRoutingModule } from './notfoundrrr-routing.module';
import { NotfoundrrrComponent } from './notfoundrrr.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotfoundrrrRoutingModule
  ],
  declarations: [NotfoundrrrComponent]
})
export class NotfoundrrrModule { }
