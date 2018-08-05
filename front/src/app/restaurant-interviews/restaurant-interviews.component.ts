import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service'


@Component({
  selector: 'app-restaurant-interviews',
  templateUrl: './restaurant-interviews.component.html',
  styleUrls: ['./restaurant-interviews.component.css']
})
export class RestaurantInterviewsComponent implements OnInit {
  user:any
  interviews: any
  constructor(
    private ruter: Router,
    private restaurantService: RestaurantService
  ) { }
  regresar(){
    this.ruter.navigate(['restaurantprofile'])
  }

  ngOnInit() {
    let User: any = localStorage.getItem("user")
    User=JSON.parse(User)
    this.user=User
    this.restaurantService.getInterview(this.user._id)
    .subscribe(res=>{
      this.interviews= res
      console.log(this.interviews)
    })
  }

}
