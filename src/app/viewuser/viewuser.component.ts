import { Component, OnInit } from '@angular/core';
import * as deepEqual from "deep-equal";
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  

  permission = []
  id: any;
  result: any;
  user: any;
  existingpermissions: any ;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){ 
    this.id = this.router.snapshot.params['id'];
    this.getuser()
    
  }


  ngOnInit() {
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

  getPermissions(){

    for (let index = 0; index < this.existingpermissions.length; ++index) {
    
      this.permission[index] = this.existingpermissions[index].path;
    }
  }
  
  saveChanges(){
    console.log(this.permission)
  }

  getStatus(value){
    return this.permission.includes(value);
  }



  getuser(){

    var json = {
      id : this.id
    }

    console.log(json);
    this.loadingBar.start();
    this.service.listoneuser(json).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
        this.loadingBar.complete();
  
        if(deepEqual(this.result.status,"success")){
          this.user = this.result.user
          this.existingpermissions = this.result.permissions
          this.getPermissions()
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


  savechanges(){
   this.user.permission = this.permission;
   this.loadingBar.start();
    this.service.editadminuser(this.user).subscribe(
      data => {
        this.result = data;
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




}
