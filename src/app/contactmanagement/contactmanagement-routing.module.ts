import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactmanagementComponent } from './contactmanagement.component';

const routes: Routes = [
  {
    path: '',
    component: ContactmanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanagementRoutingModule { }
