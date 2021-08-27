import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // API KEY: 64fd869f0ffe02ff4690ccd8257a48fc

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=64fd869f0ffe02ff4690ccd8257a48fc');
  }

  getMovies(searchValue) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=64fd869f0ffe02ff4690ccd8257a48fc&query=' + searchValue);
  }

}
