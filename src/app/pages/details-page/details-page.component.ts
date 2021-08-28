import { MovieService } from './../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {

  movie: any;
  movieId: any;

  constructor(private MovieService: MovieService) { }

  ngOnInit() {
    this.MovieService.sharedId.subscribe(id => this.movieId = id);
    console.log(this.movieId);

    this.MovieService.getMovieById(this.movieId).subscribe((res: any) => {
      this.movie = res;
      console.log(this.movie);
    })
  }

}
