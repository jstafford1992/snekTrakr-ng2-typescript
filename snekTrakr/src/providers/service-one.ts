import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceOne provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceOne {

  // private url = 'https://snek-trakr.herokuapp.com/';  // URL to web API

  constructor(public http: Http) {
    console.log('Hello ServiceOne Provider');
  }

}
