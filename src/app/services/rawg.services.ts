import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Games } from '../models/interfaces';

@Injectable()
export class RawgService {
  constructor(private http: HttpClient) { }

  getTopGames(type: string, page: number, page_size: number) {

    let token = environment.rawgKey;
    let url = 'https://api.rawg.io/api/'+ type + '?key=' + token + '&page=' + page + '&page_size=' + page_size + '&ordering=-suggestions_count';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    
   return this.http.get<Games>(url, {headers: headers});

  }

}