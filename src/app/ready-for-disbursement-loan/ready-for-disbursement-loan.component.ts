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
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { ToastrService } from 'ngx-toastr';
import { IMyDpOptions } from 'mydatepicker';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import * as XLSX from 'ts-xlsx'
@Component({
  selector: 'app-ready-for-disbursement-loan',
  templateUrl: './ready-for-disbursement-loan.component.html',
  styleUrls: ['./ready-for-disbursement-loan.component.css']
})
export class ReadyForDisbursementLoanComponent implements OnInit {


  searchparams : string;
  result : any;
  loans : any;
  report : any[]
  reportorders : any[];
  dataTable :any;
  data: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
          
          this.getLoans("7");  
     
   }

   getLoans(status){
    this.loadingBar.start();
    this.service.getLoans({status: status}).subscribe(
      data => {
        this.result = data;
        this.loans = this.result.data
      
        if(deepEqual(this.result.status,"success")){
          this.chRef.detectChanges();
          const table: any = $('table');
          this.dataTable = table.DataTable();
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
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

  getAmount(){

    let amount = 0;
    for (let index = 0; index < this.loans.length; ++index) {
      console.log(this.loans[index]);
      amount  = amount + parseFloat(this.loans[index].loan.loan_amount);
    }

    return amount;
  }

  getCount(){
    let number = 0;
    for (let index = 0; index < this.loans.length; ++index) {
      console.log(this.loans[index]);
      number  = number + 1;
    }
    return number;
  }

  ngOnInit() {
  }

  getPaymentFile(){

    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: false,
      useBom: true,
      headers: ["Loan #", "Amount", "Method", "Collection Date", "Collection By","Description","IPPIS NO","Mandate Reference"]
    };
    this.data = []
    for (let index = 0; index < this.loans.length; ++index) {
      let ippisnumber = ""
      if(this.loans[index].loan != null ){
        ippisnumber = this.loans[index].loan.ippisnumber
      }
      let json = {
        loanid : this.loans[index].loanid,
        amount : this.loans[index].received,
        method : "Remita Salary Platform (RSP)",
        date  : this.loans[index].date,
        by : "Remita Bacs Payment (RSP)",
        description : "Part Loan Repayment",
        ippisno : ippisnumber,
        mandatereference : this.loans[index].mandatereference
      }
      this.data[index] = json
    }

    new Angular5Csv(this.data, "Payment File", options);
  }

}
