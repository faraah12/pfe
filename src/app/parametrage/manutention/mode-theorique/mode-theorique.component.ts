
import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeTheoriqueService } from './mode-theorique.service';
import {ModeTheorique} from "./mode-theorique.model";
import {Prestation} from "../prestation/prestation.model";
import {PrestationService} from "../prestation/prestation.service";
import {Trafic} from "../trafic/trafic.model";
import {TraficService} from "../trafic/trafic.service";
import {TypeDeTrafic} from "../type-de-trafic/type-de-trafic.model";
import {TypeDeTraficService} from "../type-de-trafic/type-de-trafic.service";
import {EquipementService} from "../equipement/equipement.service";
import {EquipementFamilleService} from "../equipement-famille/equipement-famille.service";
import {AccessoireService} from "../accessoire/accessoire.service";
import {Equipement} from "../equipement/equipement.model";
import {EquipementFamille} from "../equipement-famille/equipement-famille.model";
import {Accessoire} from "../accessoire/accessoire.model";
import {FonctionService} from "../fonction/fonction.service";
import {Fonction} from "../fonction/fonction.model";
import {MatTableDataSource} from "@angular/material/table";
import {PlanDeRoulement} from "../plan-roulement/plan-roulement.model";
import {MatPaginator} from "@angular/material/paginator";



