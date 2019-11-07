import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestpaymentComponent } from './interestpayment.component';

const routes: Routes = [
  {
    path: '',
    component: InterestpaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestpaymentRoutingModule { }
