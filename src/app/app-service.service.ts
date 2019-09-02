
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
      generateOfferLetterNew(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/offerletter/new', params, httpOptionsForSignedUser);
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

      sendmail(params: any): any {
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'email/send/automatic', params, httpOptionsForSignedUser);
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





    getLoans(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loans/list', params, httpOptionsForSignedUser);

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

    auditlog() {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.get(this.path + 'audit/view', httpOptionsForSignedUser);

    }

    listoneloan(params) {
     
        const httpOptionsForSignedUser = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : sessionStorage.getItem("currentUser")
            })
          };
        
        return this.http.post(this.path + 'loan/one', params, httpOptionsForSignedUser);
        
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
