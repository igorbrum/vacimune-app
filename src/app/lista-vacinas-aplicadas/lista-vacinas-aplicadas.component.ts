import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-vacinas-aplicadas',
  templateUrl: './lista-vacinas-aplicadas.component.html',
  styleUrls: ['./lista-vacinas-aplicadas.component.css']
})
export class ListaVacinasAplicadasComponent implements OnInit {

  vacinas = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://vacimune-api.herokuapp.com/api/vacinaAplicada')
    .subscribe(data => this.vacinas = data)
  }

}
