
import {ModeDeTravailMarine} from "../mode-travail-marine/mode-travail-marine.model";
import {EquipeMarine} from "../equipe-marine/equipe-marine-marine.model";

export interface PlanDeRoulementMarine {
  id?: number;
  choixPeriode: string;
  choixShift: string;
  dateDebut: string;
  dateFin: string;
  equipeId?: number;
  modeDeTravailId?: number;
  equipe: EquipeMarine;
  modeDeTravail: ModeDeTravailMarine;
}
