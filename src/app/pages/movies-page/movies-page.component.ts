import { MovieService } from './../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {

  movies: any[];
  searchValue: string = "";

  constructor(private MovieService: MovieService) { }

  ngOnInit() {
  }

  clickedSearch() {
    this.MovieService.getMovies(this.searchValue.toLocaleLowerCase()).subscribe((res: any) => {
      this.movies = res.results;
      console.log(this.movies)
    })
  }
}
