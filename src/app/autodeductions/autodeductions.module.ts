import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutodeductionsRoutingModule } from './autodeductions-routing.module';
import { AutodeductionsComponent } from './autodeductions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AutodeductionsRoutingModule,
    FormsModule
  ],
  declarations: [AutodeductionsComponent]
})
export class AutodeductionsModule { }
