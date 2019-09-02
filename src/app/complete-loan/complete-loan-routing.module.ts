import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompleteLoanComponent } from './complete-loan.component';


const routes: Routes = [
  {
    path: '',
    component: CompleteLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteLoanRoutingModule { }
