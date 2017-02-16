import { Component } from '@angular/core';
import { ClutchProv } from '../../providers/clutch-prov';
import { NavController } from 'ionic-angular';
import { UserAuth } from '../../providers/user-auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'page-contact',
  templateUrl: 'clutches.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private auth: UserAuth, private ClutchProv: ClutchProv) {

  }


  public clutchesArray: Observable<any[]>;

  ngOnInit(){
    console.log("ngOnInit for clutch Providers")
    return this.ClutchProv.getAllClutches().subscribe( data => this.clutchesArray = data);
  }


  //Next step is to build provider for getting clutches information from api with provider
  //and pass it down into this component




}
