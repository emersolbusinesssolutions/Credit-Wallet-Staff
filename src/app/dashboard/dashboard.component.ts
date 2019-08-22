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
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService) {
      

    this.balance = this.totalsalesthismonth = this.processedorders = this.neworders = 0;
    //this.dashboarsumarry()
    this.plotGraph()
      
      
     
   }

  ngOnInit() {

  }


  // dashboarsumarry(){
  //   this.loadingBar.start();
  //   this.service.getDashboardSummary().subscribe(
  //     data => {
  //       this.result = <Result>data;
  //       this.report = this.result.report
  //       this.reportorders = this.result.reportorders
  //       console.log(this.result)
  //       if(deepEqual(this.result.status,"error")){
  //         this.toastr.success(this.result.message, '');
  //        this._router.navigate(['/']);
  //       }
  //       else{
  //         //this.plotGraph()
  //         this.processedorders = this.result.processedorders;
  //         this.balance = this.result.balance;
  //         this.neworders =  this.result.neworders;
  //         this.totalsalesthismonth =  this.result.totalsalesthismonth
  //         this.loadingBar.complete();
  //       }
  //       this.loadingBar.complete();
        
  //     },
  //       error => {
  //         console.log(error);
  //         this.loadingBar.complete();
  //         //this._router.navigate(['/']);
  //       }
  //   );
  // }


  plotGraph(){
    this.linechart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Requests Analytics'
      },
      subtitle: {
        text: 'Rejected and Processed Loans'
      },
      tooltip: {
        valueSuffix: ' Orders'
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
        categories: ["May-2018","Jun-2018", "Jul-2018", "Aug-2018","Sep-2018" ]
      }],
      
      series: [{
      
        name: "Requested", data: [1,2,3,4,5], color: '#1B4E63'
      },
      {
        name: "Processed", data: [1,2,3,4,5], color: '#700156'
      }
    ]
    });

    this.barchart = new Chart({
      chart: {
        type: 'area'
      },
      title: {
        text: 'Sales Analytics'
      },
      subtitle: {
        text: 'Total Monthly Sales'
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
        categories: ["May-2018","Jun-2018", "Jul-2018", "Aug-2018","Sep-2018" ]
      }],
      series: [{
        name: "Sales", data: [45000, 50000, 55000,60000,65000], color: '#1B4E63'
      }]
    });
   
   
  }






}
