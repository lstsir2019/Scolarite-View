import {ReleveNotes} from './releve-notes.model';
import {Semestre} from './semestre.model';

export class DemandeReleveNotes {

  public releveNotesVos: ReleveNotes = new ReleveNotes('');
  public refSemestres: Array<Semestre>;

  constructor(public refEtudiant: string, public refFiliere: string, public nom: string, public prenom: string, public email: string, public cin: string, public annee: string, public refSemestre: string) {
  }

}
