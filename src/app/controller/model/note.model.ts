import {Module} from './module.model';
import {Etudiant} from './etudiant.model';
import {Filiere} from './filiere.model';

export class NotesCreate {
  public notes = new Array<NotesCreate>();

  constructor(public xpath: string, public refFiliere: string, public startLine: number, public startCol: number, public endCol: number) {
  }
}

