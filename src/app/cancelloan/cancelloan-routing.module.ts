import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelloanComponent } from './cancelloan.component';

const routes: Routes = [
  {
    path: '',
    component: CancelloanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelloanRoutingModule { }
