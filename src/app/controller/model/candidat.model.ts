import {DiplomeEtudiant} from './diplome-etudiant.model';
import {Choix} from './choix.model';
import {NoteSemestre} from './note-semestre.model';

export class Candidat {
  public diplomeEtudiantVo: DiplomeEtudiant = new DiplomeEtudiant("", "", "","");
  public choixVos: Array<Choix> = [];
  public notesSemestreVos: Array<NoteSemestre> = [];

  constructor(public cne: string, public cin: string, public nom: string, public prenom: string, public tel: string, public email: string,
              public niveau: string, public adressePersonnelle: string, public statue: string, public dateNaissance: string) {
  }
}

