import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { IMyDpOptions } from 'mydatepicker';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-disburse',
  templateUrl: './disburse.component.html',
  styleUrls: ['./disburse.component.css']
})
export class DisburseComponent implements OnInit {

  result : any;
  id : string;
  data: any;
  offerLetterData: any;
  awaitingDisbursementData: any;
  verification: any;
  reason : any;
  uniquenumber : any
  otherreason: boolean;
  otherreasonvalue : any
  comment: any;
  comments: any;
  remita: any;
  loanid: any;
  onetime: boolean = false;
  amount: any;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
  };
  startdate;to;
  recurring: boolean;
  disburse: boolean;
  duration: any;
  automaticdisbursement: boolean;
  today: Date;
  month: number;
  accountverificationgiro: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      
    this.id = this.router.snapshot.params['id'];
    this.getLoan()
      
  }


  ngOnInit() {
   this.today = new Date()
   this.month = this.today.getDate() 
  }


  getLoan() {
    this.loadingBar.start();
    this.service.listoneloan({id: this.id}).subscribe(
      data => {
        this.result = data
        console.log(this.result)
        this.data = this.result.loan;
        this.accountverificationgiro = this.result.accountverificationgiro.data;
        this.loanid =  this.data.loanid
        this.duration =  this.data.tenor
        this.amount = this.data.monthly_repayment
        this.uniquenumber = this.result.uniquenumber;
        this.comments = this.result.comments
        this.remita = this.result.remita
        this.verification = this.result.verification;
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


  showRSP(){
    this.onetime = true;
    this.recurring = false;
    this.disburse = false;
  }

  showRecurring(){
    this.recurring = true;
    this.disburse = false;
    this.onetime = false;
  }

  showDisburse(){
    this.disburse = true;
    this.onetime = false;
    this.recurring = false;
  }



  


  disburseOneTime(){


    if(this.startdate == undefined){
      this.toastr.error("Provide deduction start date", '');
      return;
    }

    if(this.amount == undefined){
      this.toastr.error("Provide amount to deduct", '');
      return;
    }

    var  json = {
      loanid : this.loanid,
      telephone : this.data.telephone,
      authorisationCode : this.data.authcode,
      customerId : this.data.remita_customer_id,
      accountNumber : this.data.salary_bank_account,
      bankCode : this.data.salary_bank_name,
      amount : this.amount,
      startdate : this.startdate.formatted
    }

    


    if (confirm('Are you sure you want to disburse this loan?')) {
      this.loadingBar.start();
       this.service.disburseLoanOneTime(json).subscribe(
         data => {
           let result: any = data;
           console.log(data)
           if(deepEqual(result.status,"success")){
            
             if(this.automaticdisbursement == true){
              this.toastr.success("Loan Disbursed, please wait for payment", '');
               this.disburseAutomatic()
             }else{
              this.toastr.success("Loan Disbursed", '');
              this._router.navigate(['loan/ready']);
             }
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


  disburseRecurring(){


    if(this.startdate == undefined){
      this.toastr.error("Provide deduction start date", '');
      return;
    }

    if(this.amount == undefined){
      this.toastr.error("Provide amount to deduct", '');
      return;
    }

    if(this.amount == undefined){
      this.toastr.error("Provide amount to deduct", '');
      return;
    }

    var  json = {
      loanid : this.loanid,
      telephone : this.data.telephone,
      authorisationCode : this.data.authcode,
      customerId : this.data.remita_customer_id,
      accountNumber : this.data.salary_bank_account,
      bankCode : this.data.salary_bank_name,
      amount : this.amount,
      startdate : this.startdate.formatted,
      tenor : this.duration
    }






    if (confirm('Are you sure you want to disburse this loan?')) {
      this.loadingBar.start();
      

       this.service.disburseLoanRecurring(json).subscribe(
         data => {
           let result: any = data;
           console.log(data)
           if(deepEqual(result.status,"success")){
            this.toastr.success("Loan Disbursed, please wait for payment", '');
             if(this.automaticdisbursement == true){
              this.disburseAutomatic()
            }else{
             this._router.navigate(['loan/ready']);
            }
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

  disburseNon(){
    if (confirm('Are you sure you want to disburse this loan?')) {
      this.loadingBar.start();
      

       this.service.disburseLoanADD({id: this.id}).subscribe(
         data => {
          this.loadingBar.complete();
           let result: any = data;
           console.log(data)
           if(deepEqual(result.status,"success")){
             this.toastr.success(result.message, '');
             if(this.automaticdisbursement == true){
              this.disburseAutomatic()
            }else{
             this._router.navigate(['loan/ready']);
            }
           }
           else{
             this.toastr.success(result.message, '');
             //this._router.navigate(['']);
           }
         },
           error => {
             console.log(error);
             this.toastr.success("Network Related Error", '');
             this.loadingBar.complete();
           }
       );
   }
  }


  onDisburseAutomatically(eve){
    if(eve.target.checked == true){
      this.automaticdisbursement = true
    }else{
      this.automaticdisbursement = false
    }
  }


  disburseAutomatic(){
   
      this.loadingBar.start();
       this.service.disburseLoan({id: this.id}).subscribe(
         data => {
           let result: any = data;
           console.log(data)
           if(deepEqual(result.status,"success")){
             this.toastr.success(result.message, '');
             this._router.navigate(['loan/ready']);
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



