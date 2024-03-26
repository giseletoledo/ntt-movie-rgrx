import { createSelector } from '@ngrx/store';
import { selectAllMovies } from './movies.selectors'; // Suponha que você tenha um seletor para obter todos os filmes
import { FavoritesService } from './favorites.service';
import { AppState } from './app.reducer';
import { Movie } from './core/movie';

export const selectFavoriteMovies = createSelector(
  selectAllMovies, // Seletor para obter todos os filmes
  (movies: Movie[], _: FavoritesService) => {
    const favoritesService = new FavoritesService(); // Crie uma instância do serviço de favoritos
    return favoritesService.getFavorites(movies); // Use o serviço de favoritos para obter os filmes favoritos
  }
);


