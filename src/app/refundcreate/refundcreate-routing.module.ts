import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefundcreateComponent } from './refundcreate.component';

const routes: Routes = [
  {
    path: '',
    component: RefundcreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundcreateRoutingModule { }
