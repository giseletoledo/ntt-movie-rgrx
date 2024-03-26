import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites.actions';
import { Movie } from './core/movie';

export interface FavoritesState {
  favorites: string[]; // Agora armazena apenas os IDs dos filmes favoritos
}

export const initialState: FavoritesState = {
  favorites: []
};

export const favoritesReducer = createReducer(
  initialState,
  on(addFavorite, (state, { imdbID }) => ({
    ...state,
    favorites: [...state.favorites, imdbID]
  })),
  on(removeFavorite, (state, { imdbID }) => ({
    ...state,
    favorites: state.favorites.filter(id => id !== imdbID)
  }))
);


