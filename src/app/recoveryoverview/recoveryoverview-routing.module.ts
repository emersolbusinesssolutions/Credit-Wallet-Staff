import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoveryoverviewComponent } from './recoveryoverview.component';

const routes: Routes = [
  {
    path: '',
    component: RecoveryoverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryoverviewRoutingModule { }
