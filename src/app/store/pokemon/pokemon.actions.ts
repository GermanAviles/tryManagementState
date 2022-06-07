import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../../shared/models/pokemon.model';

export const loadPokemons = createAction(
  '[Home Page] load pokemons'
);

export const loadedPokemons = createAction(
  '[Home Page] loaded success',
  props<{ pokemons:  Pokemon[] }>()
);