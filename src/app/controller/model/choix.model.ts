import {Etudiant} from './candidat.model';

export class Choix {
  public etudiantConcoursVo: Etudiant=new Etudiant("","","","","","","");
  constructor(public refConcours:string, public numChoix:string){}
}
