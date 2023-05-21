import { Component, OnInit } from '@angular/core';
import { Observable, concatAll, concatMap, from, map, of } from 'rxjs';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/shared/pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css']
})
export class PokemonListaComponent implements OnInit {
  pokemones: IPokemon[] = [];
  private pagina = 0;
  private limite = 18;
  constructor(private readonly pokemonservice: PokemonService) {
  }
  ngOnInit(): void {
    this.obtenerPokemones()
  }

  private obtenerPokemones() {
    this.pokemonservice.listapokemon<IPokemon>(this.pagina, this.limite).subscribe({
      next: (value) => {
        from(value.results).pipe(
          map(valor => {
            this.pokemonservice.obtenerPokemon(valor.url).subscribe({ next: p => { valor.sprites = p.sprites; valor.id = p.id } })
            return valor;
          })
        ).subscribe({
          next: (data: any) => {
            this.pokemones.push(data);
          }
        })
      }
    })
  }
}
