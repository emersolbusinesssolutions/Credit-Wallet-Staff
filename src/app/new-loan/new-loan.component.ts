import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {AppServiceService} from '../app-service.service';
import {Result} from '../result';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Transactions } from '../transactions';
import { Chart } from 'angular-highcharts';
import * as deepEqual from "deep-equal";
import { ToastrService } from 'ngx-toastr';
import { IMyDpOptions } from 'mydatepicker';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css']
})
export class NewLoanComponent implements OnInit {


  searchparams : string;
  result : any;
  loans : any;
  report : any[]
  reportorders : any[];
  dataTable :any;
  title: string ="";
  pagenumber: number = 1;
  searchtext: any = "";
  status: any = 0;
  total: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
            

this.getLoans()
     
   }

   getLoans(){

    

    var json = {
      searchtext : this.searchtext,
      status : this.status,
      pagenumber : this.pagenumber
    }
    this.loadingBar.start();
    this.service.getLoansNew(json).subscribe(
      data => {
        this.result = data;
        this.loans = this.result.data
        this.total = this.result.total
        console.log(data)
        if(deepEqual(this.result.status,"success")){
      
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Something went wrong, please try again", '');
          this.loadingBar.complete();
        }
    );
  }

  ngOnInit() {
  }

  returnStart(){
    let current = (this.pagenumber - 1) * 10
    return 1 + current;
  }

  returnEnd(){


    let current  = this.pagenumber * 10
    if( current > this.result.total_size){
      return this.result.total_size;
    }

    return current;
  }


  next(){
  
      this.pagenumber = this.pagenumber + 1
      this.returnEnd()
      this.getLoans();
   
    
  }

  previous(){
    if(this.pagenumber == 1){
      this.toastr.success("You are on the first page", '');
      return;
    }
      this.pagenumber = this.pagenumber - 1
      this.returnEnd()
      this.getLoans();
   
  }


  search(){

      this.pagenumber = 1
      this.returnEnd()
      this.getLoans();
   

    
  }


  getAmount(){

    let amount = 0;
    for (let index = 0; index < this.total.length; ++index) {
    
      amount  = amount + parseFloat(this.total[index].loan_amount);
    }

    return amount;
  }

  getCount(){
    let number = 0;
    for (let index = 0; index < this.total.length; ++index) {
     
      number  = number + 1;
    }
    return number;
  }

  rejectLoan(loan){
    if (confirm('Are you sure you want to reject this loan?')) {
       this.loadingBar.start();
       

        this.service.rejectLoan({id: loan.id}).subscribe(
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



}
