import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-vacinas-aplicadas',
  templateUrl: './lista-vacinas-aplicadas.component.html',
  styleUrls: ['./lista-vacinas-aplicadas.component.css']
})
export class ListaVacinasAplicadasComponent implements OnInit {

  _baseUrl = 'https://vacimune-api.herokuapp.com/api/vacinaAplicada';
  vacinas = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this._baseUrl)
    .subscribe(data => this.vacinas = data)
  }

}
