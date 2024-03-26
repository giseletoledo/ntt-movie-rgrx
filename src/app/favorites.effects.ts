import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { FavoritesService } from './favorites.service';
import { addFavorite, removeFavorite } from './favorites.actions';

@Injectable()
export class FavoritesEffects {

  constructor(
    private actions$: Actions,
    private favoritesService: FavoritesService
  ) {}

  persistAddFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFavorite),
      tap(action => {
        this.favoritesService.addToFavorites(action.imdbID);
      })
    ),
    { dispatch: false }
  );

  persistRemoveFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFavorite),
      tap(action => {
        this.favoritesService.removeFromFavorites(action.imdbID);
      })
    ),
    { dispatch: false }
  );
}


