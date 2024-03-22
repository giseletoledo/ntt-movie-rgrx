import { Injectable } from '@angular/core';
import { Movie } from './core/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: { imdbID: string; isFavorite: boolean }[] = [];

  constructor() {
    const storedFavorites = localStorage.getItem('favoriteMovies');
    if (storedFavorites) {
      try {
        this.favorites = JSON.parse(storedFavorites);
      } catch (error) {
        console.error('Error parsing stored favorites:', error);
        this.favorites = []; 
      }
    } else {
      this.favorites = [];
    }
  }

  addToFavorites(imdbID: string): void {
    const existingFavorite = this.favorites.find(
      (favorite) => favorite.imdbID === imdbID
    );
    if (existingFavorite) {
      existingFavorite.isFavorite = true;
    } else {
      this.favorites.push({ imdbID, isFavorite: true });
    }
    this.saveFavorites();
  }

  removeFromFavorites(imdbID: string): void {
    this.favorites = this.favorites.filter((favorite) => favorite.imdbID !== imdbID);
    this.saveFavorites();
  }

  isFavorite(imdbID: string): boolean {
    return this.favorites.some((favorite) => favorite.imdbID === imdbID);
  }

  getFavoriteIDs(): string[] {
    return this.favorites.filter(favorite => favorite.isFavorite).map(favorite => favorite.imdbID);
  }

  getFavorites(movies: Movie[]): Movie[] {
    const favoriteIDs = this.getFavoriteIDs();
    return movies.filter((movie: Movie) => favoriteIDs.includes(movie.imdbID));
  }

  getFavoritesInList(movies: any[]): any[] {
    const favoriteIDs = this.getFavoriteIDs();
    console.log(movies.filter(movie => favoriteIDs.includes(movie.imdbID)))
    return movies.filter(movie => favoriteIDs.includes(movie.imdbID));
  }

  private saveFavorites(): void {
    localStorage.setItem('favoriteMovies', JSON.stringify(this.favorites));
  }
 
}
