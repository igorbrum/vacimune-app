import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PacienteInterface } from '../paciente-interface';

@Component({
  selector: 'app-index-pesquisa',
  templateUrl: './index-pesquisa.component.html',
  styleUrls: ['./index-pesquisa.component.css']
})
export class IndexPesquisaComponent implements OnInit {

  paciente = '';
  idPaciente = '';
  //_baseURL = 'http://localhost:8080/vacimune/api/vacinaAplicada/paciente/';
  _baseURL = 'https://vacimune-api.herokuapp.com/api/vacinaAplicada/vacina/paciente/';

  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  goToSearch(search:string){
    this._baseURL = this._baseURL+search;
    return this.http.get<PacienteInterface>(this._baseURL).subscribe(data => {
        const id = data[0].paciente.id;
        this.router.navigateByUrl('/paciente/'+id);
      });
  }
}
