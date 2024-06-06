import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {EquipeMarine} from "./equipe-marine-marine.model";
import {Equipe} from "../../manutention/equipe/equipe.model";

@Injectable({
  providedIn: 'root'
})
export class EquipeMarineService {
  baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {
  }

  createEquipe(equipe: EquipeMarine): Observable<EquipeMarine> {
    return this.http.post<EquipeMarine>(`${this.baseUrl}/saveequipesM`, equipe);
  }

  getEquipes(): Observable<EquipeMarine[]> {
    return this.http.get<EquipeMarine[]>(`${this.baseUrl}/equipesM`)

  }
  deleteEquipe(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteequipeM/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updateEquipe(equipe: EquipeMarine): Observable<EquipeMarine> {
    const url = `${this.baseUrl}/updateequipesM/${equipe.id}`;
    return this.http.put<EquipeMarine>(url, equipe)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
