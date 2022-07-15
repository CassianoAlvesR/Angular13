import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onemit-eventos',
  templateUrl: './onemit-eventos.component.html',
  styleUrls: ['./onemit-eventos.component.css']
})
export class OnemitEventosComponent implements OnInit {

  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
  //  this.myNumber =  this.myNumber+1;
  this.myNumber =  Math.floor(Math.random() * 100);  
  }

}
