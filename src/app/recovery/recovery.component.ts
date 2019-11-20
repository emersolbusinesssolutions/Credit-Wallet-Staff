import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import * as XLSX from 'ts-xlsx'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  id: any;
  @ViewChild('file') file: any

  filename : any = "Select Payment File"
  found: any;
  dataTable :any;
  notfound: any;
  loanrecovery: any;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title,private chRef: ChangeDetectorRef){
      
 
      
  }

  startWith(str){
    var n = str.startsWith("0");
    if(n != true){
      return "0"+str
    }
    return str
  }

  ngOnInit() {

    this.loadingBar.start();
            this.service.recoverylist().subscribe(
              data => 
              {
                this.loadingBar.complete();
                if(data["status"] == "success"){
                  this.loanrecovery = data["loanrecovery"]
                  this.chRef.detectChanges();
                  const table: any = $('table');
                  this.dataTable = table.DataTable();
                }else{
                  this.toastr.success(data["message"], '');
                  this._router.navigate(['']);
                }
               console.log(data)
                
              },
              error => {
                console.log(error);
                this.toastr.success("Service Related Error", '');
                this.loadingBar.complete();
              }
            );
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
            this.service.recoveryupload(param).subscribe(
              data => 
              {
                this.loadingBar.complete();
                $('#import').modal('hide'); 
                location.reload()
                
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
