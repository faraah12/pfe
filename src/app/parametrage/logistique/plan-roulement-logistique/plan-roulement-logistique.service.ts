import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlanDeRoulementLogistique} from "./plan-roulement-logistique.model";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {PlanDeRoulementMarine} from "../../marine/plan-roulement-marine/plan-roulement-marine.model";

@Injectable({
  providedIn: 'root'
})
export class PlanRoulementLogistiqueService {

  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  createPlanDeRoulement(planDeRoulement:PlanDeRoulementLogistique, equipeId: any, modeDeTravailId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/savePlanL?equipeId=${equipeId}&modeDeTravailId=${modeDeTravailId}`, planDeRoulement);
  }
  getPlans(): Observable<PlanDeRoulementLogistique[]> {
    return this.http.get<PlanDeRoulementLogistique[]>(`${this.baseUrl}/plansL`)
  }
  deletePlan(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteplanL/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updatePlanRoulement(planRoulement: PlanDeRoulementLogistique, equipeId: any, modeDeTravailId: any): Observable<any> {
    const url = `${this.baseUrl}/updateplanL/${planRoulement.id}?equipeId=${equipeId}&modeDeTravailId=${modeDeTravailId}`;
    return this.http.put<PlanDeRoulementLogistique>(url, planRoulement)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
