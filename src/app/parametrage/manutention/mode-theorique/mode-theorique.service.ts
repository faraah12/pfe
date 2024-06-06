import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ModeTheorique} from "./mode-theorique.model";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ModeTheoriqueService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }

  createModeTheorique(modeTheorique: ModeTheorique, prestationId: any, typeTraficId: any, traficId: any, fonctionsId: any, equipementFamilleId: any, equipementId: any, accessoireId: any): Observable<any> {
    return this.http.post<ModeTheorique>(`${this.baseUrl}/saveMainTheorique?prestationId=${prestationId}&typeTraficId=${typeTraficId}&traficId=${traficId}&fonctionsId=${fonctionsId}&equipementFamilleId=${equipementFamilleId}&equipementId=${equipementId}&accessoireId=${accessoireId}`, modeTheorique);
  }
  getmainsTheorique(): Observable<Array<ModeTheorique>> {
    return this.http.get<ModeTheorique[]>(`${this.baseUrl}/maintheoriques`)

  }
  downloadExcel(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/excel3`, { responseType: 'blob' });
  }

  deleteMain(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteMainTheorique/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updateModeTheorique(modeTheorique: ModeTheorique, prestationId: any, typeTraficId: any, traficId: any, fonctionsId: any, equipementFamilleId: any, equipementId: any, accessoireId: any): Observable<any> {
    const url = `${this.baseUrl}/updateMainTheorique/${modeTheorique.id}?prestationId=${prestationId}&typeTraficId=${typeTraficId}&traficId=${traficId}&fonctionsId=${fonctionsId}&equipementFamilleId=${equipementFamilleId}&equipementId=${equipementId}&accessoireId=${accessoireId}`;
    return this.http.put<ModeTheorique>(url, modeTheorique)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

}
