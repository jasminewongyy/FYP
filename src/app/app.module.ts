import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Storage
import { IonicStorageModule } from '@ionic/storage'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Main f(x)
import {GrowthTrackerPage} from '../pages/growth-tracker/growth-tracker';
import {CalendarPage} from '../pages/calendar/calendar';
import {CareGuidePage} from '../pages/care-guide/care-guide';
import {OrientationPage} from '../pages/orientation/orientation';
import {DiaryPage} from '../pages/diary/diary';
import {SettingsPage} from '../pages/settings/settings';
import {GetStartedPage} from '../pages/get-started/get-started';

//Child of Main f(x)
import { AddItemPage } from '../pages/add-item/add-item';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //Main f(x)
    GrowthTrackerPage,
    CalendarPage,
    CareGuidePage,
    OrientationPage,
    DiaryPage,
    SettingsPage,
    GetStartedPage,
    //Child of Main f(x)
    AddItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //Main f(x)
    GrowthTrackerPage,
    CalendarPage,
    CareGuidePage,
    OrientationPage,
    DiaryPage,
    SettingsPage,
    GetStartedPage,
    //Child of Main f(x)
    AddItemPage
  ],
  //Added Storage
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
