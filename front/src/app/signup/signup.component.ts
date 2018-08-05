import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordOk=false
  isLogged = true
  auth = {password:"",password2:""}
  user = null

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signup(){
    this.authService.signupUser(this.auth)
    .subscribe(user=>{
      this.user=user
      this.router.navigate(['login'])
    })
  }

  redirectLogin(){
    this.router.navigate(['login'])
  }

  passwordgood(){
    console.log(this.auth.password2)
    if (this.auth.password==this.auth.password2){return this.passwordOk= false}
    return this.passwordOk= true

  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['userProfile'])
    }
  }

}
