import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth={}
  user=null
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  redirectSignup(){
    this.router.navigate(['signup'])
  }
  login(){
    this.authService.loginUser(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['userProfile'])
    })
  }
  ngOnInit() {
  }

}
