import { ActionReducerMap } from '@ngrx/store';
import { MoviesState, moviesReducer } from './movies.reducer';
import { FavoritesState, favoritesReducer } from './favorites.reducer';

export interface AppState {
  movies: MoviesState;
  favorites: FavoritesState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: moviesReducer,
  favorites: favoritesReducer
};
