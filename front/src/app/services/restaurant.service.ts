import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
   url="http://localhost:3000"
   //url=""
  constructor(
    private http: Http
  ) { }

  getProfile(id): Observable<string>{
    return this.http.get(this.url + '/restaurant/profile/'+id)
    .pipe(map(res=>res.json()))
  }

  editProfile(obj): Observable<string>{
    return this.http.put(this.url + '/restaurant/profile/'+obj._id,obj)
    .pipe(map(res=>res.json()))
  }
  addVacancies(obj): Observable<string>{
    return this.http.post(this.url + '/restaurant/vacancies/'+obj._id,obj)
    .pipe(map(res=>res.json()))
  }

  getVacancies(id): Observable<string>{
    return this.http.get(this.url + '/restaurant/vacancies/'+id)
    .pipe(map(res=>res.json()))
  }

  oneVacancies(id): Observable<string>{
    return this.http.get(this.url + '/restaurant/onevacancies/'+id)
    .pipe(map(res=>res.json()))
  }

  editVacancies(obj): Observable<string>{
    return this.http.put(this.url + '/restaurant/onevacancies/'+obj._id,obj)
    .pipe(map(res=>res.json()))
  }

  removeVacancies(id): Observable<string>{
    return this.http.delete(this.url + '/restaurant/onevacancie/'+id)
    .pipe(map(res=>res.json()))
  }

  usersApplicants(id): Observable<string>{
    return this.http.post(this.url + '/restaurant/vacancies/applicants/'+id,id)
    .pipe(map(res=>res.json()))
  }

  comentsRestaurants(id): Observable<string>{
    return this.http.get(this.url + '/restaurant/comments/'+id)
    .pipe(map(res=>res.json()))
  }

  respondComment(obj): Observable<string>{
    return this.http.put(this.url + '/restaurant/comments/'+obj._id,obj)
    .pipe(map(res=>res.json()))
  }

  getInterview(id): Observable<string>{
    return this.http.get(this.url + '/restaurant/interview/'+id)
    .pipe(map(res=>res.json()))
  }








}
