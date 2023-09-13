import { Component, OnInit } from '@angular/core';
import { Place } from '../class/Place';
import { PlacesService } from '../service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-kanchipuram',
  templateUrl: './kanchipuram.component.html',
  styleUrls: ['./kanchipuram.component.css'],
})
export class KanchipuramComponent implements OnInit {
  constructor(
    private placesService: PlacesService,
    private localStorageService: LocalStorageService
  ) {}
  places: Place[] = [];
  selectedplaceid: Array<number> = [];
  selectedplace: Place = new Place();
  temp: Array<number> = [];

  ngOnInit(): void {
    this.places = this.placesService.KanchipuramPlace();
  }

  likedPlaces(selectedId: number) {
    console.log(this.temp);
    if (!this.temp.includes(selectedId)) {
      this.temp.push(selectedId);
      this.selectedplaceid.push(selectedId);
      console.log(this.selectedplaceid);
      this.saveNumbersToLocalStorage();
    } else {
    }
  }

  saveNumbersToLocalStorage(): void {
    let savedNumbers = this.localStorageService.getNumbers();
    this.selectedplaceid.forEach((v) => {
      savedNumbers?.push(v);
    });
    this.selectedplaceid = [];

    this.localStorageService.saveNumbers(savedNumbers);
  }
}
