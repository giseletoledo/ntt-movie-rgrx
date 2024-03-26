import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../core/movie';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() movie: Movie | undefined;
  isFavorite: boolean = false;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    if (this.movie) {
      this.isFavorite = this.favoritesService.isFavorite(this.movie.imdbID);
    }
  }

  toggleFavorite(): void {
    if (this.movie) {
      if (this.isFavorite) {
        this.favoritesService.removeFromFavorites(this.movie.imdbID);
      } else {
        this.favoritesService.addToFavorites(this.movie.imdbID);
      }
      this.isFavorite = !this.isFavorite;
    }
  }
}



