import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadyForDisbursementLoanComponent } from './ready-for-disbursement-loan.component';

const routes: Routes = [
  {
    path: '',
    component: ReadyForDisbursementLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadyForDisbursementLoanRoutingModule { }
