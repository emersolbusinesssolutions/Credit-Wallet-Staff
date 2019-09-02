import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RejectedLoanComponent } from './rejected-loan.component';

const routes: Routes = [
  {
    path: '',
    component: RejectedLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedLoanRoutingModule { }
