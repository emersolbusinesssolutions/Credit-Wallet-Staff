import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadverificationdataRoutingModule } from './uploadverificationdata-routing.module';
import { FormsModule } from '@angular/forms';
import { UploadverificationdataComponent } from './uploadverificationdata.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UploadverificationdataRoutingModule
  ],
  declarations: [UploadverificationdataComponent]
})
export class UploadverificationdataModule { }
