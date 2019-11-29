import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralcodeComponent } from './referralcode.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralcodeRoutingModule { }
