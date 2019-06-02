import {ReleveNotes} from './releve-notes.model';
import {Semestre} from './semestre.model';

export class DemandeReleveNotes {
  //public releveNotesVo = Array<ReleveNotes>();

 public releveNotesVos : ReleveNotes=new ReleveNotes("");

  constructor(public refEtudiant:string,public refFiliere:string, public semestress:Array<Semestre>, public nom:string, public prenom:string, public email:string, public cin:string, public annee : string) {}

}
