import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "src/app/core/models/category";

@Injectable()
export class CategoriesService {
  constructor(@Inject('MoviesApi_URL') protected apiBaseURL: string,
              private readonly httpClient: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiBaseURL}/api/categories`);
  }
}
