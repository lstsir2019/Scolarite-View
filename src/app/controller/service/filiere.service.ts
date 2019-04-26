import { Injectable } from '@angular/core';
import {Filiere} from '../model/filiere.model';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private _url: string = 'http://localhost:8091/efaculte-v1-api/fillieres/';
  private _filieres: Array<Filiere>;
  private _filiereCreate: Filiere = new Filiere('', '', '');


  constructor(private _http: HttpClient) { }
  public addFiliere() {
    let filiereClone = new Filiere(this._filiereCreate.libelle, this._filiereCreate.reference, this._filiereCreate.refDepartement);
    this.filiereCreate.filieres.push(filiereClone);
  }

  public save() {
    this._http.post<Filiere>(this._url, this._filiereCreate).subscribe(
      data => {
        console.log('Done');
        this._filiereCreate = new Filiere('', '', '');
      }, error => {
        console.log('error');
      }
    );
  }
  public findAll() {
      this._http.get<Array<Filiere>>(this._url).subscribe(
        data => {
          this.filieres = data;
        }, error => {
          console.log('error while loading filieres ...');
      }
      );
    }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get filieres(): Array<Filiere> {
    // if (this._filieres==null) {
    //   this.http.get<Array<Filiere>>(this._url).subscribe(
    //     data => {
    //       this._filieres = data;
    //     }
    //     , error => {
    //       console.log('error while loading filieres ...');
    //     }
    //   );
    // }

    return this._filieres;
  }

  set filieres(value: Array<Filiere>) {
    this._filieres = value;
  }

  get filiereCreate(): Filiere {
    return this._filiereCreate;
  }

  set filiereCreate(value: Filiere) {
    this._filiereCreate = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
