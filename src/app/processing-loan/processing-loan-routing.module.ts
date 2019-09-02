import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessingLoanComponent } from './processing-loan.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessingLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessingLoanRoutingModule { }
