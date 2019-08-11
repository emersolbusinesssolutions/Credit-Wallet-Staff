import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.css']
})
export class DeductionsComponent implements OnInit {
  result: any;
  deductions: any;
  dataTable :any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) { }

  ngOnInit() {

    this.loadingBar.start();
    this.service.getdeductions().subscribe(
      data => {
        this.result = data
        this.deductions = data.data
        console.log(this.result)
        this.loadingBar.complete();
        this.chRef.detectChanges();
        const table: any = $('table');
        this.dataTable = table.DataTable();
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );

    //deductions/all
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
    this.service.exportAsExcelFile(this.deductions, 'Pending Deductions');
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
