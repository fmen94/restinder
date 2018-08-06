import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000"
  constructor(
    private http: Http
  ) { }

  getProfile(id): Observable<string>{
    return this.http.get(this.url + '/user/profile/'+id)
    .pipe(map(res=>res.json()))
  }

  editProfile(obj): Observable<string>{
    return this.http.put(this.url+'/user/profile/'+obj._id, obj)
    .pipe(map(res=>res.json()))
  }
  getVacancies(id): Observable<string>{
    return this.http.get(this.url+'/user/vacancies/'+id)
    .pipe(map(res=>res.json()))
  }

  applicantsVacancies(p): Observable<string>{
    return this.http.put(this.url+'/user/vacancies/'+p._id, p)
    .pipe(map(res=>res.json()))
  }
  myVacancies(id): Observable<string>{
    return this.http.get(this.url+'/user/myvacancies/'+id)
    .pipe(map(res=>res.json()))
  }
 
  deliteVcancies(p): Observable<string>{
    return this.http.put(this.url+'/user/myvacancies/'+p._id, p)
    .pipe(map(res=>res.json()))
  }
  newInterview(obj): Observable<string>{
    return this.http.post(this.url+'/user/interview/'+obj._id, obj)
    .pipe(map(res=>res.json()))
  }
  editInterview(obj): Observable<string>{
    return this.http.put(this.url+'/user/interview/'+obj._id, obj)
    .pipe(map(res=>res.json()))
  }
  getInterview(id): Observable<string>{
    return this.http.get(this.url+'/user/interview/'+id)
    .pipe(map(res=>res.json()))
  }
  deliteInterview(id): Observable<string>{
    return this.http.delete(this.url+'/user/interview/'+id)
    .pipe(map(res=>res.json()))
  }
  newComments(obj): Observable<string>{
    return this.http.post(this.url+'/user/comments/'+obj._id, obj)
    .pipe(map(res=>res.json()))
  }
  editComments(obj): Observable<string>{
    return this.http.put(this.url+'/user/comments/'+obj._id, obj)
    .pipe(map(res=>res.json()))
  }
  deliteComments(id): Observable<string>{
    return this.http.delete(this.url+'/user/comments/'+id)
    .pipe(map(res=>res.json()))
  }
  myComments(id): Observable<string>{
    return this.http.get(this.url+'/user/comments/'+id)
    .pipe(map(res=>res.json()))
  }
  getRestaurant(id): Observable<string>{
    return this.http.get(this.url+'/user/restaurant/'+id)
    .pipe(map(res=>res.json()))
  }



  














}
