import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ModeDeTravailMarine} from "./mode-travail-marine.model";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";
import {ModeDeTravail} from "../../manutention/mode-travail/mode-travail.model";

@Injectable({
  providedIn: 'root'
})
export class ModeTravailMarineService {
  baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {
  }

  createModeTravail(modetravail: ModeDeTravailMarine): Observable<ModeDeTravailMarine> {
    return this.http.post<ModeDeTravailMarine>(`${this.baseUrl}/saveModeTravailM`, modetravail);
  }

  getModesTravail(): Observable<ModeDeTravailMarine[]> {
    return this.http.get<ModeDeTravailMarine[]>(`${this.baseUrl}/modetravailsM`)
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
