import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcomplaintsComponent } from './viewcomplaints.component';
const routes: Routes = [
  {
    path: '',
    component: ViewcomplaintsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewcomplaintsRoutingModule { }
