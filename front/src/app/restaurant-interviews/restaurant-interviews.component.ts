import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service'
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';


@Component({
  selector: 'app-restaurant-interviews',
  templateUrl: './restaurant-interviews.component.html',
  styleUrls: ['./restaurant-interviews.component.css']
})
export class RestaurantInterviewsComponent implements OnInit {
  user:any
  interviews: any
  lat: any = 0;
  lng: any = 0;
  @ViewChild('search') public searchElement: ElementRef;
  map= false

  constructor(
    private ruter: Router,
    private restaurantService: RestaurantService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone

  ) { }
  regresar(){
    this.ruter.navigate(['restaurantprofile'])
  }
  



  ngOnInit() {
    let User: any = localStorage.getItem("user")
    User=JSON.parse(User)
    this.user=User
    console.log(this.user._id)
    this.restaurantService.getInterview(this.user._id)
    .subscribe(res=>{
      this.interviews= res
      console.log(this.interviews)
    })
  }

}
