import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
@Component({
  selector: 'app-uploadverificationdata',
  templateUrl: './uploadverificationdata.component.html',
  styleUrls: ['./uploadverificationdata.component.css']
})
export class UploadverificationdataComponent implements OnInit {

  result : Result
  bvn: any;
  verification: any;

  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    
    
     
  
  }
  ngOnInit() {
  }

  getVerification(){ 

    var json = {
      bvn : this.bvn
    }

    this.loadingBar.start();
    this.service.getBVNresult(json).subscribe(
      data => {
        this.result = <Result>data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){
          this.verification = this.result.data
        }
        else if(deepEqual(this.result.status,"err")){
          this.toastr.success(this.result.message, '');
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
