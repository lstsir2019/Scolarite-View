import {Candidat} from './candidat.model';

export class NoteSemestre {
  public etudiantConcoursVo:Candidat=new Candidat("","","","","","","","","","");
  constructor(public refSemestre:string,public note:string){}
}
