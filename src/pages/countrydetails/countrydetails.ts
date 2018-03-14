import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-countrydetails',
  templateUrl: 'countrydetails.html',
})
export class CountrydetailsPage {

  private countryStickers: any;
  private country: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.country = navParams.get("countryJson");
    this.countryStickers =  this.country.CountryStickers;
  }

  public toggleStickerVisible(i){
    this.countryStickers[i].visible = !this.countryStickers[i].visible;
    this.storage.set(this.country.CountryId, this.countryStickers);
    console.log(this.storage.get(this.country.CountryId));
  }

}
