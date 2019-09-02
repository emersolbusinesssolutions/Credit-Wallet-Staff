import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LogincomponentRoutingModule } from './logincomponent-routing.module';
import { LogincomponentComponent } from './logincomponent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoadingBarModule,
    LogincomponentRoutingModule,
    FormsModule
  ],
  declarations: [LogincomponentComponent]
})
export class LogincomponentModule { }
