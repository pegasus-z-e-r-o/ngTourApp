import { Component, OnInit } from '@angular/core';
import { Place } from '../class/Place';
import { PlacesService } from '../service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-chennai',
  templateUrl: './chennai.component.html',
  styleUrls: ['./chennai.component.css'],
})
export class ChennaiComponent implements OnInit {
  constructor(
    private placesService: PlacesService,
    private localStorageService: LocalStorageService
  ) {}
  places: Place[] = [];
  selectedplaceid: Array<number> = [];
  selectedplace: Place = new Place();
  temp: Array<number> = [];
  ngOnInit(): void {
    this.places = this.placesService.ChennaiPlace();
  }

  likedPlaces(selectedId: number) {
    this.isLiked = true;
    console.log(this.temp);
    if (!this.temp.includes(selectedId)) {
      this.temp.push(selectedId);
      this.selectedplaceid.push(selectedId);
      console.log(this.selectedplaceid);
      this.saveNumbersToLocalStorage();
    } else {
    }
  }

  // liked: Place[] = [];

  saveNumbersToLocalStorage(): void {
    let savedNumbers = this.localStorageService.getNumbers();
    this.selectedplaceid.forEach((v) => {
      savedNumbers?.push(v);  
    });
    this.selectedplaceid = [];

    this.localStorageService.saveNumbers(savedNumbers);
  }

  isLiked: boolean = false;
}
