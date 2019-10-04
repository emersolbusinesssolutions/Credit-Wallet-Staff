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
  searchtext: any = "";
  status: any = "1";
  pagenumber: any = 1;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
            
     this.getLoans();
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
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }

  ngOnInit() {
  }


  next(){
    this.pagenumber = this.pagenumber + 1
    this.getLoans();
  }

  previous(){
    if(this.pagenumber == 1){
      this.toastr.success("You are on the first page", '');
      return;
    }
    this.pagenumber = this.pagenumber - 1
    this.getLoans();
  }


  search(){
    this.pagenumber = 1;
    this.getLoans();
  }




}
