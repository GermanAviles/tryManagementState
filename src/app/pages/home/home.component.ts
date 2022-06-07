import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemons, loadedPokemons } from '../../store/pokemon/pokemon.actions';
import { AppState } from '../../store/app.state';
import { delay, map, Observable } from 'rxjs';
import { selectPokemonLoading, selectPokemonList } from '../../store/pokemon/pokemon.selector';
import { PokemonService } from '../../shared/services/pokemon/pokemon.service';
import { Pokemon } from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  pokemons$: Observable<Pokemon[]> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.store.dispatch( loadPokemons() );

    this.loading$ = this.store.select( selectPokemonLoading );
    this.pokemons$ = this.store.select( selectPokemonList );

    this.pokemonService.pokemons().pipe( map( (res) => res.results), delay(3000) ).subscribe(
      (response: Pokemon[] ) => {
        this.store.dispatch( loadedPokemons( { pokemons: response } ) )
      }
    );
  }

}
