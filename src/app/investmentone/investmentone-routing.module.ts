import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentoneComponent } from './investmentone.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentoneRoutingModule { }
