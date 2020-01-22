import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaaslistRoutingModule } from './plaaslist-routing.module';
import { PlaaslistComponent } from './plaaslist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlaaslistRoutingModule
  ],
  declarations: [PlaaslistComponent]
})
export class PlaaslistModule { }
