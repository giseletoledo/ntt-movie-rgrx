import { Movie } from '../core/movie';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { selectFavoriteMovies } from '../favorites.selectors';
import { AppState } from '../app.reducer';
import { loadMovies } from '../movies.actions';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectAllMovies } from '../movies.selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

  export class ContentComponent implements OnInit {

    displayMovies$: Observable<Movie[]> | undefined;
    favoriteMovies$: Observable<Movie[]> | undefined;
    isFilterActive: boolean = false;
    searchControl = new  FormControl('');

    ngOnInit(): void {
        this.displayMovies$ = this.store.pipe(select(selectAllMovies));
        this.favoriteMovies$ = this.store.pipe(select(selectFavoriteMovies, this.favoritesService));
    }
   
    constructor(
      private store: Store<AppState>,
      private favoritesService: FavoritesService
    ) {}

    fetchMovies(): void {
      const searchTerm = this.searchControl.value
      if (searchTerm) {
        console.log("clicou");
        console.log(searchTerm); 
        this.store.dispatch(loadMovies({ title: searchTerm }));
      }
    }
  
    toggleFavoritesFilter(): void {
      this.isFilterActive = !this.isFilterActive;
    }
  }  

