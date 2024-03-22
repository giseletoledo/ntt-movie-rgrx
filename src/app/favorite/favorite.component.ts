import { Component, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;
  @Input() imdbID: string = '';


  constructor(private favoritesService: FavoritesService) {}

toggleFavorite(): void {
  this.isFavorite = !this.isFavorite;
  if (this.isFavorite) {
    this.favoritesService.addToFavorites(this.imdbID);
  } else {
    this.favoritesService.removeFromFavorites(this.imdbID);
  }
}

}
