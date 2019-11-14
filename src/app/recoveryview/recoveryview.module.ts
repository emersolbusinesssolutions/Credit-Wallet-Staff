import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryviewRoutingModule } from './recoveryview-routing.module';
import { RecoveryviewComponent } from './recoveryview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecoveryviewRoutingModule
  ],
  declarations: [RecoveryviewComponent]
})
export class RecoveryviewModule { }
