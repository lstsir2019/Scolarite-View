import {ModuleConcours} from './module-concours.model';


export class Concours {
  public moduleConcoursVo = Array<ModuleConcours>();

  constructor( public reference: string, public anneeConcours:string, public dateConcoursEcrit: string, public dateConcoursOral: string ,public nbreplace: string, public refFiliere: string) {}

}
