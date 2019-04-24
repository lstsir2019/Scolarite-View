import {Filiere} from './filiere.model';
import {NotesCreate} from './note.model';

export class Module {

  public modules = new Array<Module>();
  public note: NotesCreate;
  constructor(public libelle: string, public Code: string, public semestre: string , public filiere: string, public dateDebut: string, public dateFin: string ) {}
}
