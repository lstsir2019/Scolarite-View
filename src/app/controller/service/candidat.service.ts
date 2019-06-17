import {Injectable} from '@angular/core';
import {Candidat} from '../model/candidat.model';
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
  public listCandidats: Array<Candidat> = [];
  public filtered: Array<Candidat> = [];

  public CondidatSelected=new Candidat("","","","","","","","","","");


  public print(reference:string):any{
    const httpOptions = {
      responseType : 'blob' as 'json' //This also worked
    };
    return this.http.get("http://localhost:8099/inscription/etudiants/pdf/"+reference,httpOptions).subscribe((resultBlob: Blob) => {
      var downloadURL = URL.createObjectURL(resultBlob);
      window.open(downloadURL);});
  }

  public create(etudiant: Candidat) {
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
public findInListByCne(reference:string,cne:String){
  if(cne == null){
this.finByRefConcours(reference);
  }else{
 const filter =(candidat: Candidat[])=>this.listCandidats.filter(candidat=> candidat.cne.match("^"+cne+".*$"));
    this.filtered=filter(this.listCandidats);

  }
}

  public pushChoix(etudiant: Candidat, choix: Choix) {
    let ChoixClone = new Choix(choix.refConcours, choix.numChoix);
    console.log(choix.numChoix);
    etudiant.choixVos.push(ChoixClone);

  }

  public removeChoix(etudiant: Candidat, choix: Choix) {
     etudiant.choixVos.splice(etudiant.choixVos.indexOf(choix),1);
  }
  public finByCne(cne:string){
    this.http.get(this.url+"liste_etudiants/"+cne).subscribe(
      data=>{
        this.CondidatSelected=<Candidat>data;
        console.log("ok"+ this.CondidatSelected.cne);
      }, error1 => {
        console.log("eror");
      });

  }

  public finByRefConcours(refence: string){
    this.http.get<Array<Candidat>>(this.url+"/listePostule/refConcours/"+refence).subscribe(
      data => {
        console.log(data)
        this.listCandidats = data;
        this.filtered=data;
      },
      error1 => {
        console.log('error while loading elements...');
      }
    );
  }

}

