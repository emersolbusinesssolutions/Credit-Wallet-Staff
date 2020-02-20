import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'ts-xlsx'
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
import { IMyDpOptions } from 'mydatepicker';
@Component({
  selector: 'app-autodeductions',
  templateUrl: './autodeductions.component.html',
  styleUrls: ['./autodeductions.component.css']
})
export class AutodeductionsComponent implements OnInit {
  @ViewChild('file') file: any

  filename : any = "Select Deductions File"
  deductions: any;
  result: any;
  salary: any;
  loan: any;
  authorisationCode: any;
  customerId: any;
  accountNumber: any;
  name: any;
  companyName: any;
  bankCode: any;
  nodeduction: boolean;
  tenor: any;
  startdate: any;
  amount: any;
  loanid: any;
  monthlyrepayment: any;
  deduction: any;
  reportdata: any[];
  reportdatanotfound: any[];
  exportstatus: boolean;
  searchtext: any = "";
  pagenumber: any = 1;
  data: any[];
  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    
      this.startdate = new Date()
     
  
  }

  ngOnInit() {
    //this.getDeductions()
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
            $('#import').modal('hide'); 
            this.toastr.success("Uploading Deductions, Please wait", '');
            this.autoupload(param);
        }
        fileReader.readAsArrayBuffer(this.fileSelected);

  }

  getSalaryDetails(deduction){
    this.deduction = deduction
    this.getVerification(deduction)
  }

  getDeductions(){
    this.loadingBar.start();

    var json = {
      searchtext : this.searchtext,
      pagenumber : this.pagenumber
    }
    
    this.service.autodeductionslist(json).subscribe(
      data => {
        this.result = data;
        console.log(data)
          this.deductions = this.result.deductions
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
  }


  getVerification(deduction){ 

    var json = {
      telephone : deduction.telephone
    }

    this.loadingBar.start();
    this.service.deductionsinitiate(json).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){

   
          this.salary = this.result.response.salary;
          this.loan = this.result.response.loan;
       
          if(deepEqual(this.result.response.customerId,null)){

            
          }else{
            this.nodeduction = true
          }


          


          this.authorisationCode = this.result.response.authorisationCode;
          this.customerId = this.result.response.customerId;
          this.accountNumber = this.result.response.accountNumber;
          this.name = this.result.response.name;
          this.companyName = this.result.response.companyName;
          this.bankCode = this.result.response.bankCode;
          this.loanid = deduction.loanid
          this.monthlyrepayment = deduction.monthlyrepayment
          document.getElementById("opensalarymodal").click()

        }
        else if(deepEqual(this.result.status,"err")){
          this.toastr.success(this.result.message, '');
        }
        else{
          this._router.navigate(['/racks']);
          this.toastr.success(this.result.message, '');
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

  notfound = [];
  found = []
  processDeductions(params){
    this.loadingBar.start();
    
    this.service.autodeduction(params).subscribe(
      data => {
        this.result = data;
        console.log(data)
        for (let index = 0; index < this.result.length; ++index) {
          this.exportstatus = true;
          if(this.result[index].returnstatus == false){
            this.notfound.push(this.result[index].data)
          }else{
            this.found.push(this.result[index].data)
          }
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
  }

  uploadMissedPayment(){
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
        this.service.missedpaymentupload(param).subscribe(
          data => 
          {
            if(data["status"] == "success"){
              this.exportPaymentFile(data["result"])
            }else{

            }
            this.loadingBar.complete();
            $('#import2').modal('hide'); 
            
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

  exportPaymentFile(result){

  
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: false,
      useBom: true,
      headers: ["loanid", "amountdue", "telephone"]
    };


    this.data = []
    for (let index = 0; index < result.length; ++index) {
     
      let json = {
        loanid : result[index].loanid,
        amountdue : result[index].amount,
        telephone : result[index].telephone
      }
      this.data[index] = json
    }

    this.service.exportAsExcelFile(this.data, 'Payment File');
  }


autoupload(params){
    this.loadingBar.start();
    
    this.service.autodeduction(params).subscribe(
      data => {
        this.result = data;
        this.found = []
        this.notfound = []
        for (let index = 0; index < this.result.length; ++index) {
    
          if(this.result[index].returnstatus == false){
            this.exportstatus = true;
            this.notfound.push(this.result[index].data)
          }else{
            this.exportstatus = true;
            this.found.push(this.result[index].data)
          }
          
        }
        console.log(this.notfound)
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
  }

  export(){
    this.reportdatanotfound = []
    this.reportdata = []
    for (let index = 0; index < this.result.length; ++index) {


      if(this.result[index].returnstatus == false){

        let json = {
          "Status" : "Failed Deduction",
          "Loan Id" : this.result[index].data.loanid,
          "Amount" :  this.result[index].data.amountdue,
          "RSP Linked No." :  this.result[index].data.telephone,
          "Date of Upload" : this.startdate,
        }
        this.reportdatanotfound[index] = json
      }else{
        let json = {
          "Status" : "Successful Deduction",
          "Loan Id" : this.result[index].data.loanid,
          "Amount" :  this.result[index].data.amountdue,
          "RSP Linked No." :  this.result[index].data.telephone,
          "Date of Upload" : this.startdate,
        }
        this.reportdata[index] = json
      }
      
    }
   

   this.service.exportAsExcelFile(this.reportdata, 'Found Upload');
   this.service.exportAsExcelFile(this.reportdatanotfound, 'Not Found Upload');
  }


  setUpDeductions(){

    var json = {
      loanid : this.loanid,
      telephone : this.deduction.telephone,
      authorisationCode : this.authorisationCode,
      customerId : this.customerId,
      accountNumber : this.accountNumber,
      bankCode : this.bankCode,
      amount : this.monthlyrepayment
    }

    console.log(json)


    /*


    console.log(json);

    this.loadingBar.start();
    
    this.service.deductionsstart(json).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
  
        if(deepEqual(this.result.status,"success")){
          $('#onetime').modal('hide');
          this.toastr.success("Successful", '');
          
        }
        else if(deepEqual(this.result.status,"err")){
          this.toastr.success(this.result.message, '');
        }
        else{
        
          this.toastr.success(this.result.message, '');
        }
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
    */

  }


  setUpDeductionsRecurring(deduction){
    var json = {
      loanid : deduction.loanid,
      telephone : deduction.telephone,
      authorisationCode : this.authorisationCode,
      customerId : this.customerId,
      accountNumber : this.accountNumber,
      bankCode : this.bankCode,
      amount : this.amount,
      tenor : this.tenor,
      startdate : this.startdate
    }


    console.log(json)

    this.loadingBar.start();
    
    this.service.deductionsstartrecurring(json).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
       
  
        if(deepEqual(this.result.status,"success")){
          $('#recurring').modal('hide');
          this.toastr.success("Successful", '');
          
        }
        else if(deepEqual(this.result.status,"err")){
          this.toastr.success(this.result.message, '');
        }
        else{
        
          this.toastr.success(this.result.message, '');
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


  



}
