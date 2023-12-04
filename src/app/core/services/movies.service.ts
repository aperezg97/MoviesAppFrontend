import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "src/app/core/models/movie";
import {MovieRequestModel} from "src/app/core/models/movie-request-model";

@Injectable()
export class MoviesService {

  constructor(@Inject('MoviesApi_URL') protected apiBaseURL: string,
    private readonly httpClient: HttpClient) { }

  getAllMovies(filters: MovieRequestModel): Observable<Movie[]> {
    return this.httpClient.post<Movie[]>(`${this.apiBaseURL}/api/movies`, filters);
  }
}
