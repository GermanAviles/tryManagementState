import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, delay, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { PokemonService } from '../../shared/services/pokemon/pokemon.service';

@Injectable()
export class PokemonEffects {

  loadPokemons$ = createEffect(
    () => this.actions$.pipe(
      ofType('[Home Page] load pokemons'),
      mergeMap(
        () => this.pokemonService.getPokemons().pipe(
          delay(3000),
          map(
            (response) => ({ type: '[Home Page] loaded success', pokemons: response.results }),
          ),
          catchError(() => of({ type: '[Home API] Pokemon Loaded Error' }) )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}