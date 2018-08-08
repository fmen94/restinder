import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signup-restaurant',
  templateUrl: './signup-restaurant.component.html',
  styleUrls: ['./signup-restaurant.component.css']
})
export class SignupRestaurantComponent implements OnInit {
  auth: any ={}
  user: any ={}
  constructor(
    private router: Router,
    private authService: AuthService

  ) { }

  signup(){
    this.authService.signupRestaurant(this.auth)
    .subscribe(user=>{
      this.user=user
      this.router.navigate(['restaurantlogin'])
    })
  }
  redirectLogin(){
    this.router.navigate(['restaurantlogin'])
  }
  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['restaurantprofile'])
    }
  }

}
