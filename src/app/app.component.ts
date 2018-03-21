import {Component, OnInit} from '@angular/core';
import {Events, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {HeaderColor} from "@ionic-native/header-color";
import {DataFinder} from "../datafinder";
import {CountrydetailsPage} from "../pages/countrydetails/countrydetails";
import {Storage} from '@ionic/storage';
import {MissingStickersPage} from "../pages/missingstickers/missingstickers";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  private countries = [];
  private firstAppRun = true;

  constructor(private headerColor: HeaderColor, platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen, public dataFinder: DataFinder,
              private storage: Storage, eventsControl: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#8e0406');
      splashScreen.hide();
      this.headerColor.tint("#a70507");
    });


  }
  // public openPagetest(){
  //   this.rootPage = CountrydetailsPage;
  // }
  //
  // async ngOnInit() {
  //   await this.populateCountriesList();
  //   console.log(this.countries);
  // }
  //
  // public removeSticker(i, j) {
  //   console.log("Ressdadas");
  //   this.countries[i].CountryStickers[j].missing = false;
  //   this.setDatabaseForCurrentElement(i);
  //
  // }
  //
  // private setDatabaseForCurrentElement(i){
  //   this.storage.set(this.countries[i].CountryId, this.countries[i]).then(() =>{
  //     // this.getAllStickers();
  //   });
  // }
  //
  //
  // // public detailsPage(i) {
  // //   this.navCtrl.push(CountrydetailsPage, {
  // //     countryJson: this.countries,
  // //     index: i
  // //   })
  // // }
  //
  // private populateCountriesList() {
  //   this.dataFinder.getJSONDataAsync("./assets/data/countries.json").then(data => {
  //     this.countries = data;
  //   }).then(() => {
  //     this.storage.get('appFirstRun').then((val) => {
  //       if (val != null) {
  //         this.storage.set("appFirstRun", false);
  //         for (let i = 0; i < this.countries.length; i++) {
  //           this.storage.set(this.countries[i].CountryId, this.countries[i]);
  //         }
  //       }
  //       else {
  //         for (let i = 0; i < this.countries.length; i++) {
  //           this.storage.get(this.countries[i].CountryId).then((val) => {
  //             this.countries[i] = val;
  //           });
  //         }
  //       }
  //     });
  //     this.firstAppRun = false;
  //   });
  // }
}
