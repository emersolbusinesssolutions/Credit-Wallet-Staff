import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisbursepaystackComponent } from './disbursepaystack.component';

const routes: Routes = [
  {
    path: '',
    component: DisbursepaystackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisbursepaystackRoutingModule { }
