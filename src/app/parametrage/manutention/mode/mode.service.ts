import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Mode} from "./mode.model";

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getModes(): Observable<Mode[]> {
    return this.http.get<Mode[]>(`${this.baseUrl}/modes`)
  }
}
