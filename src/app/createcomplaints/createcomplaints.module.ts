import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatecomplaintsRoutingModule } from './createcomplaints-routing.module';
import { CreatecomplaintsComponent } from './createcomplaints.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreatecomplaintsRoutingModule
  ],
  declarations: [CreatecomplaintsComponent]
})
export class CreatecomplaintsModule { }
