import { Component, OnInit } from '@angular/core';
import { formula } from '../formula/formula';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  valor1=0;
  result=0;
  Calcular(){
    let rest = 0 ;
    let form:formula=new formula();
    rest = form.calcular(this.valor1);
    this.result=rest;
    
  }


}
