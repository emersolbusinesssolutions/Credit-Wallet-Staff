import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationalcodesRoutingModule } from './organizationalcodes-routing.module';
import { OrganizationalcodesComponent } from './organizationalcodes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrganizationalcodesRoutingModule
  ],
  declarations: [OrganizationalcodesComponent]
})
export class OrganizationalcodesModule { }
