import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-investmentreport',
  templateUrl: './investmentreport.component.html',
  styleUrls: ['./investmentreport.component.css']
})
export class InvestmentreportComponent implements OnInit {


  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
  };
  from;to;
  duration = "";
  code = "";
  referralcodes: any;
  status: any =""; 
  investments: any;
  reportdata: any[];
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      

  
  }

  ngOnInit() {
    this.loadingBar.start();
    this.service.referralcodelist().subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          this.referralcodes = data["referralcode"]
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

  getReport(){
    var json = {}
    if(this.from == undefined){
      json = {
        from : "",
        to : "",
        code : this.code,
        duration : this.duration,
        status : this.status
      }
    }
    else{
      json = {
        from : this.from.formatted,
        to : this.to.formatted,
        code : this.code,
        duration : this.duration,
        status : this.status
      }
    }

    if(this.to == undefined){
      json = {
        from : "",
        to : "",
        code : this.code,
        duration : this.duration,
        status : this.status
      }
    }
    else{
      json = {
        from : this.from.formatted,
        to : this.to.formatted,
        code : this.code,
        duration : this.duration,
        status : this.status
      }
    }
   

console.log(json)
    this.loadingBar.start();
    this.service.investmentreport(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          console.log(data)
          this.investments = data["investments"]
          console.log(this.investments)
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

  sumReport(){
    let amount = 0;
    for (let index = 0; index < this.investments.length; ++index) {
    
      amount  = amount + parseFloat(this.investments[index].amount);
    }

    return amount;
  }

  export(){

    this.reportdata = []
    for (let index = 0; index < this.investments.length; ++index) {
      let status = ""
      if(this.investments[index].status == 0){
        status = "New Application"
      }
      if(this.investments[index].status == 1){
        status = "Processing"
      }

      if(this.investments[index].status == 3){
        status = "Paid"
      }
      let json = {
        "S/No" : index + 1,
        "Status" : status,
        "Name" : this.investments[index].title+" "+this.investments[index].firstname+" "+this.investments[index].lastname,
        "Amount" :  this.investments[index].amount,
        "Duration" :  this.investments[index].duration,
        "Date Created" : this.investments[index].datecreated,
      }
      this.reportdata[index] = json
    }

    console.log(this.reportdata)
    
   this.service.exportAsExcelFile(this.reportdata, 'Investment Report');
  }

  titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence;
 }




  }