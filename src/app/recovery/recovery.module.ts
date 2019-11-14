import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryRoutingModule } from './recovery-routing.module';
import { RecoveryComponent } from './recovery.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecoveryRoutingModule
  ],
  declarations: [RecoveryComponent]
})
export class RecoveryModule { }
