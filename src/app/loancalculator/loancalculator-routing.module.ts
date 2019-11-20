import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoancalculatorComponent } from './loancalculator.component';

const routes: Routes = [
  {
    path: '',
    component: LoancalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoancalculatorRoutingModule { }
