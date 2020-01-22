import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {AppServiceService} from '../app-service.service';
import {Result} from '../result';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Transactions } from '../transactions';
import { Chart } from 'angular-highcharts';
import * as deepEqual from "deep-equal";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  searchparams : string;
  result : Result
  report : any[]
  reportorders : any[];
  barchart; linechart;
  balance;totalsalesthismonth;processedorders;neworders
  activeloans: any;
  processing: any;
  newapplications: any;
  readyfordisbursement: any;
  awaitingdisbursement: any;
  salesreport: any;
  myDate ;
  totalcustomers: any = 0;
  loanamount: any =0;
  totalcommission: any;
  amountgotten: any;
  target: any;
  targetamount: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService) {
      
    this.myDate = new Date();
    this.balance = this.totalsalesthismonth = this.processedorders = this.neworders = 0;
    this.dashboarsumarry()

      
      
     
   }

  ngOnInit() {

  }


 dashboarsumarry(){
  this.loadingBar.start();
  this.service.dashboard()
  .subscribe( (data) => {
    this.loadingBar.complete()
   
    if(data['status'] == 'success') {
      this.processing = data["processing"]
      this.newapplications = data["newapplications"]
      this.readyfordisbursement = data["readyfordisbursement"]
      this.awaitingdisbursement = data["awaitingdisbursement"]
      this.salesreport = data["salesreport"]

      this.amountgotten = data["amountgotten"]
      this.target = data["target"]
      this.targetamount = parseFloat(this.target.target)
      console.log(this.target.target)
      this.getSalesReport()
      this.plotGraph(data["graph"])
      this.targetGraph()
    }else{

    }
  },
  (error) =>{
    this.loadingBar.complete()
    console.log(error)
    this.toastr.success('Network error. Please try again')
  }  
  )    
  }

  getAmount(loans){

    let amount = 0;
    for (let index = 0; index < loans.length; ++index) {
     
      amount  = amount + parseFloat(loans[index].loan_amount);
    }

    return amount;
  }


  getCount(loans){

    let count = 0;
    for (let index = 0; index < loans.length; ++index) {
 
      count  = count + 1;
    }

    return count;
  }

  
  getSalesReport(){

    let count = 0;
    for (let index = 0; index < this.salesreport.length; ++index) {
 
     this.totalcustomers = this.totalcustomers + this.salesreport[index].numberofloans
     this.loanamount = this.loanamount + this.salesreport[index].loanamount
  
    }

    return count;
  }


  plotGraph(data){
    this.linechart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Disbursement Chart'
      },
      subtitle: {
        text: 'Loan Disbursed for the Past 30 days'
      },
      tooltip: {
        valueSuffix: ' Loans'
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
      xAxis: {
        categories: [data[0].date, data[1].date, data[2].date, data[3].date, data[4].date, data[5].date, data[6].date, data[7].date, data[8].date, data[9].date,
        data[10].date, data[11].date, data[12].date, data[13].date, data[14].date, data[15].date, data[16].date, data[17].date, data[18].date, data[19].date,
        data[20].date, data[21].date, data[22].date, data[23].date, data[24].date, data[25].date, data[26].date, data[27].date, data[28].date, data[29].date
      ]
    },
      
      series: [{
        type: 'area',
        name: 'Date of Disbursement',
        data: [data[0].count, data[1].count, data[2].count, data[3].count, data[4].count, data[5].count, data[6].count, data[7].count, data[8].count, data[9].count,
        data[10].count, data[11].count, data[12].count, data[13].count, data[14].count, data[15].count, data[16].count, data[17].count, data[18].count, data[19].count,
        data[20].count, data[21].count, data[22].count, data[23].count, data[24].count, data[25].count, data[26].count, data[27].count, data[28].count, data[29].count],
        color: '#F0AD4E'
      }
    ]
    });

   
   
  }

  targetGraph(){
    

    let month = "";

    if(this.target.month == "10"){
      month = "October"
    }

    if(this.target.month == "11"){
      month = "November"
    }

    if(this.target.month == "12"){
      month = "December"
    }

    if(this.target.month == "01"){
      month = "January"
    }

    if(this.target.month == "02"){
      month = "February"
    }



    
    this.barchart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Target Position for ' + month + ", " + this.target.year
      },
      tooltip: {
        valueSuffix: ' Naira'
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
        categories: ["Amount"]
      }],
      series: [{
        name: "Target Amount", data: [this.targetamount], color: '#1B4E63'
      },
      {
        name: "Loan Disbursed", data: [this.amountgotten], color: '#F0AD4E'
      }
    ]
    });
  }






}
