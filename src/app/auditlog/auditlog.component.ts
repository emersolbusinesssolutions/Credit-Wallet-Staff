import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import * as deepEqual from "deep-equal";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-auditlog',
  templateUrl: './auditlog.component.html',
  styleUrls: ['./auditlog.component.css']
})
export class AuditlogComponent implements OnInit {
  result: any;
  auditlogs: any;
  dataTable: any;
  from: any;
  to: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef){ }

  ngOnInit() {

    var json = 
    {
      type : 1
    }

    this.loadingBar.start();
    this.service.auditlog(json).subscribe(
      data => {
        this.result = data;
        this.auditlogs = this.result.audit
      
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

  getReport(){

  
    var json = 
    {
      type : 2,
      from : this.from,
      to : this.to
    }

    console.log(json)

    this.loadingBar.start();
    this.service.auditlog(json).subscribe(
      data => {
        this.result = data;
        this.auditlogs = this.result.audit
      
        if(deepEqual(this.result.status,"success")){
          this.dataTable.destroy()
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

}
