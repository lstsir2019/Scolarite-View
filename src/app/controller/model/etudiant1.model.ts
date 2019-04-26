import {Filiere} from './filiere.model';

export class Etudiant {
  public etudiants = new Array<Etudiant>();
  constructor(public cne: string, public nom: string, public prenom: string, public filiere: Filiere) {}
}
