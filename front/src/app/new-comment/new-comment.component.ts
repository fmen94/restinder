import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {UserService} from './../services/user.service'

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  user: any
  restaurant: any
  text: any
  title: any
  comment: any
  comentado= false

  constructor(
    private  activeRoute :  ActivatedRoute ,
    private router: Router,
    private userService: UserService
  ) { }
  newcomment(){
    this.comment={
      user: this.user._id,
      restaurant: this.restaurant.res,
      text: this.text,
      title: this.title
    }
    this.userService.newComments(this.comment)
    .subscribe(res=>{
      console.log(res);
      this.comentado= true
      
    })
    
  }
  return(){
    this.router.navigate(['usercomments',this.restaurant.res])
  }

  ngOnInit() {
    this.user= localStorage.getItem("user")
    this.user=JSON.parse(this.user)
    this.activeRoute.params.subscribe( params => {
    this.restaurant=params})
    console.log(this.restaurant)
  }

}
