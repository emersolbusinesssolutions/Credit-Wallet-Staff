import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewverificationComponent } from './viewverification.component';

const routes: Routes = [
  {
    path: '',
    component: ViewverificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewverificationRoutingModule { }
