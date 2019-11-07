import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadyfordeductionsRoutingModule } from './readyfordeductions-routing.module';
import { ReadyfordeductionsComponent } from './readyfordeductions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReadyfordeductionsRoutingModule
  ],
  declarations: [ReadyfordeductionsComponent]
})
export class ReadyfordeductionsModule { }
