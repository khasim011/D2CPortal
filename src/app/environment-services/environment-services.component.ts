import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-environment-services',
  templateUrl: './environment-services.component.html',
  styleUrls: ['./environment-services.component.css']
})
export class EnvironmentServicesComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  RedirectTo(url){
  	window.open(url);
  }

  goBack(){
  	this._location.back();
  }
}
