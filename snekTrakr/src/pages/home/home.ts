import { Component } from '@angular/core';
import { UserAuth } from '../../providers/user-auth';
import { NavController, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/snakes';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [UserAuth]
})
export class HomePage {

  // cred = {email: '', password: ''};

  constructor(public navCtrl: NavController,
    private auth: UserAuth,
    public alertCtrl: AlertController ) {  }

  login(FormLogin){
    this.auth.login(FormLogin.value).subscribe(data => {

      if(data.token){
        // this.navCtrl.setRoot(HomePage);
        // localStorage.setItem('token', data.token);
        // localStorage.setItem('user_id', data.id);
        // console.log('LOGGED IN!')
        this.navCtrl.setRoot(AboutPage);
        // this.navCtrl.push(AboutPage);
        let alert = this.alertCtrl.create({
          title: "Login Successful!",
          buttons: ["OK"]
        })
        alert.present();
      }

    }, err => {
      if(err){
        // console.log(err);
        let message = JSON.parse(err._body);
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: message.message,
          buttons: ['OK']
        })
        alert.present();
      }
    })
  }

  logout(){
    if(localStorage.getItem('token')){
      this.auth.logout();
      let alert = this.alertCtrl.create({
        title: 'Logout!',
        subTitle: "You've Logged Out",
        buttons: ['OK']
      })
      alert.present();
    }
  }

}
