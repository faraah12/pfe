import { Injectable } from '@angular/core';
import {ModeTheoriqueMarine} from "./mode-theorique-marine.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {ModeTheorique} from "../../manutention/mode-theorique/mode-theorique.model";

@Injectable({
  providedIn: 'root'
})
export class ModeTheoriqueMarineService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }

  createModeTheorique(modeTheorique: ModeTheoriqueMarine, prestationId: any, typeTraficId: any, traficId: any, fonctionsId: any, equipementFamilleId: any, equipementId: any, accessoireId: any): Observable<any> {
    return this.http.post<ModeTheoriqueMarine>(`${this.baseUrl}/saveMainTheorique?prestationId=${prestationId}&typeTraficId=${typeTraficId}&traficId=${traficId}&fonctionsId=${fonctionsId}&equipementFamilleId=${equipementFamilleId}&equipementId=${equipementId}&accessoireId=${accessoireId}`, modeTheorique);
  }
  getmainsTheorique(): Observable<ModeTheoriqueMarine[]> {
    return this.http.get<ModeTheoriqueMarine[]>(`${this.baseUrl}/maintheoriquesM`)
  }
  deleteMain(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteMainTheoriqueM/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updateModeTheorique(modeTheorique: ModeTheorique, prestationId: any, typeTraficId: any, traficId: any, fonctionsId: any, equipementFamilleId: any, equipementId: any, accessoireId: any): Observable<any> {
    const url = `${this.baseUrl}/updateMainTheoriqueM/${modeTheorique.id}?prestationId=${prestationId}&typeTraficId=${typeTraficId}&traficId=${traficId}&fonctionsId=${fonctionsId}&equipementFamilleId=${equipementFamilleId}&equipementId=${equipementId}&accessoireId=${accessoireId}`;
    return this.http.put<ModeTheorique>(url, modeTheorique)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
