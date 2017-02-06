import { Component } from '@angular/core';
import { UserAuth } from '../../providers/user-auth';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [UserAuth]
})
export class HomePage {

  cred = {email: '', password: ''};

  constructor(public navCtrl: NavController,
    private auth: UserAuth,
    public alertCtrl: AlertController ) {  }

  // public login() {
  //   this.auth.login(this.cred.email, this.cred.password).subscribe(allowed => {
  //     if(allowed){
  //       console.log("Login success?")
  //     } else {
  //       // this.show
  //       console.log("Failed Login");
  //     }
  //   })
  // }

  login(FormLogin){
    this.auth.login(FormLogin.value).subscribe(data => {
      console.log(data)
      if(data.token){
        // this.navCtrl.setRoot(HomePage);
        console.log('LOGGED IN!')
      } else{
        FormLogin.password = '';
        let alert = this.alertCtrl.create({
          title: 'Login Failed',
          subTitle: data.message,
          buttons: ['OK']
        })
        alert.present();
      }
    })
  }

}
