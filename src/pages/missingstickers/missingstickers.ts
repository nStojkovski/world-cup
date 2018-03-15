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

  private countries = [];
  private allStickers = 0;
  private missingStickers = 0;

  constructor(public navCtrl: NavController, public dataFinder: DataFinder, private storage: Storage) {

    /*
     If you want to reset the database uncomment this code below
     */
    this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
      this.countries = data;
      console.log(this.countries);
    });
  }

  ngOnInit() {
    // this.storage.set("appFirstRun", null);
    this.storage.get('appFirstRun').then((val) => {
      // this.getAllStickers();
      if (val == null) {
        this.storage.set("appFirstRun", false);
        for (let i = 0; i < 3; i++) {
          this.storage.set(this.countries[i].CountryId, this.countries[i]);
        }
      }
      else {
        for (let i = 0; i < 3; i++) {
          this.storage.get(this.countries[i].CountryId).then((val) => {
            this.countries[i] = val;
          });
        }
      }
    });

  }

  public removeSticker(i, j) {
    this.countries[i].CountryStickers[j].visible = false;
    this.setDatabseForCurrentElement(i);
    // this.getAllStickers();
  }

  private setDatabseForCurrentElement(i){
    this.storage.set(this.countries[i].CountryId, this.countries[i]);
  }


  public detailsPage(i) {
    this.navCtrl.push(CountrydetailsPage, {
      countryJson: this.countries[i]
    })
  }

  private getAllStickers(){
    let missing = 0;
    let all = 0;
    for(let i=0; i<3; i++){
      this.storage.get(this.countries[i].CountryId).then(
        (value => {
          for(let j=0; j<value.CountryStickers.length; j++){
            if(value.CountryStickers[j].visible){
              missing++;
            }
            all++;
          }
        })).then(()=>{
          this.allStickers = all;
          this.missingStickers = missing;
          console.log(this.missingStickers);
      });
    }
    // console.log(missing);
    // console.log(all);
    // this.missingStickers = (this.allStickers - this.missingStickers);
  }

}
