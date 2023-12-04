import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MoviesService} from "src/app/core/services/movies.service";
import {Movie} from "src/app/core/models/movie";
import {Category} from "src/app/core/models/category";
import {CategoriesService} from "src/app/core/services/categories.service";
import {MovieRequestModel} from "src/app/core/models/movie-request-model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit{

  movies: Movie[] = [];
  categories: Category[] = [];
  selectedCategories: string[] = [];

  searchFieldValue?: string;

  showDialog: boolean = false;
  selectedMovie?: Movie;

  constructor(private readonly cdr: ChangeDetectorRef,
              private readonly moviesService: MoviesService,
              private readonly categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getAllMovies();
  }

  searchData() {
    this.getAllMovies();
  }

  getAllMovies() {
    const params = this.getMoviesRequestModel();
    this.moviesService.getAllMovies(params).subscribe((result) => {
      this.movies = result;
      this.cdr.detectChanges();
    });
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe((result) => {
      this.categories = result;
      this.cdr.detectChanges();
    });
  }

  getMoviesRequestModel(): MovieRequestModel{
    const data = new MovieRequestModel();
    data.categories = this.selectedCategories ?? [];
    data.freeTextSearch = this.searchFieldValue;
    return data;
  }

  toggleMovieDetailsModal(movie: Movie) {
    this.selectedMovie = movie;
    this.showDialog = true;
  }
}
