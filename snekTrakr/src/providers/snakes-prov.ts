import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

}
