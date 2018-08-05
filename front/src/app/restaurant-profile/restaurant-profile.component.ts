import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service'


@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.css']
})
export class RestaurantProfileComponent implements OnInit {
  user: any
  editado= false
  constructor(
    private ruter: Router,
    private restaurantService: RestaurantService
  ) { }

  vacancies(){
    this.ruter.navigate(['restaurantvacances',this.user._id])
  }
  comentarios(){
    this.ruter.navigate(['restaurantcomments',this.user._id])
  }
  
  interviews(){
    this.ruter.navigate(['restaurantinterview',this.user._id])
  }

  edit(){
    console.log("eso recive",this.user)
    this.restaurantService.editProfile(this.user)
    .subscribe(res=>{
      console.log("esto entrega",this.user)
      this.user=res
      this.editado= true
      this.user=localStorage.setItem("user", res)
    })
  }

  ngOnInit() {
    let User: any = localStorage.getItem("user")
    User=JSON.parse(User)
    this.user=User
  }

}
