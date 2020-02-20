import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-callinverification',
  templateUrl: './callinverification.component.html',
  styleUrls: ['./callinverification.component.css']
})
export class CallinverificationComponent implements OnInit {

  result : any
  ippisnumber: any;
  verification;
  accountnumber: any;
  verifications: any;
  searchtext: any;
  type: any;
  loan: any;
  salary: any;

  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    
    
     
  
  }


  getVerification(){ 

    var json = {
      searchtext : this.searchtext,
      type : this.type
    }

    this.loadingBar.start();
    this.service.callinverification(json).subscribe(
      data => {
        this.result = <Result>data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this.verification = this.result.verificationdata
          this.salary = this.result.salary
          this.loan = this.result.loan
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

  

}
