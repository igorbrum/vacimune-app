import {ElementRef, NgZone, Component, OnInit ,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {Http} from '@angular/http';
import {PostosInterface} from '../postos-interface';

@Component({
  moduleId: module.id,
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
   lat: number;
   lng: number;
   zoom: number=18; 
   postos:Array<PostosInterface> = [];;
   
   constructor(private http:Http) { }

   ngOnInit() {
    this.getLocation();
    this.getPostoSaude();
  }

    
  getLocation(){navigator.geolocation.getCurrentPosition((position)=>{
    this.lat=position.coords.latitude;
    this.lng= position.coords.longitude;

    console.log(this.lat);
  
  });}

  getPostoSaude(){
    this.http.get('https://vacimune-api-dev.herokuapp.com/api/unidadeSaude')
    .map(res=>res.json())
    .subscribe(data =>
      {
        this.postos = data;
      },
      erro=> console.log(erro));   
  }
}