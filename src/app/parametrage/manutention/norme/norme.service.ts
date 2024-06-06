import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Norme} from "./norme.model";
import {catchError} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class NormeService {

  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }

  createNorme(norme: Norme, traficId: any, mainTheoriqueId: any, modeId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/saveNorme?traficId=${traficId}&mainTheoriqueId=${mainTheoriqueId}&modeId=${modeId}`, norme);
  }

  getNormes(): Observable<Norme[]> {
    return this.http.get<Norme[]>(`${this.baseUrl}/normes`)
  }
  downloadExcel(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/excel4`, { responseType: 'blob' });
  }

  deleteNorme(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteNorme/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updateNorme(norme: Norme, traficId: any, mainTheoriqueId: any, modeId: any): Observable<any> {
    const url = `${this.baseUrl}/updateNorme/${norme.id}?traficId=${traficId}&mainTheoriqueId=${mainTheoriqueId}&modeId=${modeId}`;
    return this.http.put<Norme>(url, norme)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
