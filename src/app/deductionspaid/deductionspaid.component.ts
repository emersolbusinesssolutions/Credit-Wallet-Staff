import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as deepEqual from "deep-equal";
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import * as XLSX from 'ts-xlsx'

@Component({
  selector: 'app-deductionspaid',
  templateUrl: './deductionspaid.component.html',
  styleUrls: ['./deductionspaid.component.css']
})
export class DeductionspaidComponent implements OnInit {

  result: any;
  deductions: any;
  dataTable :any;
  pagenumber: any = 1;
  searchtext: any = "";

  

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) { }

  ngOnInit() {

    var json = {
      searchtext : this.searchtext,
      status : 1,
      type : "",
      pagenumber : this.pagenumber
    }

    this.loadingBar.start();
    this.service.getdeductionsNew(json).subscribe(
      data => {
        this.result = data
        if(deepEqual(this.result.status,"success")){
          this.deductions = this.result.deductions
          console.log(this.deductions)
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );

    //deductions/all
  }

  next(){
  
    this.pagenumber = this.pagenumber + 1

    this.ngOnInit();
 
  
}

previous(){
  if(this.pagenumber == 1){
    this.toastr.success("You are on the first page", '');
    return;
  }
    this.pagenumber = this.pagenumber - 1
    this.ngOnInit();
 
}


search(){

    this.pagenumber = 1
    this.ngOnInit();
 

  
}

  confirmPayment(deduction){
    this.loadingBar.start();

    var json = {
      id : deduction.id
    }
    this.service.confirmpayment(json).subscribe(
      data => {
        this.result = data
        this.toastr.success(this.result.message, '');
        this.loadingBar.complete();
        this.ngOnInit()
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );
  }


  export(){
    this.service.exportAsExcelFile(this.deductions, 'One-Time Deductions');
  }


  calculateBalance(deduction){
    var paid = (deduction.paid * deduction.amount)
    var outstanding = (deduction.no_of_times * deduction.amount)
    return (outstanding - paid)
  }

  calculatePaid(deduction){
    var paid = (deduction.paid * deduction.amount)
    return paid;
  }


}
