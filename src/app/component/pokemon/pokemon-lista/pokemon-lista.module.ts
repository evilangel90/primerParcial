import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListaRoutingModule } from './pokemon-lista-routing.module';
import { PokemonListaComponent } from './pokemon-lista.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PokemonListaRoutingModule
  ]
})
export class PokemonListaModule { }
