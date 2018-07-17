import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eapv',
  templateUrl: './eapv.component.html',
  styleUrls: ['./eapv.component.css']
})
export class EapvComponent implements OnInit {

  sintomas = '';
  vacinas = '';
  _baseURLVacinas = "https://vacimune-api-dev.herokuapp.com/api/vacina";
  _baseURLSintoma = "https://vacimune-api-dev.herokuapp.com/api/eapv";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.http.get<any>(this._baseURLSintoma).subscribe(data =>this.sintomas = data);
    //this.http.get<any>(this._baseURLVacinas).subscribe(data =>this.vacinas = data);
  }

}
