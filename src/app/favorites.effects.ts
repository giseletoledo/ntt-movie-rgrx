import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { FavoritesService } from './favorites.service';
import { addFavorite, removeFavorite } from './favorites.actions';

@Injectable()
export class FavoritesEffects {

  constructor(
    private actions$: Actions,
    private favoritesService: FavoritesService
  ) {}

  persistFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFavorite, removeFavorite),
      tap(() => {
        const favorites = this.favoritesService.getFavoriteIDs();
        //this.favoritesService.saveFavoritesToLocalStorage(favorites);
      })
    ),
    { dispatch: false }
  );
}
