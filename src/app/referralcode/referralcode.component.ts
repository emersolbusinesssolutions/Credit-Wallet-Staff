import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-referralcode',
  templateUrl: './referralcode.component.html',
  styleUrls: ['./referralcode.component.css']
})
export class ReferralcodeComponent implements OnInit {
  referralcodes;
  dataTable: any;
  code: any;
  description: any;
  interest: any;
  name: any;
  optionMessage = "Create Referral Code"
  buttonMessage = "Create"
  buttonStatus = "0";
  id: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title,private chRef: ChangeDetectorRef){
      
 
      
  } 



  ngOnInit() {
    this.loadingBar.start();
    this.service.referralcodelist().subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          this.referralcodes = data["referralcode"]
          this.chRef.detectChanges();
          const table: any = $('table');
          this.dataTable = table.DataTable();
        }else{
          this.toastr.success(data["message"], '');
          this._router.navigate(['']);
        }
        
      },
      error => {
        console.log(error);
        this.toastr.success("Service Related Error", '');
        this.loadingBar.complete();
      }
    );
  }

  create(){
    var json = {
      code : this.code,
      description : this.description,
      interest : this.interest,
      name : this.name,
    }
    this.loadingBar.start();
    this.service.referralcodecreate(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          this.toastr.success(data["message"], '');
          location.reload()
        }else{
          this.toastr.success(data["message"], '');
          this._router.navigate(['']);
        }
        
      },
      error => {
        console.log(error);
        this.toastr.success("Service Related Error", '');
        this.loadingBar.complete();
      }
    );
  }

  edit(referralcode){
    this.optionMessage = "Edit Referral Code"
    this.buttonStatus = "1";
    this.buttonMessage = "Edit"
    document.getElementById("modalButton").click()
    this.name = referralcode.name
    this.description = referralcode.description
    this.interest = referralcode.interest
    this.code = referralcode.code
    this.id = referralcode.id
    console.log(referralcode)
  }

  editprocess(){
    var json = {
      code : this.code,
      description : this.description,
      interest : this.interest,
      name : this.name,
      id : this.id
    }
    this.loadingBar.start();
    this.service.referralcodeedit(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          this.toastr.success(data["message"], '');
          location.reload()
        }else{
          this.toastr.success(data["message"], '');
          this._router.navigate(['']);
        }
        
      },
      error => {
        console.log(error);
        this.toastr.success("Service Related Error", '');
        this.loadingBar.complete();
      }
    );
  }

  delete(param){
    if(confirm("Are you sure you want to delete this referral code?")){
      this.loadingBar.start();
      this.service.referralcodedelete(param).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            this.toastr.success(data["message"], '');
            location.reload()
          }else{
            this.toastr.success(data["message"], '');
            this._router.navigate(['']);
          }
          
        },
        error => {
          console.log(error);
          this.toastr.success("Service Related Error", '');
          this.loadingBar.complete();
        }
      );
    }
    
  }


}
