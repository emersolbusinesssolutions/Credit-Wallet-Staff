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

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
          
     
   }

  ngOnInit() {
  }

  submit(){
    var json = {
      type : this.type,
      phonenumber : this.phonenumber,
      customersname : this.customername,
      description : this.description
    }
   
    this.loadingBar.start();
    this.service.createcomplaints(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this._router.navigate(['/complaints']);
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

}
