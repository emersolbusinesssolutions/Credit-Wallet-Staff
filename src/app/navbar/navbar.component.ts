import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 firstname; lastname;
 
  constructor() {
    this.firstname = sessionStorage.getItem("firstname")
    this.lastname = sessionStorage.getItem("lastname")
   }
  ngOnInit() {
  }

}
