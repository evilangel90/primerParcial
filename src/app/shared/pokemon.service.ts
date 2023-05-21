import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginacion } from './interfaces/paginacion.interface';
import { IPokedex } from './interfaces/pokedex.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly pokemonApi = "https://pokeapi.co/api/v2"
  constructor(private readonly http: HttpClient) { }
  listapokemon<T>(offset: number, limit: number): Observable<IPaginacion<T>> {
    return this.http.get<IPaginacion<T>>(this.pokemonApi + "/pokemon" + "?offset=" + offset + "&limit=" + limit)
  }
  obtenerPokemon(url: string): Observable<IPokedex> {
    return this.http.get<IPokedex>(url)
  }
  detallePokemon(id: number): Observable<IPokedex> {
    return this.http.get<IPokedex>(`${this.pokemonApi}/pokemon/${id}`)
  }
}
