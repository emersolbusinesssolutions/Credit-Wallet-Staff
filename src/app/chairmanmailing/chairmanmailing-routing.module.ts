import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChairmanmailingComponent } from './chairmanmailing.component';

const routes: Routes = [
  {
    path: '',
    component: ChairmanmailingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChairmanmailingRoutingModule { }
