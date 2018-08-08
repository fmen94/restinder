import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service'
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-restaurant-vacances',
  templateUrl: './restaurant-vacances.component.html',
  styleUrls: ['./restaurant-vacances.component.css']
})
export class RestaurantVacancesComponent implements OnInit {
  vacances: any ={}
  user: any={}
  del=false
  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) { }
  regresar(){
    this.router.navigate(['restaurantprofile'])
  }
  newVac(){
    this.router.navigate(['newvacance'])
  }

  delite(id){
    this.restaurantService.removeVacancies(id)
    .subscribe(res=>{
      this.del=true
      console.log(res)
      this.restaurantService.getVacancies(this.user._id)
      .subscribe(res=>{
        this.vacances=res
        console.log(this.vacances)
  })
      
    })
  }

  edit(id){
    this.router.navigate(['onevancances',id])
  }

  ngOnInit() {
  this.user= localStorage.getItem("user")
  this.user=JSON.parse(this.user)
  this.restaurantService.getVacancies(this.user._id)
  .subscribe(res=>{
    this.vacances=res
    console.log(this.vacances)
  })
  }

}
