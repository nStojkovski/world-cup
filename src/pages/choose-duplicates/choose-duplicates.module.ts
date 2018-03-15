import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseDuplicatesPage } from './choose-duplicates';

@NgModule({
  declarations: [
    ChooseDuplicatesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseDuplicatesPage),
  ],
})
export class ChooseDuplicatesPageModule {}
