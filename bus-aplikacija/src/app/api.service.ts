import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Buss} from './buss';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private busesUrl = 'api/buses';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

    getHeroes (): Observable<Buss[]> {
      return this.http.get<Buss[]>(this.busesUrl);
    }

    getHero(id: number): Observable<Buss> {
      const url = `${this.busesUrl}/${id}`;
      return this.http.get<Buss>(url);
    }

    addHero (bus: Buss): Observable<Buss> {
      return this.http.post<Buss>(this.busesUrl, bus, this.httpOptions);
    }

    deleteHero (hero: Buss | number): Observable<Buss> {
      const id = typeof hero === 'number' ? hero : hero.id;
      const url = `${this.busesUrl}/${id}`;
    
      return this.http.delete<Buss>(url, this.httpOptions);
    }

    updateHero (hero: Buss): Observable<any> {
      return this.http.put(this.busesUrl, hero, this.httpOptions);
    }

    updateUser(user: Buss): Observable<Buss>{
      const url = `${this.busesUrl}/${user.id}`;
      return this.http.put<Buss>(this.busesUrl, user, this.httpOptions);
    }

}

