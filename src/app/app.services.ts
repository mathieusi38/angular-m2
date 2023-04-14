import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Superheroes } from './models/interfaces';
import { Observable, from } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getSuperHeroes(): Observable<Superheroes> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    
    return this.http.get<Superheroes>('https://superheroapi.com/api/2664752756999859/5', {headers: headers});
  }

}