import { Component, OnInit } from '@angular/core';
import { Place } from '../../class/Place';
import { PlacesService } from '../../service/places.service';

@Component({
  selector: 'app-madurai',
  templateUrl: './madurai.component.html',
  styleUrls: ['./madurai.component.css'],
})
export class MaduraiComponent implements OnInit {
  constructor(private placesService: PlacesService) {}
  places: Place[] = [];

  ngOnInit(): void {
    this.places = this.placesService.MaduraiPlace();
  }
}