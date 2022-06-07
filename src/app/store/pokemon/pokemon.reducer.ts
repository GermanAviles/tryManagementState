import { createReducer, on } from '@ngrx/store';
import * as pokemonActions from './pokemon.actions';
import { PokemonState } from './pokemon.store';

export const initialState: PokemonState = {
  loading: false,
  listado: [],
};

export const pokemonReducer = createReducer(
  initialState,
  on( pokemonActions.loadPokemons, (state) => ({ ...state, loading: true }) ),
  on( pokemonActions.loadedPokemons, (state, props) => ({ ...state, loading: false, listado: props.pokemons }) ),
)