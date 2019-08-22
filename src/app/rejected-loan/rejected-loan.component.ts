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
  selector: 'app-rejected-loan',
  templateUrl: './rejected-loan.component.html',
  styleUrls: ['./rejected-loan.component.css']
})
export class RejectedLoanComponent implements OnInit {


  searchparams : string;
  result : any;
  loans : any;
  report : any[]
  reportorders : any[];
  dataTable :any;
  title: string ="";
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
            
     this.getLoans("1");
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

  getAmount(){

    let amount = 0;
    for (let index = 0; index < this.loans.length; ++index) {
      amount  = amount + parseFloat(this.loans[index].loan.loan_amount);
    }

    return amount;
  }

  getCount(){
    let number = 0;
    for (let index = 0; index < this.loans.length; ++index) {
      number  = number + 1;
    }
    return number;
  }

  ngOnInit() {

  }

}
