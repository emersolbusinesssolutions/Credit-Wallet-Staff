import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefundsviewComponent } from './refundsview.component';

const routes: Routes = [
  {
    path: '',
    component: RefundsviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundsviewRoutingModule { }
