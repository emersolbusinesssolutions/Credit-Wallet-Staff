import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
import {Location} from '@angular/common';

@Component({
  selector: 'app-refundsview',
  templateUrl: './refundsview.component.html',
  styleUrls: ['./refundsview.component.css']
})
export class RefundsviewComponent implements OnInit {
  result: any;
  id: any;
  refund: any;
  expectedpayment: any;
  totalpaid: any;
  creator: any;
  initialapprover: any;
  finalapprover: any;
  reason: any;
  initialamount: number;
  initialreason = "Verification done and customer is due for refund";
  finalreason = "Verification done and customer is due for refund";
  finalamount: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef,private _location: Location) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.viewrefund()
   });
   

    
  }

  viewrefund(){
    var json = {
      id : this.id
    }
    this.loadingBar.start();
    this.service.refundview(json).subscribe(
      data => {
        this.result = data;
        this.loadingBar.complete();
      console.log(data)
        if(deepEqual(this.result.status,"success")){
         this.refund =this.result.refunds
         this.creator =  this.result.creator
         this.initialapprover =  this.result.initialapprover
         this.finalapprover =  this.result.finalapprover
         this.finalamount = this.refund.initialamount
         if(this.refund.status != "2"){
          this.expectedpayment = this.result.expectedpayment
          this.totalpaid = this.result.totalpaid
          this.initialamount = this.totalpaid - this.expectedpayment
          
         }else{
          this.expectedpayment = this.refund.expectedpayment
          this.totalpaid = this.refund.totalpaid
         }
        
        }

        else if (deepEqual(this.result.status,"err")){
          this.toastr.success("Invalid Account Details", '');
        }
        else if (deepEqual(this.result.status,"error")){
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

  rejectrefund(){
    var json = {
      id : this.id,
      reason : this.reason
    }

    if (confirm('Are you sure you want to reject this refund?')){
      this.loadingBar.start();
      this.service.refundrejection(json).subscribe(
        data => {
          this.result = data;
          this.loadingBar.complete();
        console.log(data)
          if(deepEqual(this.result.status,"success")){
            $('#modal-approve').modal('hide'); 
            this._location.back();
            
          }
  
          else if (deepEqual(this.result.status,"error")){
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
   
  }

  initialapproval(){
    var json = {
      id : this.id,
      reason : this.initialreason,
      initialamount : this.initialamount
    }

    if (confirm('Are you sure you want to confirm this refund?')){
      this.loadingBar.start();
      this.service.refundinitialapproval(json).subscribe(
        data => {
          this.result = data;
          this.loadingBar.complete();
        console.log(data)
          if(deepEqual(this.result.status,"success")){
            $('#modal-approve').modal('hide'); 
            this.toastr.success(this.result.message, '');
            location.reload()
            
          }
  
          else if (deepEqual(this.result.status,"error")){
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
   
  }

  finalapproval(){
    var json = {
      id : this.id,
      reason : this.finalreason,
      finalamount : this.finalamount
    }

    if (confirm('Are you sure you want to confirm this refund for payment?')){
      this.loadingBar.start();
      this.service.refundfinalapproval(json).subscribe(
        data => {
          this.result = data;
          this.loadingBar.complete();
        console.log(data)
          if(deepEqual(this.result.status,"success")){
            $('#modal-approve-final').modal('hide');
            this.toastr.success(this.result.message, '');
            location.reload()
            this._location.back();
            
          }
  
          else if (deepEqual(this.result.status,"error")){
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
  }


}
