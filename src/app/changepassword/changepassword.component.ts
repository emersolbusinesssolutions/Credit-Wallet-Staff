import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  result : Result;
  filter : boolean
  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
 
  
  }

  ngOnInit() {
  }




    changepassword(regForm:NgForm){ 


      this.loadingBar.start();
      this.service.changepassword(regForm.form.value).subscribe(
        data => {
          this.result = <Result>data;
        
          if(deepEqual(this.result.status,"success")){
            
            this.toastr.success(this.result.message, '');
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
