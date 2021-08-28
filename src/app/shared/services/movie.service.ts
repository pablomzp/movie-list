import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // share Id value between siblings
  private id = new BehaviorSubject('');
  sharedId = this.id.asObservable();

  setId(id) {
    this.id.next(id);
  }

  
  constructor(private http: HttpClient) { }

  // API KEY: 64fd869f0ffe02ff4690ccd8257a48fc

  getMovieById(id) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=64fd869f0ffe02ff4690ccd8257a48fc');
  }

  getMovies(searchValue) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=64fd869f0ffe02ff4690ccd8257a48fc&query=' + searchValue);
  }

}
