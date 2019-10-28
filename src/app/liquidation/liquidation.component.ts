import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-liquidation',
  templateUrl: './liquidation.component.html',
  styleUrls: ['./liquidation.component.css']
})
export class LiquidationComponent implements OnInit {
  

  loanreleaseddate;
  proposedliquidationdate;
  totalpaid;
  loanamount: number;
  balance: any;

  constructor() { }

  ngOnInit() {
  }

  send(){
    const date1 = new Date(this.loanreleaseddate);
    const date2 = new Date(this.proposedliquidationdate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let adminfees = (0.03 * this.loanamount) + 1250;
    let marketingcharge = 0.02 * this.loanamount;
    let totalvalue =0.004 * diffDays * this.loanamount
    totalvalue  = totalvalue + this.loanamount  + adminfees  + marketingcharge
    this.balance = totalvalue - this.totalpaid
  }

}
