import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as deepEqual from "deep-equal";
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import * as XLSX from 'ts-xlsx'

@Component({
  selector: 'app-deductionspaid',
  templateUrl: './deductionspaid.component.html',
  styleUrls: ['./deductionspaid.component.css']
})
export class DeductionspaidComponent implements OnInit {

  result: any;
  deductions: any;
  dataTable :any;
  @ViewChild('file') file: any

  filename : any = "Select Payment File"
  results: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) { }

  ngOnInit() {

    this.loadingBar.start();
    this.service.getdeductionspaid().subscribe(
      data => {
        this.result = data
        this.deductions = data.data
        console.log(this.result)
        this.loadingBar.complete();
        this.chRef.detectChanges();
        const table: any = $('#result');
        this.dataTable = table.DataTable();
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );

    //deductions/all
  }

  confirmPayment(deduction){
    this.loadingBar.start();

    var json = {
      id : deduction.id
    }
    this.service.confirmpayment(json).subscribe(
      data => {
        this.result = data
        this.toastr.success(this.result.message, '');
        this.loadingBar.complete();
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
          this.toastr.error("Network Error, please try again", '');
        }
    );
  }


  export(){
    this.service.exportAsExcelFile(this.deductions, 'Paid Deductions');
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
            this.service.uploadpayment(param).subscribe(
              data => 
              {
                $('#import').modal('hide'); 
                console.log(data)
                this.result = <Result>data;
                this.results =  this.result.result
                this.toastr.success(this.result.message, '');
                this.loadingBar.complete();
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

}
