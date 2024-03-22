import { Component, Input } from '@angular/core';
import { Movie } from '../core/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  @Input() movie: Movie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');
    if (imdbID) {
      this.movieService.getMovieDetails(imdbID).subscribe(movie => {
        this.movie = movie;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
