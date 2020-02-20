import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountrequestComponent } from './accountrequest.component';

const routes: Routes = [
  {
    path: '',
    component: AccountrequestComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountrequestRoutingModule { }
