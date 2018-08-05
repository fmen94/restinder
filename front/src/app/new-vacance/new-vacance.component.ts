import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RestaurantService } from './../services/restaurant.service'


@Component({
  selector: 'app-new-vacance',
  templateUrl: './new-vacance.component.html',
  styleUrls: ['./new-vacance.component.css']
})
export class NewVacanceComponent implements OnInit {
  user: any
  title: any
  position: any
  salary: any
  schedule: any
  description: any
  restaurant: any
  vacant: {}
create= false

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) { }
  regresar(){
    this.router.navigate(['restaurantvacances',this.user._id])
  }

  send(){
   this.restaurant= this.user._id
   this.vacant={
    title: this.title,
    position: this.position,
    salary: this.salary,
    schedule: this.schedule,
    description: this.description,
    restaurant: this.restaurant

   }
    console.log(this.vacant)
    this.restaurantService.addVacancies(this.vacant)
    .subscribe(res=>{
      this.create=true
    })
  }

  ngOnInit() {
    let User: any = localStorage.getItem("user")
    User=JSON.parse(User)
    this.user=User
  }

}
