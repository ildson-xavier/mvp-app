import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url: string;

  params = new HttpParams()
    .set('format', 'json')
    .set('state', 'SP')
    .set('place_type', 'state');

  //Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'format': 'json'
    })
  }

  constructor(private http: HttpClient) { }

  getByState(): Observable<any> {

    this.url = 'https://brasil.io/api/dataset/covid19/caso_full/data/?format=json';

    try {
      console.log(`GETCOVID - I am sever `);
      return this.http.get(this.url, {params: this.params}) //, this.httpOptions)
      
    }
    catch (error) {
      return error;
    }
  }
}