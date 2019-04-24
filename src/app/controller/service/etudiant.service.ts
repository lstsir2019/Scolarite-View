import { Injectable } from '@angular/core';
import {Etudiant} from '../model/etudiant.model';
import {Filiere} from '../model/filiere.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  public url: string = 'http://localhost:8091/efaculte-v1-api/etudiants/';
  filiere: Filiere;
  public etudiantCreate = new Etudiant(0, '', '',  '');

  constructor(private http: HttpClient) { }
  // public addEtudiant() {
  //   const etudiantClone = new Etudiant(this.etudiantCreate.cne, this.etudiantCreate.nom, this.etudiantCreate.prenom, this.etudiantCreate.filiere);
  //   this.etudiantCreate.etudiants.push(etudiantClone);
  // }

  public save() {
    this.http.post<Etudiant>(this.url, this.etudiantCreate).subscribe(
      data => {
        console.log('Done');
    }, error => {
        console.log('error');
    }
    );
  }

}
