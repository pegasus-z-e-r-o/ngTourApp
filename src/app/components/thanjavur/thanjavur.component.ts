import { Component, OnInit } from '@angular/core';
import { Place } from '../../class/Place';
import { PlacesService } from '../../service/places.service';

@Component({
  selector: 'app-thanjavur',
  templateUrl: './thanjavur.component.html',
  styleUrls: ['./thanjavur.component.css'],
})
export class ThanjavurComponent implements OnInit {
  constructor(private placesService: PlacesService){}
  places: Place[] = [];
  ngOnInit(): void {
    this.places = this.placesService.ThanjavurPlace();
  }
}
