import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcomplaintsRoutingModule } from './viewcomplaints-routing.module';
import { ViewcomplaintsComponent } from './viewcomplaints.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ViewcomplaintsRoutingModule
  ],
  declarations: [ViewcomplaintsComponent]
})
export class ViewcomplaintsModule { }
