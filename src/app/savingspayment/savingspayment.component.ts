import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as XLSX from 'ts-xlsx'

@Component({
  selector: 'app-savingspayment',
  templateUrl: './savingspayment.component.html',
  styleUrls: ['./savingspayment.component.css']
})
export class SavingspaymentComponent implements OnInit {


  id: any;
  @ViewChild('file') file: any
  filename: string;
  loans;
  payment: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      
  
      
  }

  ngOnInit() {
  }

  getCount(){

  }

  getAmount(){

  }

  arrayBuffer:any;
  fileSelected:File;

  public onChangePicture($event:any):void {
    this.fileSelected = $event.target.files[0];
    this.filename = this.fileSelected.name
    this.select()
  }

  select(){
    this.file.nativeElement.click();
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
          this.service.investmentpayment(param).subscribe(
          data => 
          {
            console.log(data)
            this.loadingBar.complete();
            if(data["status"] == "success"){
              this.payment = data["result"]
            }
            
            
            
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

  upload(){
    

  }

}
