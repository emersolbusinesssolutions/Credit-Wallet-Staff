import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {AppServiceService} from '../app-service.service';
import {Result} from '../result';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Transactions } from '../transactions';
import { Chart } from 'angular-highcharts';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
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
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
            
     this.getLoans("0")

    

     
   }

   getLoans(status){
    this.loadingBar.start();
    this.service.getLoans({status: status}).subscribe(
      data => {
        this.result = data;
        this.loans = this.result.data;
        this.loadingBar.complete();
      
        if(deepEqual(this.result.status,"success")){
          this.chRef.detectChanges();
          const table: any = $('table');
          this.dataTable = table.DataTable();
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['/login']);
        }
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
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
              this.getLoans("0");
            }
            else{
              this.toastr.success(result.message, '');
              //this._router.navigate(['/login']);
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
  }

}
