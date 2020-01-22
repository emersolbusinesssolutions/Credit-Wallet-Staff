import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import * as deepEqual from "deep-equal";
@Component({
  selector: 'app-deductionsonetime',
  templateUrl: './deductionsonetime.component.html',
  styleUrls: ['./deductionsonetime.component.css']
})
export class DeductionsonetimeComponent implements OnInit {

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
      status : 0,
      type : "One-Time",
      pagenumber : this.pagenumber
    }

    this.loadingBar.start();
    this.service.getdeductionsNew(json).subscribe(
      data => {
        this.result = data
        console.log(data)
        if(deepEqual(this.result.status,"success")){
          this.deductions = this.result.deductions
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
