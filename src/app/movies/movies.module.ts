import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import {MoviesService} from "src/app/core/services/movies.service";
import {HttpClientModule} from "@angular/common/http";
import { MovieCardComponent } from './movie-card/movie-card.component';
import {PipesModule} from "src/app/core/pipes/pipes.module";


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
