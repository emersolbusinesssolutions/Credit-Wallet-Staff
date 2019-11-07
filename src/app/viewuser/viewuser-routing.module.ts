import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewuserComponent } from './viewuser.component';

const routes: Routes = [
  {
    path: '',
    component: ViewuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewuserRoutingModule { }
