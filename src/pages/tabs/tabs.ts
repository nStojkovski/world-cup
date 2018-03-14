import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {MissingStickersPage} from "../missingstickers/missingstickers";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MissingStickersPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
