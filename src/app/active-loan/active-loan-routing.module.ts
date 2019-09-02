import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveLoanComponent } from './active-loan.component';

const routes: Routes = [
  {
    path: '',
    component: ActiveLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveLoanRoutingModule { }
