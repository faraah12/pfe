import {Mode} from "../mode/mode.model";
import {Trafic} from "../trafic/trafic.model";
import {ModeTheorique} from "../mode-theorique/mode-theorique.model";

export interface Norme {
  id?: number;
  traficId: number;
  mainTheoriqueId: number;
  modeId: number;
  norme: number; // This property expects a number
  sens: string;
  natureduproduit: string;
  mainTheorique: ModeTheorique;
  trafic: Trafic;
  mode: Mode;
}
