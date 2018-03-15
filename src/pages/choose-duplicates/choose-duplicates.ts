import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataFinder} from "../../datafinder";

@IonicPage()
@Component({
  selector: 'page-choose-duplicates',
  templateUrl: 'choose-duplicates.html',
})
export class ChooseDuplicatesPage implements OnInit{

  countries = [];

  constructor(public navCtrl: NavController,  public dataFinder: DataFinder,  private storage: Storage) {

    /*
     If you want to reset the database uncomment this code below
     */
    this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
      this.countries = data;
    });

  }

  ngOnInit(): void {

    this.storage.set("appFirstRun", null);
    this.storage.get('appFirstRun').then((val) => {
      if (val == null) {
        this.storage.set("appFirstRun", false);
        for (let i = 0; i < 3; i++) {
          this.storage.set(this.countries[i].CountryId, this.countries[i]);
        }
      }
      else {
        for (let i = 0; i < 3; i++) {
          console.log(this.countries[i])
          this.storage.get(this.countries[i].CountryId).then((val) => {
            this.countries[i] = val;
            console.log(this.countries);
          });
        }
      }
    });
  }

  public toggleStickerVisible(i, j){
    this.countries[i].CountryStickers[j].isDuplicate = !this.countries[i].CountryStickers[j].isDuplicate;
    this.storage.set(this.countries[i].CountryStickers[j].CountryId, this.countries[i]);
    console.log(this.countries[i].CountryStickers[j].isDuplicate);
  }

}
