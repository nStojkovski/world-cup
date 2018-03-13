import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DataFinder} from "../../datafinder";
import {Storage} from '@ionic/storage';
import {CountrydetailsPage} from "../countrydetails/countrydetails";

@Component({
  selector: 'page-about',
  templateUrl: 'missingstickers.html'
})
export class MissingStickersPage implements OnInit {

  countries = [];

  constructor(public navCtrl: NavController, public dataFinder: DataFinder, private storage: Storage) {

    /*
     If you want to reset the database uncomment this code below
     */
    // this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
    //   this.countries = data;
    // });

  }

  ngOnInit() {

    // this.storage.set("appFirstRun", null);
    this.storage.get('appFirstRun').then((val) => {
      console.log("THIS IS THE VAL: " + val);
      if (val == null) {
        this.storage.set("appFirstRun", false);
        for (let i = 0; i < 3; i++) {
          this.storage.set(i.toString(), this.countries[i]);
        }
      }
      else {
        for (let i = 0; i < 3; i++) {
          this.storage.get(i.toString()).then((val) => {
            this.countries[i] = val;
          });
        }
      }
    });
    console.log(this.countries);
  }

  public removeSticker(i, j, k) {
    this.countries[i].CountryStickers[j][k].visible = false;
    this.setDatabase();
  }

  private setDatabase() {
    for (let i = 0; i < 3; i++) {
      this.storage.set(i.toString(), this.countries[i]);
    }
  }

  public detailsPage(i) {
    this.navCtrl.push(CountrydetailsPage, {
      countryJson: this.countries[i]
    })
  }

}
