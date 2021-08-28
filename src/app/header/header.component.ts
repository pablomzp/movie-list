import { MovieService } from './../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  searchedValue: string = "";

  constructor(private MovieService: MovieService) { }

  ngOnInit() {}

  clickedSearch() {
    this.MovieService.getMovies(this.searchedValue.toLocaleLowerCase()).subscribe((res: any) => {
      this.MovieService.setSearchedMovie(res.results);
      console.log(this.MovieService.sharedSearchedMovie)
    })
  }
}
