import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';
import { RouterModule } from '@angular/router';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';



@NgModule({
  declarations: [PokemonListaComponent, PokemonDetalleComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PokemonListaComponent, PokemonDetalleComponent]
})
export class PokemonModule { }
