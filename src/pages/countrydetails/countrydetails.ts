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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.country = navParams.get("countryJson");
  }

  public toggleStickerVisible(i){
    this.country.CountryStickers[i].visible = !this.country.CountryStickers[i].visible;
    this.storage.set(this.country.CountryId, this.country);}

}
