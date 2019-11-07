import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutodeductionsComponent } from './autodeductions.component';

const routes: Routes = [
  {
    path: '',
    component: AutodeductionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutodeductionsRoutingModule { }
