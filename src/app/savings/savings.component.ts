import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

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
  savings: any;
  totalpages: any;

  

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title){
      
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
      
  }

  ngOnInit() {
    this.loadingBar.start();
    this.service.listsavings().subscribe(
      data => 
      {
        this.loadingBar.complete();
        this.savings = data['data']
        this.totalpages = data['totalnumber']

        this.totalpages  = Math.ceil(this.totalpages / 10) * 10;
        this.totalpages = this.totalpages / 10
        console.log(this.totalpages)
      },
      error => {
        console.log(error);
        this.toastr.success("Service Related Error", '');
        this.loadingBar.complete();
      }
    );
  }


  upload(){
    
  
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }



}
