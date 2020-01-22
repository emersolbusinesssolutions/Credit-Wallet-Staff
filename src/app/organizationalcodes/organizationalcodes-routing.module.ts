import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationalcodesComponent } from './organizationalcodes.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationalcodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationalcodesRoutingModule { }
