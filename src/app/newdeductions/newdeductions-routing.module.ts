import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewdeductionsComponent } from './newdeductions.component';

const routes: Routes = [
  {
    path: '',
    component: NewdeductionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewdeductionsRoutingModule { }
