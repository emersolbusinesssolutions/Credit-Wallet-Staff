import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaaslistComponent } from './plaaslist.component';

const routes: Routes = [
  {
    path: '',
    component: PlaaslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaaslistRoutingModule { }
