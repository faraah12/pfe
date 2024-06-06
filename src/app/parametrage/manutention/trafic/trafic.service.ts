import { Injectable } from '@angular/core';
import {Trafic} from "./trafic.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TraficService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getTrafic(): Observable<Trafic[]> {
    return this.http.get<Trafic[]>(`${this.baseUrl}/trafics`)
  }
}
