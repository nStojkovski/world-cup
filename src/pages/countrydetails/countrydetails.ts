import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-countrydetails',
  templateUrl: 'countrydetails.html',
})
export class CountrydetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   console.log(navParams.get("countryJson"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountrydetailsPage');
  }

}
