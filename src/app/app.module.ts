import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ListaVacinasAplicadasComponent } from './lista-vacinas-aplicadas/lista-vacinas-aplicadas.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { IndexPesquisaComponent } from './index-pesquisa/index-pesquisa.component';

const routes:Routes = [
  {path:'vacinasaplicadas', component: ListaVacinasAplicadasComponent},
  {path: 'paciente/:id', component: PacienteComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: '', component: IndexPesquisaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaVacinasAplicadasComponent,
    PacienteComponent,
    IndexPesquisaComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
