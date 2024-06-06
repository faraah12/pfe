import { Injectable } from '@angular/core';
import {TypeDeTrafic} from "./type-de-trafic.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeDeTraficService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getTypeTrafic(): Observable<TypeDeTrafic[]> {
    return this.http.get<TypeDeTrafic[]>(`${this.baseUrl}/typetrafics`)
  }
}
