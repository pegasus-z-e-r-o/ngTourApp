import { Component, OnInit } from '@angular/core';
import { Place } from '../class/Place';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-coimbatore',
  templateUrl: './coimbatore.component.html',
  styleUrls: ['./coimbatore.component.css']
})
export class CoimbatoreComponent implements OnInit {

  constructor(private placesService: PlacesService){}
 places: Place[] =[];
 ngOnInit(): void {
   this.places = this.placesService.CovaiPlace();
 }
}
