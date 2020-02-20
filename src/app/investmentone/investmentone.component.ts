import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs'; // Angular 6 
@Component({
  selector: 'app-investmentone',
  templateUrl: './investmentone.component.html',
  styleUrls: ['./investmentone.component.css']
})
export class InvestmentoneComponent implements OnInit {
  id: any;
  user: any;
  investment: any;
  duration: any;
  code: any;
  interestrate: any;
  amount: any;
  investmenttransactions: any;
  savingsproductid: any;
  savings_id: any;
  link: any;
  startdate: any;
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title, private _location: Location){
      

  
  }

  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR) + (!parts[1] ? '' : this.DECIMAL_SEPARATOR + parts[1]);
  };


  unFormat(val) {
    if (!val) {
        return '';
    }
    val = val.replace(/^0+/, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
  };

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getRecord()
   });

  }

  getRecord(){
    var json = {
      id : this.id
    }
    
    this.loadingBar.start();
    this.service.investmentone(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
         console.log(data)
         this.user = data["investmentusers"];
         this.investment = data["investment"]
         this.investmenttransactions = data["investmenttransactions"]
         if(this.user.numberofinvestment > 1){
           this.link = "https://customer.creditwallet.ng"
         }
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

  testVariable(value){
    if(value == undefined){
      return false;
    }
    if(value == ""){
      return false
    }
  
    return true;
  }


  investmentprocess() {
 
    if(this.testVariable(this.unFormat(this.amount)) == false){
      this.toastr.error('Amount is required');
      return;
    }
    var json = {
      id : this.id,
      amount : this.unFormat(this.amount),
      interestrate : this.interestrate,
      duration : this.duration,
      startdate : this.startdate
    }

    if(confirm("Are you sure you want to process investment documents for this customer?")){
      console.log(json)
      this.loadingBar.start();
      this.service.investmentprocess(json).subscribe(
        data => 
        {
          console.log(data)
          this.loadingBar.complete();
          if(data["status"] == "success"){
            console.log(data)
            $('#myModal').modal('hide');
            this.toastr.success("Successful", '');
            location.reload()
          
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


  completeInvestment(){
    var json = {
      id : this.id,
      link : this.link
    }

    if(confirm("Are you sure you want to complete the process?")){
      console.log(json)
      this.loadingBar.start();
      this.service.investmentcomplete(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            console.log(data)
            this.toastr.success("Successful", '');
            location.reload()
          
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

  confirmpayment() {
    if(this.testVariable(this.unFormat(this.amount)) == false){
      this.toastr.error('Amount is required');
      return;
    }

    if(confirm("Are you sure you want to confirm payment?")){
      var json = {
        id : this.id,
        amount : this.unFormat(this.amount),
        interestrate : this.interestrate,
        duration : this.duration,
        startdate : this.startdate
      }
  
      console.log(json)
      this.loadingBar.start();
      this.service.investmentconfirmpayment(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
           console.log(data)
           $('#myModalConfirm').modal('hide');
           this.toastr.success("Adding Investor Details", '');
           this.loandiskupload()
          
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

  processInvestmentDocument(id) {
  
    this.loadingBar.start();
    this.service.investmentprocessDocument(id).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          location.reload()
        
        }

        if(data["status"] == "err"){
          this.toastr.error(data["message"], '');
          
        }

        if(data["status"] == "error"){
          this.toastr.error(data["message"], '');
          this._router.navigate(['']);
          
        }

        
      },
      error => {
        console.log(error);
        this.toastr.error("Something went wrong", '');
        this.loadingBar.complete();
      }
    );
  }

  setLink(){
    this.link = "https://customers.creditwallet.ng"
  }


  loandiskupload() {
    var json = {
      id : this.id,
      amount :this.unFormat(this.amount),
      authid : this.user.authid,
      savingsproductid : this.savingsproductid
    }

    console.log(json)
    this.loadingBar.start();
    this.service.investmentloandiskborrower(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          console.log(data)
          this.toastr.success("Adding Investment Details", '');
          this.loandiskuploadsavings(data["borrower_id"] , data["numberofinvestment"], data["uniquenumber"])
        
        }

        if(data["status"] == "err"){
          this.toastr.error(data["message"], '');
          
        }

        if(data["status"] == "error"){
          this.toastr.error(data["message"], '');
          this._router.navigate(['']);
          
        }

        
      },
      error => {
        console.log(error);
        this.toastr.error("Something went wrong", '');
        this.loadingBar.complete();
      }
    );
  }


  loandiskuploadsavings(borrower_id,numberofinvestment,uniquenumber) {

    var json = {
      id : this.id,
      amount : this.unFormat(this.amount),
      authid : this.user.authid,
      savingsproductid : this.savingsproductid,
      borrower_id : borrower_id,
      numberofinvestment : numberofinvestment,
      uniquenumber : uniquenumber
    }

    console.log(json)
    this.loadingBar.start();
    this.service.investmentloandisksavings(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          console.log(data)
          this.toastr.success("Adding Investment Information", '');
          this.loandiskuploadtransaction(data["savings_id"])
        }

        if(data["status"] == "err"){
          this.toastr.error(data["message"], '');
          
        }

        if(data["status"] == "error"){
          this.toastr.error(data["message"], '');
          this._router.navigate(['']);
          
        }

        
      },
      error => {
        console.log(error);
        this.toastr.error("Something went wrong", '');
        this.loadingBar.complete();
      }
    );
  }


  loandiskuploadtransaction(savings_id) {

    var json = {
      id : this.id,
      amount : this.unFormat(this.amount),
      savings_id : savings_id
    }

    this.savings_id = savings_id;

    console.log(json)
    this.loadingBar.start();
    this.service.investmentloandisktransaction(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          console.log(data)
          this.toastr.success("Savings Created.", '');
          this.investmenttransactions = data["investmenttransactions"]
          
          this.multipleTransactionUpload(this.investmenttransactions)
        }

        if(data["status"] == "err"){
          this.toastr.error(data["message"], '');
          
        }

        if(data["status"] == "error"){
          this.toastr.error(data["message"], '');
          this._router.navigate(['']);
          
        }

        
      },
      error => {
        console.log(error);
        this.toastr.error("Something went wrong", '');
        this.loadingBar.complete();
      }
    );
  }

  loandiskuploadtransactions(savings_id) {

    var json = {
      id : this.id,
      savings_id : savings_id
    }

    console.log(json)
    this.loadingBar.start();
    this.service.investmentloandisktransactions(json).subscribe(
      data => 
      {
        this.loadingBar.complete();
        if(data["status"] == "success"){
          this.toastr.success("Investment upload successfully", '');
          location.reload();
        }

        if(data["status"] == "err"){
          this.toastr.error(data["message"], '');
          
        }

        if(data["status"] == "error"){
          this.toastr.error(data["message"], '');
          this._router.navigate(['']);
          
        }

        
      },
      error => {
        console.log(error);
        this.toastr.error("Something went wrong", '');
        this.loadingBar.complete();
      }
    );
  }


  multipleTransactionUpload(transactions) {
    this.toastr.success("Adding Transactions", '');
    let count = 0;
    Observable.interval(1000).subscribe(x => {
      if(count <= 11){
        this.uploadTransaction(transactions[count]);
        count++
      }else{

      }
    });
  }


  uploadTransaction(id) {


      var json = {
        id : id.id,
        savings_id : this.savings_id
      }
  
      console.log(json)
      this.loadingBar.start();
      this.service.investmentloandisktransactions(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            this.toastr.success("Transaction Added", '');
            
          }
  
          if(data["status"] == "err"){
            this.toastr.error(data["message"], '');
            
          }
  
          if(data["status"] == "error"){
            this.toastr.error(data["message"], '');
            this._router.navigate(['']);
            
          }
  
          
        },
        error => {
          console.log(error);
          this.toastr.error("Something went wrong", '');
          this.loadingBar.complete();
        }
      );
    

    
  }

  transferout(id) {

    if(confirm("Are you sure you want to transfer out from this savings?")){
      var json = {
        id : id.id,
        savings_id : this.investment.savings_id
      }
  
      console.log(json)
      this.loadingBar.start();
      this.service.transferout(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            this.toastr.success("Transaction Added", '');
            this.getRecord()
          }
  
          if(data["status"] == "err"){
            this.toastr.error(data["message"], '');
            
          }
  
          if(data["status"] == "error"){
            this.toastr.error(data["message"], '');
            this._router.navigate(['']);
            
          }
  
          
        },
        error => {
          console.log(error);
          this.toastr.error("Something went wrong", '');
          this.loadingBar.complete();
        }
      );
    }


   
  }

  cancel(){
    if(confirm("Are you sure you want to cancel this investment?")){
      var json = {
        id : this.id,
      }
  
      console.log(json)
      this.loadingBar.start();
      this.service.cancelinvestment(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            this.toastr.success("Cancellation Successful", '');
            this._location.back();
          }
  
          if(data["status"] == "err"){
            this.toastr.error(data["message"], '');
            
          }
  
          if(data["status"] == "error"){
            this.toastr.error(data["message"], '');
            this._router.navigate(['']);
            
          }
  
          
        },
        error => {
          console.log(error);
          this.toastr.error("Something went wrong", '');
          this.loadingBar.complete();
        }
      );
    }


  }

  setinterest(){
    if(this.interestrate < 2){
      this.interestrate = 2;
      alert("Interest should be between 2 to 5 percent")
    }
    if(this.interestrate > 5){
      this.interestrate = 2;
      alert("Interest should be between 2 to 5 percent")
    }

   
  }

  edit(){
    if(confirm("Are you sure you want to edit this investment?")){
    
      this.loadingBar.start();
      this.service.editinvestment(this.user).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            $('#myModalEdit').modal('hide');
            this.toastr.success("Edit Successful", '');
          }
  
          if(data["status"] == "err"){
            this.toastr.error(data["message"], '');
            
          }
  
          if(data["status"] == "error"){
            this.toastr.error(data["message"], '');
            this._router.navigate(['']);
            
          }
  
          
        },
        error => {
          console.log(error);
          this.toastr.error("Something went wrong", '');
          this.loadingBar.complete();
        }
      );
    }

  }






}
