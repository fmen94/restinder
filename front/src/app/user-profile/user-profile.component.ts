import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from './../services/user.service'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  location={}
  profile= null
  editado= false
  constructor(
    private ruter: Router,
    private userService: UserService
  ) { }

  edit(){
    this.userService.editProfile(this.profile)
    .subscribe(res=>{
      this.profile=res
      this.editado= true
      console.log(this.profile)
      console.log(this.editado)
    })
  }
  vacancies(){
    this.ruter.navigate(['vacancies'])
  }

  ngOnInit() {
    let user: any= localStorage.getItem("user")
    user=JSON.parse(user)
    //let id= user._id
    this.userService.getProfile(user._id)
    .subscribe(res=>{
      this.profile=res
      console.log(this.profile)
    })
    

  }}