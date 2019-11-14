import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recoveryview',
  templateUrl: './recoveryview.component.html',
  styleUrls: ['./recoveryview.component.css']
})
export class RecoveryviewComponent implements OnInit {
  loanrecovery: any;
  id: any;
  comment: any;
  comments: any;

  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService,
    private _router: Router,private router:ActivatedRoute,private toastr: ToastrService, private titleService: Title,private chRef: ChangeDetectorRef){
      
     
      
  }

  ngOnInit() {

    this.router.params.subscribe(params => {
      
      this.id = params['id'];
      var json = {
        id : this.id
      }
      this.loadingBar.start();
      this.service.recoveryone(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            this.loanrecovery = data["loanrecovery"]
            this.comments = data["recoverycomment"]
          }
         console.log(data)
          
        },
        error => {
          console.log(error);
          this.toastr.success("Service Related Error", '');
          this.loadingBar.complete();
        }
      );
    });

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
      this.service.recoverycomment(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            location.reload()
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

  startWith(str){
    var n = str.startsWith("0");
    if(n != true){
      return "0"+str
    }
    return str
  }
  

  solved(status){
    var json = {
      id : this.id,
      status : status
    }
    this.loadingBar.start();
      this.service.recoverysolve(json).subscribe(
        data => 
        {
          this.loadingBar.complete();
          if(data["status"] == "success"){
            location.reload()
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

}
