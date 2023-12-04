import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MoviesService} from "src/app/core/services/movies.service";
import {HttpClientModule} from "@angular/common/http";
import {MovieCardComponent} from './movie-card/movie-card.component';
import {PipesModule} from "src/app/core/pipes/pipes.module";
import {MultiSelectModule} from 'primeng/multiselect';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CategoriesService} from "src/app/core/services/categories.service";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import { MovieCardModalComponent } from './movie-card-modal/movie-card-modal.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    MovieCardModalComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    PipesModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    DialogModule
  ],
  providers: [
    MoviesService,
    CategoriesService
  ]
})
export class MoviesModule {
}
