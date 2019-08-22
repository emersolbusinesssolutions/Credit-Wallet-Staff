import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { UploadverificationdataComponent } from './uploadverificationdata/uploadverificationdata.component';
import { ViewverificationComponent } from './viewverification/viewverification.component';
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
import { NavbarComponent } from './navbar/navbar.component';
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
import { PaymentComponent } from './payment/payment.component';




const routes: Routes = [

  {
    path : '',
    component : LogincomponentComponent
  },
  
  {
    
    path: '',
    component: NavbarComponent,
    children: [
      {
        path : 'deductions/paid',
        component : DeductionspaidComponent
      },
      {
        path : 'disburse/:id',
        component : DisburseComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'deductions/onetime',
        component : DeductionsonetimeComponent
      },
      {
        path : 'deductions',
        component : DeductionsComponent
      },
      {
        path : 'newdeductions',
        component : NewdeductionsComponent
      },
  
      {
        path : 'changepassword',
        component : ChangepasswordComponent
      },
      {
        path : 'loan/new',
        component : NewLoanComponent
      },
      {
        path : 'users',
        component : UsermanagementComponent
      },
      {
        path : 'loan/rejected',
        component : RejectedLoanComponent
      },
      {
        path : 'loan/cancel',
        component : CancelloanComponent
      },
      {
        path : 'loan/processing',
        component : ProcessingLoanComponent
      },
      {
        path : 'loan/awaitingdisbursement',
        component : AwaitingDisbursementLoanComponent
      },
      {
        path : 'loan/active',
        component : ActiveLoanComponent
      },
      {
        path : 'suggestion',
        component : SuggestionComponent
      },
      {
        path : 'payment/:id',
        component : PaymentComponent
      },
      {
        path : 'loan/completed',
        component : CompleteLoanComponent
      },
      {
        path : 'loan/ready',
        component : ReadyForDisbursementLoanComponent
      },
      {
        path : 'auditlog',
        component : AuditlogComponent
      },
      {
        path : 'loan/:id',
        component : ViewloanComponent
      },
      {
        path : 'uploadverificationdata',
        component : UploadverificationdataComponent
      },
      {
        path : 'contactmanagement',
        component : ContactmanagementComponent
      },
      {
        path : 'newcontact',
        component : NewcontactComponent
      },
      {
        path : 'getverificationresult',
        component : ViewverificationComponent
      },
      {
        path : 'newuser',
        component : NewuserComponent
      },
      

      
      
    ]
  }
  
];

export const routing = RouterModule.forRoot(routes, {useHash: true});   
