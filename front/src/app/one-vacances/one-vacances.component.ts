import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-one-vacances',
  templateUrl: './one-vacances.component.html',
  styleUrls: ['./one-vacances.component.css']
})
export class OneVacancesComponent implements OnInit {
  vancant: any
  id: any
  title: any
  position: any
  salary: any
  schedule: any
  description: any
  applicants : any
  editado = false
  user: any

  constructor(
    private  activeRoute :  ActivatedRoute ,
    private ruter: Router,
    private restaurantService: RestaurantService
  ) { }

  edit(){
      this.vancant={
        title: this.title,
        position: this.position,
        salary: this.salary,
        schedule: this.schedule,
        description: this.description,
        applicants: this.applicants,
        _id: this.id.id
      }
      console.log(this.vancant)
      this.restaurantService.editVacancies(this.vancant)
      .subscribe(res=>{
        this.editado= true
        console.log(res)
    })
  }

  return(){
      this.ruter.navigate(['restaurantvacances',this.user._id])
  
  }

  ngOnInit() {
    this.activeRoute.params.subscribe( params => {
    this.id=params})
    this.restaurantService.oneVacancies(this.id.id)
    .subscribe(res=>{
      this.vancant=res
      this.position= this.vancant.position
      this.salary= this.vancant.salary
      this.schedule= this.vancant.schedule
      this.description= this.vancant.description
      this.applicants = this.vancant.applicants
      this.title = this.vancant.title
      let User: any = localStorage.getItem("user")
      User=JSON.parse(User)
      this.user=User
    })

  }

}
