import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
import { Result } from '../result';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  bankcode: any;
  accountnumber: any;
  result: any;
  verification: any;
  bvn: any;
  salary: any;
  nodeduction: boolean;
  authorisationCode: any;
  customerId: any;
  accountNumber: any;
  name: any;
  companyName: any;
  bankCode: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
            
    
   }

  ngOnInit() {
  }

  getAccountNumber(){
    var json = {
      bankcode : this.bankcode,
      accountnumber : this.accountnumber
    }

    console.log(json)

    this.loadingBar.start();
    this.service.suggestionstart(json).subscribe(
      data => {
        this.result = data;
       
      
        if(deepEqual(this.result.status,"success")){
          this.verification = this.result.result
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['/login']);
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }

  getVerification(){ 

    var json = {
      bvn : this.verification.bvn
    }

    this.loadingBar.start();
    this.service.getBVNresult(json).subscribe(
      data => {
        this.result = <Result>data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){
          this.bvn = this.result.data
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


  getSalary(){ 

    var json = {
      telephone : this.bvn.mobile
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




}
