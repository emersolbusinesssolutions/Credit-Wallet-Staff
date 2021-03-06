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
        path : 'disbursepaystack/:id',
        loadChildren: './disbursepaystack/disbursepaystack.module#DisbursepaystackModule'
      },
      {
        path : 'recovery',
        loadChildren: './recovery/recovery.module#RecoveryModule'
      },
      {
        path : 'recoveryoverview',
        loadChildren: './recoveryoverview/recoveryoverview.module#RecoveryoverviewModule'
      },


      {
        path : 'recovery/:id',
        loadChildren: './recoveryview/recoveryview.module#RecoveryviewModule'
      },
      {
        path : 'loancalculator',
        loadChildren: './loancalculator/loancalculator.module#LoancalculatorModule'
      },
      {
        path : 'organizationcodes',
        loadChildren: './organizationalcodes/organizationalcodes.module#OrganizationalcodesModule'
      },
      {
        path : 'complaints/create',
        loadChildren: './createcomplaints/createcomplaints.module#CreatecomplaintsModule'
      }
      ,
      {
        path : 'callinverification',
        loadChildren: './callinverification/callinverification.module#CallinverificationModule'
      }
      
      ,
      {
        path : 'mailing/chairman',
        loadChildren: './chairmanmailing/chairmanmailing.module#ChairmanmailingModule'
      }
      ,
      {
        path : 'savings/payment',
        loadChildren: './savingspayment/savingspayment.module#SavingspaymentModule'
      },
      
      {
        path : 'investment/report',
        loadChildren: './investmentreport/investmentreport.module#InvestmentreportModule'
      },

      {
        path : 'refund/create',
        loadChildren: './refundcreate/refundcreate.module#RefundcreateModule'
      },
      
      {
        path : 'refunds/:id',
        loadChildren: './refunds/refunds.module#RefundsModule'
      },

      {
        path : 'refund/:id',
        loadChildren: './refundsview/refundsview.module#RefundsviewModule'
      },

      {
        path : 'accountrequest',
        loadChildren: './accountrequest/accountrequest.module#AccountrequestModule'
      },

      {
        path : 'liquidation/create',
        loadChildren: './liquidationcreate/liquidationcreate.module#LiquidationcreateModule'
      },

      {
        path : 'liquidation/list/:id',
        loadChildren: './liquidationlist/liquidationlist.module#LiquidationlistModule'
      },

      {
        path : 'liquidation/view/:id',
        loadChildren: './liquidationview/liquidationview.module#LiquidationviewModule'
      },

      {
        path : 'investment/operation/:id',
        loadChildren: './investmentoperations/investmentoperations.module#InvestmentoperationsModule'
      },
      {
        path : 'complaints/:id',
        loadChildren: './complaints/complaints.module#ComplaintsModule'
      },
      {
        path : 'viewuser/:id',
        loadChildren: './viewuser/viewuser.module#ViewuserModule'
      },

      {
        path : 'lenders',
        loadChildren: './lenders/lenders.module#LendersModule'
      },

      {
        path : 'plaaslist/:id',
        loadChildren: './plaaslist/plaaslist.module#PlaaslistModule'
      },
      {
        path : 'viewcomplaint/:id',
        loadChildren: './viewcomplaints/viewcomplaints.module#ViewcomplaintsModule'
      },
      {
        path : 'plaaspayment',
        loadChildren: './plaaspayment/plaaspayment.module#PlaaspaymentModule'
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
        path : 'referralcode',
        loadChildren: './referralcode/referralcode.module#ReferralcodeModule'
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
        path : 'readyfordeductions',
        loadChildren: './readyfordeductions/readyfordeductions.module#ReadyfordeductionsModule'
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
        path : 'autodeductions',
        loadChildren: './autodeductions/autodeductions.module#AutodeductionsModule'
      },
      {
        path : 'interestpayment',
        loadChildren: './interestpayment/interestpayment.module#InterestpaymentModule'
      },
      {
        path : 'loan/rejected',
        loadChildren: './rejected-loan/rejected-loan.module#RejectedLoanModule'
      },
      {
        path : 'salesreport',
        loadChildren: './salesreport/salesreport.module#SalesreportModule'
      },
      {
        path : 'liquidation',
        loadChildren: './liquidation/liquidation.module#LiquidationModule'
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
        path : 'investment/:id',
        loadChildren: './savings/savings.module#SavingsModule'
      },
      {
        path : 'investmentone/:id',
        loadChildren: './investmentone/investmentone.module#InvestmentoneModule'
      },
      {
        path : 'auditlog',
        loadChildren: './auditlog/auditlog.module#AuditlogModule'
      },
      {
        path : 'disbursementreconciliation',
        loadChildren: './disbursementreconcillation/disbursementreconcillation.module#DisbursementreconcillationModule'
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
