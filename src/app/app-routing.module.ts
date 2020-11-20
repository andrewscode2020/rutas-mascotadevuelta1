import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaTuMascotaComponent } from './componentes/busca-tu-mascota/busca-tu-mascota.component';
import { CasosFelicesComponent } from './componentes/casos-felices/casos-felices.component';
import { HomeComponent } from './componentes/home/home.component';
import { IngresaComponent } from './componentes/ingresa/ingresa.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { ReportaUnaMascotaComponent } from './componentes/reporta-una-mascota/reporta-una-mascota.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buscaTuMascota',
    component: BuscaTuMascotaComponent
  },
    {
    path: 'reportaUnaMascota',
    component: ReportaUnaMascotaComponent
  },
  {
    path: 'casosFelices',
    component: CasosFelicesComponent
  },
    {
    path: 'ingresa',
    component: IngresaComponent
  },
  {
    path: 'registrate',
    component: RegistrateComponent
  },
  {
    path: '**',
    component: PaginaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
