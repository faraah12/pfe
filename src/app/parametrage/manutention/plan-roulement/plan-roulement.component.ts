import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlanDeRoulementService } from './plan-roulement.service';
import { ModeDeTravail } from '../mode-travail/mode-travail.model';
import { Equipe } from '../equipe/equipe.model';
import { EquipeService } from "../equipe/equipe.service";
import {ModeTravailService} from "../mode-travail/mode-travail.service";
import {PlanDeRoulement} from "./plan-roulement.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-plan-roulement',
  templateUrl: './plan-roulement.component.html',
  styleUrls: ['./plan-roulement.component.css']
})
export class PlanDeRoulementComponent implements OnInit {

  planDeRoulementForm!: FormGroup;
  planDeRoulementUpdateForm!: FormGroup;
  periods: string[] = ['mois', 'semaine'];
  Shifts: string[] = ['shift1', 'shift2','shift3']
  modesDeTravail!: Array<ModeDeTravail>;
  equipes!: Array<Equipe>;
  Plans!:Array<PlanDeRoulement>;
  dataSource!:MatTableDataSource<PlanDeRoulement>;
  displayedColumns: string[]=['Modetravail','Equipe','Periode','Shift','Datedebut','Datefin','action'];
  selectedplanDeRoulement: PlanDeRoulement | null = null;
  isUpdating: boolean = false;
  isAdd: boolean = false;
  isList:boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private formBuilder: FormBuilder, private planDeRoulementService: PlanDeRoulementService, private equipeService: EquipeService,private  modeTravailService:ModeTravailService) {
  }

  ngOnInit(): void {
    this.planDeRoulementService.getPlans().subscribe(
      Plans => {
        this.Plans = Plans;
        this.dataSource=new MatTableDataSource<PlanDeRoulement>(this.Plans)
        this.dataSource.paginator=this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des Plans De Roulement:', error);
      }
    );

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

  deletePlan(id: number | undefined){
    this.planDeRoulementService.deletePlan(id).subscribe(
      () => {
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
  toggleAdd() {
    this.isAdd=!this.isAdd;
    this.isList=false;
    this.isUpdating=false
  }
  togglelist() {
    this.isList=!this.isList;
    this.isAdd=false;
    this.isUpdating=false;
    this.planDeRoulementService.getPlans().subscribe(
      Plans => {
        this.Plans = Plans;
        this.dataSource=new MatTableDataSource<PlanDeRoulement>(this.Plans)
        this.dataSource.paginator=this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des Plans De Roulement:', error);
      }
    );

}

  toggledownload() {
    this.planDeRoulementService.downloadExcel().subscribe(response => {
      this.downloadFile(response);
    });
  }

  downloadFile(blob: Blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'PlanDeRoulement.xls';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}
