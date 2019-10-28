import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidationComponent } from './liquidation.component';

const routes: Routes = [
  {
    path: '',
    component: LiquidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationRoutingModule { }
