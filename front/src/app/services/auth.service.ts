import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:3000/"
  constructor(
    private http: Http
  ) { }

  signupUser(auth): Observable<string>{
    return this.http.post(this.url + 'user/signup', auth)
    .pipe(map(res=>res.json()))
  }

  signupRestaurant(auth): Observable<string>{
    return this.http.post(this.url+'restaurant/signup', auth)
    .pipe(map(res=>res.json()))
  }

  loginUser(auth): Observable<string>{
    return this.http.post(this.url + 'user/login', auth, {withCredentials:true})
    .pipe(map(res=>res.json()))
  }










}
