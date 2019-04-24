import {Injectable} from '@angular/core';
import {Etudiant} from '../model/candidat.model';
import {HttpClient} from '@angular/common/http';
import {Choix} from '../model/choix.model';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(public http: HttpClient) {
  }

  public url: string = 'http://localhost:8099/inscription/etudiants/';

  public create(etudiant: Etudiant) {
    this.http.post(this.url, etudiant).subscribe(
      data => {
        console.log('ok');
      }, error1 => {
        console.log('erreur de la creation de letudiant');
      }
    );
  };

  public pushChoix(etudiant: Etudiant, choix: Choix) {
    let ChoixClone = new Choix(choix.refConcours, choix.numChoix);
    console.log(choix.numChoix);
    etudiant.choixVos.push(ChoixClone);

  }

  public removeChoix(etudiant: Etudiant, choix: Choix) {
     etudiant.choixVos.splice(etudiant.choixVos.indexOf(choix),1);
  }

}