@Component({
  selector: 'app-mode-theorique',
  templateUrl: './mode-theorique.component.html',
  styleUrls: ['./mode-theorique.component.css']
})
export class ModeTheoriqueComponent implements OnInit {
  modetheoriqueForm!: FormGroup;
  modetheoriqueUpdateForm!: FormGroup;
  modestheorique!: Array<ModeTheorique>;
  prestations!: Array<Prestation>;
  trafics!: Array<Trafic>;
  typetrafics!: Array<TypeDeTrafic>;
  equipements!: Array<Equipement>;
  equipementsfamille!: Array<EquipementFamille>;
  accessoires!: Array<Accessoire>;
  fonctions!: Array<Fonction>;
  dataSource!: MatTableDataSource<ModeTheorique>;
  displayedColumns: string[] = ['nom', 'prestation', 'typetrafic', 'tarfic',
    'fonction', 'nombretotal', 'bord', 'quai', 'arriere', 'equipementf', 'equipement', 'accesoire']
  selectedmodetheorique: ModeTheorique | null = null;
  isUpdating: boolean = false;
  isAdd: boolean = false;
  isList: boolean = false;
  afficherFormulaires: boolean = false;
  afficherFormulaires2: boolean = false;




  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private formBuilder: FormBuilder, private modeTheoriqueService: ModeTheoriqueService, private prestationService: PrestationService, private tarficService: TraficService,
              private typetraficService: TypeDeTraficService, private equipementService: EquipementService, private equipmentfamilleService: EquipementFamilleService,
              private accessoireService: AccessoireService, private fonctinService: FonctionService) {
  }

  ngOnInit(): void {
    this.modeTheoriqueService.getmainsTheorique().subscribe(
      modestheorique => {
        this.modestheorique = modestheorique;
        this.dataSource = new MatTableDataSource<ModeTheorique>(this.modestheorique)
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des équipes:', error);
      }
    );


    this.modetheoriqueForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prestationId: [''],
      typeTraficId: [''],
      traficId: [''],
      fonctionsId: [''],
      total: [null, Validators.required],
      nombreSurBord: [null, Validators.required],
      nombreAuQuai: [null, Validators.required],
      nombreArriere: [null, Validators.required],
      equipementFamilleId: [''],
      equipementId: [''],
      accessoireId: ['']
    });
    this.modetheoriqueUpdateForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prestationId: [''],
      typeTraficId: [''],
      traficId: [''],
      fonctionsId: [''],
      total: [null, Validators.required],
      nombreSurBord: [null, Validators.required],
      nombreAuQuai: [null, Validators.required],
      nombreArriere: [null, Validators.required],
      equipementFamilleId: [''],
      equipementId: [''],
      accessoireId: ['']
    });
    if (this.selectedmodetheorique) {
      this.modetheoriqueUpdateForm.patchValue({
        nom: this.selectedmodetheorique.nom,
        total: this.selectedmodetheorique.total,
        nombreSurBord: this.selectedmodetheorique.nombreSurBord,
        nombreAuQuai: this.selectedmodetheorique.nombreAuQuai,
        nombreArriere: this.selectedmodetheorique.nombreArriere,
        traficId: this.selectedmodetheorique.traficId,
        typeTraficId: this.selectedmodetheorique.typeTraficId,
        fonctionsId: this.selectedmodetheorique.fonctionsId,
        equipementId: this.selectedmodetheorique.equipementId,
        equipementFamilleId: this.selectedmodetheorique.equipementFamilleId,
        prestationId: this.selectedmodetheorique.prestationId,
        accessoireId: this.selectedmodetheorique.accessoireId,
      });
    }
    this.prestationService.getPrestation().subscribe(prestations => this.prestations = prestations)
    this.tarficService.getTrafic().subscribe(trafics => this.trafics = trafics)
    this.typetraficService.getTypeTrafic().subscribe(typetrafics => this.typetrafics = typetrafics)
    this.equipementService.getEquipment().subscribe(equipements => this.equipements = equipements)
    this.equipmentfamilleService.getEquipementFamille().subscribe(equipementsfamille => this.equipementsfamille = equipementsfamille)
    this.accessoireService.getAccessoires().subscribe(accessoires => this.accessoires = accessoires)
    this.fonctinService.getFonctions().subscribe(fonctions => this.fonctions = fonctions)
  }

  onSubmit(): void {
    const mainTheoriqueData = this.modetheoriqueForm.value;
    const prestationId = Number(mainTheoriqueData.prestationId);
    const typeTraficId = Number(mainTheoriqueData.typeTraficId);
    const traficId = Number(mainTheoriqueData.traficId);
    const fonctionsId = Number(mainTheoriqueData.fonctionsId);
    const equipementFamilleId = Number(mainTheoriqueData.equipementFamilleId);
    const equipementId = Number(mainTheoriqueData.equipementId);
    const accessoireId = Number(mainTheoriqueData.accessoireId);
    if (this.selectedmodetheorique) {
      const updatedMode: ModeTheorique = {
        id: this.selectedmodetheorique.id,
        nom: mainTheoriqueData.nom,
        total: mainTheoriqueData.total,
        nombreSurBord: mainTheoriqueData.nombreSurBord,
        nombreAuQuai: mainTheoriqueData.nombreAuQuai,
        nombreArriere: mainTheoriqueData.nombreArriere,
        traficId: traficId,
        typeTraficId: typeTraficId,
        fonctionsId: fonctionsId,
        equipementId: equipementId,
        equipementFamilleId: equipementFamilleId,
        prestationId: prestationId,
        accessoireId: accessoireId,
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
      };
      this.updateMode(updatedMode);
    } else {
      this.modeTheoriqueService.createModeTheorique(mainTheoriqueData, prestationId, typeTraficId, traficId, fonctionsId, equipementFamilleId, equipementId, accessoireId).subscribe(
        data => {
          alert('Main théorique créée avec succès:');
          this.afficherFormulaires = false;
        },
        error => {
          alert('Main théorique créée avec succès:');
          // Set afficherFormulaires back to false to display the first form
          this.afficherFormulaires = false;
        }
      );
    }
  }


  charger(): void {
    const formValue = this.modetheoriqueForm.value;
    const alreadyExists = this.modestheorique.some(mode =>
      mode.nom === formValue.nom);
    if (alreadyExists) {
      alert("Le nom de la mainTheorique existe déjà.");
      this.isAdd=true;
    }else{
    this.afficherFormulaires = true;
    this.isAdd=false;
    this.isList=false;
  }}
  charger2(): void {
    this.afficherFormulaires = false;
    this.isAdd = false;
    this.isList = false;
    const mainTheoriqueData = this.modetheoriqueForm.value;
    const total = parseInt(mainTheoriqueData.total, 10);
    const nombreSurBord = parseInt(mainTheoriqueData.nombreSurBord, 10);
    const nombreAuQuai = parseInt(mainTheoriqueData.nombreAuQuai, 10);
    const nombreArriere = parseInt(mainTheoriqueData.nombreArriere, 10);
    if (total !== nombreSurBord + nombreAuQuai + nombreArriere) {
      alert("La somme de 'nombreSurBord', 'nombreAuQuai' et 'nombreArriere' ne correspond pas à 'total'. Veuillez corriger les valeurs.");
      this.afficherFormulaires=true;
      this.isList=false;
      this.isAdd=false;
    }else {
      this.afficherFormulaires2 = true;
      this.afficherFormulaires = false;
      this.isAdd = false;
      this.isList = false;
    }

  }

  deleteMain(id: number | undefined) {
    this.modeTheoriqueService.deleteMain(id).subscribe(
      () => {
        alert("Le mode de travail a été supprimé avec succès !");
      },
      error => {
        alert("Le mode de travail a été supprimé avec succès");
      }
    );

  }

  updateMode(mode: ModeTheorique): void {
    this.selectedmodetheorique = mode;
    this.isUpdating = true;
    this.modetheoriqueUpdateForm.patchValue({
      nom: mode.nom,
      total: mode.total,
      nombreSurBord: mode.nombreSurBord,
      nombreAuQuai: mode.nombreAuQuai,
      nombreArriere: mode.nombreArriere,
      traficId: mode.traficId,
      typeTraficId: mode.typeTraficId,
      fonctionsId: mode.fonctionsId,
      equipementId: mode.equipementId,
      equipementFamilleId: mode.equipementFamilleId,
      prestationId: mode.prestationId,
      accessoireId: mode.accessoireId,
    });
  }

  onUpdateSubmit(): void {
    const formValue = this.modetheoriqueUpdateForm.value;
    const prestationId = formValue.prestationId;
    const typeTraficId = formValue.typeTraficId;
    const traficId = formValue.traficId;
    const fonctionsId = formValue.fonctionsId;
    const equipementFamilleId = formValue.equipementFamilleId;
    const equipementId = formValue.equipementId;
    const accessoireId = formValue.accessoireId;

    if (this.selectedmodetheorique) {
      const updatedMode: ModeTheorique = {
        id: this.selectedmodetheorique.id,
        nom: formValue.nom,
        total: formValue.total,
        nombreSurBord: formValue.nombreSurBord,
        nombreAuQuai: formValue.nombreAuQuai,
        nombreArriere: formValue.nombreArriere,
        traficId: traficId, // Use the converted values
        typeTraficId: typeTraficId,
        fonctionsId: fonctionsId,
        equipementId: equipementId,
        equipementFamilleId: equipementFamilleId,
        prestationId: prestationId,
        accessoireId: accessoireId,
        prestation: {
          name: ""
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
      };

      // Send the updated mode to the service for update
      this.modeTheoriqueService.updateModeTheorique(updatedMode, prestationId, typeTraficId, traficId, fonctionsId, equipementFamilleId, equipementId, accessoireId).subscribe(
        (updatedMode: ModeTheorique) => {
          alert("updated")
          this.afficherFormulaires = false;
        },
        error => {
          alert("updated")
          this.afficherFormulaires = false;
        }
      );

      // Reset updating state and form
      this.isUpdating = false;
      this.modetheoriqueUpdateForm.reset();
    }
  }

  onCancelUpdate(): void {
    this.isUpdating = false;
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
    this.afficherFormulaires2=false;
    this.modeTheoriqueService.getmainsTheorique().subscribe(
      modestheorique => {
        this.modestheorique = modestheorique;
        this.dataSource = new MatTableDataSource<ModeTheorique>(this.modestheorique)
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Erreur lors de la récupération des équipes:', error);
      }
    );
  }
  toggledownload() {
    this.modeTheoriqueService.downloadExcel().subscribe(response => {
      this.downloadFile(response);
    });
  }

  downloadFile(blob: Blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'MainTheorique.xls';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

}
