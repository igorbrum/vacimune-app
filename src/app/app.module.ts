import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ListaVacinasAplicadasComponent } from './lista-vacinas-aplicadas/lista-vacinas-aplicadas.component';
import { PacienteComponent } from './paciente/paciente.component';
import { IndexPesquisaComponent } from './index-pesquisa/index-pesquisa.component';

import { ChatbotComponent } from './chatbot/chatbot.component';

const routes:Routes = [
  {path:'vacinasaplicadas', component: ListaVacinasAplicadasComponent},
  {path: 'paciente/:id', component: PacienteComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: '', component: IndexPesquisaComponent},
  {path: 'chatbot', component: ChatbotComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaVacinasAplicadasComponent,
    PacienteComponent,
    IndexPesquisaComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
