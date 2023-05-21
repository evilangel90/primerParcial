import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokedex } from 'src/app/shared/interfaces/pokedex.interface';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/shared/pokemon.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {
  pokemon: IPokedex;
  constructor(private pokemonSvrc: PokemonService, private route: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.pokemonSvrc.detallePokemon(id).subscribe({
          next: value => {
            console.log(value);
            
            this.pokemon = value;
          }
        });
      },
    });
  }
  regresar() {
    this.location.back();
  }
}
