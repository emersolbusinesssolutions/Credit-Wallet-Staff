import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css']
})
export class LoancalculatorComponent implements OnInit {
  
  startdate
  result: any;
  amount: any;
  tenor: any;
  monthlyrepayment: any;
  calculateone: boolean;
  calculatetwo: boolean;
  constructor(private loadingBar: LoadingBarService,
    private service : AppServiceService){
      
  
      
  }

  ngOnInit() {
    
  }

  calculateFees(){
    let insurance = 0.03 * parseFloat(this.amount);
    let disbursementfees = 1250;
    return (insurance + disbursementfees)
  }


  calculator(){
    this.loadingBar.start();
    this.service.calculator({startdate: this.startdate, amount : this.amount, tenor: this.tenor}).subscribe(
      data => {
        this.calculateone = true;
        this.loadingBar.complete();
        this.result = data
        console.log(this.result)
        
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
        }
    );
  }

  calculatortwo(){
    this.loadingBar.start();
    this.service.calculatortwo({monthlyrepayment : this.monthlyrepayment, tenor: this.tenor}).subscribe(
      data => {
        this.calculatetwo = true;
        this.loadingBar.complete();
        this.result = data
        console.log(this.result)
        
      },
        error => {
          console.log(error);
          this.loadingBar.complete();
        }
    );
  }

  

}
