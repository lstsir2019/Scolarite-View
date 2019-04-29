import { Injectable } from '@angular/core';
import {DemandeReleveNotes} from '../model/demande-releve-notes.model';
import {HttpClient} from '@angular/common/http';
import {ReleveNotes} from '../model/releve-notes.model';
import {DemandeInscription} from '../model/demande-inscription.model';
import {DemandeScolarite} from '../model/demande-scolarite.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeReleveNotesService {

  private _url:string="http://localhost:8099/simple-faculte-scolarite/demandeReleveNotess/";
  private _url2:string="http://localhost:8099/simple-faculte-scolarite/demandeReleveNotess/refEtudiant/";
  private _url3:string ="http://localhost:8099/simple-faculte-scolarite/demandeReleveNotess/chercher";

  private _demandeReleveNotess: Array<DemandeReleveNotes>;

  private _demandeReleveNotesSearch: DemandeReleveNotes = new DemandeReleveNotes("","","","","","");

  private _demandeReleveNotesSelected : DemandeReleveNotes=new DemandeReleveNotes("","","","","","");

  private _demandeReleveNotesCreate: DemandeReleveNotes = new DemandeReleveNotes ( "", "", "","","","");
  private _releveNotesCreate: ReleveNotes = new ReleveNotes("");
  private _demandeReleveNotesList = Array <DemandeReleveNotes>();

  // public releveNotess : Array <ReleveNotes>;
  // public ReleveNotes = new Array <ReleveNotes>();

  constructor(private _http:HttpClient) { }


  public addDemandeReleveNotes(){
    let demandeReleveNotesClone = new DemandeReleveNotes(this._demandeReleveNotesCreate.refEtudiant, this._demandeReleveNotesCreate.refFiliere, this._demandeReleveNotesCreate.refSemestre, this._demandeReleveNotesCreate.nom, this._demandeReleveNotesCreate.prenom, this._demandeReleveNotesCreate.email);
    this._demandeReleveNotesList.push(demandeReleveNotesClone);
  }

 // public addReleveNotes(){
   // let releveNotesClone= new ReleveNotes (this.releveNotesCreate.refSemestre);
   // this.demandeReleveNotesCreate.releveNotesVo.push(releveNotesClone);
   // this.releveNotesCreate= new ReleveNotes( "");
 // }



  public saveDemandeReleveNotes(){
    this._http.post<DemandeReleveNotes>(this._url, this._demandeReleveNotesCreate).subscribe(

      data=>{
        console.log("ok");
        this._demandeReleveNotesCreate = new DemandeReleveNotes("", "", "","","","");
         this._releveNotesCreate = new ReleveNotes("");
      } ,error=>{
        console.log(error);
      }
    );
  }

  public findAll() {
    this._http.get<Array<DemandeReleveNotes>>(this._url).subscribe(
      data => {
        this.demandeReleveNotess = data;
      }, error => {
        console.log('error while loading  ...');
      }
    );
  }

  public findByCriteria() {
    this.http.post<Array<DemandeReleveNotes>>(this._url3, this._demandeReleveNotesSearch).subscribe(
      data => {
        console.log("success:" + data);
        this._demandeReleveNotess = data;
      }, error => {
        console.log("error");
      }
    );
  }


  public deleteDemandeReleveNotes(demandeReleveNotes: DemandeReleveNotes) {
    this.demandeReleveNotesSelected = demandeReleveNotes;
    if (this.demandeReleveNotesSelected != null) {
      this._http.delete<DemandeReleveNotes>(this._url2 + this._demandeReleveNotesSelected.refEtudiant).subscribe(
        error => {
          console.log("deleted ...");
          this.demandeReleveNotesSelected;
        });
      let index:number = this._demandeReleveNotess.indexOf(demandeReleveNotes);
      this._demandeReleveNotess.splice(index,1);
    }
  }


  get demandeReleveNotesSearch(): DemandeReleveNotes {
    return this._demandeReleveNotesSearch;
  }

  set demandeReleveNotesSearch(value: DemandeReleveNotes) {
    this._demandeReleveNotesSearch = value;
  }

  get url3(): string {
    return this._url3;
  }

  set url3(value: string) {
    this._url3 = value;
  }

  get demandeReleveNotess(): Array<DemandeReleveNotes> {
    return this._demandeReleveNotess;
  }

  set demandeReleveNotess(value: Array<DemandeReleveNotes>) {
    this._demandeReleveNotess = value;
  }

  get releveNotesCreate(): ReleveNotes {
    return this._releveNotesCreate;
  }

  set releveNotesCreate(value: ReleveNotes) {
    this._releveNotesCreate = value;
  }

  get demandeReleveNotesList(): DemandeReleveNotes[] {
    return this._demandeReleveNotesList;
  }

  set demandeReleveNotesList(value: DemandeReleveNotes[]) {
    this._demandeReleveNotesList = value;
  }

  get demandeReleveNotesCreate(): DemandeReleveNotes {
    return this._demandeReleveNotesCreate;
  }

  set demandeReleveNotesCreate(value: DemandeReleveNotes) {
    this._demandeReleveNotesCreate = value;
  }


  get demandeReleveNotesSelected(): DemandeReleveNotes {
    return this._demandeReleveNotesSelected;
  }

  set demandeReleveNotesSelected(value: DemandeReleveNotes) {
    this._demandeReleveNotesSelected = value;
  }

  get url2(): string {
    return this._url2;
  }

  set url2(value: string) {
    this._url2 = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
