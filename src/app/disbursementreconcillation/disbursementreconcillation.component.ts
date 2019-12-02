import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'ts-xlsx'
@Component({
  selector: 'app-disbursementreconcillation',
  templateUrl: './disbursementreconcillation.component.html',
  styleUrls: ['./disbursementreconcillation.component.css']
})
export class DisbursementreconcillationComponent implements OnInit {


  id: any;
  @ViewChild('file') file: any
  @ViewChild('fileBank') fileBank: any
  @ViewChild('fileGiro') fileGiro: any
  filename: any;
  loandisk: any;
  bankfile: any;
  loandiskfilename: string;
  bankfilename: string;
  girofilename: string;
  girofile: any;
  constructor() { }

  ngOnInit() {

  }

 

  arrayBuffer:any;
  fileSelected:File;

  public onLoanPayment($event:any):void {
    this.fileSelected = $event.target.files[0];
    this.loandiskfilename = this.fileSelected.name;
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
      this.loandisk = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      console.log(this.loandisk)
    }
    fileReader.readAsArrayBuffer(this.fileSelected);
  }

  selectLoanFile(){
    this.file.nativeElement.click();
  }

  public onBankPayment($event:any):void {
    this.fileSelected = $event.target.files[0];
    this.bankfilename = this.fileSelected.name;
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
      this.bankfile = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      console.log(this.bankfile)
    }
    fileReader.readAsArrayBuffer(this.fileSelected);
  }

  selectBankFile(){
    this.fileBank.nativeElement.click();
  }

  public onGiroPayment($event:any):void {
    this.fileSelected = $event.target.files[0];
    this.girofilename = this.fileSelected.name;
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
      this.girofile = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      console.log(this.girofile)
    }
    fileReader.readAsArrayBuffer(this.fileSelected);
  }

  selectGiroFile(){
    this.fileGiro.nativeElement.click();
  }


  reconciliation = []
  girototal = 0;
  girototalsum = 0;
  banktotal = 0;
  banktotalsum = 0;
  totaldisbursement = 0;
  totaldisbursementsum = 0;

  upload(){
    $('#myModal').modal('hide'); 
    for (let index = 0; index < this.loandisk.length; ++index) {
      for (let indexgiro = 0; indexgiro < this.girofile.length; ++indexgiro) {
        if(this.loandisk[index].loanid == this.girofile[indexgiro].loanid ){
          let json = {
            loandisk : this.loandisk[index],
            giro : 1,
            bank : 0
          }
          this.girototal = this.girototal + 1;
          this.girototalsum = this.girototalsum  + this.loandisk[index].amount;
          this.reconciliation[index] = json
        }
      }

      for (let indexbank = 0; indexbank < this.bankfile.length; ++indexbank) {
        if(this.loandisk[index].loanid == this.bankfile[indexbank].loanid ){
          let json = {
            loandisk : this.loandisk[index],
            giro : 0,
            bank : 1
          }
          this.banktotal = this.banktotal + 1;
          this.banktotalsum = this.banktotalsum  + this.loandisk[index].amount;
          this.reconciliation[index] = json
        }
      }
      this.totaldisbursement = this.totaldisbursement + 1;
      this.totaldisbursementsum = this.totaldisbursementsum  + this.loandisk[index].amount;

      

    }
    console.log(this.reconciliation)
  }

}
