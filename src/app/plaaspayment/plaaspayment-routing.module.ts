import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaaspaymentComponent } from './plaaspayment.component';

const routes: Routes = [
  {
    path: '',
    component: PlaaspaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaaspaymentRoutingModule { }
