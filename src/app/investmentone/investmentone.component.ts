import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-investmentone',
  templateUrl: './investmentone.component.html',
  styleUrls: ['./investmentone.component.css']
})
export class InvestmentoneComponent implements OnInit {
  id: any;
  user: any;
  investment: any;
  duration: any;
  code: any;
  interestrate: any;
  amount: any;
  investmenttransactions: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
  
  }

  ngOnInit() {
    var json = {
      id : this.id
    }
    this.loadingBar.start();
    this.service.investmentone(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
         console.log(data)
         this.user = data["investmentusers"];
         this.investment = data["investment"]
         this.investmenttransactions = data["investmenttransactions"]
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


  investmentprocess() {
    var json = {
      id : this.id,
      amount : this.amount,
      interestrate : this.interestrate,
      duration : this.duration

    }

    console.log(json)
    this.loadingBar.start();
    this.service.investmentprocess(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
         console.log(data)
        
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

  confirmpayment() {
    var json = {
      id : this.id
    }

    console.log(json)
    this.loadingBar.start();
    this.service.investmentconfirm(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
         console.log(data)
        
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
