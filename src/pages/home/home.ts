import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {GrowthTrackerPage} from '../growth-tracker/growth-tracker';
import {CalendarPage} from '../calendar/calendar';
import {CareGuidePage} from '../care-guide/care-guide';
import {OrientationPage} from '../orientation/orientation';
import {DiaryPage} from '../diary/diary';
import {SettingsPage} from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  
  constructor(public navCtrl: NavController) {
    
  }

  goToGrowthTracker() {
    this.navCtrl.push(GrowthTrackerPage);
  }
  goToCalendar() {
    this.navCtrl.push(CalendarPage);
  }
  goToCareGuide() {
    this.navCtrl.push(CareGuidePage);
  }

  goToOrientation() {
    this.navCtrl.push(OrientationPage);
  }
  goToDiary() {
    this.navCtrl.push(DiaryPage);
  }
  goToSettings() {
    this.navCtrl.push(SettingsPage);
  }
}
