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
  constructor( private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router:Router,protected storage: AsyncLocalStorage, private route:ActivatedRoute,private toastr: ToastrService) {
    

     
  
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
            this.deductions = param
            $('#import').modal('hide'); 
        }
        fileReader.readAsArrayBuffer(this.fileSelected);

  }

  getSalaryDetails(deduction){
    this.deduction = deduction
    this.getVerification(deduction)
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
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
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
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );
  }


  



}
