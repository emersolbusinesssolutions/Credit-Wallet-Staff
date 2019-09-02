import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AppComponent } from './app.component';
import {AppServiceService} from './app-service.service';
import {CartService} from './cart.service';
import {FormsModule} from '@angular/forms' 
import { OrderModule } from 'ngx-order-pipe';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ChartModule } from 'angular-highcharts';
import { NavbarComponent } from './navbar/navbar.component';
import { DataTableModule } from 'angular5-data-table';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    OrderModule,
    routing,
    JsonpModule,
    BrowserAnimationsModule,
    AsyncLocalStorageModule,
    ChartModule,
    AngularMultiSelectModule,
    SelectDropDownModule,
    DataTableModule.forRoot(),
    NgbModule.forRoot(),
    ToastrModule.forRoot(
      {
        preventDuplicates : true
      }
    ),
    LoadingBarModule.forRoot()
  ],
  providers: [AppServiceService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
