import { Component } from '@angular/core';
import { UserAuth } from '../../providers/user-auth';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [UserAuth]
})
export class HomePage {

  cred = {email: '', password: ''};

  constructor(public navCtrl: NavController, private auth: UserAuth ) {

  }

  public login() {
    this.auth.login(this.cred.email, this.cred.password).subscribe(allowed => {
      if(allowed){
        console.log("Login success?")
      } else {
        // this.show
        console.log("Failed Login");
      }
    })
  }



}
