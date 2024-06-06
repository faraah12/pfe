
import {ModeDeTravailLogistique} from "../mode-travail-logistique/mode-travail-logistique.model";
import {EquipeLogistique} from "../equipe-logistique/equipe-logistique.model";

export interface PlanDeRoulementLogistique {
  id?: number;
  choixPeriode: string;
  choixShift: string;
  dateDebut: string;
  dateFin: string;
  equipeId?: number;
  modeDeTravailId?: number;
  equipe: EquipeLogistique;
  modeDeTravail: ModeDeTravailLogistique;
}
