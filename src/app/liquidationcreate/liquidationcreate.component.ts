import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-liquidationcreate',
  templateUrl: './liquidationcreate.component.html',
  styleUrls: ['./liquidationcreate.component.css']
})
export class LiquidationcreateComponent implements OnInit {

  loanid: any;
  requesttype: any;
  medium: any;
  telephone: any = "";
  email: any = "";
  result: any;
  showsuccess: boolean;
  currentmonthpayment: any;
  dueamount: any = 0;


   constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) { }


  ngOnInit() {
  }

  processrequest(){
    if(this.testVariable(this.loanid) == false){
      this.toastr.error('LOAN DISK Loan ID is required');
      return;
    }



    if(this.testVariable(this.medium) == false){
      this.toastr.error('Request Medium is required');
      return;
    }

    if(this.medium == 1){
      if(this.testVariable(this.telephone) == false){
        this.toastr.error('PHONE NUMBER is required');
        return;
      }
    }

    if(this.medium == 2){
      if(this.testVariable(this.email) == false){
        this.toastr.error('EMAIL ADDRESS is required');
        return;
      }
    }

    if(this.medium == 3){
      if(this.testVariable(this.email) == false){
        this.toastr.error('EMAIL ADDRESS is required');
        return;
      }
      if(this.testVariable(this.telephone) == false){
        this.toastr.error('PHONE NUMBER is required');
        return;
      }
    }

    var json = {
      loanid : this.loanid,
      medium : this.medium,
      telephone : this.telephone,
      email : this.email,
      currentmonthpayment : this.currentmonthpayment
    }

    this.loadingBar.start();
    this.service.liquidationcreate(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        console.log(data)
        if(deepEqual(this.result.status,"success")){
          this.showsuccess = true
          this.toastr.success(this.result.message, '');
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
        
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }
 

  testVariable(value){
    if(value == undefined){
      return false;
    }
    if(value == ""){
      return false
    }
  
    return true;
  }

}
