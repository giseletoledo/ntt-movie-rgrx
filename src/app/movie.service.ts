import { Injectable } from '@angular/core';
import { Movie } from './core/movie';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface MovieApiResponse {
  Search: Movie [];
  Error?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://www.omdbapi.com/'; 
  private apiKey = '7f301f97'

  constructor(private http: HttpClient) { }

  getMovieByTitle(title: string): Observable<Movie[]> {
    const url = `${this.apiUrl}?s=${title}&apikey=${this.apiKey}`;
  
    return this.http.get<any>(url).pipe(
      map(response => response.Search || []),
      catchError(error => {
        console.error('An error occurred:', error);
        throw new Error('Error fetching movies');
      })
    );
  }

  getMovieDetails(imdbID: string): Observable<Movie> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&i=${imdbID}`;
    return this.http.get<Movie>(url).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        throw new Error('Error fetching movie details');
      })
    );
  }

}

