import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

//import model User
import { User } from '../models/user';



/*
  Generated class for the UserAuth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserAuth {
  public token: string;


  constructor(private http: Http) {
    console.log('Hello UserAuth Provider');
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token && currentUser.id;

  }
/////
// public login(credentials) {
//     if (credentials.email === null || credentials.password === null) {
//       return Observable.throw("Please insert credentials");
//     } else {
//       return Observable.create(observer => {
//         // At this point make a request to your backend to make a real check!
//         let access = (credentials.password === "pass" && credentials.email === "email");
//         this.currentUser = new User('Simon', 'saimon@devdactic.com');
//         observer.next(access);
//         observer.complete();
//       });
//     }
//   }
////
  login(email: string, password: string): Observable<boolean> {
    return this.http.post('https://snek-trakr.herokuapp.com/login',  JSON.stringify({email: email, password: password}))
    .map((response: Response) => {
      let token = response.json() && response.json().token;
      if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

          // return true to indicate successful login
          return true;
      } else {
          // return false to indicate failed login
          return false;
      }
    })

  }

  logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
  }
}