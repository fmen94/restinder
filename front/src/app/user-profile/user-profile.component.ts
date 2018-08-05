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
  profile: any
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
      this.profile=localStorage.setItem("user", res)
    })
  }
  vacancies(){
    this.ruter.navigate(['vacancies'])
  }
  myVacancies(){
    this.ruter.navigate(["myVacances"])
  }

  ngOnInit() {
    let user: any= localStorage.getItem("user")
    user=JSON.parse(user)
    console.log(user)
    this.profile= user
    

  }}