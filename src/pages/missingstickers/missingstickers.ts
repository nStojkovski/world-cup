import {Component, OnInit} from '@angular/core';
import {Events, NavController} from 'ionic-angular';
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
  private missing = [];
  private all = [];
  private firstAppRun = true;

  constructor(public navCtrl: NavController, public dataFinder: DataFinder, private storage: Storage, eventsControl: Events) {}


  ionViewDidEnter(){
    console.log(this.firstAppRun);
    if(!this.firstAppRun){
      this.getAllStickers();
    }
  }

 async ngOnInit() {
   this.populateCountriesList();
  }



  private populateCountriesList(){
    this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
      this.countries = data;
    }).then(() => {
      this.storage.get('appFirstRun').then((val) => {
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
      }).then(() => {
        this.getAllStickers();
      });
      this.firstAppRun = false;
    });
  }

  public removeSticker(i, j) {
    this.countries[i].CountryStickers[j].visible = false;
    this.setDatabaseForCurrentElement(i);

  }

  private setDatabaseForCurrentElement(i){
    this.storage.set(this.countries[i].CountryId, this.countries[i]).then(() =>{
      this.getAllStickers();
    });
  }


  public detailsPage(i) {
    this.navCtrl.push(CountrydetailsPage, {
      countryJson: this.countries,
      index: i
    })
  }

  private getAllStickers(){
    let missing = 0;
    let all = 0;
    let missingPerCountry = 0;
    let allPerCountry = 0;
    this.all = [];
    this.missing = [];
    for(let i=0; i<3; i++){
      this.storage.get(this.countries[i].CountryId).then(
        (value => {
          missingPerCountry = 0;
          allPerCountry = value.CountryStickers.length;
          for(let j=0; j<value.CountryStickers.length; j++){
            if(value.CountryStickers[j].visible){
              missingPerCountry++;
            }
          }
          missing += missingPerCountry;
          all += allPerCountry;

          this.all.push(allPerCountry);
          this.missing.push(missingPerCountry);
        })).then(()=>{
          this.allStickers = all;
          this.missingStickers = missing;
      });
    }
  }

}
