import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryviewRoutingModule } from './recoveryview-routing.module';
import { RecoveryviewComponent } from './recoveryview.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    RecoveryviewRoutingModule
  ],
  declarations: [RecoveryviewComponent]
})
export class RecoveryviewModule { }
