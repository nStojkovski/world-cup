import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataFinder} from "../../datafinder";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'missingstickers.html'
})
export class MissingStickersPage {

  countries = [];
  constructor(public navCtrl: NavController, public dataFinder: DataFinder, private storage: Storage) {

    this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
      this.countries = data;
      console.log(this.countries);
    });
    //storage.set("test", "yoyoyoy");
    storage.get('test').then((val) => {
      console.log('Your age is', val);
    });
  }

}
