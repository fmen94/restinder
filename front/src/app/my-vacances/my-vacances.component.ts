import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from './../services/user.service'

@Component({
  selector: 'app-my-vacances',
  templateUrl: './my-vacances.component.html',
  styleUrls: ['./my-vacances.component.css']
})
export class MyVacancesComponent implements OnInit {
  vacances: any
  user: any
  del= false
  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  noSolicitar(p){
    let index =p.applicants.findIndex(el=>{return el==this.user._id})
    p.applicants.splice(index, 1);
    this.userService.deliteVcancies(p)
    .subscribe(res=>{
      this.userService.myVacancies(this.user._id)
    .subscribe(res=>{
      this.vacances=res
      this.del= p._id
    })
    })
  }

  comment(id){
    this.router.navigate(['usercomments',id])
  }

  regresar(){
    this.router.navigate(['userProfile'])
  }
  ngOnInit() {
    this.user= localStorage.getItem("user")
    this.user=JSON.parse(this.user)
    this.userService.myVacancies(this.user._id)
    .subscribe(res=>{
      this.vacances=res
    })
  }

}
