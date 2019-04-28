import {Candidat} from './candidat.model';

export class Choix {
  public etudiantConcoursVo: Candidat=new Candidat("","","","","","","","","","");
  constructor(public refConcours:string, public numChoix:string){}
}

