import { MovieService } from './../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {

  movies: any[];

  constructor(private MovieService: MovieService) { }

  ngOnInit() {
    this.MovieService.sharedSearchedMovie.subscribe(foundMovies => this.movies = foundMovies)
    console.log(this.movies)
  }

  // get id to share between siblings pages
  getMovieId(movieId) {
    this.MovieService.setId(movieId);
    console.log(movieId);
  }
}
