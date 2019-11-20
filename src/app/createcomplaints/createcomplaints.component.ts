import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-createcomplaints',
  templateUrl: './createcomplaints.component.html',
  styleUrls: ['./createcomplaints.component.css']
})
export class CreatecomplaintsComponent implements OnInit {
  type: any;
  description: any;
  result: any;
  loans: any;
  dataTable: any;
  phonenumber: any;
  customername: any;
  users: any;
  assignedto  = "0"

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private route: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
          
     
   }

  ngOnInit() {
    this.getUsers()
  }

  submit(){
    var json = {
      type : this.type,
      phonenumber : this.phonenumber,
      customersname : this.customername,
      description : this.description,
      assignedto : this.assignedto
    }

    console.log(json)

    this.loadingBar.start();
    this.service.createcomplaints(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this.route.navigate(['complaints/0'])
        }
        else{
          this.toastr.success(this.result.message, '');
          this.route.navigate(['']);
        }
   
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }

  getUsers(){
    this.loadingBar.start();
    this.service.usersall().subscribe(
      data => {
        this.result = data;
        this.users = this.result.users;
        this.loadingBar.complete();
        if(deepEqual(this.result.status,"success")){
          
        }
        else{
          this.toastr.success(this.result.message, '');
          this.route.navigate(['']);
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
