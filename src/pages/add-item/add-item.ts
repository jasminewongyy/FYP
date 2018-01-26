import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem(){

     let newItem = {
     title: this.title,
     };
       this.view.dismiss(newItem);
     }

    //For Model
  close(){
    this.view.dismiss();
   }
}
