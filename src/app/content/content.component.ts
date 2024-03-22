import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../core/movie';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  movies: Movie[] = [];
  movieTitle: string = ''; 
  movieDescription: string = ''; 
  defaultPosterUrl: string = 'assets/default-poster.png'; 
  isFilterActive: boolean = false;
  displayMovies: Movie[] = [];
  
  constructor(private movieService: MovieService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.fetchMovie();
  }
  
  fetchMovie(): void {
    if (this.movieTitle) {
      this.movieService.getMovieByTitle(this.movieTitle).subscribe(
        movies => {
          this.movies = movies ? movies.map(movie => ({
            ...movie,
            Poster: movie.Poster !== 'N/A' ? movie.Poster : this.defaultPosterUrl
          })) : [];
          this.updateDisplayMovies();
        },
        error => {
          console.error('Erro ao buscar filmes:', error);
        }
      );
    }
  }

  updateDisplayMovies(): void {
    if (this.isFilterActive) {
      const favoriteIDs = this.favoritesService.getFavoriteIDs();
      this.displayMovies = this.movies.filter(movie => favoriteIDs.includes(movie.imdbID));
    } else {
      this.displayMovies = this.movies;
    }
  }

  toggleFavoritesFilter(): void {
    this.isFilterActive = !this.isFilterActive;
    this.updateDisplayMovies();
  }
}
