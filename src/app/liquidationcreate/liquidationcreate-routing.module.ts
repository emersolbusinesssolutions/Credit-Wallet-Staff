import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidationcreateComponent } from './liquidationcreate.component';

const routes: Routes = [
  {
    path: '',
    component: LiquidationcreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationcreateRoutingModule { }
