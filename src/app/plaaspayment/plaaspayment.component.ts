import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as XLSX from 'ts-xlsx'
@Component({
  selector: 'app-plaaspayment',
  templateUrl: './plaaspayment.component.html',
  styleUrls: ['./plaaspayment.component.css']
})
export class PlaaspaymentComponent implements OnInit {

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
  loans: any;

  

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      

      
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
            this.service.getPlaasPayment(param).subscribe(
              data => 
              {
                $('#import2').modal('hide'); 
                console.log(data)
                this.loadingBar.complete();
                if(data["status"] == "success"){
                  console.log(data)
                  this.loans = data["data"]
                  console.log(this.loans)
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
        fileReader.readAsArrayBuffer(this.fileSelected);

  }


  submit(){
    this.loadingBar.start();
    this.service.authorizeplaas(this.loans).subscribe(
      data => 
      {
        $('#import2').modal('hide'); 
        console.log(data)
        this.loadingBar.complete();
        if(data["status"] == "success"){
          console.log(data)
          this.loans = data["data"]
          console.log(this.loans)
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

}
