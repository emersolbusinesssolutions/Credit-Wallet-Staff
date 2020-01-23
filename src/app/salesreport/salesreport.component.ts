import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent implements OnInit {
  
  from;
  to;
  marketer;
  result: any;
  loans: any;
  customers: any;
  reportdata: any;
  reportdataindividal: any[];
  
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      
    
  
      
  }

  ngOnInit() {
  }


  viewTransaction(customers){
    console.log(customers)
    this.customers = customers
    document.getElementById("modaltransaction").click()
  }


  exportResult(customers, marketer){

    let marketers = "";

    if(marketer =='Ugbobuaku' ){
      marketer = "Ugbobuaku Mmesoma";
    }

    if(marketer =='Eke' ){
      marketer = "Eke Emmanuella";
    }

    if(marketer =='Nnamso' ){
      marketer = "Nnamso violet";
    }


    if(marketer =='blessing' ){
      marketer = "Blessing Ebute";
    }

    if(marketer =='Atewe' ){
      marketer = "Atewe Evans";
    }

    if(marketer =='osas' ){
      marketer = "Aganmwonyi Osas";
    }

    if(marketer =='okitika' ){
      marketer = "Okitika Mercy";
    }

    if(marketer =='akinbode' ){
      marketer = "Akinbode Kofoworola";
    }

    if(marketer =='adedoyinojo' ){
      marketer = "Adedoyin Ojo";
    }

    if(marketer =='tugboboayotunde' ){
      marketer = "Tugbobo Ayotunde";
    }
   this.reportdataindividal = []
    for (let index = 0; index < customers.length; ++index) {
      let json = {
        "S/No" : index + 1,
        "Customer Name" : customers[index].firstname + " " +  customers[index].lastname,
        "Amount" :  customers[index].loan_amount,
        "Loan Id" :  customers[index].loanid,
        "Date of Disbursement" :  customers[index].date_of_disbursement,
      }
      this.reportdataindividal[index] = json
    }

    this.service.exportAsExcelFile(this.reportdataindividal, 'Individual Report  for '+marketer);
    
   
  }

  getReport(){
    this.loadingBar.start();
   
    var params;

    if(this.marketer == undefined){
      params = {
        to: this.to, 
        from:this.from
      }
    }else{
      params = {
        to: this.to, 
        from:this.from,
        marketer : this.marketer
      }
    }

    console.log(params)

    

     this.service.salesreport(params).subscribe(
      data => {
        this.result = data;
        
        console.log(data);
        this.loadingBar.complete();
        if(this.result.status == "success"){
          this.loans = this.result.result
          this.toastr.success(this.result.message, '');
          
        }else{
          this.toastr.success(this.result.message, '');
        }
        
       
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );
  }

  exportReport(){
    this.reportdata = []
    for (let index = 0; index < this.loans.length; ++index) {

      let marketer = "";
      if(this.loans[index].marketer =='Ugbobuaku' ){
        marketer = "Ugbobuaku Mmesoma";
      }

      if(this.loans[index].marketer =='Eke' ){
        marketer = "Eke Emmanuella";
      }

      if(this.loans[index].marketer =='Nnamso' ){
        marketer = "Nnamso violet";
      }


      if(this.loans[index].marketer =='blessing' ){
        marketer = "Blessing Ebute";
      }

      if(this.loans[index].marketer =='Atewe' ){
        marketer = "Atewe Evans";
      }

      if(this.loans[index].marketer =='osas' ){
        marketer = "Aganmwonyi Osas";
      }

      if(this.loans[index].marketer =='okitika' ){
        marketer = "Okitika Mercy";
      }

      if(this.loans[index].marketer =='akinbode' ){
        marketer = "Akinbode Kofoworola";
      }

      if(this.loans[index].marketer =='adedoyinojo' ){
        marketer = "Adedoyin Ojo";
      }

      if(this.loans[index].marketer =='tugboboayotunde' ){
        marketer = "Tugbobo Ayotunde";
      }
      let json = {
        "S/No" : index + 1,
        "Marketer" : marketer,
        "Start Date" : this.from,
        "End Date" :  this.to,
        "Amount." :  this.loans[index].loanamount,
        "Commission" : 0.02 * this.loans[index].loanamount,
      }

      
      this.reportdata[index] = json

    
    }
    
    this.service.exportAsExcelFile(this.reportdata, 'Not Found Upload');

  }

}
