import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Urls {
  urls: {
    full: string,
    raw: string,
    regular: string,
    small: string,
    small_s3: string,
    thumb: string,
  }
}


@Injectable({
  providedIn: 'root'
})

export class UnsplashApiService {

  constructor(private _http: HttpClient) { }

  getRandomPhoto() {
    return this._http.get<Urls>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID K1EHGl9-1cx-eaG5N9sdxGvUd-dP6iFfc4nkdpv_wZ8',
      }
    });
  }
}

