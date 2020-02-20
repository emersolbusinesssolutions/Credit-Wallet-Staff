import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as XLSX from 'ts-xlsx'
import * as deepEqual from "deep-equal";
@Component({
  selector: 'app-interestpayment',
  templateUrl: './interestpayment.component.html',
  styleUrls: ['./interestpayment.component.css']
})
export class InterestpaymentComponent implements OnInit {

  id: any;
  @ViewChild('file') file: any

  filename : any = "Select Payment File"
  found: any;
  notfound: any;
  dd: any;
  invites: any
  subject: any;
  body: any;
  sender: any;
  month;
  year;

  

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
    this.upload()
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
            this.invites = param
           
        }
        fileReader.readAsArrayBuffer(this.fileSelected);

  }


  send(){



    var param = {
      invites : this.invites,
      subject : this.subject,
      month : this.month,
      year : this.year
    }

    console.log(param)

    if (confirm('Are you sure you want to send this message?')) {
      this.loadingBar.start();
      this.service.interestpaymentemail(param).subscribe(
        data => 
        {
          console.log(data)
          this.loadingBar.complete();
          if(deepEqual(data["status"],"success")){
            
            this.toastr.success("Message Sent Successfully", '');
            location.reload()
          }
          else{
            this.toastr.success("Something Went Wrong", '');
           
          }
          
         
          
        },
        error => {
          console.log(error);
          this.toastr.success("Service Related Error", '');
          this.loadingBar.complete();
        }
      );
    }
    
  }

 

}
