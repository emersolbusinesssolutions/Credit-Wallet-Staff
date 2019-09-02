import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeductionspaidComponent } from './deductionspaid.component';
const routes: Routes = [
  {
    path: '',
    component: DeductionspaidComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeductionspaidRoutingModule { }
