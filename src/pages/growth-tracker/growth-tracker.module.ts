import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrowthTrackerPage } from './growth-tracker';


@NgModule({
  declarations: [
    GrowthTrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(GrowthTrackerPage),
  ],
})
export class GrowthTrackerPageModule {}
