import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {AppServiceService} from '../app-service.service';
import {Result} from '../result';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { empty } from 'rxjs/Observer';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {

  result : Result
  telephone: any;
  addResponse: boolean;
  status: any;
  comment: any = "No Comment";

  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    
    
     
  
  }

ngOnInit() {
}



search(){ 


  var json = {
    telephone : this.telephone
  }
  
  this.loadingBar.start();
  this.service.searchfornumbers(json).subscribe(
    data => {
      this.result = <Result>data;
      console.log(this.result)
      if(deepEqual(this.result.status,"success")){
        this.addResponse = true
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

addRecord(){
  var json = {
    status : this.status,
    comment : this.comment,
    telephone : this.telephone
  }

  this.loadingBar.start();
  this.service.addRecord(json).subscribe(
    data => {
      console.log(data)
      this.result = <Result>data;
      console.log(this.result)
      if(deepEqual(this.result.status,"success")){
        this._router.navigate(['/contactmanagement']);
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
