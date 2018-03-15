import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-choose-duplicates',
  templateUrl: 'choose-duplicates.html',
})
export class ChooseDuplicatesPage{

  countries = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.countries = navParams.get("countryJson");
    console.log(this.countries);
  }

  public toggleStickerVisible(i, j){
    this.countries[i].CountryStickers[j].visible = !this.countries[i].CountryStickers[j].visible;
    this.storage.set(this.countries[i].CountryId, this.countries[i]);}

}
