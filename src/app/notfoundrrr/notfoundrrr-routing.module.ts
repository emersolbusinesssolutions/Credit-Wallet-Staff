import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundrrrComponent } from './notfoundrrr.component';

const routes: Routes = [
  {
    path: '',
    component: NotfoundrrrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundrrrRoutingModule { }
