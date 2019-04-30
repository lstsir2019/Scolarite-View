import { Injectable } from '@angular/core';
import {DemandeScolarite} from '../model/demande-scolarite.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeScolariteService {

  private _url:string="http://localhost:8099/simple-faculte-scolarite/demandeScolarites/";
  private _url2:string="http://localhost:8099/simple-faculte-scolarite/demandeScolarites/refEtudiant/";
  private _url3:string ="http://localhost:8099/simple-faculte-scolarite/demandeScolarites/chercher";


  private _demandeScolariteSearch: DemandeScolarite = new DemandeScolarite("","","","","");

  private _demandeScolariteSelected : DemandeScolarite=new DemandeScolarite("","","","","");

  private _demandeScolarites: Array<DemandeScolarite>;

  private _demandeScolariteCreate: DemandeScolarite = new DemandeScolarite ("", "",  "", "", "");
  private _demandeScolariteList = Array <DemandeScolarite>();

  constructor(private _http:HttpClient) { }

  public addDemandeScolarite(){
    let demandeScolariteClone = new DemandeScolarite(this._demandeScolariteCreate.refEtudiant, this._demandeScolariteCreate.refFiliere, this._demandeScolariteCreate.nom, this._demandeScolariteCreate.prenom, this._demandeScolariteCreate.email);
    this._demandeScolariteList.push(demandeScolariteClone);
  }



  public saveDemandeScolarite(){
    // this._http.get()
    this._http.post<DemandeScolarite>(this._url, this._demandeScolariteCreate).subscribe(

      data=>{
        console.log("ok");
        this._demandeScolariteCreate = new DemandeScolarite("", "", "", "", "");
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

  public print():any{
    const httpOptions = {
      responseType : 'blob' as 'json' //This also worked
    };
    return this.http.get("http://localhost:8099/simple-faculte-scolarite/demandeScolarites/pdf",httpOptions).subscribe((resultBlob: Blob) => {
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
