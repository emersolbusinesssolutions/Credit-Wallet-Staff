import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Result } from '../result';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import * as deepEqual from "deep-equal";

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  ListAllApplication: boolean;
  GenerateOfferLetter: boolean;
  CancelLoanApplications: boolean;
  RejectLoanApplication: boolean;
  EditLoanApplication: boolean;
  ConfirmRemita: boolean;
  ConfirmDocuments: boolean;
  MovetoAwaitingDisbursement: boolean;
  MovetoFinance: boolean;
  DisburseLoan: boolean;
  CompleteLoan: boolean;
  LoanComment: boolean;
  permission = new Array()
  result: Result;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private chRef: ChangeDetectorRef,private toastr: ToastrService){

      
     }

  ngOnInit() {
  }


  createuser(regForm:NgForm){

    if(this.ListAllApplication == true){
      this.permission.push("/loans/list")
    }

    if(this.GenerateOfferLetter == true){
      this.permission.push("/loan/offerletter")
    }

    if(this.CancelLoanApplications == true){
      this.permission.push("/loans/cancel")
    }

    if(this.RejectLoanApplication == true){
      this.permission.push("/loans/reject")
    }

    if(this.EditLoanApplication == true){
      this.permission.push("/loan/edit")
    }

    if(this.ConfirmRemita == true){
      this.permission.push("/loan/confirm/remita")
    }

    if(this.ConfirmDocuments == true){
      this.permission.push("/loan/confirm/documents")
    }

    if(this.MovetoAwaitingDisbursement == true){
      this.permission.push("/loan/payment")
    }

    if(this.DisburseLoan == true){
      this.permission.push("/loans/disburse")
    }

    if(this.CompleteLoan == true){
      this.permission.push("/loan/complete")
    }

    if(this.LoanComment == true){
      this.permission.push("/loans/comment")
    }

    var json = {
      firstname : regForm.form.value.firstname,
      lastname :regForm.form.value.lastname,
      email : regForm.form.value.email,
      department : regForm.form.value.department,
      permission : this.permission
    }


    console.log(json);
   this.loadingBar.start();
    this.service.createadminuser(json).subscribe(
      data => {
        this.result = <Result>data;
        console.log(this.result)
        this.loadingBar.complete();
  
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this._router.navigate(['/users']);
        }
        else{
          this.toastr.success(this.result.message, '');
        }
      
      },
        error => {
          console.log(error);
          this.toastr.success("Error connecting to server, please check your internet connection and try again", '');
          this.loadingBar.complete();
        }
    );

  }

  onDisburseLoan(eve){
    if(eve.target.checked == true){
      this.DisburseLoan = true
    }else{
      this.DisburseLoan = false
    }
  }

  onCompleteLoan(eve){
    if(eve.target.checked == true){
      this.CompleteLoan = true
    }else{
      this.CompleteLoan = false
    }
  }

  onLoanComment(eve){
    if(eve.target.checked == true){
      this.LoanComment = true
    }else{
      this.LoanComment = false
    }
  }


  onListAllApplication(eve){
    if(eve.target.checked == true){
      this.ListAllApplication = true
    }else{
      this.ListAllApplication = false
    }
  }


  OnGenerateOfferLetter(eve){
    if(eve.target.checked == true){
      this.GenerateOfferLetter = true
    }else{
      this.GenerateOfferLetter = false
    }
  }

  onCancelLoanApplications(eve){
    if(eve.target.checked == true){
      this.CancelLoanApplications = true
    }else{
      this.CancelLoanApplications = false
    }
  }

  onRejectLoanApplication(eve){
    if(eve.target.checked == true){
      this.RejectLoanApplication = true
    }else{
      this.RejectLoanApplication = false
    }
  }

  onEditLoanApplication(eve){
    if(eve.target.checked == true){
      this.EditLoanApplication = true
    }else{
      this.EditLoanApplication = false
    }
  }

  onConfirmRemita(eve){
    if(eve.target.checked == true){
      this.ConfirmRemita = true
    }else{
      this.ConfirmRemita = false
    }
  }

  onConfirmDocuments(eve){
    if(eve.target.checked == true){
      this.ConfirmDocuments = true
    }else{
      this.ConfirmDocuments = false
    }
  }

  onMovetoAwaitingDisbursement(eve){
    if(eve.target.checked == true){
      this.MovetoAwaitingDisbursement = true
    }else{
      this.MovetoAwaitingDisbursement = false
    }
  }

  onMovetoFinance(eve){
    if(eve.target.checked == true){
      this.MovetoFinance = true
    }else{
      this.MovetoFinance = false
    }
  }

  

}
