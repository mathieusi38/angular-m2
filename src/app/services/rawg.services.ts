import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Games, Result } from '../models/interfaces';
import { Observable, from, map, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RawgService {
  constructor(private http: HttpClient) { }

  getTopGames(type: string, page: number, page_size: number): Observable<Result[]> {

    let token = environment.rawgKey;
    let url = 'https://api.rawg.io/api/games?key=' + token + '&page=' + page + '&page_size=' + page_size + '&ordering=-suggestions_count';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    
   return this.http.get<Games>(url, {headers: headers}).pipe(map((response: Games) => {
    return response.results;
   }));

  }

}