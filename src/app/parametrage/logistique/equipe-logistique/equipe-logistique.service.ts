import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EquipeLogistique} from "./equipe-logistique.model";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {Equipe} from "../../manutention/equipe/equipe.model";

@Injectable({
  providedIn: 'root'
})
export class EquipeLogistiqueService {

  baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {
  }

  createEquipe(equipe: EquipeLogistique): Observable<EquipeLogistique> {
    return this.http.post<EquipeLogistique>(`${this.baseUrl}/saveequipesL`, equipe);
  }

  getEquipes(): Observable<EquipeLogistique[]> {
    return this.http.get<EquipeLogistique[]>(`${this.baseUrl}/equipesL`)

  }

  deleteEquipe(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteequipeL/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

  updateEquipe(equipe: EquipeLogistique): Observable<EquipeLogistique> {
    const url = `${this.baseUrl}/updateequipesL/${equipe.id}`;
    return this.http.put<EquipeLogistique>(url, equipe)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
