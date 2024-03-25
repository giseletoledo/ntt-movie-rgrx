import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { MoviesState } from './movies.reducer';
import { Movie } from './core/movie';

export const selectMoviesState: MemoizedSelector<AppState, MoviesState> = createFeatureSelector<MoviesState>('movies');

export const selectAllMovies: MemoizedSelector<AppState, Movie[]> = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.movies  // Return the movies array
);





