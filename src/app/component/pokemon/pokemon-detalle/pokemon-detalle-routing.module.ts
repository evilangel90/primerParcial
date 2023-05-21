import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetalleComponent } from './pokemon-detalle.component';

const routes: Routes = [{ path: '', component: PokemonDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetalleRoutingModule { }
