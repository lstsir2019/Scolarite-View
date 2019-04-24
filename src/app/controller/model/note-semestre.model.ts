import {Etudiant} from './etudiant.model';

export class NoteSemestre {
  public etudiantConcoursVo:Etudiant=new Etudiant("","","","","","","");
  constructor(public refSemestre:string,public note:string){}
}
