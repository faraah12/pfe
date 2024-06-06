import {Component, OnInit, ViewChild, viewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModeTravailService } from './mode-travail.service';
import { ModeDeTravail } from './mode-travail.model';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-mode-travail',
  templateUrl: './mode-travail.component.html',
  styleUrls: ['./mode-travail.component.css']
})
export class ModeTravailComponent implements OnInit {
  modeTravailForm!: FormGroup;
  modeTravailUpdateForm!: FormGroup;
  periodeSemaine: string[] = ['6/7', '7/7'];
  periodeJour: string[] = ['2/3', '3/3'];
  modesTravail!: Array<ModeDeTravail>;
  dataSource!:MatTableDataSource<ModeDeTravail>;
  displayedColumns: string[]=['jour','Semaine','action'];
  selectedModeTravail: ModeDeTravail | null = null;
  isAdd: boolean = false;
  isList:boolean = false;
  isUpdating: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private formBuilder: FormBuilder, private modeTravailService: ModeTravailService) { }

  ngOnInit(): void {

    this.modeTravailService.getModesTravail().subscribe(
        modesTravail => {
          this.modesTravail = modesTravail;
          this.dataSource=new MatTableDataSource<ModeDeTravail>(this.modesTravail)
          this.dataSource.paginator=this.paginator;
        },
        error => {
          console.error('Erreur lors de la récupération des ModesDeTravail:', error);
        }
      );

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
      this.modeTravailService.createModeTravail(formValue)
        .subscribe(
          (response: ModeDeTravail) => {
            alert("Mode de travail créée avec succès !");
            this.modeTravailForm.reset(); // Reset the form after successful creation
          },
          error => {
            alert("Mode de travail créée avec succès");
          }
        );
    }
  }
  deleteModeDeTravail(id: number | undefined){
    this.modeTravailService.deleteModeDeTravail(id).subscribe(
      () => {
      },
      error => {
        console.error('Erreur lors de la suppression du mode de travail:', error);
        alert("Le mode de travail a été supprimé avec succès ! Please Reload the page");
      }
    );
  }

  updateModeTravail(modeTravail: ModeDeTravail): void {
    this.selectedModeTravail = modeTravail;
    this.isUpdating = !this.isUpdating
    this.isList=false;
    this.isAdd=false;
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
          alert("Mode de travail updated ! Please Reload the page");
        }
      );
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
    this.modeTravailService.getModesTravail().subscribe(
      modesTravail => {
        this.modesTravail = modesTravail;
        this.dataSource=new MatTableDataSource<ModeDeTravail>(this.modesTravail)
        this.dataSource.paginator=this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des ModesDeTravail:', error);
      }
    );
  }
}
