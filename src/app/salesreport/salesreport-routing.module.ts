import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesreportComponent } from './salesreport.component';

const routes: Routes = [
  {
    path: '',
    component: SalesreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesreportRoutingModule { }
