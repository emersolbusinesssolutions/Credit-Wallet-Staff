import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.css']
})
export class RefundsComponent implements OnInit {
  status: any;
  result: any;
  refunds: any;
  searchtext: any = "";
  pagenumber: any = 1;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.status = params['id'];
      this.getRecord()
   });
   
  
  }


  getRecord(){
    var json = {
      status : this.status,
      searchtext : this.searchtext,
      pagenumber : this.pagenumber
    }

    console.log(json)
    this.loadingBar.start();
    this.service.refundlist(json).subscribe(
      data => 
      {

        this.loadingBar.complete();
        console.log(data)
        this.result = data
        if(deepEqual(this.result.status,"success")){
          
          this.refunds = this.result.refunds
      
        }
        else{
          this.toastr.success(this.result.message, '');
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

  next(){
  
    this.pagenumber = this.pagenumber + 1
    this.getRecord()
 
  
}

previous(){
  if(this.pagenumber == 1){
    this.toastr.success("You are on the first page", '');
    return;
  }
    this.pagenumber = this.pagenumber - 1
    this.getRecord()
 
}


search(){

    this.pagenumber = 1
    this.getRecord()
  
}

}
