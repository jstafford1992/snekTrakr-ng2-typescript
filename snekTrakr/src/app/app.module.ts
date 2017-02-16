import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/snakes';
import { ContactPage } from '../pages/contact/clutches';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserAuth } from '../providers/user-auth';
import { Storage } from '@ionic/storage';
import { SnakesProv } from '../providers/snakes-prov';
import { ClutchProv } from '../providers/clutch-prov';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserAuth, Storage, SnakesProv, ClutchProv]
})
export class AppModule {}
