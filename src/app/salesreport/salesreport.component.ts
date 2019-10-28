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

}
