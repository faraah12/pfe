import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanDeRoulement } from "./plan-roulement.model";
import { Observable } from "rxjs";
import {catchError} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class PlanDeRoulementService {

  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  createPlanDeRoulement(planDeRoulement: PlanDeRoulement, equipeId: any, modeDeTravailId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/savePlan?equipeId=${equipeId}&modeDeTravailId=${modeDeTravailId}`, planDeRoulement);
  }
  getPlans(): Observable<Array<PlanDeRoulement>> {
    return this.http.get<PlanDeRoulement[]>(`${this.baseUrl}/plans`)
  }
  downloadExcel(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/excel2`, { responseType: 'blob' });
  }

  deletePlan(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/deleteplan/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  updatePlanRoulement(planRoulement: PlanDeRoulement, equipeId: any, modeDeTravailId: any): Observable<any> {
    const url = `${this.baseUrl}/updateplan/${planRoulement.id}?equipeId=${equipeId}&modeDeTravailId=${modeDeTravailId}`;
    return this.http.put<PlanDeRoulement>(url, planRoulement)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
