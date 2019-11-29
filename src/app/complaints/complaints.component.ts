import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as deepEqual from "deep-equal";
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  status: any;
  result: any;
  pagenumber: any = 1;
  complaints: any;
  searchtext: any = "";

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
          
    
   }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.complaints = []
      this.status = +params['id'];
      this.submit()
    });
  }

  submit(){
    var json = {
      status : this.status,
      pagenumber : this.pagenumber,
      searchtext : this.searchtext
    }
   
    this.loadingBar.start();
    this.service.listcomplaints(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        if(deepEqual(this.result.status,"success")){
          this.complaints = this.result.complaints
          console.log(this.complaints)
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
   
      },
        error => {
          console.log(error);
          this.toastr.success("Something went wrong, please try again", '');
          this.loadingBar.complete();
        }
    );
  }

  next(){
    this.pagenumber = this.pagenumber + 1
    this.submit();
  }

  previous(){
    if(this.pagenumber == 1){
      this.toastr.success("You are on the first page", '');
      return;
    }
    this.pagenumber = this.pagenumber - 1
    this.submit();
  }


  search(){
    this.pagenumber = 1;
    this.submit();
  }





}
