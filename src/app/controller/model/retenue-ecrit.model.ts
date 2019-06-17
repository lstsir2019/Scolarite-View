import {Candidat} from "./candidat.model";
import {NoteConcours} from "./note-concours.model";

export class RetenueEcrit {
public etudiantConcoursVo = new Candidat("","","","","","","","","","");
 public  noteConcoursVo =new NoteConcours("","");
  constructor(public refCandidat: string, public preselectione:boolean,public notePreselection:string,public refConcours:string, public retenueOral:boolean,public admis:boolean) {
}

}
