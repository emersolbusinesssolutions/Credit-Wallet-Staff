
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
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  result : Result

  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    
    
     
  
  }

ngOnInit() {
}



login(regForm:NgForm){ 
  console.log(regForm.form.value);
  this.loadingBar.start();
  this.service.login(regForm.form.value).subscribe(
    data => {
      this.result = <Result>data;
      console.log(this.result)
      if(deepEqual(this.result.status,"success")){
        sessionStorage.setItem('currentUser', this.result.token);
        sessionStorage.setItem('firstname', this.result.user.firstname);
        sessionStorage.setItem('lastname', this.result.user.lastname);
        this._router.navigate(['/dashboard']);
      }
      else{
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
