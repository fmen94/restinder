import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from './../services/user.service'


@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacances=null
  user: any
  constructor(
    private router: Router,
    private userService: UserService

  ) { }
  solicitar(p){
    p.applicants.push(this.user._id)
    this.userService.applicantsVacancies(p)
    .subscribe(res=>{
      let result: any= res
      this.router.navigate(['interview/',result._id, result.restaurant])
    })
    
  }
  restaurant(id){
    this.router.navigate(['userrestaurant',id])
  }
  regresar(){
    this.router.navigate(['userProfile'])
  }
  ngOnInit() {
    this.user= localStorage.getItem("user")
    this.user=JSON.parse(this.user)
    this.userService.getVacancies(this.user._id)
    .subscribe(res =>{
      this.vacances=res
      console.log(res)
     
    })
    

  }

}
