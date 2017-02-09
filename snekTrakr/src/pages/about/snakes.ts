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

  public snakesArray: Observable<any[]>;

  // snakes;

  ngOnInit(){
    console.log("inside ngOnInit");
    // this.snakesArray = this.SnakesProv.getAllSnakes().subscribe(snakes => {
    //         this.snakesArray = snakes;
    //     });
    return this.SnakesProv.getAllSnakes().subscribe( data => this.snakesArray = data );
  }



}
