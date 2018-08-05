import { async } from '@angular/core/testing';

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service'
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-restaurant-comments',
  templateUrl: './restaurant-comments.component.html',
  styleUrls: ['./restaurant-comments.component.css']
})
export class RestaurantCommentsComponent implements OnInit {
  user: any
  comments: any
  resp=false
  title: string
  text: string
  comment: any
  listo= false
  constructor(
    private ruter: Router,
    private restaurantService: RestaurantService
  ) { }

  responder(id){
    this.comment={
      _id: id,
      answer:{
        title: this.title,
        text: this.text
    },
    }
    this.restaurantService.respondComment(this.comment)
    .subscribe(res=>{
      this.resp=false
      this.listo=true
      this.title=""
      this.text=""
      this.restaurantService.comentsRestaurants(this.user._id)
      .subscribe(res=>{
        this.comments= res
        console.log(this.comments)
      })
    })
  }

  return(){
    this.ruter.navigate(['restaurantprofile'])
  }

  respond(id){
   this.resp=id
  }

  ngOnInit() {
    let User: any = localStorage.getItem("user")
    User=JSON.parse(User)
    this.user=User
    this.restaurantService.comentsRestaurants(this.user._id)
    .subscribe(res=>{
      this.comments= res
      console.log(this.comments)
    })
  }

}
