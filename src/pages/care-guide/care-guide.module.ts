import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CareGuidePage } from './care-guide';


@NgModule({
  declarations: [
    CareGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(CareGuidePage),
  ],
})
export class CareGuidePageModule {}
