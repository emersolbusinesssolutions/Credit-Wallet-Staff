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
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartModule } from 'angular-highcharts';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataTableModule } from 'angular5-data-table';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { UploadverificationdataComponent } from './uploadverificationdata/uploadverificationdata.component';
import { ViewverificationComponent } from './viewverification/viewverification.component';
import { routing } from './app-routing.module';
import { ContactmanagementComponent } from './contactmanagement/contactmanagement.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { ViewloanComponent } from './viewloan/viewloan.component';
import { ProcessingLoanComponent } from './processing-loan/processing-loan.component';
import { RejectedLoanComponent } from './rejected-loan/rejected-loan.component';
import { AwaitingDisbursementLoanComponent } from './awaiting-disbursement-loan/awaiting-disbursement-loan.component';
import { ActiveLoanComponent } from './active-loan/active-loan.component';
import { CompleteLoanComponent } from './complete-loan/complete-loan.component';
import { ReadyForDisbursementLoanComponent } from './ready-for-disbursement-loan/ready-for-disbursement-loan.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CancelloanComponent } from './cancelloan/cancelloan.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { NewdeductionsComponent } from './newdeductions/newdeductions.component';
import { DeductionspaidComponent } from './deductionspaid/deductionspaid.component';
import { DeductionsonetimeComponent } from './deductionsonetime/deductionsonetime.component';
import { DisburseComponent } from './disburse/disburse.component';
import { AuditlogComponent } from './auditlog/auditlog.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogincomponentComponent,
    NavbarComponent,
    UploadverificationdataComponent,
    ViewverificationComponent,
    ContactmanagementComponent,
    NewcontactComponent,
    NewLoanComponent,
    ViewloanComponent,
    ProcessingLoanComponent,
    RejectedLoanComponent,
    AwaitingDisbursementLoanComponent,
    ActiveLoanComponent,
    CompleteLoanComponent,
    ReadyForDisbursementLoanComponent,
    UsermanagementComponent,
    NewuserComponent,
    ChangepasswordComponent,
    CancelloanComponent,
    DeductionsComponent,
    NewdeductionsComponent,
    DeductionspaidComponent,
    DeductionsonetimeComponent,
    DisburseComponent,
    AuditlogComponent,
    SuggestionComponent
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
    MyDatePickerModule,
    ChartModule,
    AngularMultiSelectModule,
    SelectDropDownModule,
    DataTableModule.forRoot(),
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    LoadingBarModule.forRoot()
  ],
  providers: [AppServiceService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
