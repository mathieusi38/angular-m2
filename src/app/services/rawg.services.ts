import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Games } from '../models/interfaces';

@Injectable()
export class RawgService {
  constructor(private http: HttpClient) { }

  getRawgData(type: string, page: number, page_size: number, ordering: string = 'rating') {

    let token = environment.rawgKey;
    let url = 'https://api.rawg.io/api/'+ type + '?key=' + token + '&page=' + page + '&page_size=' + page_size + '&ordering=' + ordering;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    
   return this.http.get<Games>(url, {headers: headers});

  }

  getGameInfo(id: number) {

    let token = environment.rawgKey;
    let url = 'https://api.rawg.io/api/games/' + id + '?key=' + token;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    
   return this.http.get<Games>(url, {headers: headers});

  }

}