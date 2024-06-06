import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModeTheorique } from "../mode-theorique/mode-theorique.model";
import { NormeService } from "./norme.service";
import { ModeTheoriqueService } from "../mode-theorique/mode-theorique.service";
import { Norme } from "./norme.model";
import { Mode } from "../mode/mode.model";
import { ModeService } from "../mode/mode.service";
import { Trafic } from "../trafic/trafic.model";
import { TraficService } from "../trafic/trafic.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ModeDeTravail} from "../mode-travail/mode-travail.model";

@Component({
  selector: 'app-norme',
  templateUrl: './norme.component.html',
  styleUrls: ['./norme.component.css']
})
export class NormeComponent implements OnInit {

  normeForm!: FormGroup;
  normeUpdateForm!: FormGroup;
  natureduproduit: string[] = ['Shift', 'Fin du travail'];
  sens: string[] = ['Import', 'Export'];
  mainstheorique!: Array<ModeTheorique>;
  modes!: Array<Mode>;
  trafics!: Array<Trafic>;
  Normes!: Array<Norme>;
  dataSource!:MatTableDataSource<Norme>;
  displayedColumns: string[]=['main','trafic','mode','sens','nature','norme','action'];
  selectednorme: Norme | null = null;
  isAdd: boolean = false;
  isList: boolean = false;
  isUpdating: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private formBuilder: FormBuilder, private normeservice: NormeService, private mainstheoriqueservice: ModeTheoriqueService, private modeService: ModeService, private traficService: TraficService) {
  }

  ngOnInit() {
    this.normeservice.getNormes().subscribe(
      Normes => {
        this.Normes = Normes;
        this.dataSource = new MatTableDataSource<Norme>(this.Normes)
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des Plans De Roulement:', error);
      }
    );


    this.normeForm = this.formBuilder.group({
      traficId: [''],
      mainTheoriqueId: [''],
      modeId: [''],
      norme: [''],
      sens: [''],
      natureduproduit: ['']
    });

    this.mainstheoriqueservice.getmainsTheorique().subscribe(mainstheoriquetheorique => this.mainstheorique = mainstheoriquetheorique);
    this.traficService.getTrafic().subscribe(trafics => this.trafics = trafics);
    this.modeService.getModes().subscribe(modes => this.modes = modes);
  }

  ajouter() {
    const normeData = this.normeForm.value;
    const traficId = Number(normeData.traficId);
    const mainTheoriqueId = Number(normeData.mainTheoriqueId);
    const modeId = Number(normeData.modeId);

    if (!isNaN(traficId) && !isNaN(mainTheoriqueId) && !isNaN(modeId)) {
      if (this.selectednorme) {
        const updatedNorme: Norme = {
          id: this.selectednorme.id,
          norme: normeData.norme,
          sens: normeData.sens,
          natureduproduit: normeData.natureduproduit,
          traficId: traficId,
          mainTheoriqueId: mainTheoriqueId,
          modeId: modeId,
          trafic: {
            name: ''
          },
          mode: {
            name: ""
          },
          mainTheorique: {
            id: 0,
            nom: '',
            prestationId: 0,
            typeTraficId: 0,
            traficId: 0,
            fonctionsId: 0,
            total: 0,
            nombreSurBord: 0,
            nombreAuQuai: 0,
            nombreArriere: 0,
            equipementFamilleId: 0,
            equipementId: 0,
            accessoireId: 0,
            prestation: {
              name: ''
            },
            accessoire: {
              name: ''
            },
            equipementFamille: {
              name: ''
            },
            equipement: {
              name: ''
            },
            fonction: {
              name: ''
            },
            trafic: {
              name: ''
            },
            typeTrafic: {
              name: ''
            },
          },
        };
        this.updateNorme(updatedNorme);
      } else {
        // Create new norme...
        this.normeservice.createNorme(normeData, traficId, mainTheoriqueId, modeId).subscribe(
          data => {
            alert('Norme créée avec succès:');
            this.normeForm.reset();
          },
          error => {
            console.error('Erreur lors de la création de la norme:', error);
            alert('Norme créée avec succès:');
          }
        );
      }
    } else {
      alert("Veuillez saisir des identifiants valides pour le trafic, le mode et le théorique principal.");
    }
  }

  deleteNorme(id: number | undefined) {
    this.normeservice.deleteNorme(id).subscribe(
      () => {
        alert("La norme a été supprimée avec succès !");
      },
      error => {
        console.error('Erreur lors de la suppression du mode de travail:', error);
        alert("La norme a été supprimée avec succès.");
      }
    );
  }

  updateNorme(norme: Norme): void {
    this.selectednorme = norme;
    this.isUpdating = true;
    this.normeUpdateForm.patchValue({
      traficId: norme.traficId,
      maintheoriqueId: norme.mainTheoriqueId,
      modeId: norme.modeId,
      norme: norme.norme,
      sens: norme.sens,
      nature: norme.natureduproduit
    });
  }

  onUpdateSubmit(): void {
    const formValue = this.normeUpdateForm.value;
    const traficId = formValue.traficId;
    const mainTheoriqueId = formValue.mainTheoriqueId;
    const modeId = formValue.modeId;

    if (this.selectednorme) {
      const updatedNorme: Norme = {
        id: this.selectednorme.id,
        traficId: traficId,
        mainTheoriqueId: mainTheoriqueId,
        modeId: modeId,
        norme: formValue.norme,
        sens: formValue.sens,
        natureduproduit: formValue.natureduproduit,
        mainTheorique: this.mainstheorique.find(main => main.id === formValue.mainTheoriqueId) || {
          id: 0,
          nom: '',
          prestationId: 0,
          typeTraficId: 0,
          traficId: 0,
          fonctionsId: 0,
          total: 0,
          nombreSurBord: 0,
          nombreAuQuai: 0,
          nombreArriere: 0,
          equipementFamilleId: 0,
          equipementId: 0,
          accessoireId: 0,
          prestation: {name: ''},
          accessoire: {name: ''},
          equipementFamille: {name: ''},
          equipement: {name: ''},
          fonction: {name: ''},
          trafic: {name: ''},
          typeTrafic: {name: ''}
        },
        trafic: this.trafics.find(trafic => trafic.id === formValue.traficId) || {name: ''},
        mode: this.modes.find(mode => mode.id === formValue.modeId) || {name: ''}
      }
    }
  }

  toggleAdd() {
    this.isAdd = !this.isAdd;
    this.isList = false;
    this.isUpdating = false

  }

  togglelist() {
    this.isList = !this.isList;
    this.isAdd = false;
    this.isUpdating = false;
    this.normeservice.getNormes().subscribe(
      Normes => {
        this.Normes = Normes;
        this.dataSource = new MatTableDataSource<Norme>(this.Normes)
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des Plans De Roulement:', error);
      }
    );

  }
  toggledownload() {
    this.normeservice.downloadExcel().subscribe(response => {
      this.downloadFile(response);
    });
  }

  downloadFile(blob: Blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Norme.xls';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}
