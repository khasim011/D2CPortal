import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/httprequest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<any>;
  constructor(private APIRequest: HttpService) { }
  ngOnInit() {
  	this.APIRequest.getUsers()
  	.subscribe(res => this.users = res);
  }

}
