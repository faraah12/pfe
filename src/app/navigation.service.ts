// navigation.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  goToParametrage(): void {
    this.router.navigate(['/parametrage']);
  }

  goToExploitation(): void {
    this.router.navigate(['/exploitation']);
  }

  goToAdministration(): void {
    this.router.navigate(['/administration']);
  }
}
