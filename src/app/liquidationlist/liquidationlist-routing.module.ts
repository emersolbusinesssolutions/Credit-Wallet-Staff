import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidationlistComponent } from './liquidationlist.component';

const routes: Routes = [
  {
    path: '',
    component: LiquidationlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationlistRoutingModule { }
