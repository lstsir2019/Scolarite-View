import {Filiere} from './filiere.model';

export class Etudiant {
  public etudiants = new Array<Etudiant>();
  constructor(public napogee: number, public cne: string, public filiereActuelle: string, public reference: string) {}
}
