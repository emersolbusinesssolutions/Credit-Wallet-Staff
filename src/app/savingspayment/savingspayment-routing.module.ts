import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingspaymentComponent } from './savingspayment.component';

const routes: Routes = [
  {
    path: '',
    component: SavingspaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingspaymentRoutingModule { }
