import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallinverificationRoutingModule } from './callinverification-routing.module';
import { CallinverificationComponent } from './callinverification.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CallinverificationRoutingModule
  ],
  declarations: [CallinverificationComponent]
})
export class CallinverificationModule { }
