
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { ExploitationComponent } from './exploitation/exploitation.component';
import { AdministrationComponent } from './administration/administration.component';
import {ManutentionComponent} from "./parametrage/manutention/manutention.component";
import {MarineComponent} from "./parametrage/marine/marine.component";
import {LogistiqueComponent} from "./parametrage/logistique/logistique.component";
import {ModeTravailComponent} from "./parametrage/manutention/mode-travail/mode-travail.component";
import {PeriodeShiftComponent} from "./parametrage/manutention/periode-shift/periode-shift.component";
import {EquipeComponent} from "./parametrage/manutention/equipe/equipe.component";
import {PlanDeRoulementComponent} from "./parametrage/manutention/plan-roulement/plan-roulement.component";
import {NormeComponent} from "./parametrage/manutention/norme/norme.component";
import {CreateUserComponent} from "./administration/create-user/create-user.component";
import {ModeTheoriqueComponent} from "./parametrage/manutention/mode-theorique/mode-theorique.component";
import {ModeTravailMarineComponent} from "./parametrage/marine/mode-travail-marine/mode-travail-marine.component";
import {PeriodeShiftMarineComponent} from "./parametrage/marine/periode-shift-marine/periode-shift-marine.component";
import {EquipeMarineComponent} from "./parametrage/marine/equipe-marine/equipe-marine.component";
import {PlanRoulementMarineComponent} from "./parametrage/marine/plan-roulement-marine/plan-roulement-marine.component";
import {ModeTheoriqueMarineComponent} from "./parametrage/marine/mode-theorique-marine/mode-theorique-marine.component";
import {ModeTravailLogistiqueComponent} from "./parametrage/logistique/mode-travail-logistique/mode-travail-logistique.component";
import {PeriodeShiftLogistiqueComponent} from "./parametrage/logistique/periode-shift-logistique/periode-shift-logistique.component";
import {EquipeLogistiqueComponent} from "./parametrage/logistique/equipe-logistique/equipe-logistique.component";
import {PlanRoulementLogistiqueComponent} from "./parametrage/logistique/plan-roulement-logistique/plan-roulement-logistique.component";
const routes: Routes = [
  {path: '',component:AccueilComponent},
  {path: 'accueil', component: AccueilComponent },
  {path: 'parametrage', component: ParametrageComponent,
     children: [
           {path: 'manutention', component: ManutentionComponent,
            children: [
                    {path: 'mode-travail', component: ModeTravailComponent },
                    {path: 'periode-shift', component: PeriodeShiftComponent },
                    {path: 'equipe', component: EquipeComponent },
                    {path: 'plan-roulement', component: PlanDeRoulementComponent },
                    {path: 'mode-theorique', component: ModeTheoriqueComponent },
                    {path: 'norme', component: NormeComponent },
                        ]
      },
            {path: 'marine', component: MarineComponent ,
              children: [
                {path: 'mode-travail-marine', component: ModeTravailMarineComponent },
                {path: 'periode-shift-marine', component: PeriodeShiftMarineComponent },
                {path: 'equipe-marine', component: EquipeMarineComponent },
                {path: 'plan-roulement-marine', component: PlanRoulementMarineComponent },
                {path: 'mode-theorique-marine', component: ModeTheoriqueMarineComponent },]},

             { path: 'logistique', component: LogistiqueComponent ,
                children: [
                {path: 'mode-travail-logistique', component: ModeTravailLogistiqueComponent},
                {path: 'periode-shift-logistique', component: PeriodeShiftLogistiqueComponent },
                {path: 'equipe-logistique', component: EquipeLogistiqueComponent },
                {path: 'plan-roulement-logistique', component: PlanRoulementLogistiqueComponent },
         ]},]},

  { path: 'exploitation', component: ExploitationComponent},
  { path: 'administration', component: AdministrationComponent,
  children:[

    {path: 'create-user', component: CreateUserComponent },
    {path: 'periode-shift', component: PeriodeShiftComponent },
  ]
  },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }


