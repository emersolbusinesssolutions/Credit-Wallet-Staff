import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisbursementreconcillationComponent } from './disbursementreconcillation.component';

const routes: Routes = [
  {
    path: '',
    component: DisbursementreconcillationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisbursementreconcillationRoutingModule { }
