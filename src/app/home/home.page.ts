import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imc:string="-";
  peso:string="";
  talla:string="";
  talla2:string="";
  constructor() {}
  calcular(){
    this.talla2=(parseFloat(this.talla)*parseFloat(this.talla)).toString();
    this.imc=(parseFloat(this.peso)/parseFloat(this.talla2)).toString();
    
    
  }
}
