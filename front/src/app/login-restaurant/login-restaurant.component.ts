import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import {Router} from '@angular/router'
import {FirebaseService} from '../services/firebase.service'

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent implements OnInit {
  auth: any ={}
  user: any ={}
  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  redirectSignup(){
    this.router.navigate(['signupRestaurant'])
  }

  loginWithFacebook(){
    this.firebaseService.loginWithFacebook()

  }
  loginWithGoogle(){
    this.firebaseService.loginWithGoogle()
  }





  login(){
    console.log("entramos")
    this.authService.loginRestaurant(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      console.log(user)
      this.router.navigate(['restaurantprofile'])
    })
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['restaurantprofile'])
    }
  }

}
