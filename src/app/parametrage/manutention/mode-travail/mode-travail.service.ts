import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ModeDeTravail } from "./mode-travail.model";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ModeTravailService {
  baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {
  }

  createModeTravail(modetravail: ModeDeTravail): Observable<ModeDeTravail> {
    return this.http.post<ModeDeTravail>(`${this.baseUrl}/saveModeTravail`, modetravail);
  }
  getModesTravail(): Observable<Array<ModeDeTravail>> {
    return this.http.get<ModeDeTravail[]>(`${this.baseUrl}/modetravails`)
  }

  deleteModeDeTravail(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deletemodetravail/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updateModeTravail(modetravail: ModeDeTravail): Observable<ModeDeTravail> {
    const url = `${this.baseUrl}/updatemodetravail/${modetravail.id}`;
    return this.http.put<ModeDeTravail>(url, modetravail)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
