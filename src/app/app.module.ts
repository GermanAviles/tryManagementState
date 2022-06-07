import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/pokemon/pokemon.reducer';
import { ROOT_REDUCER } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    StoreModule.forRoot( ROOT_REDUCER )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
