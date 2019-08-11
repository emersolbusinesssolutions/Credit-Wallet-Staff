import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-newdeductions',
  templateUrl: './newdeductions.component.html',
  styleUrls: ['./newdeductions.component.css']
})
export class NewdeductionsComponent implements OnInit {
  telephone: any;
  result: any;
  salary: any;
  loanid : any;
  amount : any;
  authorisationCode: any;
  customerId: any;
  accountNumber: any;
  bankCode: any;
  nodeduction: boolean = false;
  name: any;
  companyName: any;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
  };
  startdate;to;
  tenor: any;

  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    

     
  
  }


  getVerification(){ 

    var json = {
      telephone : this.telephone
    }

    this.loadingBar.start();
    this.service.deductionsinitiate(json).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){

   
          this.salary = this.result.response.salary;
       
          if(deepEqual(this.result.response.customerId,null)){

            
          }else{
            this.nodeduction = true
          }
          this.authorisationCode = this.result.response.authorisationCode;
          this.customerId = this.result.response.customerId;
          this.accountNumber = this.result.response.accountNumber;
          this.name = this.result.response.name;
          this.companyName = this.result.response.companyName;
          this.bankCode = this.result.response.bankCode;
        }
        else if(deepEqual(this.result.status,"err")){
          this.toastr.success(this.result.message, '');
        }
        else{
          this._router.navigate(['/racks']);
          this.toastr.success(this.result.message, '');
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
  }

  ngOnInit() {
  }


  setUpDeductions(){

    var json = {
      loanid : this.loanid,
      telephone : this.telephone,
      authorisationCode : this.authorisationCode,
      customerId : this.customerId,
      accountNumber : this.accountNumber,
      bankCode : this.bankCode,
      amount : this.amount
    }


    console.log(json);

    this.loadingBar.start();
    
    this.service.deductionsstart(json).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){
          $('#onetime').modal('hide');
          this.toastr.success("Successful", '');
          this._router.navigate(['/deductions']);
        }
        else if(deepEqual(this.result.status,"err")){
          this.toastr.success(this.result.message, '');
        }
        else{
        
          this.toastr.success(this.result.message, '');
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );

  }


  setUpDeductionsRecurring(){
    var json = {
      loanid : this.loanid,
      telephone : this.telephone,
      authorisationCode : this.authorisationCode,
      customerId : this.customerId,
      accountNumber : this.accountNumber,
      bankCode : this.bankCode,
      amount : this.amount,
      tenor : this.tenor,
      startdate : this.startdate.formatted
    }


    console.log(json)

    this.loadingBar.start();
    
    this.service.deductionsstartrecurring(json).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
       
  
        if(deepEqual(this.result.status,"success")){
          $('#recurring').modal('hide');
          this.toastr.success("Successful", '');
          this._router.navigate(['/deductions']);
        }
        else if(deepEqual(this.result.status,"err")){
          this.toastr.success(this.result.message, '');
        }
        else{
        
          this.toastr.success(this.result.message, '');
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
  }


  




}
