import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisburseComponent } from './disburse.component';

const routes: Routes = [
  {
    path: '',
    component: DisburseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisburseRoutingModule { }
