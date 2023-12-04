import {Component, OnInit} from '@angular/core';
import {MoviesService} from "src/app/core/services/movies.service";
import {Movie} from "src/app/core/models/movie";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{

  movies: Movie[] = [];

  constructor(private readonly moviesService: MoviesService) {
  }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.moviesService.getAllMovies().subscribe((result) => {
      this.movies = result;
    })
  }

}
