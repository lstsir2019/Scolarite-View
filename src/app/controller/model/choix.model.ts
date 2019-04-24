import {Etudiant} from './etudiant.model';

export class Choix {
  public etudiantConcoursVo: Etudiant=new Etudiant("","","","","","","");
  constructor(public refConcours:string, public numChoix:string){}
}
