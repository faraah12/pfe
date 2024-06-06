import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModeTheoriqueMarine} from "./mode-theorique-marine.model";
import {ModeTheoriqueMarineService} from "./mode-theorique-marine.service";

@Component({
  selector: 'app-mode-theorique-marine',
  templateUrl: './mode-theorique-marine.component.html',
  styleUrl: './mode-theorique-marine.component.css'
})
export class ModeTheoriqueMarineComponent implements OnInit{
  modetheoriqueForm!: FormGroup;
  afficherFormulaires = false;
  modestheorique:ModeTheoriqueMarine[]=[];
  showMains: boolean = false;


  constructor(private formBuilder: FormBuilder, private modeTheoriqueService: ModeTheoriqueMarineService) {}

  // Implement the OnInit interface
  ngOnInit(): void {
    // Initialize the form group with the necessary form controls and validators
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
  }

  // A method to submit the form data
  onSubmit(): void {
    const mainTheoriqueData = this.modetheoriqueForm.value;
    const total = parseInt(mainTheoriqueData.total, 10);
    const nombreSurBord = parseInt(mainTheoriqueData.nombreSurBord, 10);
    const nombreAuQuai = parseInt(mainTheoriqueData.nombreAuQuai, 10);
    const nombreArriere = parseInt(mainTheoriqueData.nombreArriere, 10);

    if (isNaN(total) || isNaN(nombreSurBord) || isNaN(nombreAuQuai) || isNaN(nombreArriere)) {
      alert("Veuillez saisir des valeurs numériques pour 'total', 'nombreSurBord', 'nombreAuQuai' et 'nombreArriere'.");
      return;
    }

    if (total !== nombreSurBord + nombreAuQuai + nombreArriere) {
      alert("La somme de 'nombreSurBord', 'nombreAuQuai' et 'nombreArriere' ne correspond pas à 'total'. Veuillez corriger les valeurs.");
      return;
    }

    const prestationId = mainTheoriqueData.prestationId;
    const typeTraficId = mainTheoriqueData.typeTraficId;
    const traficId = mainTheoriqueData.traficId;
    const fonctionsId = mainTheoriqueData.fonctionsId;
    const equipementFamilleId = mainTheoriqueData.equipementFamilleId;
    const equipementId = mainTheoriqueData.equipementId;
    const accessoireId = mainTheoriqueData.accessoireId;

    if (prestationId && typeTraficId && traficId && fonctionsId && equipementFamilleId && equipementId && accessoireId) {
      const prestationIdAsNumber = parseInt(prestationId, 10);
      const typeTraficIdAsNumber = parseInt(typeTraficId, 10);
      const traficIdAsNumber = parseInt(traficId, 10);
      const fonctionsIdAsNumber = parseInt(fonctionsId, 10);
      const equipementFamilleIdAsNumber = parseInt(equipementFamilleId, 10);
      const equipementIdAsNumber = parseInt(equipementId, 10);
      const accessoireIdAsNumber = parseInt(accessoireId, 10);
      this.modeTheoriqueService.createModeTheorique(mainTheoriqueData, prestationIdAsNumber, typeTraficIdAsNumber, traficIdAsNumber, fonctionsIdAsNumber, equipementFamilleIdAsNumber, equipementIdAsNumber, accessoireIdAsNumber).subscribe(
        data => {
          alert('Main théorique créée avec succès:');
          this.getmainsTheorique();
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


  getmainsTheorique(): void {
    this.modeTheoriqueService.getmainsTheorique().subscribe(
      modestheorique => {
        this.modestheorique = modestheorique;
      },
      error => {
        console.error('Erreur lors de la récupération des équipes:', error);
      }
    );
  }

  charger(): void {
    // Fetch the existing theoretical modes
    this.modeTheoriqueService.getmainsTheorique().subscribe(
      modestheorique => {
        // Check if the name already exists
        const nameExists = modestheorique.some(main => main.nom === this.modetheoriqueForm.value.nom);

        if (nameExists) {
          alert("Le nom de la main theorique existe déjà. Veuillez en choisir un autre.");
          return;
        }

        // If the name doesn't exist, display the form
        this.afficherFormulaires = true;
      },
      error => {
        console.error('Erreur lors de la récupération des MainsTheorique:', error);
      }
    );
  }


  toggleMains(): void {
    this.showMains = !this.showMains;
    if (this.showMains) {
      this.getMains();
    }
  }
  getMains(): void {
    this.modeTheoriqueService.getmainsTheorique().subscribe(
      Mains => {
        this.modestheorique= Mains;
      },
      error => {
        console.error('Erreur lors de la récupération des MainsTheorique:', error);
      }
    );}
  deleteMain(id: number | undefined){
    this.modeTheoriqueService.deleteMain(id).subscribe(
      () => {
        this.getmainsTheorique();
        alert("Le mode de travail a été supprimé avec succès !");
      },
      error => {
        console.error('Erreur lors de la suppression du mode de travail:', error);
        alert("Une erreur s'est produite lors de la suppression du mode de travail.");
      }
    );
  }}

