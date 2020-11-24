// IMPORTS:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// COMPONENTES (declarations):
// app:
import { AppComponent } from './app.component';
// rutas:
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscaTuMascotaComponent } from './componentes/busca-tu-mascota/busca-tu-mascota.component';
import { ReportaUnaMascotaComponent } from './componentes/reporta-una-mascota/reporta-una-mascota.component';
import { CasosFelicesComponent } from './componentes/casos-felices/casos-felices.component';
import { IngresaComponent } from './componentes/ingresa/ingresa.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent,
    HomeComponent,
    BuscaTuMascotaComponent,
    ReportaUnaMascotaComponent,
    CasosFelicesComponent,
    IngresaComponent,
    RegistrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
