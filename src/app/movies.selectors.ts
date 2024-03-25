import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { MoviesState } from './movies.reducer';

// Primeiro, criamos um seletor de feature para a parte do estado relacionada aos filmes
export const selectMoviesState = createFeatureSelector<AppState, MoviesState>('movies');

// Em seguida, criamos o seletor para extrair a lista de filmes do estado dos filmes
export const selectAllMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.movies
);

export const selectMoviesByTitle = (title: string) => createSelector(
  selectMoviesState, // Seleciona o estado de filmes
  (moviesState: MoviesState) => moviesState.movies.filter(movie => movie.Title.includes(title))
);






