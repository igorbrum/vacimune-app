import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WatsonService {

  private baseURL: string = "http://vacimune-api.herokuapp.com/api/chat";

  constructor(private http: Http) { }

  public getResponse(query: string) {
    let data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    }

    return this.http
      .post(`${this.baseURL}`, data)
      .map(res => {
        return res.json()
      })
  }

}
