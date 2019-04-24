import { Etudiant } from './etudiant.model';
import { Module } from './module.model';

export class Filiere {
  public etudiants = new Array<Etudiant>();
  public moduless1 = new Array<Module>();
  public moduless2 = new Array<Module>();
  public code: string;
  public filieres = new Array<Filiere>();
  constructor(public libelle: string, public reference: string, public refDepartement: string) {}
}
