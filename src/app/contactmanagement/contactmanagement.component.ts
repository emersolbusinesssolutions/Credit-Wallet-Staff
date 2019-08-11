import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {AppServiceService} from '../app-service.service';
import {Result} from '../result';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { empty } from 'rxjs/Observer';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-contactmanagement',
  templateUrl: './contactmanagement.component.html',
  styleUrls: ['./contactmanagement.component.css']
})
export class ContactmanagementComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
  };
  from;to;
  result : Result
  status : any = 0;
  calllogs: any;
  dataTable: any;

  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
      
     
  
  }

ngOnInit() {
}



search(){ 
  var json = {
    status : this.status,
    from : this.from.formatted,
    to : this.to.formatted
  }


  console.log(json)
  this.loadingBar.start();
  this.service.searchcalllog(json).subscribe(
    data => {

      this.result = <Result>data;
      if(deepEqual(this.result.status,"success")){
       this.calllogs = this.result.calllogs
        this.chRef.detectChanges();
        const table: any = $('table');
        this.dataTable = table.DataTable();
      }
      else{
        this._router.navigate(['/racks']);
        this.toastr.success(this.result.message, '');
      }
      this.loadingBar.complete();
    },
      error => {
        console.log(error);
        this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
        this.loadingBar.complete();
      }
  );
}

}
