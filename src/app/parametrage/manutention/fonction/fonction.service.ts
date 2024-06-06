import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fonction} from "./fonction.model";

@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getFonctions(): Observable<Fonction[]> {
    return this.http.get<Fonction[]>(`${this.baseUrl}/fonctions`)
  }
}
