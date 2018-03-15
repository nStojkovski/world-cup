import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DuplicatesPage } from './duplicates';

@NgModule({
  declarations: [
    DuplicatesPage,
  ],
  imports: [
    IonicPageModule.forChild(DuplicatesPage),
  ],
})
export class DuplicatesPageModule {}
