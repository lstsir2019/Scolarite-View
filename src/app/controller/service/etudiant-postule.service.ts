import { Injectable } from '@angular/core';
import {Candidat} from "../model/candidat.model";
import {HttpClient} from "@angular/common/http";
import {Choix} from "../model/choix.model";

@Injectable({
  providedIn: 'root'
})
export class EtudiantPostuleService {

  constructor(public http: HttpClient) { }

  public listChoixs: Array<Candidat> = [];
  public url: string = 'http://localhost:8099/inscription/etudiants/';

  public finByRefConcours(refence: string){
    this.http.get<Array<Candidat>>(this.url+"/listePostule/refConcours/"+refence).subscribe(
      data => {
        console.log(data)
        this.listChoixs = data;
      },
      error1 => {
        console.log('error while loading elements...');
      }
    );
  }
}
