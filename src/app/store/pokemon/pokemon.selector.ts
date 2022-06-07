import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PokemonState } from './pokemon.store';

export const selectPokemonsFeature = ( state: AppState ) => state.pokemons;

export const selectPokemonList = createSelector(
  selectPokemonsFeature, ( state: PokemonState ) => state.listado
);

export const selectPokemonLoading = createSelector(
  selectPokemonsFeature, ( state: PokemonState ) => state.loading
);