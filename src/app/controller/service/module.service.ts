import { Injectable } from '@angular/core';
import {Module} from '../model/module.model';
import {Filiere} from '../model/filiere.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private _urlFilieres: string = 'http://localhost:8091/efaculte-v1-api/fillieres/';
  private _url: string = 'http://localhost:8091/efaculte-v1-api/filliereModules/';
  private _filiere: Filiere;
  private _filieres: Array<Filiere>;
  private _moduleCreate = new Module('', '', '', '' , '', '' );

  constructor(private _http: HttpClient) { }

 public addModule() {
    let moduleClone = new Module(this.moduleCreate.libelle, this.moduleCreate.Code, this.moduleCreate.semestre, this.moduleCreate.filiere, this.moduleCreate.dateDebut, this.moduleCreate.dateFin);
    this._moduleCreate.modules.push(moduleClone);
 }

  public save() {
    this._http.post<Module>(this._url, this._moduleCreate).subscribe(
      data => {
        console.log('Done');
        this.moduleCreate =  new Module('', '', '', '' , '', '' );
      }, error => {
        console.log('error');
      }
    );
  }

  public findAllFilieres() {
    this._http.get<Array<Filiere>>(this._urlFilieres).subscribe(
      data => {
        this.filieres = data;
      }, error => {
        console.log('error while loading filieres ...');
      }
    );
  }



  get filiere(): Filiere {
    return this._filiere;
  }

  set filiere(value: Filiere) {
    this._filiere = value;
  }

  get moduleCreate(): Module {
    return this._moduleCreate;
  }

  set moduleCreate(value: Module) {
    this._moduleCreate = value;
  }
  get filieres(): Array<Filiere> {
    return this._filieres;
  }

  set filieres(value: Array<Filiere>) {
    this._filieres = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  get urlFilieres(): string {
    return this._urlFilieres;
  }

  set urlFilieres(value: string) {
    this._urlFilieres = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
