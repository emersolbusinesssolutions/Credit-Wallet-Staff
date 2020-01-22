import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
@Component({
  selector: 'app-viewverification',
  templateUrl: './viewverification.component.html',
  styleUrls: ['./viewverification.component.css']
})
export class ViewverificationComponent implements OnInit {
  

  
  result : Result
  ippisnumber: any;
  verification;
  accountnumber: any;
  verifications: any;

  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    
    
     
  
  }


  getVerification(){ 

    var json = {
      ippisnumber : this.ippisnumber
    }

    this.loadingBar.start();
    this.service.getverificationresult(json).subscribe(
      data => {
        this.result = <Result>data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this.verification = this.result.verificationdata
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

  ngOnInit() {
  }

  getVerifications(){
    var json = {
      accountnumber : this.accountnumber
    }

    this.loadingBar.start();
    this.service.getverificationresults(json).subscribe(
      data => {
        this.result = <Result>data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this.verifications = this.result.verificationdata
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
