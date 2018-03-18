import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-countrydetails',
  templateUrl: 'countrydetails.html',
})
export class CountrydetailsPage {

  private country: any;
  countries = [];
  private i;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // this.country = navParams.get("countryJson");
    this.countries = navParams.get("countryJson");
    this.i = navParams.get("index");
  }

  public toggleStickerVisible(j){
    console.log(this.countries + " " + this.i);
    console.log(this.countries[this.i].CountryStickers[j]);
    this.countries[this.i].CountryStickers[j].visible = !this.countries[this.i].CountryStickers[j].visible;
    this.storage.set(this.countries[this.i].CountryId, this.countries[this.i]);

  }


}
