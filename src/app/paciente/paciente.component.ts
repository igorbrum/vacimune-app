import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente = '';
  vacinas = '';
  /*_baseURLTomadas = 'http://localhost:8080/vacimune/api/vacinasTomadas/';
  _baseURLaTomar = 'http://localhost:8080/vacimune/api/vacinasATomar/';*/
  _baseURLTomadas = 'https://vacimune-api-dev.herokuapp.com/api/vacinasTomadas/';
  _baseURLaTomar = 'https://vacimune-api-dev.herokuapp.com/api/vacinasATomar/';
  
  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getPaciente(id);
    this.getVacinasTomar(id);
  }

  getPaciente(id){
    this.http.get<any>(this._baseURLTomadas+id).subscribe(data =>this.paciente = data);
  }

  getVacinasTomar(id){
    this.http.get<any>(this._baseURLaTomar+id).subscribe(data => this.vacinas = data);
  }

}
