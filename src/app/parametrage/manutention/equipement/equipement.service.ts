import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Equipement} from "./equipement.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getEquipment(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.baseUrl}/equipements`)
  }
}
