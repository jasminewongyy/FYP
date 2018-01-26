import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Main f(x)
import {GrowthTrackerPage} from '../growth-tracker/growth-tracker';
import {CalendarPage} from '../calendar/calendar';
import {CareGuidePage} from '../care-guide/care-guide';
import {OrientationPage} from '../orientation/orientation';
import {DiaryPage} from '../diary/diary';
import {SettingsPage} from '../settings/settings';
import {GetStartedPage} from '../get-started/get-started';

//Child f(x)
import { AddItemPage } from '../add-item/add-item';


import {Storage} from '@ionic/storage';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
public items = [];

  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController) {

  }

  //1 time code at startup
  ionViewDidLoad() {
      this.storage.get('key').then((data) => {
      this.items.push(data);
    })
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
  goToGetStarted() {
    this.navCtrl.push(GetStartedPage);
  }

  StorageSet() {
    this.storage.set('name','MEEEE');
    console.log('name is set');
    console.log(name)
  }

  StorageGet() {
    this.storage.get('name').then((data) => {
      console.log ('your name is ', data);
    });
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if(item){
          this.saveItem(item);
          }

        });
      addModal.present();
  }

  saveItem(item){
       //this.items.push(item);
       this.storage.set('key',item)
       this.storage.get('key').then((data) => {
         //Shortcut way
         this.items.push(data);
         //better way is to display data via Handler "=>" to display in HTML
       })
  }

}
