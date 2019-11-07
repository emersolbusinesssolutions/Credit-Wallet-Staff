import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  
  permission = []
  result: Result;
  firstname: any;
  lastname: any;
  email: any;
  department: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private chRef: ChangeDetectorRef,private toastr: ToastrService){

      
     }

  ngOnInit() {
  }


  createuser(){

    
    var json = {
      firstname : this.firstname,
      lastname :this.lastname,
      email : this.email,
      department : this.department,
      permission : this.permission
    }


    console.log(json);
   this.loadingBar.start();
    this.service.createadminuser(json).subscribe(
      data => {
        this.result = <Result>data;
        console.log(this.result)
        this.loadingBar.complete();
  
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this._router.navigate(['/users']);
        }
        else{
          this.toastr.success(this.result.message, '');
        }
      
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );

  }

  setPermission(evt, value){
    if(evt.target.checked == true){
      this.permission.push(value)
     }else{
      var index = this.permission.indexOf(value)
      if (index > -1) {
         this.permission.splice(index, 1);
      }
     }

  }


}
