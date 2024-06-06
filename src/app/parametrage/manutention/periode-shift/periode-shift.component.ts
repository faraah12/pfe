

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker'; // Importation de MatDatepickerInputEvent
import { merge } from 'rxjs';
// import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-periode-shift',
  templateUrl: './periode-shift.component.html',
  styleUrls: ['./periode-shift.component.css']
})
export class PeriodeShiftComponent implements OnInit {
  periodeShiftForm!: FormGroup;

  shift1Normal: FormControl = new FormControl('', [Validators.required]);
  shift2Normal: FormControl = new FormControl('', [Validators.required]);
  shift3Normal: FormControl = new FormControl('', [Validators.required]);
  shift1Ramadan: FormControl = new FormControl('', [Validators.required]);
  shift2Ramadan: FormControl = new FormControl('', [Validators.required]);
  shift3Ramadan: FormControl = new FormControl('', [Validators.required]);

  // Déclaration des contrôles pour les dates de début et de fin du Ramadan
  dateDebutRamadan: FormControl = new FormControl('', [Validators.required]);
  dateFinRamadan: FormControl = new FormControl('', [Validators.required]);

  // Autres déclarations...
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.periodeShiftForm = this.formBuilder.group({
      shift1Normal: this.shift1Normal,
      shift2Normal: this.shift2Normal,
      shift3Normal: this.shift3Normal,
      shift1Ramadan: this.shift1Ramadan,
      shift2Ramadan: this.shift2Ramadan,
      shift3Ramadan: this.shift3Ramadan,
      dateDebutRamadan: this.dateDebutRamadan, // Ajout des contrôles de formulaire pour les dates
      dateFinRamadan: this.dateFinRamadan
    });
  }

  validateTimingFormat(control: AbstractControl): { [key: string]: any } | null {
    const timingPattern = /^(0?[0-9]|1[0-9]|2[0-3])\sà\s(0?[0-9]|1[0-9]|2[0-3])$/;
    if (control.value && !timingPattern.test(control.value)) {
      return { invalidTimingFormat: true };
    }
    return null;
  }

  // Méthode pour gérer les événements de datepicker pour les dates de début et de fin du Ramadan
  handleDatepickerEvent(event: MatDatepickerInputEvent<Date>): void {
    console.log('Datepicker event:', event.value);
  }
}



