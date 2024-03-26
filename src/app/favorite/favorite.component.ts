import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { addFavorite, removeFavorite } from '../favorites.actions';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;
  @Input() imdbID: string = '';

  constructor(private store: Store<AppState>) {}

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.store.dispatch(addFavorite({ imdbID: this.imdbID }));
    } else {
      this.store.dispatch(removeFavorite({ imdbID: this.imdbID }));
    }
  }
}



