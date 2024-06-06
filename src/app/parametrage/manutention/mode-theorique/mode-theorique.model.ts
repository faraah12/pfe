import {Prestation} from "../prestation/prestation.model";
import {Accessoire} from "../accessoire/accessoire.model";
import {EquipementFamille} from "../equipement-famille/equipement-famille.model";
import {Fonction} from "../fonction/fonction.model";
import {Trafic} from "../trafic/trafic.model";
import {TypeDeTrafic} from "../type-de-trafic/type-de-trafic.model";
import {Equipement} from "../equipement/equipement.model";

export interface ModeTheorique {
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
