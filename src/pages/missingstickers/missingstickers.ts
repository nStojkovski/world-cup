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
  // private nav;

  constructor(public navCtrl: NavController, public dataFinder: DataFinder, private storage: Storage, eventsControl: Events) {

    /*
     If you want to reset the database uncomment this code below
     */
    this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
      this.countries = data;
      console.log(this.countries);
    });
    // this.nav = this.navCtrl;
    this.navCtrl.viewDidEnter.subscribe((view) => {
      console.log(view.instance.constructor.name);
      this.getAllStickers();
    })
  }


  ionViewDidEnter(){

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
    }).then(() => {
      this.getAllStickers();
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
          // this.all.push(all);
          // this.missing.push(missing)
          console.log("missing = " + this.missing);
          console.log("all = " + this.all);
      });
    }
  }

}
