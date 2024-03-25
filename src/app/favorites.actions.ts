import { createAction, props } from '@ngrx/store';
import { Movie } from './core/movie';

export const addFavorite = createAction('[Favorites] Add Favorite', props<{ movie: Movie }>());
export const removeFavorite = createAction('[Favorites] Remove Favorite', props<{ imdbID: string }>());
