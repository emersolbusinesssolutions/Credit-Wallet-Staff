import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as deepEqual from "deep-equal";
import { IMyDpOptions } from 'mydatepicker';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';


@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  status: any;
  @ViewChild('file') file: any

  filename : any = "Select Payment File"
  found: any;
  notfound: any;
  dd: any;
  creditalert: any;

  creditwalletcount =0;
  creditwalletamount = 0;
  creditalertcount =0;
  creditalertamount =0;
  notfoundamount = 0;
  notfoundcount = 0;
  totalamount: any;
  totalcount: any;
  savings: any;
  totalpages: any;
  dataTable: any;
  investments: any;
  result: any;
  pagenumber: any = 1;
  searchtext: any =  "";

  

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title,private chRef: ChangeDetectorRef){
      
 
  }

  ngOnInit() {

    this.router.params.subscribe(params => {   
      this.status = +params['id'];
      this.upload()
    });
  }


  upload(){
    var json = {
      status : this.status,
      pagenumber : this.pagenumber,
      searchtext : this.searchtext
    }

    console.log(json)
    this.loadingBar.start();
    this.service.listinvestment(json).subscribe(
      data => 
      {

        this.loadingBar.complete();
        console.log(data)
        this.result = data
        if(deepEqual(this.result.status,"success")){
          
          this.investments = this.result.investments
      
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
    this.upload();
 
  
}

previous(){
  if(this.pagenumber == 1){
    this.toastr.success("You are on the first page", '');
    return;
  }
    this.pagenumber = this.pagenumber - 1
    this.upload();
 
}


search(){

    this.pagenumber = 1
    this.upload();
  
}


getAmount(){

  let amount = 0;
  for (let index = 0; index < this.investments.length; ++index) {
  
    amount  = amount + parseFloat(this.investments[index].amount);
  }

  return amount;
}

getCount(){
  let number = 0;
  for (let index = 0; index < this.investments.length; ++index) {
   
    number  = number + 1;
  }
  return number;
}





}
