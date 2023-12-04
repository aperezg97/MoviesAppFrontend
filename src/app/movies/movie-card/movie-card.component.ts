import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from "src/app/core/models/movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie?: Movie;
  @Output() openMovieDetailModal: EventEmitter<Movie> = new EventEmitter<Movie>();

  openMovieDetails() {
    this.openMovieDetailModal.emit(this.movie);
  }

}
