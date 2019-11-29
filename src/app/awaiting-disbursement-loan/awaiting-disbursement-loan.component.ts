import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {AppServiceService} from '../app-service.service';
import {Result} from '../result';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';

import * as deepEqual from "deep-equal";
import { ToastrService } from 'ngx-toastr';
import { IMyDpOptions } from 'mydatepicker';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-awaiting-disbursement-loan',
  templateUrl: './awaiting-disbursement-loan.component.html',
  styleUrls: ['./awaiting-disbursement-loan.component.css']
})
export class AwaitingDisbursementLoanComponent implements OnInit {


  searchparams : string;
  result : any;
  loans : any;
  report : any[]
  reportorders : any[];
  dataTable :any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
            this.getLoans("3");
     
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
          this.toastr.success("Something went wrong, please try again", '');
          this.loadingBar.complete();
        }
    );
  }

  ngOnInit() {
    
  }

}
