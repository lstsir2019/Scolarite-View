import {RetenueEcrit} from "./retenue-ecrit.model";
import {Candidat} from "./candidat.model";

export class NoteModuleConcours {
  public retenueEcritVo= new RetenueEcrit("",true,'','',false,false);
  public etudiantConcoursVo= new Candidat("","","","","","","","","","");
  constructor(public refModuleConcours:string ,public note:string){}
}
