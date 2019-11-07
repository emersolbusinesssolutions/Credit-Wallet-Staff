import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as deepEqual from "deep-equal";
@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrls: ['./viewcomplaints.component.css']
})
export class ViewcomplaintsComponent implements OnInit {
  id: any;
  result: any;
  complaints: any;
  comment: any;
  comments: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService,private chRef: ChangeDetectorRef) {
          
     
   }

   ngOnInit() {

    this.router.params.subscribe(params => {
      
      this.id = params['id'];
      this.submit()
    });
  }

  submit(){
    var json = {
      id : this.id
    }
   
    this.loadingBar.start();
    this.service.onecomplaints(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        if(deepEqual(this.result.status,"success")){
          this.complaints = this.result.complaints
          this.comments = this.result.comment
          console.log(this.result)
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
   
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }

  solved(){
    var json = {
      id : this.id
    }
   
    this.loadingBar.start();

    this.service.solvecomplaints(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          this.submit()
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
   
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }


  addcomment(){
    var json = {
      id : this.id,
      comment : this.comment
    }
   
    this.loadingBar.start();
    this.service.addcomplaints(json).subscribe(
      data => {
        this.loadingBar.complete();
        this.result = data;
        if(deepEqual(this.result.status,"success")){
          this.toastr.success(this.result.message, '');
          location.reload()
        }
        else{
          this.toastr.success(this.result.message, '');
          this._router.navigate(['']);
        }
   
      },
        error => {
          console.log(error);
          this.toastr.success(error, '');
          this.loadingBar.complete();
        }
    );
  }



}
