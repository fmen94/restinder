import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from './../services/user.service'
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  location={}
  profile: any
  editado= false
  lat: any;
  lng: any;
  @ViewChild('search') public searchElement: ElementRef;

  constructor(
    private ruter: Router,
    private userService: UserService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ubicacion(){
    navigator.geolocation.getCurrentPosition(this.localizacion,this.error)
  }
  localizacion(posicion){
    console.log(posicion.coords.latitude);
    console.log(posicion.coords.longitude);
     this.lat= posicion.coords.latitude;
     this.lng= posicion.coords.longitude;
  }
  
  
   error(e){
   console.log(e);
   
  }





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
  myInterviews(){
    this.ruter.navigate(["userinterviews"])
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      () => { 
      
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });
        
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.lat=  place.geometry.location.lat()
            this.lng= place.geometry.location.lng()
              if(place.geometry === undefined || place.geometry === null ){
                return;}
          });
        });
      }
    );



    let user: any= localStorage.getItem("user")
    user=JSON.parse(user)
    console.log(user)
    this.profile= user
    

  }}