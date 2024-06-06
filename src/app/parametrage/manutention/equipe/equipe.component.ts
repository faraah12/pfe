import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipeService } from './equipe.service';
import { Equipe } from './equipe.model';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipeForm!: FormGroup;
  equipelUpdateForm!: FormGroup;
  equipes!: Array<Equipe>;
  dataSource!:MatTableDataSource<Equipe>;
  displayedColumns: string[]=['Nom','Responsable','Fonction','action'];
  selectedEquipe: Equipe | null = null;
  isAdd: boolean = false;
  isList:boolean = false;
  isUpdating: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private formBuilder: FormBuilder, private equipeService: EquipeService) {}

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe(
      equipes => {
        this.equipes = equipes;
        this.dataSource=new MatTableDataSource<Equipe>(this.equipes)
        this.dataSource.paginator=this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des équipes:', error);
      }
    );


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
      this.equipeService.createEquipe(formValue).subscribe(
        data => {
          alert("Équipe créée avec succès !");
        },
        err => {
          console.error('Erreur serveur:', err);
          alert("Erreur");
        }
      );
    }
  }

  deleteEquipe(id: number | undefined){
    this.equipeService.deleteEquipe(id).subscribe(
      () => {
        alert("Le mode de travail a été supprimé avec succès !");
      },
      error => {
        console.error('Erreur lors de la suppression du mode de travail:', error);
        alert("L'equipe a été supprimé avec succès");
      }
    );
  }
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

  toggleAdd() {
    this.isAdd=!this.isAdd;
    this.isList=false;
    this.isUpdating=false
  }

  togglelist() {
    this.isList=!this.isList;
    this.isAdd=false;
    this.isUpdating=false;
    this.equipeService.getEquipes().subscribe(
      equipes => {
        this.equipes = equipes;
        this.dataSource=new MatTableDataSource<Equipe>(this.equipes)
        this.dataSource.paginator=this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des équipes:', error);
      }
    );
  }
}
