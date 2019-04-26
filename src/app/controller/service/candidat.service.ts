import {Injectable} from '@angular/core';
import {Etudiant} from '../model/candidat.model';
import {HttpClient} from '@angular/common/http';
import {Choix} from '../model/choix.model';
import Swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(public http: HttpClient) {
  }

  public url: string = 'http://localhost:8099/inscription/etudiants/';

  public create(etudiant: Etudiant) {
    this.http.post(this.url, etudiant).subscribe(
      data => {
        console.log(etudiant.adressePersonnelle)
        if (data== 1){
          Swal.fire({
            title: 'Création élément',
            text: 'Création réussite',
            type: 'success',
          });
        }else {
          Swal.fire({
            title:"Création élément",
            text: 'Erreur de la création',
            type: 'error',
          });
        }
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

