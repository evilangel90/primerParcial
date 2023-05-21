import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{
  path: 'home',
  loadChildren: () =>
    import("./component/pages/home/home.module").then((m) => m.HomeModule),

}, {
  path: 'pokemon-lista',
  loadChildren: () =>
    import('./component/pokemon/pokemon-lista/pokemon-lista.module').then(
      (m) => m.PokemonListaModule
    ),
},
{
  path: 'pokemon-detalle/:id',
  loadChildren: () =>
    import('./component/pokemon/pokemon-detalle/pokemon-detalle.module').then(
      (m) => m.PokemonDetalleModule
    ),
},];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
