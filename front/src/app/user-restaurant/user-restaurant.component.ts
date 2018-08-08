import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {UserService} from './../services/user.service'
import {} from '@types/googlemaps';

@Component({
  selector: 'app-user-restaurant',
  templateUrl: './user-restaurant.component.html',
  styleUrls: ['./user-restaurant.component.css']
})
export class UserRestaurantComponent implements OnInit {
  user: any
  restaurant: any
  constructor(
    private  activeRoute :  ActivatedRoute ,
    private router: Router,
    private userService: UserService
  ) { }
  return(){
    this.router.navigate(['vacancies'])
  }

  ngOnInit() {
    this.user= localStorage.getItem("user")
    this.user=JSON.parse(this.user)
    
    this.activeRoute.params.subscribe( params => {
    this.restaurant=params})
    this.userService.getRestaurant(this.restaurant.id)
    .subscribe(res=>{
     this.restaurant=res;

      
    })
    
  
  }

}
