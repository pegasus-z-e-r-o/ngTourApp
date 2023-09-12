import { Component, OnInit } from '@angular/core';
import { Place } from '../types/Place';
import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-kanchipuram',
  templateUrl: './kanchipuram.component.html',
  styleUrls: ['./kanchipuram.component.css'],
})
export class KanchipuramComponent implements OnInit {
  constructor(private placesService : PlacesService){}
  places: Place[] = [];
  
  ngOnInit(): void {
    this.places = this.placesService.KanchipuramPlace();
  }
}
