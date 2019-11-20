import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendersComponent } from './lenders.component';

const routes: Routes = [
  {
    path: '',
    component: LendersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendersRoutingModule { }
