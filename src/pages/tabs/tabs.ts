import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {MissingStickersPage} from "../missingstickers/missingstickers";
import {DuplicatesPage} from "../duplicates/duplicates";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MissingStickersPage;
  tab3Root = DuplicatesPage;

  constructor() {

  }
}
