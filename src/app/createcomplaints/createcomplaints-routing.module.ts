import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecomplaintsComponent } from './createcomplaints.component';

const routes: Routes = [
  {
    path: '',
    component: CreatecomplaintsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatecomplaintsRoutingModule { }
