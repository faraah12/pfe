import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModeDeTravail} from "../../manutention/mode-travail/mode-travail.model";
import {Equipe} from "../../manutention/equipe/equipe.model";
import {PlanDeRoulement} from "../../manutention/plan-roulement/plan-roulement.model";
import {PlanDeRoulementService} from "../../manutention/plan-roulement/plan-roulement.service";
import {EquipeService} from "../../manutention/equipe/equipe.service";
import {ModeTravailService} from "../../manutention/mode-travail/mode-travail.service";
import {ModeDeTravailMarine} from "../mode-travail-marine/mode-travail-marine.model";
import {EquipeMarine} from "../equipe-marine/equipe-marine-marine.model";
import {PlanRoulementMarineService} from "./plan-roulement-marine.service";
import {EquipeMarineService} from "../equipe-marine/equipe-marine.service";
import {ModeTravailMarineService} from "../mode-travail-marine/mode-travail-marine.service";
import {PlanDeRoulementMarine} from "./plan-roulement-marine.model";

@Component({
  selector: 'app-plan-roulement-marine',
  templateUrl: './plan-roulement-marine.component.html',
  styleUrl: './plan-roulement-marine.component.css'
})
export class PlanRoulementMarineComponent {
  planDeRoulementForm!: FormGroup;
  planDeRoulementUpdateForm!: FormGroup;
  periods: string[] = ['mois', 'semaine'];
  Shifts: string[] = ['shift1', 'shift2','shift3']
  modesDeTravail: ModeDeTravailMarine[] = [];
  equipes: EquipeMarine[] = [];
  showPlans: boolean = false;
  Plans:PlanDeRoulementMarine[]=[];
  selectedplanDeRoulement: PlanDeRoulementMarine | null = null;
  isUpdating: boolean = false;

  constructor(private formBuilder: FormBuilder, private planDeRoulementService: PlanRoulementMarineService, private equipeService: EquipeMarineService,private  modeTravailService:ModeTravailMarineService) {
  }

  ngOnInit(): void {
    this.planDeRoulementForm = this.formBuilder.group({
      choixPeriode: [''],
      choixShift: [''],
      modeDeTravailId: [''],
      equipeId: [''],
      dateDebut: [''],
      dateFin: ['']
    });
    this.planDeRoulementUpdateForm = this.formBuilder.group({
      choixPeriode: [''],
      choixShift: [''],
      modeDeTravailId: [''],
      equipeId: [''],
      dateDebut: [''],
      dateFin: ['']
    });
    if (this.selectedplanDeRoulement) {
      this.planDeRoulementUpdateForm.patchValue({
        choixPeriode: this.selectedplanDeRoulement.choixPeriode,
        choixShift: this.selectedplanDeRoulement.choixShift,
        dateDebut: this.selectedplanDeRoulement.dateDebut,
        dateFin: this.selectedplanDeRoulement.dateFin,
        modeDeTravailId: this.selectedplanDeRoulement.modeDeTravailId,
        equipeId: this.selectedplanDeRoulement.equipeId,

      });
    }

    this.modeTravailService.getModesTravail().subscribe(modesT => this.modesDeTravail=modesT);
    this.equipeService.getEquipes().subscribe(equipes =>
      this.equipes = equipes);
  }


  onSubmit(): void {
    const formValue = this.planDeRoulementForm.value;
    const equipeId = Number(formValue.equipeId);
    const modeDeTravailId = Number(formValue.modeDeTravailId);

    if (!isNaN(equipeId) && !isNaN(modeDeTravailId)) {
      if (this.selectedplanDeRoulement) {
        const updatedPlan: PlanDeRoulement = {
          id: this.selectedplanDeRoulement.id,
          choixPeriode: formValue.choixPeriode,
          choixShift: formValue.choixShift,
          dateDebut: formValue.dateDebut,
          dateFin: formValue.dateFin,
          modeDeTravailId: modeDeTravailId,
          equipeId: equipeId,
          equipe: {
            name: '',
            responsable: '',
            fonction: ''
          },
          modeDeTravail: {
            semaine: '',
            jour: ''
          },
        };
        this.updatePlan(updatedPlan);
      } else {
        this.planDeRoulementService.createPlanDeRoulement(formValue, equipeId, modeDeTravailId).subscribe(
          data => {
            alert('Plan de roulement créé avec succès:');
            this.planDeRoulementForm.reset();
          },
          error => {
            console.error('Erreur lors de la création du plan de roulement:', error);
            alert('Plan de roulement créé avec succès:');
          }
        );
      }
    } else {
      alert('Les ID de l\'équipe ou du mode de travail ne sont pas valides.');
    }
  }

  togglePlans(): void {
    this.showPlans = !this.showPlans;
    if (this.showPlans) {
      this.getPlans();
    }
  }
  getPlans(): void {
    this.planDeRoulementService.getPlans().subscribe(
      Plans => {
        this.Plans = Plans;
      },
      error => {
        console.error('Erreur lors de la récupération des Plans De Roulement:', error);
      }
    );
  }
  deletePlan(id: number | undefined){
    this.planDeRoulementService.deletePlan(id).subscribe(
      () => {
        this.getPlans();
        alert("Le mode de travail a été supprimé avec succès !");
      },
      error => {
        alert("Le plan de roulement a été supprimé avec succès !");
      }
    );
  }
  updatePlan(plan: PlanDeRoulement): void {
    this.selectedplanDeRoulement = plan;
    this.isUpdating = true;
    this.planDeRoulementUpdateForm.patchValue({
      choixShift: plan.choixShift,
      choixPeriode: plan.choixPeriode,
      dateDebut: plan.dateDebut,
      dateFin: plan.dateFin,
      modeDeTravailId: plan.modeDeTravailId,
      equipeId: plan.equipeId,
    });
  }

  onUpdateSubmit(): void {
    const formValue = this.planDeRoulementUpdateForm.value;

    if (this.selectedplanDeRoulement) {
      const updatedPlan: PlanDeRoulement = {
        id: this.selectedplanDeRoulement.id,
        choixPeriode: formValue.choixPeriode,
        choixShift: formValue.choixShift,
        dateDebut: formValue.dateDebut,
        dateFin: formValue.dateFin,
        modeDeTravailId: formValue.modeDeTravailId,
        equipeId: formValue.equipeId,
        equipe: this.equipes.find(equipe => equipe.id === formValue.equipeId) || { name: '', responsable: '', fonction: '' },
        modeDeTravail: this.modesDeTravail.find(mode => mode.id === formValue.modeDeTravailId) || { semaine: '', jour: '' }

      };

      this.planDeRoulementService.updatePlanRoulement(updatedPlan,formValue.equipeId,formValue.modeDeTravailId).subscribe(
        (updatedPlan: PlanDeRoulement) => {
          const index = this.Plans.findIndex(mt => mt.id === updatedPlan.id);
          if (index !== -1) {
            this.Plans[index] = updatedPlan;
            alert("Plan de roulement mis à jour avec succès !");
          }
        },
        error => {
          alert('Plan de roulement mis à jour avec succès ');
        }
      );

      this.isUpdating = false; // Reset updating state
      this.planDeRoulementUpdateForm.reset(); // Reset the update form
    }
  }
  onCancelUpdate(): void {
    this.isUpdating = false;
  }
}


