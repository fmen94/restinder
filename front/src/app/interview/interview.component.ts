import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {UserService} from './../services/user.service'

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  interview: any
  user: any
  date: any
  hour: any
  request: any
  constructor(
    private  activeRoute :  ActivatedRoute ,
    private router: Router,
    private userService: UserService
  ) { }
  solicitar(){
    this.request={
      date:this.date, hour:this.hour,user:this.user._id,restaurant: this.interview.restaurant,vacancies: this.interview.vacancies             
    }
   this.userService.newInterview(this.request)
   .subscribe(res=>
      this.router.navigate(['myVacances']))
  }

  ngOnInit() {
    this.user= localStorage.getItem("user")
    this.user=JSON.parse(this.user)
    
    this.activeRoute.params.subscribe( params => {
    this.interview=params})
  }

}
