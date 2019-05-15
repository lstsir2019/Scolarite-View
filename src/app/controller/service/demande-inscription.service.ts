import { Injectable } from '@angular/core';
import {DemandeInscription} from '../model/demande-inscription.model';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import {Filiere} from '../model/filiere.model';
import {DemandeScolarite} from '../model/demande-scolarite.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeInscriptionService {

  private _url:string="http://localhost:8099/simple-faculte-scolarite/demandeInscriptions/";
  private _url2:string="http://localhost:8099/simple-faculte-scolarite/demandeInscriptions/refEtudiant/";
  private _url3:string ="http://localhost:8099/simple-faculte-scolarite/demandeInscriptions/chercher";



  private _demandeInscriptionSelected : DemandeInscription=new DemandeInscription("","","","","", "");

  private _demandeInscriptionSearch: DemandeInscription = new DemandeInscription("","","","","", "");

  private _demandeInscriptions: Array<DemandeInscription>;

  private _demandeInscriptionCreate: DemandeInscription = new DemandeInscription ("", "","","","","");
  private _demandeInscriptionList = Array <DemandeInscription>();

  constructor(private _http:HttpClient) { }

  public addDemandeInscription(){
    let demandeInscriptionClone = new DemandeInscription(this._demandeInscriptionCreate.refEtudiant, this._demandeInscriptionCreate.refFiliere, this._demandeInscriptionCreate.nom, this._demandeInscriptionCreate.prenom, this._demandeInscriptionCreate.email, this._demandeInscriptionCreate.cin);
    this._demandeInscriptionList.push(demandeInscriptionClone);
  }


  public saveDemandeInscription(){
    this._http.post<number>(this._url, this._demandeInscriptionCreate).subscribe(

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
          Swal.fire('ERREUR !', 'La champ "CNE" ne peut pas être vide !', 'error');
        }
        else { (data == 1)
          Swal.fire('SUCCES !', 'La demande a été effectuée aves succès !', 'success');
        }
        console.log("ok");
        this._demandeInscriptionCreate = new DemandeInscription("", "","","","", "");
      } ,error=>{
        console.log("error");
      }
    );
  }






  public deleteDemandeInscription(demandeInscription: DemandeInscription) {
    this.demandeInscriptionSelected = demandeInscription;
    if (this.demandeInscriptionSelected != null) {
      this._http.delete<DemandeInscription>(this._url2 + this._demandeInscriptionSelected.refEtudiant).subscribe(
        error => {
          console.log("deleted ...");
          this.demandeInscriptionSelected;
        });
      let index:number = this._demandeInscriptions.indexOf(demandeInscription);
      this._demandeInscriptions.splice(index,1);
    }
  }


  public print():any{
    const httpOptions = {
      responseType : 'blob' as 'json' //This also worked
    };
    return this.http.get("http://localhost:8099/simple-faculte-scolarite/demandeInscriptions/pdf",httpOptions).subscribe((resultBlob: Blob) => {
      var downloadURL = URL.createObjectURL(resultBlob);
      window.open(downloadURL);});
  }



  public findAll() {
    this._http.get<Array<DemandeInscription>>(this._url).subscribe(
       data => {
        this.demandeInscriptions = data;
      }, error => {
        console.log('error while loading  ...');
      }
    );
  }


  public findByCriteria() {
    this.http.post<Array<DemandeInscription>>(this._url3, this._demandeInscriptionSearch).subscribe(
      data => {
        console.log("success:" + data);
        this._demandeInscriptions = data;
      }, error => {
        console.log("error");
      }
    );
  }

  public findByRefEtudiant(refEtudiant : string){
    this.http.get<DemandeInscription>(this._url2+refEtudiant).subscribe(
      data => {
        console.log("success:" + data);
        this._demandeInscriptionSelected = data;
      }, error => {
        console.log("error");
      }
    );
  }



  get demandeInscriptions(): Array<DemandeInscription> {
    return this._demandeInscriptions;
  }

  set demandeInscriptions(value: Array<DemandeInscription>) {
    this._demandeInscriptions = value;
  }


  get demandeInscriptionCreate(): DemandeInscription {
    return this._demandeInscriptionCreate;
  }

  set demandeInscriptionCreate(value: DemandeInscription) {
    this._demandeInscriptionCreate = value;
  }


  get demandeInscriptionSelected(): DemandeInscription {
    return this._demandeInscriptionSelected;
  }

  set demandeInscriptionSelected(value: DemandeInscription) {
    this._demandeInscriptionSelected = value;
  }

  get demandeInscriptionSearch(): DemandeInscription {
    return this._demandeInscriptionSearch;
  }

  set demandeInscriptionSearch(value: DemandeInscription) {
    this._demandeInscriptionSearch = value;
  }

  get url2(): string {
    return this._url2;
  }

  set url2(value: string) {
    this._url2 = value;
  }

  get url3(): string {
    return this._url3;
  }

  set url3(value: string) {
    this._url3 = value;
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


  get demandeInscriptionList(): DemandeInscription[] {
    return this._demandeInscriptionList;
  }

  set demandeInscriptionList(value: DemandeInscription[]) {
    this._demandeInscriptionList = value;
  }
}
