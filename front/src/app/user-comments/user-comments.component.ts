import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {UserService} from './../services/user.service'


@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {
  user: any
  restaurant: any
  commnet: any
  del= false
  constructor(
    private  activeRoute :  ActivatedRoute ,
    private router: Router,
    private userService: UserService

  ) { }
  return(){
    this.router.navigate(['myVacances'])
  }
  new(id){
    this.router.navigate(['newcomment',id])
  }
  delite(id){
    this.userService.deliteComments(id)
    .subscribe(res=>{
      this.userService.myComments(this.user._id)
    .subscribe(resp=>{
      this.commnet= resp
      this.del=true
    })
    })
  }

  ngOnInit() {
    this.user= localStorage.getItem("user")
    this.user=JSON.parse(this.user)
    
    this.activeRoute.params.subscribe( params => {
    this.restaurant=params.restaurant})
    this.userService.myComments(this.user._id)
    .subscribe(res=>{
      this.commnet= res
    })
  }

}
