import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RestaurantService} from './../services/restaurant.service'
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';


@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.css']
})
export class RestaurantProfileComponent implements OnInit {
  user: any ={}
  location: any={}
  editado= false
  lat: any = 0;
  lng: any = 0;
  @ViewChild('search') public searchElement: ElementRef;
  map= false
  constructor(
    private ruter: Router,
    private restaurantService: RestaurantService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone

  ) { }

  vacancies(){
    this.ruter.navigate(['restaurantvacances',this.user._id])
  }
  comentarios(){
    this.ruter.navigate(['restaurantcomments',this.user._id])
  }
  
  interviews(){
    this.ruter.navigate(['restaurantinterview',this.user._id])
  }
  ubicacion(){
    navigator.geolocation.getCurrentPosition(this.localizacion.bind(this),this.error)
  }
  localizacion(posicion){
    this.map=true
    this.lat= posicion.coords.latitude;
    this.lng= posicion.coords.longitude;
    this.user.location.coordinates[1]=this.lat
    this.user.location.coordinates[0]=this.lng
  }
  
  
   error(e){
   console.log(e);
   
  }

  maps(){
    this.map=true
  }



  edit(){
    console.log("eso recive",this.user)
    this.restaurantService.editProfile(this.user)
    .subscribe(res=>{
      console.log("esto entrega",this.user)
      this.user=res
      this.editado= true
      this.user=localStorage.setItem("user", res)
    })
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
            this.user.location.coordinates[1]=this.lat
            this.user.location.coordinates[0]=this.lng
              if(place.geometry === undefined || place.geometry === null ){
                return;}
          });
        });
      }
    );






    let User: any = localStorage.getItem("user")
    User=JSON.parse(User)
    this.user=User
    this.lat=this.user.location.coordinates[1]
    this.lng=this.user.location.coordinates[0]
  }

}
