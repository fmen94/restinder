import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from './../services/user.service'
import {} from '@types/googlemaps';

@Component({
  selector: 'app-user-interviews',
  templateUrl: './user-interviews.component.html',
  styleUrls: ['./user-interviews.component.css']
})
export class UserInterviewsComponent implements OnInit {
  user: any
  interviews: any
  interview: any
  date: any
  hour: any
  edi: any
  obj: any
  del= false
  ed=false
  constructor(
    private ruter: Router,
    private userService: UserService
  ) { }

  return(){
    this.ruter.navigate(['userProfile'])
  }

  remove(id){
    this.userService.deliteInterview(id)
    .subscribe(res=>{
      this.del=true
      this.userService.getInterview(this.user._id)
    .subscribe(res=>{
      this.interviews= res
      console.log(this.interviews);
      
    })
    })
  }

  edit(id){
    this.ed=id
  }
  editsend(id){
    this.interview={
      _id: id,
      date: this.date,
      hour: this.hour
      
    }
    this.userService.editInterview(this.interview)
    .subscribe(res=>{
      console.log(res);
      this.obj=res
      this.ed=false
      this.edi= this.obj._id
      this.userService.getInterview(this.user._id)
    .subscribe(res=>{
      this.interviews= res
      console.log(this.interviews);
      this.date= ""
      this.hour= ""
    })
    })
  
  }

  ngOnInit() {
    let user: any= localStorage.getItem("user")
    user=JSON.parse(user)
    console.log(user)
    this.user= user
    this.userService.getInterview(user._id)
    .subscribe(res=>{
      this.interviews= res
      console.log(this.interviews);
      
    })
  }

}
