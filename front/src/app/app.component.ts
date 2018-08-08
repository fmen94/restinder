import { routes } from './routes';
import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user= false
  res= false
  selec= true
  constructor(
    private routes: Router
  ){}
  use(){
    this.user=true
    this.selec=false
    this.res= false
  }

  rest(){
    this.res=true
    this.selec=false
    this.user= false
  }

  logout(){
    localStorage.removeItem('user')
    this.routes.navigate([''])
    this.user= false
    this.selec=true
    this.res=false
  }

}
