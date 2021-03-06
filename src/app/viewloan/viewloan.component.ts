/// <reference path="./../../scripts/typings/bootstrap/bootstrap.d.ts" />
import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as deepEqual from "deep-equal";
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css'],
  
})
export class ViewloanComponent implements OnInit {

  name = 'Angular 5';
 
  
  result : any;
  id : string;
  data: any;
  offerLetterData: any;
  awaitingDisbursementData: any;
  verification: any = [];
  reason : any;
  uniquenumber : any
  otherreason: boolean;
  otherreasonvalue : any
  comment: any;
  comments: any;
  remita: any;
  existingrecord: any;
  borrowerid: any;
  remitaloanhistory: any;
  rspverification: any;
  availablebalance: any;
  existingloandiskdetails: any;
  admindetails: any;
  accountverificationgiro: any;
  lenders: any;
  lender: any;
  plaasrepayment: any;
  verificationsuggestion: any;
  nonippis: any;
  amount: any;
  tenor: any;
  organizationcode: any;
  getorganizationalcode: boolean;
  showorganizationalcode: any;
  showSuccess: boolean;
  showDanger: boolean;
  marketer: any;
  loanid: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      
    this.id = this.router.snapshot.params['id'];
  
      
  }

  cancelloan(){

   if(confirm("Are you sure")){
    this.loadingBar.start();
    if(this.reason == 1){
      this.reason = this.otherreasonvalue
    }

    var params = {
      id: this.id, 
      reason:this.reason
    }
    

     this.service.cancelloan(params).subscribe(
      data => {
        this.result = data;
        
        console.log(data);
        this.loadingBar.complete();
        if(this.result.status == "success"){
          this.toastr.success(this.result.message, '');
          location.reload()
        }else{
          this.toastr.success(this.result.message, '');
        }
        
       
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );
   }


   
  }

  sendtoreadyfordeductions(object){

    if(confirm("Are you sure?")){
      this.loadingBar.start();
      this.service.deductionsapproval(object).subscribe(
        data => {
          this.result = data;
          console.log(this.result)
          if(deepEqual(this.result.status,"success")){
            this.toastr.success(this.result.message, '');
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
    }
    
  }

  setmarketer(){
    if(confirm("Are you sure?")){
      var json = {
        marketer : this.marketer,
        id : this.id
      }
      this.loadingBar.start();
      this.service.setmarketer(json).subscribe(
        data => {
          this.result = data;
          console.log(this.result)
          if(deepEqual(this.result.status,"success")){
            this.toastr.success(this.result.message, '');
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
    }
  }

  complete(data){

    if(confirm("Are you sure")){
      this.loadingBar.start();
      this.service.deductionsapproval(data).subscribe(
        data => {
          this.result = data;
          console.log(this.result)
          if(deepEqual(this.result.status,"success")){
            this.toastr.success(this.result.message, '');
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
    }
    
  }

  getAdminFees(amount){
    return ((amount * 0.03) + 1250)
  }


  getAccountVerification(data){

    if(confirm("Are you sure")){
      this.loadingBar.start();
      this.service.paymentmatch(data).subscribe(
        data => {
          this.result = data
          console.log(data)
          if(deepEqual(this.result.status,"success")){
            this.toastr.success("Verification Successful", '');
            this.accountverificationgiro = this.result.accountverificationgiro.data;
            this.loadingBar.complete();
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
    }
   
  }

  changeIPPISNumber(ippisnumber){
    this.data.ippisnumber = ippisnumber
    this.EditLoan();
  }

  changeLoanAmount(){
    if(confirm("Are you sure you want to change loan amount")){
      this.loadingBar.start();
      var json = {
        id : this.id,
        amount : this.amount,
        tenor : this.tenor
      }
      this.service.changeamount(json).subscribe(
        data => {
          this.result = data
          if(deepEqual(this.result.status,"success")){
            this.toastr.success(this.result.message, '');
           location.reload();
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
      console.log(json)
    }
  }

  getLoan() {
    this.loadingBar.start();
    this.service.listoneloan({id: this.id}).subscribe(
      data => {
        this.result = data
        console.log(this.result.loan)
        this.data = this.result.loan;
        this.accountverificationgiro = this.result.accountverificationgiro.data;
        this.admindetails = this.result.admindetails;
        this.borrowerid = this.result.borrowerid;
        this.existingrecord = this.result.existingrecord;
        this.uniquenumber = this.result.uniquenumber;
        this.comments = this.result.comments
        this.plaasrepayment = this.result.plaasrepayment
        this.verificationsuggestion = this.result.verificationsuggestion;
        this.remita = this.result.remita
        this.nonippis = this.result.nonippis;
        this.existingloandiskdetails = this.result.existingloandiskdetails
        this.showorganizationalcode = this.result.showorganizationalcode

        this.availablebalance = this.result.availablebalance;

        

        if(this.availablebalance == 0){
          if(this.data.remitastatus == "1"){
            this.availablebalance = this.remita[0].amount;
            console.log(this.availablebalance)
          }
         
        }

        if((this.availablebalance - this.data.monthly_repayment) >= 10000){
          this.showSuccess = true;
        }

        if((this.availablebalance - this.data.monthly_repayment) < 10000){
          this.showDanger= true;
        }

       

        if(this.data.plaas != ''){
          this.getLender()
        }
        
        this.verification = this.result.verification;
        this.rspverification = this.result.rspverification;
        this.remitaloanhistory = this.result.remitaloanhistory;
        this.offerLetterData = {id: this.data.id, amount: this.data.loan_amount, tenor: this.data.tenor, place_of_work: this.data.place_of_work};
        this.awaitingDisbursementData = {id: this.data.id, preferred_accountnumber: this.data.salary_bank_account, preferred_bankname: this.data.salary_bank_name};
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );
  }


  getBorrowerColor(){

  }

  setOrganizationCode(place_of_work){
    var json = {
      place_of_work : place_of_work
    }
    this.loadingBar.start();
    this.service.getOrganizationCode(json).subscribe(
      data => {
        this.result = data
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          location.reload()
        }
        else{
          this.toastr.success(this.result.message, '');
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );
  }

  getLender() {
    this.loadingBar.start();
    this.service.getLenders().subscribe(
      data => {
        this.result = data
        if(deepEqual(this.result.status,"success")){
         this.lenders = this.result.lenders
        }
        else{
          this.toastr.success(this.result.message, '');
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );
  }


  selectLender(){


    if(confirm("Are you sure you want to select this Lender")){
      this.loadingBar.start();
      var json = {
        id : this.id,
        lenderid : this.lender
      }
      this.service.selectlender(json).subscribe(
        data => {
          this.result = data
          if(deepEqual(this.result.status,"success")){
            this.toastr.success("Successful", '');
           location.reload();
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
      console.log(json)
    }

  }

  moveToLoanDisk() {
    if(confirm("Are you sure")){
      this.loadingBar.start();
      this.service.addToLoanDisk({id: this.id}).subscribe(
        data => {
          this.result = data;
          if(deepEqual(this.result.status,"success")){
            this.toastr.success(this.result.message, '');
            location.reload()
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
    }
    
  }

  disburseviaplaas(data){
    if(confirm("Are you sure to disburse this loan via PLAAS")){
      this.loadingBar.start();
      this.service.plaasstart({id: this.id}).subscribe(
        data => {
          this.result = data;
          if(deepEqual(this.result.status,"success")){
            this.toastr.success(this.result.message, '');
            location.reload()
          }
          else{
            this.toastr.success(this.result.message, '');
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.loadingBar.complete();
            this.toastr.error("Network Error, please try again", '');
          }
      );
    }
  }

  setReasonType(value){
    if(value == 1){
      this.otherreason = true
    }

  }
  generateOfferLetterElectronic(){
    $('#modal-electronic').modal('hide'); 
    this.loadingBar.start();
     this.service.generateOfferLetterNew(this.offerLetterData).subscribe(
       data => {
         let result: any = data;
         console.log(data)
         if(deepEqual(result.status,"success")){
           this.toastr.success(result.message, '');
           this.getLoan();
         }
         else{
           this.toastr.success(result.message, '');
           //this._router.navigate(['']);
         }
         this.loadingBar.complete();
       },
         error => {
           console.log(error);
           this.toastr.success("Network Related Error", '');
           this.loadingBar.complete();
         }
     );
  }

  generateOfferLetterElectronic2(){
    $('#modal-electronic2').modal('hide'); 
    this.loadingBar.start();
     this.service.generateOfferLetterNew2(this.offerLetterData).subscribe(
       data => {
         let result: any = data;
         console.log(data)
         if(deepEqual(result.status,"success")){
           this.toastr.success(result.message, '');
           this.getLoan();
         }
         else{
           this.toastr.success(result.message, '');
           //this._router.navigate(['']);
         }
         this.loadingBar.complete();
       },
         error => {
           console.log(error);
           this.toastr.success("Network Related Error", '');
           this.loadingBar.complete();
         }
     );
  }


  rejectLoan(){


    if (confirm('Are you sure you want to reject this loan?')) {
       this.loadingBar.start();


       if(this.reason == 1){
         this.reason = this.otherreasonvalue
       }
       

        this.service.rejectLoan({id: this.id, reason:this.reason}).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              location.reload(true);
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
      }
  }

  setDeductionsRecords(){
    if (confirm('Are you sure you want to disburse this loan?')) {
      this.loadingBar.start();
      this.service.deductiondisburse({id: this.id, loanid:this.loanid}).subscribe(
        data => {
          let result: any = data;
          console.log(data)
          if(deepEqual(result.status,"success")){
            $('#modal-acceptloanid').modal('hide'); 
            this._router.navigate(['disburse/'+this.id]);
          }
          else{
            this.toastr.success(result.message, '');
            //this._router.navigate(['']);
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.toastr.success("Network Related Error", '');
            this.loadingBar.complete();
          }
      );
     }
  }


  updateLoan(){


    if (confirm('Are you sure you want to edit this loan?')) {
       this.loadingBar.start();


  
       

        this.service.editLoan(this.data).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              location.reload(true);
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
      }
  }

  disburseAutomatic(){

    if(confirm("Are you sure you want to retry this payment")){
      this.loadingBar.start();
      this.service.disburseLoan({id: this.id}).subscribe(
        data => {
          let result: any = data;
          console.log(data)
          if(deepEqual(result.status,"success")){
            this.toastr.success(result.message, '');
          }
          else{
            this.toastr.success(result.message, '');
            //this._router.navigate(['']);
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.toastr.success("Network Related Error", '');
            this.loadingBar.complete();
          }
      );
    }
   
    
 }

  confirmDocuments(loan){
    if (confirm('You are about to acknowledge that loan documents have been received?')) {
       this.loadingBar.start();
       

        this.service.confirmDocuments({id: loan.id}).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              this.getLoan();
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
    }
  }

  confirmRemita(loan){
    if (confirm('You are about to acknowledge that Remita have been received?')) {
       this.loadingBar.start();
       

        this.service.confirmRemita({id: loan.id}).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              this.getLoan();
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
    }
  }

  trimStr(str) {
    if(!str) return str;
    return str.replace(/^\s+|\s+$/g, '');
  }

  sendToAwaitingDisbursement(){
    $('#modal-awaitingdisbursement').modal('hide'); 
    if (confirm('Are you sure you want to send this loan to awaiting disbursement?')) {
       this.loadingBar.start();
       

        this.service.sendToAwaitingDisbursement(this.awaitingDisbursementData).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              this.getLoan();
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
    }
  }

  disburseLoan(loan){
    if (confirm('Are you sure you want to disburse this loan?')) {
       this.loadingBar.start();
       

        this.service.disburseLoan({id: loan.id}).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              this.getLoan();
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
    }
  }

  disburseLoanRemita(loan){
    if (confirm('Are you sure you want to disburse this loan?')) {
       this.loadingBar.start();
       

        this.service.disburseLoanRemita({id: loan.id}).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              this.getLoan();
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
    }
  }

  completeLoanRemita(loan){
    if (confirm('Are you sure you want to complete this loan?')) {
      
       this.loadingBar.start();
        this.service.completeLoanRemita({id: loan.id}).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              this.getLoan();
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
    }
  }

  completeLoan(loan){
    if (confirm('Are you sure you want to complete this loan?')) {
       this.loadingBar.start();
       

        this.service.completeLoan({id: loan.id}).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              this.getLoan();
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
    }
  }

  notifyFinance(loan){


    if(confirm("Are you sure")){
      this.loadingBar.start();
     

      this.service.notifyFinance({id: loan.id}).subscribe(
        data => {
          let result: any = data;
          console.log(data)
          if(deepEqual(result.status,"success")){
            this.toastr.success(result.message, '');
            this.getLoan();
          }
          else{
            this.toastr.success(result.message, '');
            //this._router.navigate(['']);
          }
          this.loadingBar.complete();
        },
          error => {
            console.log(error);
            this.toastr.success("Network Related Error", '');
            this.loadingBar.complete();
          }
      );
    }
     
  }

  generateOfferLetter(){
   
     $('#modal-default').modal('hide'); 
    this.loadingBar.start();
     this.service.generateOfferLetter(this.offerLetterData).subscribe(
       data => {
         let result: any = data;
         console.log(data)
         if(deepEqual(result.status,"success")){
           this.toastr.success(result.message, '');
           this.getLoan();
         }
         else{
           this.toastr.success(result.message, '');
           //this._router.navigate(['']);
         }
         this.loadingBar.complete();
       },
         error => {
           console.log(error);
           this.toastr.success("Network Related Error", '');
           this.loadingBar.complete();
         }
     );
   }


   EditLoan(){


    if (confirm('Are you sure you want to edit this loan?')) {
       this.loadingBar.start();


   
       

        this.service.editLoan(this.data).subscribe(
          data => {
            let result: any = data;
            console.log(data)
            if(deepEqual(result.status,"success")){
              this.toastr.success(result.message, '');
              //location.reload(true);
              $('#editapplicationform').modal('hide'); 
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['']);
            }
            this.loadingBar.complete();
          },
            error => {
              console.log(error);
              this.toastr.success("Network Related Error", '');
              this.loadingBar.complete();
            }
        );
      }
  }

  ngOnInit() {
    this.getLoan();
    
  }
  

  addcomment(){
    this.loadingBar.start();
    var json = {
      id: this.id,
      comment : this.comment
    }

    this.service.addcomment(json).subscribe(
      data => {
        let result: any = data;
        console.log(data)
        if(deepEqual(result.status,"success")){
          this.toastr.success(result.message, '');
          //location.reload(true);
          $('#modal-comment').modal('hide');
          this.getLoan(); 
        }
        else{
          $('#modal-comment').modal('hide');
          this.toastr.success(result.message, '');
          this._router.navigate(['']);
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Network Related Error", '');
          this.loadingBar.complete();
        }
    );
  }


  verifyaccountnumber(){
    this.loadingBar.start();
    var json = {
      id : this.id
    }
    this.service.verifyAccountNumber(json).subscribe(
      data => {
        let result: any = data;
        console.log(data)
        if(deepEqual(result.status,"success")){
          this.toastr.success(result.message, '');
          this.getLoan(); 
        }
        else{
          $('#modal-comment').modal('hide');
          this.toastr.success(result.message, '');
          this._router.navigate(['']);
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Network Related Error", '');
          this.loadingBar.complete();
        }
    );
  }



}
