import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicmailComponent } from './electronicmail.component';

const routes: Routes = [
  {
    path: '',
    component: ElectronicmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicmailRoutingModule { }
