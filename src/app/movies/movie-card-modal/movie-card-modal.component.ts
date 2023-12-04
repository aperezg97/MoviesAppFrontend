import {Component, Input} from '@angular/core';
import {Movie} from "src/app/core/models/movie";

@Component({
  selector: 'app-movie-card-modal',
  templateUrl: './movie-card-modal.component.html',
  styleUrls: ['./movie-card-modal.component.scss']
})
export class MovieCardModalComponent {
  @Input() movie?: Movie;
}
