import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MissingStickersPage} from "../pages/missingstickers/missingstickers";
import {CountryService} from "../CountryService";
import {HttpModule} from "@angular/http";
import {DataFinder} from "../datafinder";
import { IonicStorageModule } from '@ionic/storage';
import {CountrydetailsPage} from "../pages/countrydetails/countrydetails";

@NgModule({
  declarations: [
    MyApp,
    MissingStickersPage,
    ContactPage,
    HomePage,
    CountrydetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MissingStickersPage,
    ContactPage,
    CountrydetailsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountryService,
    Storage,
    DataFinder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
