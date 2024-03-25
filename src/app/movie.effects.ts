import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from './movie.service';
import { loadMovies, loadMoviesSuccess, loadMoviesFailure } from './movies.actions';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe( 
      ofType(loadMovies),
      switchMap(action =>
        this.movieService.getMovieByTitle(action.title).pipe(
          map(movies => loadMoviesSuccess({ movies })),
          catchError(error => of(loadMoviesFailure({ error })))
        )
      )
    )
  );
}
