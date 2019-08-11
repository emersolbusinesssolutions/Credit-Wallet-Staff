import { Component, Injectable } from '@angular/core';
import {AppServiceService} from './app-service.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>',
})

@Injectable()
export class AppComponent {
  
 

  
}
