import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewverificationRoutingModule } from './viewverification-routing.module';
import { FormsModule } from '@angular/forms';
import { ViewverificationComponent } from './viewverification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ViewverificationRoutingModule
  ],
  declarations: [ViewverificationComponent]
})
export class ViewverificationModule { }
