import { createAction, props } from '@ngrx/store';
import { Movie } from './core/movie';

export const loadMovies = createAction('[Movies] Load Movies', props<{title: string}>);
export const loadMoviesSuccess = createAction('[Movies] Load Movies Success', props<{movies: Movie[]}>());
export const loadMoviesFailure = createAction('[Movies] Load Movies Failure', props<{ error: any }>());
