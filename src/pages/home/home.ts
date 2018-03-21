import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  items = [];
  constructor(public navCtrl: NavController) {

    console.log("vlagame");
    for (let i = 0; i < 500; i++) {
      this.items.push(i);
    }
    console.log("Items: " + this.items);

  }



}
