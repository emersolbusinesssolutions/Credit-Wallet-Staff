import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoveryviewComponent } from './recoveryview.component';

const routes: Routes = [
  {
    path: '',
    component: RecoveryviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryviewRoutingModule { }
