import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { firebaseConfig } from '../environments/firebase-environment';
import { Authentication  } from '../services/authentication';
import { Uploader  } from '../services/uploader';
import { ImagesService  } from '../services/images.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Authentication,
    Uploader,
    ImagesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
