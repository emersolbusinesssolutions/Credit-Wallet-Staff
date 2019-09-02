import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeductionsonetimeComponent } from './deductionsonetime.component';

const routes: Routes = [
  {
    path: '',
    component: DeductionsonetimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeductionsonetimeRoutingModule { }
