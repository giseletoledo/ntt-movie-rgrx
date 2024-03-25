import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FavoriteComponent } from './favorite/favorite.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContentgroupComponent } from './contentgroup/contentgroup.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FavoritesEffects } from './favorites.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CardComponent,
    FooterComponent,
    MovieDetailComponent,
    FavoriteComponent,
    ContentgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
     name: 'NgRx NTTMOVIE',
   }),

    EffectsModule.forRoot([MovieEffects]),
    EffectsModule.forRoot([FavoritesEffects]),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
