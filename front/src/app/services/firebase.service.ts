import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import {Observable} from 'rxjs'
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'

const config = {
  apiKey: "AIzaSyDlrjQazIFt5uPe28rbI3UHWhXvFnbHD20",
authDomain: "kmote-29a99.firebaseapp.com",
databaseURL: "https://kmote-29a99.firebaseio.com",
projectId: "kmote-29a99",
storageBucket: "kmote-29a99.appspot.com",
messagingSenderId: "660605593494"
};
firebase.initializeApp(config);
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
   url="http://localhost:3000"
  //url=""
  
  constructor(
    private http: Http
  ) { }
  provider = new firebase.auth.FacebookAuthProvider()
  googleProvider = new firebase.auth.GoogleAuthProvider()

  loginWithFacebook(){
    firebase.auth().signInWithPopup(this.provider)
    .then(snap=>{
      //console.log(snap)
      //localStorage.setItem('facebookToken', JSON.stringify(snap.credential.accessToken) )
      //localStorage.setItem('user', JSON.stringify(snap.user))
      //this._sendTokenToBackend(snap.user)
      this.logFace(snap)
    })
  }

  loginWithGoogle(){
    firebase.auth().signInWithPopup(this.googleProvider)
    .then(snap=>{
      console.log(snap.user)
    })
  }
  logFace(snap): Observable<string>{
    console.log(snap)
    return this.http.post(this.url+'facebook/login',snap)
    .pipe(map(res=>res.json()))
  }






  _sendTokenToBackend(snap){
    const user = snap.profile
    fetch(this.url + 'facebook/login', {
      method:'post',
      headers:{user}
    }) 
    .then(r=>{
      if(!r.ok) throw new Error()
      return r.json()
    })
    .then(res=>{
      console.log(res)
    }) 
  }


}
