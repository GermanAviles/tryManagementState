import { ActionReducerMap } from '@ngrx/store';
import { PokemonState } from './pokemon/pokemon.store';
import { pokemonReducer } from './pokemon/pokemon.reducer';

export interface AppState {
  pokemons: PokemonState
}


export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  pokemons: pokemonReducer
};