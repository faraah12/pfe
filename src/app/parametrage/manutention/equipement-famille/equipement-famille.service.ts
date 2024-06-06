import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EquipementFamille} from "./equipement-famille.model";

@Injectable({
  providedIn: 'root'
})
export class EquipementFamilleService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getEquipementFamille(): Observable<EquipementFamille[]> {
    return this.http.get<EquipementFamille[]>(`${this.baseUrl}/equipementsFamille`)
  }
}
