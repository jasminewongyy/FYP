import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Alert Prompt
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the GrowthTrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-growth-tracker',
  templateUrl: 'growth-tracker.html',
})
export class GrowthTrackerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrowthTrackerPage');
  }


  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Save your baby's information ",
      inputs: [
        {
          name: 'value',
          placeholder: 'eg. 1,2,3',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            if (1 == 1) {
              // logged in!
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();

}
}