import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralcodeRoutingModule } from './referralcode-routing.module';
import { ReferralcodeComponent } from './referralcode.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReferralcodeRoutingModule
  ],
  declarations: [ReferralcodeComponent]
})
export class ReferralcodeModule { }
