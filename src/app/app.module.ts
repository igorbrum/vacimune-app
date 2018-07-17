import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'  
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ListaVacinasAplicadasComponent } from './lista-vacinas-aplicadas/lista-vacinas-aplicadas.component';
import { PacienteComponent } from './paciente/paciente.component';
import { IndexPesquisaComponent } from './index-pesquisa/index-pesquisa.component';

import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessageFormComponent } from './chatbot/message-form/message-form.component';
import { MessageListComponent } from './chatbot/message-list/message-list.component';
import { MessageItemComponent } from './chatbot/message-item/message-item.component';
import { MapsComponent } from './maps/maps.component';

import 'rxjs/add/operator/map';
import { AgmCoreModule } from '@agm/core';
import { WatsonService } from './services/watson.service';
import { EapvComponent } from './eapv/eapv.component';

const routes:Routes = [
  {path:'vacinasaplicadas', component: ListaVacinasAplicadasComponent},
  {path: 'paciente/:id', component: PacienteComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: '', component: IndexPesquisaComponent},
  {path: 'chatbot', component: ChatbotComponent},
  {path: 'maps',component:MapsComponent},
  {path: 'eapv',component:EapvComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ListaVacinasAplicadasComponent,
    PacienteComponent,
    IndexPesquisaComponent,
    ChatbotComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageItemComponent,
    MapsComponent,
    EapvComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApRJDSJ4Dd4KKRNNvSQWWdEkyDwZ2nNIo',
      libraries: ["places"]
    })
  ],
  providers: [WatsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
