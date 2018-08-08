import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RestaurantService } from './../services/restaurant.service'
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';


@Component({
  selector: 'app-new-vacance',
  templateUrl: './new-vacance.component.html',
  styleUrls: ['./new-vacance.component.css']
})
export class NewVacanceComponent implements OnInit {
  user: any ={}
  title: any
  position: any
  salary: any
  schedule: any
  description: any
  restaurant: any
  vacant: any
  create= false
  lat: any = 0;
  lng: any = 0;
  @ViewChild('search') public searchElement: ElementRef;
  map= false

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
  regresar(){
    this.router.navigate(['restaurantvacances',this.user._id])
  }
  ubicacion(){
    navigator.geolocation.getCurrentPosition(this.localizacion.bind(this),this.error)
  }
  localizacion(posicion){
    this.map=true
    this.lat= posicion.coords.latitude;
    this.lng= posicion.coords.longitude;
    this.vacant.location.coordinates[1]=this.lat
    this.vacant.location.coordinates[0]=this.lng
  }
  
  
   error(e){
   console.log(e);
   
  }

  maps(){
    this.map=true
  }



  send(){
   this.restaurant= this.user._id
   this.vacant={
    title: this.title,
    position: this.position,
    salary: this.salary,
    schedule: this.schedule,
    description: this.description,
    restaurant: this.restaurant,
    location:{coordinates:[this.lng,this.lat]}

   }
    console.log(this.vacant)
    this.restaurantService.addVacancies(this.vacant)
    .subscribe(res=>{
      console.log(res);
      
      this.create=true
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
  }

}
