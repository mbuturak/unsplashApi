import { UnsplashApiService } from './../unsplash-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  photoUrl: string;

  constructor(private _unsplashApi: UnsplashApiService) { }

  ngOnInit(): void {
    this.takeRandomPhoto();
  }

  takeRandomPhoto() {
    this._unsplashApi.getRandomPhoto().subscribe((res) => this.photoUrl = res.urls.regular);
  }

  newPhoto(){
    this.photoUrl = "";
    this.takeRandomPhoto();
  }

}
