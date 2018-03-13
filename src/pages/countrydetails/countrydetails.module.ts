import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountrydetailsPage } from './countrydetails';

@NgModule({
  declarations: [
    CountrydetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CountrydetailsPage),
  ],
})
export class CountrydetailsPageModule {}
