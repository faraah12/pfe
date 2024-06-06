import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeTravailComponent } from './parametrage/manutention/mode-travail/mode-travail.component';

import { PeriodeShiftComponent } from './parametrage/manutention/periode-shift/periode-shift.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EquipeComponent } from './parametrage/manutention/equipe/equipe.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AccueilComponent } from './accueil/accueil.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { ExploitationComponent } from './exploitation/exploitation.component';
import { AdministrationComponent } from './administration/administration.component';
import { ModeTheoriqueComponent } from './parametrage/manutention/mode-theorique/mode-theorique.component';
import { NormeComponent } from './parametrage/manutention/norme/norme.component';
import { PlanDeRoulementComponent } from './parametrage/manutention/plan-roulement/plan-roulement.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ManutentionComponent } from './parametrage/manutention/manutention.component';
import { MarineComponent } from './parametrage/marine/marine.component';
import { LogistiqueComponent } from './parametrage/logistique/logistique.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {MatNativeDateModule, provideNativeDateAdapter} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {EquipeService} from "./parametrage/manutention/equipe/equipe.service";
import { AsideComponent } from './aside/aside.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import { CreateUserComponent } from './administration/create-user/create-user.component';
import {MatSelectModule} from "@angular/material/select";
import { ModeTravailMarineComponent } from './parametrage/marine/mode-travail-marine/mode-travail-marine.component';
import { PeriodeShiftMarineComponent } from './parametrage/marine/periode-shift-marine/periode-shift-marine.component';
import { EquipeMarineComponent } from './parametrage/marine/equipe-marine/equipe-marine.component';
import { PlanRoulementMarineComponent } from './parametrage/marine/plan-roulement-marine/plan-roulement-marine.component';
import { ModeTheoriqueMarineComponent } from './parametrage/marine/mode-theorique-marine/mode-theorique-marine.component';
import { ModeTravailLogistiqueComponent } from './parametrage/logistique/mode-travail-logistique/mode-travail-logistique.component';
import { PeriodeShiftLogistiqueComponent } from './parametrage/logistique/periode-shift-logistique/periode-shift-logistique.component';
import { EquipeLogistiqueComponent } from './parametrage/logistique/equipe-logistique/equipe-logistique.component';
import { PlanRoulementLogistiqueComponent } from './parametrage/logistique/plan-roulement-logistique/plan-roulement-logistique.component';
import { PrestationComponent } from './parametrage/manutention/prestation/prestation.component';
import { TypeDeTraficComponent } from './parametrage/manutention/type-de-trafic/type-de-trafic.component';
import { TraficComponent } from './parametrage/manutention/trafic/trafic.component';
import { EquipementComponent } from './parametrage/manutention/equipement/equipement.component';
import { EquipementFamilleComponent } from './parametrage/manutention/equipement-famille/equipement-famille.component';
import { AccessoireComponent } from './parametrage/manutention/accessoire/accessoire.component';
import { FonctionComponent } from './parametrage/manutention/fonction/fonction.component';
import { ModeComponent } from './parametrage/manutention/mode/mode.component';
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatSort} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    AppComponent,
    ModeTravailComponent,
    PeriodeShiftComponent,
    EquipeComponent,
    AccueilComponent,
    ParametrageComponent,
    ExploitationComponent,
    AdministrationComponent,
    ModeTheoriqueComponent,
    NormeComponent,
    PlanDeRoulementComponent,
    ManutentionComponent,
    MarineComponent,
    LogistiqueComponent,
    AsideComponent,
    CreateUserComponent,
    ModeTravailMarineComponent,
    PeriodeShiftMarineComponent,
    EquipeMarineComponent,
    PlanRoulementMarineComponent,
    ModeTheoriqueMarineComponent,
    ModeTravailLogistiqueComponent,
    PeriodeShiftLogistiqueComponent,
    EquipeLogistiqueComponent,
    PlanRoulementLogistiqueComponent,
    PrestationComponent,
    TypeDeTraficComponent,
    TraficComponent,
    EquipementComponent,
    EquipementFamilleComponent,
    AccessoireComponent,
    FonctionComponent,
    ModeComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatHint,
    MatDatepickerToggle,
    MatDatepicker,
    MatFormField,
    MatDatepickerInput,
    MatLabel,
    MatNativeDateModule,
    MatDateRangeInput,
    MatDateRangePicker,
    MatInputModule,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    HttpClientModule,
    MatSidenavContainer,
    MatSidenavModule,
    MatIcon,
    MatDividerModule,
    MatSidenavContent,
    MatSidenav,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatSort,
    MatPaginatorModule,


  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    EquipeService
    // {
    //   provide: HttpClient,
    //   useFactory: provideHttpClient,
    //   deps: [HTTP_INTERCEPTORS]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
