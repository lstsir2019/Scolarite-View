import { Injectable } from '@angular/core';
import {DemandeScolarite} from '../model/demande-scolarite.model';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import {DemandeInscription} from '../model/demande-inscription.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeScolariteService {

  private _url:string="http://localhost:8099/simple-faculte-scolarite/demandeScolarites/";
  private _url2:string="http://localhost:8099/simple-faculte-scolarite/demandeScolarites/refEtudiant/";
  private _url3:string ="http://localhost:8099/simple-faculte-scolarite/demandeScolarites/chercher";


  private _demandeScolariteSearch: DemandeScolarite = new DemandeScolarite("","","","","","");

  private _demandeScolariteSelected : DemandeScolarite=new DemandeScolarite("","","","","","");

  private _demandeScolarites: Array<DemandeScolarite>;

  private _demandeScolariteCreate: DemandeScolarite = new DemandeScolarite ("", "",  "", "", "","");
  private _demandeScolariteList = Array <DemandeScolarite>();

  constructor(private _http:HttpClient) { }

  public addDemandeScolarite(){
    let demandeScolariteClone = new DemandeScolarite(this._demandeScolariteCreate.refEtudiant, this._demandeScolariteCreate.refFiliere, this._demandeScolariteCreate.nom, this._demandeScolariteCreate.prenom, this._demandeScolariteCreate.email, this._demandeScolariteCreate.cin);
    this._demandeScolariteList.push(demandeScolariteClone);
  }



  public saveDemandeScolarite(){
    this._http.post<number>(this._url, this._demandeScolariteCreate).subscribe(
      data=>{
        if (data == -1) {
          Swal.fire('ERREUR !', 'LE CNE a été déjà utilisé !', 'error');
        }
        else if (data == -3) {
          Swal.fire('ERREUR !', 'Le champ "NOM" ne peut pas être vide !', 'error');
        }
        else if (data == -4) {
          Swal.fire('ERREUR !', 'Le champ "PRENOM" ne peut pas être vide !', 'error');
        }
        else if (data == -5) {
          Swal.fire('ERREUR !', 'Le champ "EMAIL" ne peut pas être vide !', 'error');
        }
        else if (data == -6) {
          Swal.fire('ERREUR !', 'Le champ "FILIERE" ne peut pas être vide !', 'error');
        }
        else if (data == -7) {
          Swal.fire('ERREUR !', 'Le champ "CIN" ne peut pas être vide !', 'error');
        }
        else if (data == -2) {
          Swal.fire('ERREUR !', 'Le champ "CNE" ne peut pas être vide !', 'error');
        }
        else { (data == 1)
          Swal.fire('SUCCES !', 'La demande a été effectuée aves succès !', 'success');
        }
        console.log("ok");
        this._demandeScolariteCreate = new DemandeScolarite("", "", "", "", "","");
      } ,error=>{
        console.log("error");
      }
    );
  }



public deleteDemandeScolarite(demandeScolarite: DemandeScolarite) {
  this.demandeScolariteSelected = demandeScolarite;
  if (this.demandeScolariteSelected != null) {
    this._http.delete<DemandeScolarite>(this._url2 + this._demandeScolariteSelected.refEtudiant).subscribe(
      error => {
        console.log("deleted ...");
        this.demandeScolariteSelected;
      });
    let index:number = this._demandeScolarites.indexOf(demandeScolarite);
    this._demandeScolarites.splice(index,1);
  }
}

  public print(refEtudiant : string){
    const httpOptions = {
      responseType : 'blob' as 'json' //This also worked
    };
    return this.http.get("http://localhost:8099/simple-faculte-scolarite/demandeScolarites/pdf/refEtudiant/"+refEtudiant,httpOptions).subscribe((resultBlob: Blob) => {
      var downloadURL = URL.createObjectURL(resultBlob);
      window.open(downloadURL);});
  }


  public findByCriteria() {
    console.log(this.demandeScolariteSearch);
    this.http.post<Array<DemandeScolarite>>(this._url3, this._demandeScolariteSearch).subscribe(
      data => {
        console.log("success:" + data);
        this._demandeScolarites = data;
      }, error => {
        console.log("error");
      }
    );
  }

public deleteD (d: DemandeScolarite){
    const refEtudiant: number = this._demandeScolarites.indexOf(d);
    delete this._demandeScolarites[refEtudiant];
}


  // public chercherDemande() {
  //   this.http.post<Array<DemandeScolarite>>('http://localhost:8090/faculte-commande/commandes/chercherCommande', this.commandecherch).subscribe(
  //     data => {
  //       this.commandes = data;
  //     }, error1 => {
  //       console.log(error1);
  //     }
  //   );
  // }


  public findAll() {
    this._http.get<Array<DemandeScolarite>>(this._url).subscribe(
      data => {
        this.demandeScolarites = data;
      }, error => {
        console.log('error while loading  ...');
      }
    );
  }


  public findByRefEtudiant(refEtudiant : string){
    this.http.get<DemandeScolarite>(this._url2+refEtudiant).subscribe(
      data => {
        console.log("success:" + data);
        this._demandeScolariteSelected = data;
      }, error => {
        console.log("error");
      }
    );
  }




  get demandeScolarites(): Array<DemandeScolarite> {
    return this._demandeScolarites;
  }

  set demandeScolarites(value: Array<DemandeScolarite>) {
    this._demandeScolarites = value;
  }

  get demandeScolariteCreate(): DemandeScolarite {
    return this._demandeScolariteCreate;
  }

  set demandeScolariteCreate(value: DemandeScolarite) {
    this._demandeScolariteCreate = value;
  }

  get demandeScolariteList(): DemandeScolarite[] {
    return this._demandeScolariteList;
  }

  set demandeScolariteList(value: DemandeScolarite[]) {
    this._demandeScolariteList = value;
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


  get url2(): string {
    return this._url2;
  }

  set url2(value: string) {
    this._url2 = value;
  }

  get demandeScolariteSelected(): DemandeScolarite {
    return this._demandeScolariteSelected;
  }

  set demandeScolariteSelected(value: DemandeScolarite) {
    this._demandeScolariteSelected = value;
  }


  get demandeScolariteSearch(): DemandeScolarite {
    return this._demandeScolariteSearch;
  }

  set demandeScolariteSearch(value: DemandeScolarite) {
    this._demandeScolariteSearch = value;
  }

  get url3(): string {
    return this._url3;
  }

  set url3(value: string) {
    this._url3 = value;
  }
}
