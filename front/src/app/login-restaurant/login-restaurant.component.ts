import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent implements OnInit {
  auth={}
  user=null
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  redirectSignup(){
    this.router.navigate(['signupRestaurant'])
  }
  login(){
    console.log("entramos")
    this.authService.loginRestaurant(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['restaurantprofile'])
    })
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['restaurantprofile'])
    }
  }

}
