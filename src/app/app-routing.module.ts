import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ContentgroupComponent } from './contentgroup/contentgroup.component';

const routes: Routes = [
  { path: '', redirectTo: '/contentgroup', pathMatch: 'full' },
  { path: 'contentgroup', component: ContentgroupComponent },
  { path: 'movies/:imdbID', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
