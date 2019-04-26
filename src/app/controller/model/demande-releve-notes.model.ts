import {ReleveNotes} from './releve-notes.model';

export class DemandeReleveNotes {
  //public releveNotesVo = Array<ReleveNotes>();

 public releveNotesVos : ReleveNotes=new ReleveNotes("");
  constructor(public refEtudiant:string,public refFiliere:string, public refSemestre:string, public nom:string, public prenom:string, public email:string) {}

}
