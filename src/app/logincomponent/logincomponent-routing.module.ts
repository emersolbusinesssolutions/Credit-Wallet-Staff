import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincomponentComponent } from './logincomponent.component';

const routes: Routes = [
  {
    path: '',
    component: LogincomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogincomponentRoutingModule { }
