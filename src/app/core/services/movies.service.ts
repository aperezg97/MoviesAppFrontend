import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "src/app/core/models/movie";

@Injectable()
export class MoviesService {

  constructor(@Inject('MoviesApi_URL') protected apiBaseURL: string,
    private readonly httpClient: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiBaseURL}/api/movies`);
  }
}
