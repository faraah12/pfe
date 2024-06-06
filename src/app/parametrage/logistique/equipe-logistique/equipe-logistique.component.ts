import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Equipe} from "../../manutention/equipe/equipe.model";
import {EquipeService} from "../../manutention/equipe/equipe.service";
import {EquipeLogistique} from "./equipe-logistique.model";
import {EquipeLogistiqueService} from "./equipe-logistique.service";

@Component({
  selector: 'app-equipe-logistique',
  templateUrl: './equipe-logistique.component.html',
  styleUrl: './equipe-logistique.component.css'
})
export class EquipeLogistiqueComponent implements OnInit{
  equipeForm!: FormGroup;
  equipelUpdateForm!: FormGroup;
  equipes: Equipe[] = [];
  showEquipes: boolean = false;
  selectedEquipe: Equipe | null = null;
  isUpdating: boolean = false;
  constructor(private formBuilder: FormBuilder, private equipeService: EquipeLogistiqueService) {}

  ngOnInit(): void {
    this.equipeForm = this.formBuilder.group({
      name: [null, Validators.required],
      responsable: [null, Validators.required],
      fonction: [null, Validators.required],
    });
    this.equipelUpdateForm = this.formBuilder.group({
      name: [null, Validators.required],
      responsable: [null, Validators.required],
      fonction: [null, Validators.required],
    });
    if (this.selectedEquipe) {
      this.equipelUpdateForm.patchValue({
        name: this.selectedEquipe.name,
        responsable: this.selectedEquipe.responsable,
        fonction: this.selectedEquipe.fonction
      });
    }
  }

  onSubmit(): void {
    const formValue = this.equipeForm.value;
    if (this.selectedEquipe) {
      const updatedEquipe: Equipe = {
        id: this.selectedEquipe.id,
        name: formValue.name,
        responsable: formValue.responsable,
        fonction: formValue.fonction
      };
      this.updateEquipe(updatedEquipe);
    } else {
      // Check if the name already exists
      const nameExists = this.equipes.some(equipe => equipe.name === formValue.name);

      if (nameExists) {
        alert("Le nom de l'équipe existe déjà. Veuillez en choisir un autre.");
        return;
      }

      this.equipeService.createEquipe(formValue).subscribe(
        data => {
          alert("Équipe créée avec succès !");
          this.getEquipes();
        },
        err => {
          console.error('Erreur serveur:', err);
          alert("Équipe créée avec succès");
        }
      );
    }
  }

  toggleEquipes(): void {
    this.showEquipes = !this.showEquipes;
    if (this.showEquipes) {
      this.getEquipes();
    }
  }

  getEquipes(): void {
    this.equipeService.getEquipes().subscribe(
      equipes => {
        this.equipes = equipes;
      },
      error => {
        console.error('Erreur lors de la récupération des équipes:', error);
      }
    );
  }
  deleteEquipe(id: number | undefined){
    this.equipeService.deleteEquipe(id).subscribe(
      () => {
        this.getEquipes();
        alert("Le mode de travail a été supprimé avec succès !");
      },
      error => {
        console.error('Erreur lors de la suppression du mode de travail:', error);
        alert("L'equipe a été supprimé avec succès");
      }
    );
  }
  // Component class
  updateEquipe(equipe: Equipe): void {
    this.selectedEquipe = equipe;
    this.isUpdating = true;
    this.equipelUpdateForm.patchValue({
      name: equipe.name,
      responsable: equipe.responsable,
      fonction: equipe.fonction,
    });
  }

  onUpdateSubmit(): void {
    const formValue = this.equipelUpdateForm.value;

    if (this.selectedEquipe) {
      const updatedEquipe: Equipe = {
        id: this.selectedEquipe.id,
        name: formValue.name,
        responsable: formValue.responsable,
        fonction: formValue.fonction,
      };

      this.equipeService.updateEquipe(updatedEquipe).subscribe(
        (updatedEquipe: Equipe) => {
          const index = this.equipes.findIndex(mt => mt.id === updatedEquipe.id);
          if (index !== -1) {
            this.equipes[index] = updatedEquipe;
            alert("Équipe mise à jour avec succès !");
          }
        },
        error => {
          alert("Équipe mise à jour avec succès");
        }
      );

      this.isUpdating = false; // Reset updating state
      this.equipelUpdateForm.reset(); // Reset the update form
    }
  }

  onCancelUpdate(): void {
    this.isUpdating = false;
  }
}
