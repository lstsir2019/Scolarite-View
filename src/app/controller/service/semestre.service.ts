import { Injectable } from '@angular/core';
import {Semestre} from '../model/semestre.model';
import {HttpClient} from '@angular/common/http';
import {Filiere} from '../model/filiere.model';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  private _url: string = 'http://localhost:8091/efaculte-v1-api/semestres/';
  private _semestres: Array<Semestre>;
  private _semestreCreate: Semestre = new Semestre('', '');

  constructor(private _http: HttpClient) { }
  public addSemestre() {
    let semestreClone = new Semestre(this._semestreCreate.libelle, this._semestreCreate.reference);
    this.semestreCreate.semestres.push(semestreClone);
  }

  public save() {
    this._http.post<Semestre>(this._url, this._semestreCreate).subscribe(
      data => {
        console.log('Done');
      }, error => {
        console.log('error');
      }
    );
  }


  public findAll() {
    this._http.get<Array<Semestre>>(this._url).subscribe(
      data => {
        this.semestres = data;
      }, error => {
        console.log('error while loading semestres ...');
      }
    );
  }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get semestres(): Array<Semestre> {
    return this._semestres;
  }

  set semestres(value: Array<Semestre>) {
    this._semestres = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }


  get semestreCreate(): Semestre {
    return this._semestreCreate;
  }

  set semestreCreate(value: Semestre) {
    this._semestreCreate = value;
  }
}
