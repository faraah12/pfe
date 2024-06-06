import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RH_frontend';



  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  isParametrageOpen: boolean = false;
  isExploitationOpen: boolean = false;
  isAdministrationOpen = false;

  isManutentionOpen: boolean = false;
  isMarineOpen:boolean = false;
  isLogistoqiueOpen:boolean = false;


  isModeTravailOpen = false;
  isModeTravailSelected: boolean = false;
  isModeTravailMarineOpen = false;
  isModeTravailMarineSelected: boolean = false;
  isModeTravailLogistiqueOpen = false;
  isModeTravailLogistiqueSelected: boolean = false;




  isPeriodeShiftOpen: boolean = false;
  isPeriodeShiftSelected: boolean = false;
  isPeriodeShiftMarineOpen: boolean = false;
  isPeriodeShiftMarineSelected: boolean = false;
  isPeriodeShiftLogistiqueOpen: boolean = false;
  isPeriodeShiftLogistiqueSelected: boolean = false;


  isEquipeOpen: boolean = false;
  isEquipeSelected:boolean = false;
  isEquipeMarineOpen: boolean = false;
  isEquipeMarineSelected:boolean = false;
  isEquipeLogistiqueOpen: boolean = false;
  isEquipeLogistiqueSelected:boolean = false;


  isPlanRoulementOpen: boolean = false;
  isPlanRoulementSelected: boolean = false;
  isPlanRoulementMarineOpen: boolean = false;
  isPlanRoulementMarineSelected: boolean = false;
  isPlanRoulementLogistiqueOpen: boolean = false;
  isPlanRoulementLogistiqueSelected: boolean = false;


  isModeTheoriqueOpen: boolean = false;
  isModeTheoriqueSelected: boolean = false;
  isModeTheoriqueMarineOpen: boolean = false;
  isModeTheoriqueMarineSelected: boolean = false;

  isNormeOpen: boolean = false;
  isNormeSelected: boolean = false;

  isFirstImage: boolean = true;
  isHomeSelected: boolean = false;

  isCreateUserSelected: boolean = false;
  isCreateUserOpen: boolean = false;




  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed

    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;    }
    this.isFirstImage = !this.isFirstImage;

  }
  toggleHome() {
    this.isHomeSelected = true;
    this.isModeTravailSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isModeTravailMarineSelected=false;
    this.isPeriodeShiftMarineSelected=false;
    this.isEquipeMarineSelected=false;
    this.isPlanRoulementMarineSelected=false;
    this.isModeTheoriqueMarineSelected=false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }

  toggleParametrage() {
    this.isParametrageOpen = !this.isParametrageOpen;
  }
  toggleExploitation() {
    this.isExploitationOpen = !this.isExploitationOpen;
  }
  toggleAdministration(){
    this.isAdministrationOpen = !this.isAdministrationOpen;

  }



  toggleManutention() {
    this.isManutentionOpen = !this.isManutentionOpen;
  }
  toggleMarine() {
    this.isMarineOpen = !this.isMarineOpen;
  }
  toggleLogistique(){
    this.isLogistoqiueOpen=!this.isLogistoqiueOpen
  }
  toggleModeTravail() {
    this.isModeTravailOpen = !this.isModeTravailOpen;
    this.isModeTravailSelected = true;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }
  toggleModeTravailMarine() {
    this.isModeTravailMarineOpen = !this.isModeTravailMarineOpen;
    this.isModeTravailMarineSelected = true;
    this.isPeriodeShiftMarineSelected = false;
    this.isHomeSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailSelected=false;
    this.isPeriodeShiftSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false


  }
  toggleModeTravailLogistique(){
    this.isModeTravailLogistiqueOpen=!this.isModeTravailLogistiqueOpen;
    this.isModeTravailLogistiqueSelected=true;
    this.isModeTravailSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }
  togglePeriodeShift() {
    this.isPeriodeShiftOpen = !this.isPeriodeShiftOpen;
    this.isPeriodeShiftSelected = true;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false
  }
  togglePeriodeShiftMarine() {
    this.isPeriodeShiftMarineOpen = !this.isPeriodeShiftMarineOpen;
    this.isPeriodeShiftMarineSelected = true;
    this.isHomeSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }
  togglePeriodeShiftLogistique(){
    this.isPeriodeShiftLogistiqueOpen=!this.isPeriodeShiftLogistiqueOpen;
    this.isPeriodeShiftLogistiqueSelected=true;
    this.isModeTravailSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }


  toggleEquipe(){
    this.isEquipeOpen = !this.isEquipeOpen;
    this.isEquipeSelected = true;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isEquipeMarineSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false
  }
  toggleEquipeMarine(){
    this.isEquipeMarineOpen = !this.isEquipeMarineOpen;
    this.isEquipeMarineSelected = true;
    this.isPeriodeShiftMarineSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isEquipeSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isModeTravailSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false
  }

  toggleEquipeLogistique(){
    this.isEquipeLogistiqueOpen=!this.isEquipeLogistiqueOpen;
    this.isEquipeLogistiqueSelected=true;
    this.isModeTravailSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }
  togglePlanRoulement() {
    this.isPlanRoulementOpen = !this.isPlanRoulementOpen;
    this.isPlanRoulementSelected = true;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }
  togglePlanRoulementMarine() {
    this.isPlanRoulementMarineOpen = !this.isPlanRoulementMarineOpen;
    this.isPlanRoulementMarineSelected = true;
    this.isPeriodeShiftMarineSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }
  togglePlanRoulementLogistique(){
    this.isPlanRoulementLogistiqueOpen=!this.isPlanRoulementLogistiqueOpen;
    this.isPlanRoulementLogistiqueSelected=true;
    this.isModeTravailSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }


  toggleModeTheorique() {
    this.isModeTheoriqueOpen = !this.isModeTheoriqueOpen;
    this.isModeTheoriqueSelected = true;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTheoriqueMarineSelected = false;
    this.isPlanRoulementMarineSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false
  }
  toggleModeTheoriqueMarine() {
    this.isModeTheoriqueMarineOpen = !this.isModeTheoriqueMarineOpen;
    this.isModeTheoriqueMarineSelected = true;
    this.isPlanRoulementMarineSelected = false;
    this.isPeriodeShiftMarineSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailMarineSelected = false;
    this.isEquipeMarineSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isNormeSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false
  }

  toggleNorme() {
    this.isNormeOpen = !this.isNormeOpen;
    this.isNormeSelected = true;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isModeTravailMarineSelected=false;
    this.isPeriodeShiftMarineSelected=false;
    this.isEquipeMarineSelected=false;
    this.isPlanRoulementMarineSelected=false;
    this.isModeTheoriqueMarineSelected=false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;
    this.isCreateUserSelected = false

  }
  toggleCreateUser() {
    this.isCreateUserOpen = !this.isCreateUserOpen;
    this.isCreateUserSelected = true;
    this.isNormeSelected = false;
    this.isModeTheoriqueSelected = false;
    this.isPlanRoulementSelected = false;
    this.isPeriodeShiftSelected = false;
    this.isHomeSelected = false;
    this.isModeTravailSelected = false;
    this.isEquipeSelected = false;
    this.isModeTravailLogistiqueSelected=false;
    this.isPeriodeShiftLogistiqueSelected=false;
    this.isEquipeLogistiqueSelected=false;
    this.isPlanRoulementLogistiqueSelected=false;

  }


}
