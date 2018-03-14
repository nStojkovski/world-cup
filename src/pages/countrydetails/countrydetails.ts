import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Country} from "../../Country";

@IonicPage()
@Component({
  selector: 'page-countrydetails',
  templateUrl: 'countrydetails.html',
})
export class CountrydetailsPage {

  country;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   console.log(navParams.get("countryJson"));
   var list =  navParams.get("countryJson").CountryStickers;
   var newList = [];
   for(var i=0; i<list.length; i++){
     newList = newList.concat(list[i]);
     console.log(list[i]);
   }
   this.country = newList;
   console.log(newList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountrydetailsPage');
  }

}
