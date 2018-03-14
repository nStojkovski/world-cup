import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataFinder} from "../../datafinder";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  countries  = [];
  constructor(public navCtrl: NavController,  public dataFinder: DataFinder) {


  }

}
