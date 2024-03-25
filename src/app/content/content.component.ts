import { Movie } from '../core/movie';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAllMovies, selectMovies } from '../movies.selectors';
import { loadMovies } from '../movies.actions';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  movies$: Observable<Movie[]> | undefined;
  displayMovies$: Observable<Movie[]> | undefined;
  movieTitle: string = ''; 
  isFilterActive: boolean = false;

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.fetchMovies();
    this.movies$ = this.store.pipe(select(selectAllMovies));


    this.displayMovies$ = this.store.pipe(select(selectFavoriteMovies));
  }
 
  fetchMovies(): void {
    if (this.movieTitle) {
      this.store.dispatch(loadMovies({ title: this.movieTitle }));
    }
  }


  toggleFavoritesFilter(): void {
    this.isFilterActive = !this.isFilterActive;
  }
}
function selectFavoriteMovies(state: object): Movie[] {
  throw new Error('Function not implemented.');
}

