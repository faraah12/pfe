import {Prestation} from "../../manutention/prestation/prestation.model";
import {Accessoire} from "../../manutention/accessoire/accessoire.model";
import {EquipementFamille} from "../../manutention/equipement-famille/equipement-famille.model";
import {Equipement} from "../../manutention/equipement/equipement.model";
import {Fonction} from "../../manutention/fonction/fonction.model";
import {Trafic} from "../../manutention/trafic/trafic.model";
import {TypeDeTrafic} from "../../manutention/type-de-trafic/type-de-trafic.model";

export interface ModeTheoriqueMarine {
  id: number;
  nom: string;
  prestationId: number;
  typeTraficId: number;
  traficId: number;
  fonctionsId: number;
  total: number;
  nombreSurBord: number;
  nombreAuQuai: number;
  nombreArriere: number;
  equipementFamilleId: number;
  equipementId: number;
  accessoireId: number;

  prestation: Prestation;
  accessoire: Accessoire;
  equipementFamille: EquipementFamille;
  equipement: Equipement;
  fonction: Fonction;
  trafic:Trafic;
  typeTrafic: TypeDeTrafic;
}
