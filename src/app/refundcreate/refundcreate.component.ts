import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-refundcreate',
  templateUrl: './refundcreate.component.html',
  styleUrls: ['./refundcreate.component.css']
})
export class RefundcreateComponent implements OnInit {

  comment = "Verification done and customer is due for refund"
  bankcode: any;
  accountnumber: any;
  result: any;
  verification: any;
  loanid: any;
  amount: any;
  email: any;
  telephone: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) { }

  ngOnInit() {
  }
  
  getAccountNumber(){
    
    if(this.testVariable(this.bankcode) == false){
      this.toastr.error('Bank Name is required');
      return;
    }

    if(this.testVariable(this.email) == false){
      this.toastr.error('Email Address is required');
      return;
    }
    var json = {
      bankcode : this.bankcode,
      accountnumber : this.accountnumber
    }

    console.log(json)

    this.loadingBar.start();
    this.service.suggestionstart(json).subscribe(
      data => {
        this.result = data;
        this.loadingBar.complete();
      console.log(data)
        if(deepEqual(this.result.status,"success")){
          this.submit();
        }

        else if (deepEqual(this.result.status,"err")){
          this.toastr.success("Invalid Account Details", '');
        }
        else if (deepEqual(this.result.status,"error")){
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }

      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }

  submit(){

    if(this.testVariable(this.loanid) == false){
      this.toastr.error('Loan ID is required');
      return;
    }

    if(this.testVariable(this.amount) == false){
      this.toastr.error('Amount is required');
      return;
    }

    if(this.testVariable(this.bankcode) == false){
      this.toastr.error('Bank Name is required');
      return;
    }

    if(this.testVariable(this.email) == false){
      this.toastr.error('Email Address is required');
      return;
    }

    if(this.testVariable(this.comment) == false){
      this.toastr.error('Comment is required');
      return;
    }

    if(this.testVariable(this.accountnumber) == false){
      this.toastr.error('Account Number is required');
      return;
    }

    if(this.testVariable(this.telephone) == false){
      this.toastr.error('Telephone is required');
      return;
    }
   

    var json = {
      loanid : this.loanid,
      bankcode : this.bankcode,
      accountnumber : this.accountnumber,
      amount : this.amount,
      email : this.email,
      comment : this.comment,
      telephone : this.telephone
    }

    this.loadingBar.start();
    this.service.refundinitiate(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        console.log(data)
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
        
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
    
  }


  testVariable(value){
    if(value == undefined){
      return false;
    }
    if(value == ""){
      return false
    }
  
    return true;
  }
}
