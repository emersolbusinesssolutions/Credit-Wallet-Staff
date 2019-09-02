import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadverificationdataComponent } from './uploadverificationdata.component';

const routes: Routes = [
  {
    path: '',
    component: UploadverificationdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadverificationdataRoutingModule { }
