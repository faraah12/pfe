import {ModeDeTravail} from "../mode-travail/mode-travail.model";
import {Equipe} from "../equipe/equipe.model";

export interface PlanDeRoulement {
  id?: number;
  choixPeriode: string;
  choixShift: string;
  dateDebut: string;
  dateFin: string;
  equipeId?: number;
  modeDeTravailId?: number;
  equipe: Equipe;
  modeDeTravail: ModeDeTravail;
}
