import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import * as XLSX from 'ts-xlsx'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  id: any;
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

  

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
      
  }

  ngOnInit() {

  }

  arrayBuffer:any;
  fileSelected:File;

  public onChangePicture($event:any):void {
    this.fileSelected = $event.target.files[0];
    this.filename = this.fileSelected.name
  }

  select(){
    this.file.nativeElement.click();
  }

  upload(){
    let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var param = XLSX.utils.sheet_to_json(worksheet,{raw:true});
            console.log(param)
            this.loadingBar.start();
            this.service.deductionsbulk(param).subscribe(
              data => 
              {
                this.loadingBar.complete();
                $('#import').modal('hide'); 
                this.found = data["found"]
                this.notfound = data["notfound"]
                this.creditalert = data["creditalert"]
                for (let index = 0; index < this.creditalert.length; ++index) {
                  this.creditalertamount = this.creditalertamount + this.creditalert[index].received;
                  this.creditalertcount = this.creditalertcount + 1;
                }

                for (let index = 0; index < this.found.length; ++index) {
                  this.creditwalletamount= this.creditwalletamount + this.found[index].received;
                  this.creditwalletcount = this.creditwalletcount + 1;
                }

                for (let index = 0; index < this.notfound.length; ++index) {
                  this.notfoundamount = this.notfoundamount + this.notfound[index].received;
                  this.notfoundcount= this.notfoundcount + 1;
                }

                this.totalamount = this.notfoundamount + this.creditwalletamount + this.creditalertamount;
                this.totalcount = this.creditalertcount + this.creditwalletcount + this.notfoundcount;

                console.log(this.totalamount)
                
              },
              error => {
                console.log(error);
                this.toastr.success("Service Related Error", '');
                this.loadingBar.complete();
              }
            );
        }
        fileReader.readAsArrayBuffer(this.fileSelected);

  }

  mm : any
  data : any
  export(){

  var today = new Date(); 
  this.dd = today.getDate(); 
  this.mm = today.getMonth() + 1; 

  var yyyy = today.getFullYear(); 
  if (this.dd < 10) { 
      this.dd = '0' + this.dd; 
  } 
  if (this.mm < 10) { 
      this.mm = '0' + this.mm; 
  } 
  var collectiondate = this.dd + '/' + this.mm + '/' + yyyy; 
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: false,
      useBom: true,
      headers: ["Loan #", "Amount", "Method", "Collection Date", "Collection By","Description","IPPIS NO","Mandate Reference"]
    };


    this.data = []
    for (let index = 0; index < this.found.length; ++index) {
      let ippisnumber = ""
      if(this.found[index].loan != null ){
        ippisnumber = this.found[index].loan.ippisnumber
      }
      let json = {
        loanid : this.found[index].loanid,
        amount : this.found[index].received,
        method : "Remita Salary Platform (RSP)",
        date  : this.found[index].date,
        by : "Remita Bacs Payment (RSP)",
        description : "Part Loan Repayment",
        ippisno : ippisnumber,
        mandatereference : this.found[index].mandatereference
      }
      this.data[index] = json
    }

    new Angular5Csv(this.data, "Repayment File" + today, options);
  }

  exportcreditalert(){

    var today = new Date(); 
    this.dd = today.getDate(); 
    this.mm = today.getMonth() + 1; 
  
    var yyyy = today.getFullYear(); 
    if (this.dd < 10) { 
        this.dd = '0' + this.dd; 
    } 
    if (this.mm < 10) { 
        this.mm = '0' + this.mm; 
    } 
    var collectiondate = this.dd + '/' + this.mm + '/' + yyyy; 
      var options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true, 
        showTitle: false,
        useBom: true,
        headers: ["Loan #", "Amount", "Method", "Collection Date", "Collection By","Description","Mandate Reference"]
      };
  
  
      this.data = []
      for (let index = 0; index < this.creditalert.length; ++index) {
      
        let json = {
          loanid : this.creditalert[index].loanid,
          amount : this.creditalert[index].received,
          method : "Remita Salary Platform (RSP)",
          date  : this.creditalert[index].date,
          by : "Remita Bacs Payment (RSP)",
          description : "Part Loan Repayment",
          mandatereference : this.creditalert[index].mandatereference
        }
        this.data[index] = json
      }
  
      new Angular5Csv(this.data, "Repayment File For Credit Alert" + today, options);
    }





  

}
