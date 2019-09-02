import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewloanComponent } from './viewloan.component';

const routes: Routes = [
  {
    path: '',
    component: ViewloanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewloanRoutingModule { }
