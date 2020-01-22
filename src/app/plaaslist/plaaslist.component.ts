import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-plaaslist',
  templateUrl: './plaaslist.component.html',
  styleUrls: ['./plaaslist.component.css']
})
export class PlaaslistComponent implements OnInit {
  status: number;
  searchtext: any = "";
  pagenumber: any = 1;
  result: any;
  loans: any;
  _router: any;
  total: any;

  constructor(private route : ActivatedRoute,private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private router: Router,private toastr: ToastrService,private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.status = +params['id'];
      this.getLoans()
      console.log(this.status)
   });
  }

  getLoans(){

    

    var json = {
      searchtext : this.searchtext,
      status : this.status,
      pagenumber : this.pagenumber
    }
    this.loadingBar.start();
    this.service.getPlaas(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        this.loans = this.result.data
        console.log(data)
        if(deepEqual(this.result.status,"success")){
          this.total = this.result.count
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




  next(){
    this.pagenumber = this.pagenumber + 1
    this.getLoans();
  }

  previous(){
    if(this.pagenumber == 1){
      this.toastr.success("You are on the first page", '');
      return;
    }
    this.pagenumber = this.pagenumber - 1
    this.getLoans();
  }


  search(){
    this.pagenumber = 1;
    this.getLoans();
  }

  returnStart(){
    let current = (this.pagenumber - 1) * 10
    return 1 + current;
  }

  returnEnd(){


    let current  = this.pagenumber * 10
    if( current > this.result.total_size){
      return this.result.total_size;
    }

    return current;
  }


  getAmount(){

    let amount = 0;
    for (let index = 0; index < this.total.length; ++index) {
    
      amount  = amount + parseFloat(this.total[index].loan_amount);
    }

    return amount;
  }

  getCount(){
    let number = 0;
    for (let index = 0; index < this.total.length; ++index) {
     
      number  = number + 1;
    }
    return number;
  }




}
