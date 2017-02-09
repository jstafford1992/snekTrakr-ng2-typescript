import { Component } from '@angular/core';
import { UserAuth } from '../../providers/user-auth';
import { NavController, AlertController } from 'ionic-angular';
import { SnakesProv } from '../../providers/snakes-prov';
import { Storage } from '@ionic-angular';
import {AfterViewInit} from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'page-snakes',
  templateUrl: 'snakes.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private auth: UserAuth, private SnakesProv: SnakesProv) {

  }

  snakes;

  // (ngOnInit() as Observable<any>) => {this.SnakesProv.getAllSnakes().subscribe(res => res.json())}

  // ngOnInit():  void | Observable<any> {
    //return bla bla bla
    // return this.SnakesProv.getAllSnakes().subscribe(res => res.json());
  // }

  ngOnInit(){
    // let id = localStorage.getItem('user_id')
    console.log("inside ngOnInit");
    this.snakes = this.SnakesProv.getAllSnakes().subscribe(snakes => {
            this.snakes = snakes;
        });
    return this.SnakesProv.getAllSnakes().subscribe( res => res.json())
  }


}
