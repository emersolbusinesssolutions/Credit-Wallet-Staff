import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisburselendersComponent } from './disburselenders.component';

const routes: Routes = [
  {
    path: '',
    component: DisburselendersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisburselendersRoutingModule { }
