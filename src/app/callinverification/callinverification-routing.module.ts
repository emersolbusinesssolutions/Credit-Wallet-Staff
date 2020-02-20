import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallinverificationComponent } from './callinverification.component';

const routes: Routes = [
  {
    path: '',
    component: CallinverificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallinverificationRoutingModule { }
