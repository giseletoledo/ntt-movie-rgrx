import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { FavoritesService } from './favorites.service';


export const selectFavoriteMovies = createSelector(
  (state: AppState) => state.movies, 
  (movies: any,favoritesService: FavoritesService) => {
    return favoritesService.getFavorites(movies);
  }

);