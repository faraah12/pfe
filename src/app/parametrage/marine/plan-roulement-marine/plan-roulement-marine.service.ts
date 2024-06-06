import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import {PlanDeRoulementMarine} from "./plan-roulement-marine.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanDeRoulement} from "../../manutention/plan-roulement/plan-roulement.model";

@Injectable({
  providedIn: 'root'
})
export class PlanRoulementMarineService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  createPlanDeRoulement(planDeRoulement: PlanDeRoulementMarine, equipeId: any, modeDeTravailId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/savePlanM?equipeId=${equipeId}&modeDeTravailId=${modeDeTravailId}`, planDeRoulement);
  }
  getPlans(): Observable<PlanDeRoulementMarine[]> {
    return this.http.get<PlanDeRoulementMarine[]>(`${this.baseUrl}/plansM`)
  }
  deletePlan(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteplanM/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updatePlanRoulement(planRoulement: PlanDeRoulementMarine, equipeId: any, modeDeTravailId: any): Observable<any> {
    const url = `${this.baseUrl}/updateplanM/${planRoulement.id}?equipeId=${equipeId}&modeDeTravailId=${modeDeTravailId}`;
    return this.http.put<PlanDeRoulementMarine>(url, planRoulement)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
