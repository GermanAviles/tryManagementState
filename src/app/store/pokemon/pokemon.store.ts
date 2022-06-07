import { Pokemon } from '../../shared/models/pokemon.model';

export interface PokemonState {
  loading: boolean;
  listado: Pokemon[];
}