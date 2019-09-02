import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLoanComponent } from './new-loan.component';

const routes: Routes = [
  {
    path: '',
    component: NewLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewLoanRoutingModule { }
