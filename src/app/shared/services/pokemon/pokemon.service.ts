import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { endpoints } from '../../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient ) { }

  pokemons(): Observable<any> {
    const url = `${environment.api}${ endpoints.pokemon }?limit=30`;
    return this.http.get<any>(url);
  }

}
