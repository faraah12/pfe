import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModeDeTravail} from "../../manutention/mode-travail/mode-travail.model";
import {ModeTravailService} from "../../manutention/mode-travail/mode-travail.service";
import {ModeTravailMarineService} from "./mode-travail-marine.service";
import {ModeDeTravailMarine} from "./mode-travail-marine.model";

@Component({
  selector: 'app-mode-travail-marine',
  templateUrl: './mode-travail-marine.component.html',
  styleUrl: './mode-travail-marine.component.css'
})
export class ModeTravailMarineComponent implements OnInit{

  modeTravailForm!: FormGroup;
  modeTravailUpdateForm!: FormGroup;
  periodeSemaine: string[] = ['6/7', '7/7'];
  periodeJour: string[] = ['2/3', '3/3'];
  showModesTravail: boolean = false;
  modesTravail: ModeDeTravail[] = [];
  selectedModeTravail: ModeDeTravail | null = null;
  isUpdating: boolean = false; // Add a variable to track if user is updating

  constructor(private formBuilder: FormBuilder, private modeTravailService: ModeTravailMarineService) { }

  ngOnInit(): void {
    this.modeTravailForm = this.formBuilder.group({
      semaine: [''],
      jour: ['']
    });

    this.modeTravailUpdateForm = this.formBuilder.group({
      semaine: [''],
      jour: ['']
    });

    if (this.selectedModeTravail) {
      this.modeTravailUpdateForm.patchValue({
        semaine: this.selectedModeTravail.semaine,
        jour: this.selectedModeTravail.jour
      });
    }
  }

  onSubmit(): void {
    const formValue = this.modeTravailForm.value;

    if (this.selectedModeTravail) {
      // Update mode travail
      const updatedModeTravail: ModeDeTravail = {
        id: this.selectedModeTravail.id,
        semaine: formValue.semaine,
        jour: formValue.jour
      };

      this.updateModeTravail(updatedModeTravail);
    } else {
      // Check if the combination of semaine and jour already exists
      const alreadyExists = this.modesTravail.some(mode =>
        mode.semaine === formValue.semaine && mode.jour === formValue.jour);

      if (alreadyExists) {
        alert("Ce mode de travail existe déjà.");
        return;
      }

      // Create mode travail
      this.modeTravailService.createModeTravail(formValue)
        .subscribe(
          (response: ModeDeTravail) => {
            alert("Mode de travail créée avec succès !");
            this.modeTravailForm.reset(); // Reset the form after successful creation
          },
          error => {
            console.error('Erreur HTTP :', error);
            alert("Erreur lors de la création du mode de travail.");
          }
        );
    }
  }



  toggleModeTrvail(): void {
    this.showModesTravail = !this.showModesTravail;
    this.selectedModeTravail = null;
    if (this.showModesTravail) {
      this.getModesTravail();
    }
  }

  getModesTravail(): void {
    this.modeTravailService.getModesTravail().subscribe(
      modesTravail => {
        this.modesTravail = modesTravail;
      },
      error => {
        console.error('Erreur lors de la récupération des ModesDeTravail:', error);
      }
    );
  }

  deleteModeDeTravail(id: number | undefined){
    this.modeTravailService.deleteModeDeTravail(id).subscribe(
      () => {
        this.getModesTravail();
        alert("Le mode de travail a été supprimé avec succès !");
      },
      error => {
        console.error('Erreur lors de la suppression du mode de travail:', error);
        alert("Le mode de travail a été supprimé avec succès !");
      }
    );
  }

  updateModeTravail(modeTravail: ModeDeTravail): void {
    this.selectedModeTravail = modeTravail;
    this.isUpdating = true; // Set isUpdating to true when user clicks update button
    // Set values of update form
    this.modeTravailUpdateForm.patchValue({
      semaine: modeTravail.semaine,
      jour: modeTravail.jour
    });
  }

  onUpdateSubmit(): void {
    const formValue = this.modeTravailUpdateForm.value;

    if (this.selectedModeTravail) {
      const updatedModeTravail: ModeDeTravail = {
        id: this.selectedModeTravail.id,
        semaine: formValue.semaine,
        jour: formValue.jour
      };

      this.updateModeTravail(updatedModeTravail);
      this.modeTravailService.updateModeTravail(updatedModeTravail).subscribe(
        (updatedModeTravail: ModeDeTravail) => {
          const index = this.modesTravail.findIndex(mt => mt.id === updatedModeTravail.id);
          if (index !== -1) {
            this.modesTravail[index] = updatedModeTravail;
            alert("Mode de travail mis à jour avec succès !");
          }
        },
        error => {
          console.error('Erreur lors de la mise à jour du mode de travail:', error);
          alert("Mode de travail mis à jour avec succès");
        }
      );
    }
  }

  onCancelUpdate(): void {
    this.isUpdating = false; // Set isUpdating to false when user cancels update
  }
}

