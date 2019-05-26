import {NoteEtudiantModule} from "./noteetudiantmodule.model";

export class Pv {


  private _filename: string;
  private _line: string;
  private _startCol: string;
  private _modsLine: string;
  private _modsCol: string;
  private _noteModulaireVos: Array<NoteEtudiantModule>;


  constructor(public refEtudiant: string, public nom: string, public prenom: string, public refSemestre: string, public refFiliere: string, public note: number, public etat: string, public mention: string, public _annee: number, public nbrModuleValide: number, public total: number,public state: string ) {
  }


  get noteModulaireVos(): Array<NoteEtudiantModule> {
    return this._noteModulaireVos;
  }

  set noteModulaireVos(value: Array<NoteEtudiantModule>) {
    this._noteModulaireVos = value;
  }

  get filename(): string {
    return this._filename;
  }

  set filename(value: string) {
    this._filename = value;
  }

  get line(): string {
    return this._line;
  }

  set line(value: string) {
    this._line = value;
  }

  get modsLine(): string {
    return this._modsLine;
  }

  set modsLine(value: string) {
    this._modsLine = value;
  }

  get modsCol(): string {
    return this._modsCol;
  }

  set modsCol(value: string) {
    this._modsCol = value;
  }

  get annee(): number {
    return this._annee;
  }

  set annee(value: number) {
    this._annee = value;
  }

  get startCol(): string {
    return this._startCol;
  }

  set startCol(value: string) {
    this._startCol = value;
  }
}
