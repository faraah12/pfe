// equipe.service.ts

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Equipe } from './equipe.model';
import {catchError, map, tap} from "rxjs/operators";
import {ModeTheorique} from "../mode-theorique/mode-theorique.model";
import {ModeDeTravail} from "../mode-travail/mode-travail.model";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {
  }

  createEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(`${this.baseUrl}/saveequipes`, equipe);
  }

  getEquipes(): Observable<Array<Equipe>> {
    return this.http.get<Equipe[]>(`${this.baseUrl}/equipes`)

  }
  deleteEquipe(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteequipe/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updateEquipe(equipe: Equipe): Observable<Equipe> {
    const url = `${this.baseUrl}/updateequipes/${equipe.id}`;
    return this.http.put<Equipe>(url, equipe)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

}
