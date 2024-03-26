import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[Favorites] Add Favorite',
  props<{ imdbID: string }>()
);

export const removeFavorite = createAction(
  '[Favorites] Remove Favorite',
  props<{ imdbID: string }>()
);


