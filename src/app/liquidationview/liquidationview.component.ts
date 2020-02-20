import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
import {Location} from '@angular/common';
@Component({
  selector: 'app-liquidationview',
  templateUrl: './liquidationview.component.html',
  styleUrls: ['./liquidationview.component.css']
})
export class LiquidationviewComponent implements OnInit {

  result: any;
  id: any;
  liquidation: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private _location: Location) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.viewLiquidation()
   });
   

    
  }

  getLoanBalance(){

    let result  = parseFloat(this.liquidation.loanamount) + parseFloat(this.liquidation.adminfees) + parseFloat(this.liquidation.accruedinterest) - parseFloat(this.liquidation.paidamount);
    return result;
  }

  viewLiquidation(){
    var json = {
      id : this.id
    }
    this.loadingBar.start();
    this.service.liquidationone(json).subscribe(
      data => {
        this.result = data;
        this.loadingBar.complete();
      console.log(data)
        if(deepEqual(this.result.status,"success")){
         this.liquidation =this.result.liquidationrequest
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

  setOption(status){

    if(confirm("Are you sure you want to proceed")){
      var json = {
        id : this.id,
        status : status,
        loanid : this.liquidation.loan_id,
        email : this.liquidation.email
      }
      this.loadingBar.start();
      this.service.liquidationsetoption(json).subscribe(
        data => {
          this.result = data;
          this.loadingBar.complete();
        console.log(data)
          if(deepEqual(this.result.status,"success")){
            this.toastr.success("Successful", '');
            this._location.back();
          }
  
          else if (deepEqual(this.result.status,"error")){
            this.toastr.success("Something went wrong", '');
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
