import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { MoviesState } from './movies.reducer';

export const selectMoviesState = createFeatureSelector<AppState, MoviesState>('movies');

export const selectAllMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.movies
);

export const selectMoviesByTitle = (title: string) => createSelector(
  selectMoviesState, 
  (moviesState: MoviesState) => moviesState.movies.filter(movie => movie.Title.includes(title))
);






