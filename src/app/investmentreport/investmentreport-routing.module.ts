import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentreportComponent } from './investmentreport.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentreportComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentreportRoutingModule { }
