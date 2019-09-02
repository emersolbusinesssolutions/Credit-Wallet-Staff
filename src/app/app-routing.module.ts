import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';




const routes: Routes = [

  {
    path : '',
    loadChildren: './logincomponent/logincomponent.module#LogincomponentModule'
  },
  
  {
    
    path: '',
    component: NavbarComponent,
    children: [
      {
        path : 'deductions/paid',
        loadChildren: './deductionspaid/deductionspaid.module#DeductionspaidModule'
      },
      {
        path : 'disburse/:id',
        loadChildren: './disburse/disburse.module#DisburseModule'
      },
      {
        path : 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path : 'deductions/onetime',
        loadChildren: './deductionsonetime/deductionsonetime.module#DeductionsonetimeModule'
      },
      {
        path : 'deductions',
        loadChildren: './deductions/deductions.module#DeductionsModule'
      },
      {
        path : 'newdeductions',
        loadChildren: './newdeductions/newdeductions.module#NewdeductionsModule'
      },
      {
        path : 'changepassword',
        loadChildren: './changepassword/changepassword.module#ChangepasswordModule'
      },
      {
        path : 'loan/new',
        loadChildren: './new-loan/new-loan.module#NewLoanModule'
      },
      {
        path : 'users',
        loadChildren: './usermanagement/usermanagement.module#UsermanagementModule'
      },
      {
        path : 'mail',
        loadChildren: './electronicmail/electronicmail.module#ElectronicmailModule'
      },
      {
        path : 'loan/rejected',
        loadChildren: './rejected-loan/rejected-loan.module#RejectedLoanModule'
      },
      {
        path : 'loan/cancel',
        loadChildren: './cancelloan/cancelloan.module#CancelloanModule'
      },
      {
        path : 'loan/processing',
        loadChildren: './processing-loan/processing-loan.module#ProcessingLoanModule'
      },
      {
        path : 'loan/awaitingdisbursement',
        loadChildren: './awaiting-disbursement-loan/awaiting-disbursement-loan.module#AwaitingDisbursementLoanModule'
      },
      {
        path : 'loan/active',
        loadChildren: './active-loan/active-loan.module#ActiveLoanModule'
      },
      {
        path : 'suggestion',
        loadChildren: './suggestion/suggestion.module#SuggestionModule'
      },
      {
        path : 'payment/:id',
        loadChildren: './payment/payment.module#PaymentModule'
      },
      {
        path : 'loan/completed',
        loadChildren: './complete-loan/complete-loan.module#CompleteLoanModule'
      },
      {
        path : 'loan/ready',
        loadChildren: './ready-for-disbursement-loan/ready-for-disbursement-loan.module#ReadyForDisbursementLoanModule'
      },
      {
        path : 'auditlog',
        loadChildren: './auditlog/auditlog.module#AuditlogModule'
      },
      {
        path : 'loan/:id',
        loadChildren: './viewloan/viewloan.module#ViewloanModule'
      },
      {
        path : 'uploadverificationdata',
        loadChildren: './uploadverificationdata/uploadverificationdata.module#UploadverificationdataModule'
      },
      {
        path : 'contactmanagement',
        loadChildren: './contactmanagement/contactmanagement.module#ContactmanagementModule'
      },
      {
        path : 'newcontact',
        loadChildren: './contactmanagement/contactmanagement.module#ContactmanagementModule'
      },
      {
        path : 'getverificationresult',
        loadChildren: './viewverification/viewverification.module#ViewverificationModule'
      },
      {
        path : 'newuser',
        loadChildren: './newuser/newuser.module#NewuserModule'
      },
      {
        path : 'otherlenders/:id',
        loadChildren: './disburselenders/disburselenders.module#DisburselendersModule'
      },

      {
        path : 'notfoundrrr',
        loadChildren: './notfoundrrr/notfoundrrr.module#NotfoundrrrModule'
      },

      
      
    ]
  }
  
];

export const routing = RouterModule.forRoot(routes, {useHash: true});   
