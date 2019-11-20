import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recoveryoverview',
  templateUrl: './recoveryoverview.component.html',
  styleUrls: ['./recoveryoverview.component.css']
})
export class RecoveryoverviewComponent implements OnInit {
  barchart: any;
  loanrecovery: any;
  paid: any = 0;
  performing: any = 0;
  urgent: any = 0;
  total: any = 0;
  currentpayment: any;
  payment: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title,private chRef: ChangeDetectorRef){
      
 
      
  } 

  startWith(str){
    var n = str.startsWith("0");
    if(n != true){
      return "0"+str
    }
    return str
  }

  ngOnInit() {
    this.loadingBar.start();
    this.service.recoverylist().subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          this.loanrecovery = data["loanrecovery"]
          this.currentpayment = data["getcurrentpayment"]
          this.payment = this.currentpayment.length
          this.getStatus();
          this.targetGraph(this.paid,this.performing,this.urgent)
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

  getStatus(){


    
    for (let index = 0; index < this.loanrecovery.length; ++index) {
    

      if(this.loanrecovery[index].category == 0){
        this.urgent = this.urgent + 1;
      }

      if(this.loanrecovery[index].category == 1){
        this.performing = this.performing + 1;
      }

      if(this.loanrecovery[index].category == 2){
        this.paid = this.paid + 1;
      }

      this.total = this.paid + this.performing + this.urgent
  
    }

  }


  targetGraph(paid,performing,urgent){
    
    this.barchart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Reovery Summary for Current Month '
      },
      tooltip: {
        valueSuffix: ' Total Customers'
      },
      legend: {
        layout: 'horizontal',
        align: 'left',
        verticalAlign: 'top',
        floating: false,
        borderWidth: 0,
        shadow: false
      },
     
      credits: {
        enabled: false
      },
      xAxis: [{
        categories: ["Category"]
      }],
      series: [
        
        {
          name: "Urgent/Loss", data: [urgent], color: '#D9534F'
        },
        {
        name: "Performing", data: [performing], color: '#F0AD4E'
      },
      {
        name: "Paid", data: [paid], color: '#5CB85C'
      },
      
    ]
    });
  }


}
