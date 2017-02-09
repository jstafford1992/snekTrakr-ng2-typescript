import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic-angular';

/*
  Generated class for the SnakesProv provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SnakesProv {

  baseUrl:string = 'https://snek-trakr.herokuapp.com/';

  constructor(public http: Http) {
    console.log('Hello SnakesProv Provider');
  }


  getAllSnakes(){
    let id: string = localStorage.getItem('user_id');
    let url: string = this.baseUrl+"snakes/"+ id;
    return this.http.get(url).map(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    console.log("extractData", body);
    if(body){
      // console.log(body);
    };
    return body || {};
  }

}
