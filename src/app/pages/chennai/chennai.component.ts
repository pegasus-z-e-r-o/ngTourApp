import { Component, HostListener, OnInit } from '@angular/core';
import { Place } from '../../class/Place';
import { PlacesService } from '../../service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-chennai',
  templateUrl: './chennai.component.html',
  styleUrls: ['./chennai.component.css'],
})
export class ChennaiComponent implements OnInit {
  ngOnInit(): void {
    this.places = this.placesService.ChennaiPlace();
  }

  constructor(
    private placesService: PlacesService,
    private localStorageService: LocalStorageService
  ) {}
  places: Place[] = [];
  selectedplaceid: Array<number> = [];
  selectedplace: Place = new Place();
  temp: Array<number> = [];

  likedPlaces(place: Place) {
    place.isLiked = !place.isLiked;
    console.log(this.temp);
    if (!this.temp.includes(place.id)) {
      this.temp.push(place.id);
      this.selectedplaceid.push(place.id);
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

  openShareModal() {
    let shareModal = document.getElementById('shareModal');
    if (shareModal) {
      shareModal.classList.add('show');
      shareModal.style.display = 'block';
    }
  }

  closeShareModal() {
    let shareModal = document.getElementById('shareModal');
    if (shareModal) {
      shareModal.classList.remove('show');
      shareModal.style.display = 'none';
    }
  }

  @HostListener('document:click', ['$event'])
  public onClick(event:any):void {
    if(event.target.classList.contains('modal')){
      this.closeShareModal()
    }
  }

}