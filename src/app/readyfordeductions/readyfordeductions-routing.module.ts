import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadyfordeductionsComponent } from './readyfordeductions.component';

const routes: Routes = [
  {
    path: '',
    component: ReadyfordeductionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadyfordeductionsRoutingModule { }
