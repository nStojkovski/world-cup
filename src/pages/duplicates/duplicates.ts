import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChooseDuplicatesPage} from "../choose-duplicates/choose-duplicates";
import {DataFinder} from "../../datafinder";
import {Storage} from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-duplicates',
  templateUrl: 'duplicates.html',
})
export class DuplicatesPage implements OnInit{

  countries = [];

  constructor(public navCtrl: NavController,  public dataFinder: DataFinder,  private storage: Storage) {}

  ngOnInit(): void {
    /*
     If you want to reset the database uncomment this code below
     */
    this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
      this.countries = data;
      console.log("GET JSON");
    }).then(() => {
      this.storage.get('appFirstRun').then((val) => {
        if (val == null) {
          this.storage.set("appFirstRun", false);
          for (let i = 0; i < 3; i++) {
            this.storage.set(this.countries[i].CountryId, this.countries[i]);
          }
        }
        else {
          console.log("else ");
          for (let i = 0; i < 3; i++) {
            console.log(this.countries[i]);
            this.storage.get(this.countries[i].CountryId).then((val) => {
              this.countries[i] = val;
              console.log(this.countries);
            });
          }
        }
      });
    });
  }

  private goToChooseDetailsPage(){
    this.navCtrl.push(ChooseDuplicatesPage, {
      countryJson: this.countries
    })
  }
}
