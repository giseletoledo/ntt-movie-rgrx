import { createReducer, on } from '@ngrx/store';
import { loadMoviesSuccess } from './movies.actions';
import { Movie } from './core/movie';

export interface MoviesState {
  movies: Movie[];
}

export const initialState: MoviesState = {
  movies: []
};


export const moviesReducer = createReducer(
    initialState,
    on(loadMoviesSuccess, (state, { movies }) => ({ ...state, movies }))
  );
  