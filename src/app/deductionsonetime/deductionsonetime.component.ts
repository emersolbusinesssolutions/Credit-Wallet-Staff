import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

@Component({
  selector: 'app-deductionsonetime',
  templateUrl: './deductionsonetime.component.html',
  styleUrls: ['./deductionsonetime.component.css']
})
export class DeductionsonetimeComponent implements OnInit {

  result: any;
  deductions: any;
  dataTable :any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) { }

  ngOnInit() {

    this.loadingBar.start();
    this.service.getdeductions2().subscribe(
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


}
