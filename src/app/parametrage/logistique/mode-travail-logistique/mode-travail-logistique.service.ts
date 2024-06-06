import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";
import {ModeDeTravailLogistique} from "./mode-travail-logistique.model";
import {HttpClient} from "@angular/common/http";
import {ModeDeTravail} from "../../manutention/mode-travail/mode-travail.model";

@Injectable({
  providedIn: 'root'
})
export class ModeTravailLogistiqueService {

  baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {
  }

  createModeTravail(modetravail: ModeDeTravailLogistique): Observable<ModeDeTravailLogistique> {
    return this.http.post<ModeDeTravailLogistique>(`${this.baseUrl}/saveModeTravailL`, modetravail);
  }

  getModesTravail(): Observable<ModeDeTravailLogistique[]> {
    return this.http.get<ModeDeTravailLogistique[]>(`${this.baseUrl}/modetravailsL`)
  }

  deleteModeDeTravail(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deletemodetravailL/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updateModeTravail(modetravail: ModeDeTravail): Observable<ModeDeTravail> {
    const url = `${this.baseUrl}/updatemodetravailL/${modetravail.id}`;
    return this.http.put<ModeDeTravail>(url, modetravail)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
