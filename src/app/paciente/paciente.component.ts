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
  _baseURL = 'http://localhost:8080/vacimune/api/vacinaAplicada/paciente/';
  
  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get<any>(this._baseURL+id).subscribe(data => this.paciente = data);
  }

}
