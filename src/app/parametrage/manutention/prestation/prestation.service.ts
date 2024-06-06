import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanDeRoulement} from "../plan-roulement/plan-roulement.model";
import {Prestation} from "./prestation.model";

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getPrestation(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(`${this.baseUrl}/prestations`)
  }
}
