
import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Result} from './result';
//import {Response} from './Response';
import {Router, ActivatedRoute} from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx'
import { forkJoin } from 'rxjs/observable/forkJoin';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class AppServiceService {
  

    path = "https://creditwallet.ng/api/public/";
    httpOptionsForSignedUser;
    currentUser = new BehaviorSubject(null)
    currentToken = new BehaviorSubject(null)
  
    constructor(private http: HttpClient,protected storage: AsyncLocalStorage) {
        var data = sessionStorage.getItem("currentUser");

        this.httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : data
            })
        };
    }

    getdeductionspaid(): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'deductions/paid', httpOptionsForSignedUser);
    }

    listsavings() {

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.get(this.path + 'savings/list', httpOptionsForSignedUser);
    }

    listinvestment(params) {

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'investment/list',params, httpOptionsForSignedUser);
    }
    generateOfferLetterNew(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/offerletter/new', params, httpOptionsForSignedUser);
    }


      dashboard() {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.get(this.path + 'creditwallet/dashboard', httpOptionsForSignedUser);
      }

      verifyAccountNumber(json) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'account/verification', json, httpOptionsForSignedUser);
      }

      uploadpayment(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'deductions/stop/bulk', params, httpOptionsForSignedUser);
      }

      deductionsbulk(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'deductions/bulk', params, httpOptionsForSignedUser);
      }

      investmentpayment(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'investment/payment/upload', params, httpOptionsForSignedUser);
      }

      
       
      
      getPlaasPayment(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'plaas/payment', params, httpOptionsForSignedUser);
      }

      sendmail(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'email/send/automatic', params, httpOptionsForSignedUser);
      }

      bulkemail(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'email/bulk', params, httpOptionsForSignedUser);
      }


      interestpaymentemail(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'email/payment/interest', params, httpOptionsForSignedUser);
      }

      confirmpayment(json): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(json);
        return this.http.post(this.path + 'deductions/stop', body, httpOptionsForSignedUser);
      }
      getdeductions(): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'deductions/all/recurring', httpOptionsForSignedUser);
      }

      getdeductionsNew(json): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'deductions/list/all', json, httpOptionsForSignedUser);
      }

      getdeductions2(): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'deductions/all/onetime', httpOptionsForSignedUser);
      }
      addcomment(json): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(json);
        return this.http.post(this.path + 'comment/add', body, httpOptionsForSignedUser);
      }
      createadminuser(json): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(json);
        return this.http.post(this.path + 'user/create', body, httpOptionsForSignedUser);
      }

      editadminuser(json): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(json);
        return this.http.post(this.path + 'user/edit', body, httpOptionsForSignedUser);
      }
      editLoan(data: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(data);
        return this.http.post(this.path + 'loan/edit', body, httpOptionsForSignedUser);
      }
    
      usersall(): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'users/all', httpOptionsForSignedUser);
      }
      cancelloan(params): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'loan/cancel', body, httpOptionsForSignedUser);
      }

      salesreport(params): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'report/sales', body, httpOptionsForSignedUser);
      }
      

    setToken(token) {
        this.currentToken.next({ token: token})
    }

    setUser(user : any) {
        this.currentUser.next({ currentuser: user})
    }

    getCurrentUser(){
        var user = null
        this.currentUser.subscribe((user)=>{
            user = user.currentuser;
        })

        return user.currentuser;
    }

    login(params) {
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'staff-login', body, httpOptions);
    }

    resetpassword(params) {
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'reset-password-merchant', body, httpOptions);
    }


    addToLoanDisk(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'loandisk/add/borrower', body, httpOptionsForSignedUser);
    }

    plaasstart(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'plaas/start', body, httpOptionsForSignedUser);
    }

    

    deductionsapproval(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'loan/approval/deductions', body, httpOptionsForSignedUser);
    }

 


    

    getLoans(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loans/list', params, httpOptionsForSignedUser);


    }

    createcomplaints(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'complaints/create', params, httpOptionsForSignedUser);


    }

    listcomplaints(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'complaints/list', params, httpOptionsForSignedUser);


    }

    onecomplaints(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'complaints/one', params, httpOptionsForSignedUser);


    }

    solvecomplaints(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'complaints/solve', params, httpOptionsForSignedUser);


    }

    addcomplaints(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'complaints/comment', params, httpOptionsForSignedUser);


    }


    


    

    getLoansNew(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loans/list/new', params, httpOptionsForSignedUser);


    }

    getLoansNewActive(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loans/list/active', params, httpOptionsForSignedUser);


    }

    getPlaas(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'plaas/list', params, httpOptionsForSignedUser);


    }

    loansadvancedsearch(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'advanced/list/loans', params, httpOptionsForSignedUser);


    }

    



    

    
    mandatelist() {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'mandate/list',httpOptionsForSignedUser);
    }

    

    suggestionstart(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'suggestion/start', params, httpOptionsForSignedUser);

    }

    auditlog(param) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'audit/view',param , httpOptionsForSignedUser);

    }


    selectlender(param) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'lender/select',param , httpOptionsForSignedUser);

    }

    changeamount(param) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/change/amount',param , httpOptionsForSignedUser);

    }

    getLenders() {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.get(this.path + 'lenders/list' , httpOptionsForSignedUser);

    }

    getOrganizationCode(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'organizational/code/get' , params, httpOptionsForSignedUser);

    }

    

    listoneloan(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/one/new', params, httpOptionsForSignedUser);
        
    }

    paymentmatch(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'payment/match', params, httpOptionsForSignedUser);
        
    }

    rejectLoan(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/reject', params, httpOptionsForSignedUser);
        
    }

    confirmDocuments(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/confirm/documents', params, httpOptionsForSignedUser);
        
    }

    confirmRemita(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/confirm/remita', params, httpOptionsForSignedUser);
        
    }

    notifyFinance(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/ready', params, httpOptionsForSignedUser);
        
    }

    disburseLoan(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/disburse/giro', params, httpOptionsForSignedUser);
        
    }

    disburseLoanPlaas(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/disburse/giro/plaas', params, httpOptionsForSignedUser);
        
    }

    

    listoneuser(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'users/list/one', params, httpOptionsForSignedUser);
        
    }

    

    disburseLoanLender(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'disburse/loan/lender', params, httpOptionsForSignedUser);
        
    }

    disburseLoanADD(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/disburse', params, httpOptionsForSignedUser);
        
    }

    disburseLoanOneTime(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'deductions/start/disburse', params, httpOptionsForSignedUser);
        
    }

    disbursePaystack(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/disburse/paystack', params, httpOptionsForSignedUser);
        
    }


    

    disburseLoanRecurring(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'deductions/start/recurring/disburse', params, httpOptionsForSignedUser);
        
    }

    disburseLoanRemita(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/disburse/remita', params, httpOptionsForSignedUser);
        
    }

    completeLoan(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/complete', params, httpOptionsForSignedUser);
        
    }

    completeLoanRemita(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/complete/remita', params, httpOptionsForSignedUser);
        
    }

    sendToAwaitingDisbursement(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/payment', params, httpOptionsForSignedUser);
        
    }

    generateOfferLetter(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/offerletter', params, httpOptionsForSignedUser);
        
    }

    changepassword(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'user/password/change', body, httpOptionsForSignedUser);
    }

    uploaddataverification(params) {
     

        
    }

    searchcalllog(json: { status: any; from: any; to: any; }): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(json);
        return this.http.post(this.path + 'search-call-log', body, httpOptionsForSignedUser);
      }

      returnbusiness(): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'returnbusiness/list',  httpOptionsForSignedUser);
      }


    addRecord(json: { status: any; comment: any; telephone: any; }): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(json);
        return this.http.post(this.path + 'add-call-log', body, httpOptionsForSignedUser);
    }


    searchfornumbers(json: { telephone: any; }): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(json);
        return this.http.post(this.path + 'search-for-phonenumber', body, httpOptionsForSignedUser);
        
    }


    getBVNresult(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'bvn/verify', body, httpOptionsForSignedUser);
    }


    

    getverificationresult(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'staff-get-verification-result', body, httpOptionsForSignedUser);
    }


    getverificationresults(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'staff-get-verification-results', body, httpOptionsForSignedUser);
    }

    

    deductionsinitiate(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'deductions/initiate', body, httpOptionsForSignedUser);
    }

    recoveryupload(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'recovery/upload', body, httpOptionsForSignedUser);
    }

    recoverylist() {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'recovery/list', httpOptionsForSignedUser);
    }

    referralcodelist() {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'referralcode/list', httpOptionsForSignedUser);
    }

    investmentreport(json) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/report', json, httpOptionsForSignedUser);
    }


    
    organizationcodes() {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'organizational/code', httpOptionsForSignedUser);
    }

    

    referralcodecreate(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'referralcode/create', param, httpOptionsForSignedUser);
    }

    referralcodeedit(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'referralcode/edit', param, httpOptionsForSignedUser);
    }

    investmentone(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };
        return this.http.post(this.path + 'investment/one', param, httpOptionsForSignedUser);
    }

    investmentprocess(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/process', param, httpOptionsForSignedUser);
    }

    investmentcomplete(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/complete', param, httpOptionsForSignedUser);
    }

    investmentprocessDocument(id) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post("https://test.creditwallet.ng/TestPDF/generate_file.php?id=" +id, httpOptionsForSignedUser);
    }

    investmentconfirmpayment(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/confirm/payment', param, httpOptionsForSignedUser);
    }

    investmentloandiskborrower(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/loandisk/borrower', param, httpOptionsForSignedUser);
    }

    investmentloandisksavings(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/loandisk/savings', param, httpOptionsForSignedUser);
    }

    investmentloandisktransaction(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/loandisk/savings/transaction', param, httpOptionsForSignedUser);
    }

    investmentloandisktransactions(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/loandisk/savings/transactions', param, httpOptionsForSignedUser);
    }


    requestDataFromMultipleSources(transactions, savings_id) {

        let responses = []
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };

        for (let index = 0; index < transactions.length; ++index) {
            var param = {
                id : transactions[index].id,
                savings_id : savings_id
              }
            responses[index] = this.http.post(this.path + 'investment/loandisk/savings/transactions', param, httpOptionsForSignedUser);
        }
        
        return forkJoin(responses);
    }


    autodeduction(params) {

        let responses = []
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };

        for (let index = 0; index < params.length; ++index) {
            
            responses[index] = this.http.post(this.path + 'deductions/start/auto', params[index], httpOptionsForSignedUser);
        }
        
        return forkJoin(responses);
    }

    transferout(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/loandisk/savings/transferout', param, httpOptionsForSignedUser);
    }

    cancelinvestment(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/cancel', param, httpOptionsForSignedUser);
    }

    editinvestment(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'investment/edit', param, httpOptionsForSignedUser);
    }



    


    

    referralcodedelete(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'referralcode/delete', param, httpOptionsForSignedUser);
    }

    recoveryone(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'recovery/one', param, httpOptionsForSignedUser);
    }

    recoverycomment(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'recovery/comment', param, httpOptionsForSignedUser);
    }

    recoverysolve(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'recovery/solve', param, httpOptionsForSignedUser);
    }

    calculator(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'loan/calculator', param, httpOptionsForSignedUser);
    }

    calculatortwo(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'loan/calculator/two', param, httpOptionsForSignedUser);
    }

    

    
    recoverypayment(param) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.post(this.path + 'recovery/payment/set', param, httpOptionsForSignedUser);
    }

    

    deductionsstart(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'deductions/start', body, httpOptionsForSignedUser);
    }

    deductionsstartrecurring(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'deductions/start/recurring', body, httpOptionsForSignedUser);
    }

    getItems() {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'item-list', httpOptionsForSignedUser);
    }

    getItem(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'item-get', body,httpOptionsForSignedUser);
    }

    editItem(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'item-edit', body,httpOptionsForSignedUser);
    }

    

    acceptpayment(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'merchant-accept-payment-offline', body,httpOptionsForSignedUser);
    }

    cancelOrder(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'order-cancel-merchant', body,httpOptionsForSignedUser);
    }

    shipOrder(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'order-shipped-merchant', body,httpOptionsForSignedUser);
    }

    getNewOrders() {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'order-new', httpOptionsForSignedUser);
    }

    getPendingOrders(){
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'orders-pending', httpOptionsForSignedUser);
    }

    getDashboardSummary() {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        return this.http.get(this.path + 'dashboard-summary-merchant', httpOptionsForSignedUser);
    }

    viewOrders(params) {
     

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'view-order', body, httpOptionsForSignedUser);
    }

    updateBank(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'update-bank-merchant', body, httpOptionsForSignedUser);
    }

    updateMerchant(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'update-merchant', body, httpOptionsForSignedUser);
    }

    getReport(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'daily-operation-report-merchant', body, httpOptionsForSignedUser);
    }

    salesReport(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'sales-report', body, httpOptionsForSignedUser);
    }

    createaccount(params) {
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'create-account-merchant', body, httpOptions);
    }

    getMerchant() {
        var data = sessionStorage.getItem("currentUser");

        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : data
            })
        };
        return this.http.get(this.path + 'get-merchant', httpOptionsForSignedUser);
    }

    liveoption(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'update-merchant-go-live', body, httpOptionsForSignedUser);
    }

    saveCallBackUrl(params) {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
        };
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'save-merchant-call-back-url', body, httpOptionsForSignedUser);
    }

   

    confirmcode(params){
        this.currentToken.subscribe((token)=>{
          //alert(token.token)
          this.httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : token.token
            })
          };
        })
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'confirm-code', body, this.httpOptionsForSignedUser);
      
      }

   

    public logout() {
        return this.http.get(this.path + 'logout', httpOptions);
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }


    public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
        FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
    }


    



    

    /*login(params) {
        let body = JSON.stringify(params);
        return this.http.post(this.path + 'login', body, httpOptions);
    }*/

   

  

}

export class Item{
    price : string;
    id : string;
    itemname : string;
    description : string;
    merchantid : string;
}



@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
