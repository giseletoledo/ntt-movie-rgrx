import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Movie } from '../core/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() imageUrl: string = ''; 
  @Input() title: string = ''; 
  @Input() year: string = ''; 
  @Input() isFavorite: boolean = false;
  @Input() imdbID: string = '';
  @Input() movie: Movie | undefined;
  selectedMovie: Movie | undefined;

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie; 
  } 
}
