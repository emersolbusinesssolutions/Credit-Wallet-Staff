import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwaitingDisbursementLoanComponent } from './awaiting-disbursement-loan.component';

const routes: Routes = [
  {
    path: '',
    component: AwaitingDisbursementLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwaitingDisbursementLoanRoutingModule { }
