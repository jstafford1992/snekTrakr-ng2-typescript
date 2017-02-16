import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClutchProv provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ClutchProv {

  baseUrl:string = "https://snek-trakr.herokuapp.com/";

  constructor(public http: Http) {
    console.log('Hello ClutchProv Provider');
  }

  createAuthorizationHeader(headers: Headers){
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', "Bearer " +localStorage.getItem('token'));
  }




  getAllClutches(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let id: string = localStorage.getItem('user_id');
    let url: string = this.baseUrl + "clutches/";
    return this.http.get(url, {
      headers: headers
    }).map(response => response.json());

  }


  private extractData(res: Response){
    let body = res.json();
    console.log("extractData ", body)
    if(body){

    }
    return body || {};
  }

}
