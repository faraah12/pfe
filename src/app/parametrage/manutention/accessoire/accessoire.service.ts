import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accessoire} from "./accessoire.model";

@Injectable({
  providedIn: 'root'
})
export class AccessoireService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getAccessoires(): Observable<Accessoire[]> {
    return this.http.get<Accessoire[]>(`${this.baseUrl}/accessoires`)
  }
}
