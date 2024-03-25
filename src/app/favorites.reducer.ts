import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites.actions';
import { Movie } from './core/movie';

export interface FavoritesState {
  favorites: Movie[];
}

export const initialState: FavoritesState = {
  favorites: []
};

export const favoritesReducer = createReducer(
  initialState,
  on(addFavorite, (state, { movie }) => ({ ...state, favorites: [...state.favorites, movie] })),
  on(removeFavorite, (state, { imdbID }) => ({ ...state, favorites: state.favorites.filter(movie => movie.imdbID !== imdbID) }))
);
