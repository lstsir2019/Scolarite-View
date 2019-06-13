import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Concours} from '../model/concours.model';
import Swal from 'sweetalert2';
import {CoefModuleConcours} from '../model/coef-module-concours.model';
import {ModuleConcours} from '../model/module-concours.model';
import {Filiere} from '../model/filiere.model';

@Injectable({
  providedIn: 'root'
})
export class ConcoursService {


  constructor(private http: HttpClient) {
  }

  private _url: string = 'http://localhost:8090/concours-api/concours/';
  private _url1: string = 'http://localhost:8090/concours-api/concours/search';
  private _url2: string = 'http://localhost:8090/concours-api/concours/update';
  public listeDesAnnee = [];
  public listeConcoursByAnnee = [];
  public listeModuleConcours = [];
  private _concoursCreate: Concours = new Concours('', '', '', '', '', '', '', '');

  private _coefmoduleConcours: CoefModuleConcours = new CoefModuleConcours('');
  private _moduleCreate: ModuleConcours = new ModuleConcours('', this._coefmoduleConcours, 0);
  private _listConcours: Array<Concours>;
  private _concoursSelected: Concours;
  private _moduleSelected: ModuleConcours;
  private _concoursSearched: Concours = new Concours('', '', '', '', '', '', '', '');
  private _filieres: Array<Filiere>;

  public addModuleConcours() {
    let coefModuleConcoursVoClone = new CoefModuleConcours(this._moduleCreate.coefModuleConcoursVo.coef);
    let moduleConcoursClone = new ModuleConcours(this._moduleCreate.reference, coefModuleConcoursVoClone, this._moduleCreate.id);
    this._concoursCreate.moduleConcoursVo.push(moduleConcoursClone);
  }

  /* public deleteD (moduleConcours:ModuleConcours){
     const refEtudiant: number = this._concoursCreate.moduleConcoursVo.indexOf(moduleConcours);
    delete this._concoursCreate.moduleConcoursVo[refEtudiant];
   }
 */

  //Creation du Concours
  public saveConcours() {
    this.http.post<Concours>(this._url, this._concoursCreate).subscribe(
      data => {
        if (data) {
          Swal.fire('SUCCES', 'Création réussite', 'success');
          console.log('ok');
          this.findAll();
          this._concoursCreate = new Concours('', '', '', '', '', '', '', '');
        } else {
          Swal.fire('ERREUR !', 'Erreur !', 'error');
        }
      }, error => {
        console.log('error');
      });
  }


  get url(): string {
    return this._url;
  }


  set url(value: string) {
    this._url = value;
  }

  get concoursCreate(): Concours {
    return this._concoursCreate;
  }

  set concoursCreate(value: Concours) {
    this._concoursCreate = value;
  }

  get coefmoduleConcours(): CoefModuleConcours {
    return this._coefmoduleConcours;
  }

  set coefmoduleConcours(value: CoefModuleConcours) {
    this._coefmoduleConcours = value;
  }

  get moduleCreate(): ModuleConcours {
    return this._moduleCreate;
  }

  set moduleCreate(value: ModuleConcours) {
    this._moduleCreate = value;
  }


  get listConcours(): Array<Concours> {

    return this._listConcours;
  }

  set listConcours(value: Array<Concours>) {
    this._listConcours = value;
  }


  get concoursSelected(): Concours {
    return this._concoursSelected;
  }

  set concoursSelected(value: Concours) {
    this._concoursSelected = value;
  }


  get moduleSelected(): ModuleConcours {
    return this._moduleSelected;
  }

  set moduleSelected(value: ModuleConcours) {
    this._moduleSelected = value;
  }


  get concoursSearched(): Concours {
    return this._concoursSearched;
  }


  get url1(): string {
    return this._url1;
  }

  set url1(value: string) {
    this._url1 = value;
  }

  set concoursSearched(value: Concours) {
    this._concoursSearched = value;
  }


  get url2(): string {
    return this._url2;
  }

  set url2(value: string) {
    this._url2 = value;
  }

  get filieres(): Array<Filiere> {
    return this._filieres;
  }

  set filieres(value: Array<Filiere>) {
    this._filieres = value;
  }

  findfiliereByTypeFiliere() {
    this.http.get<Array<Filiere>>(this._url + '/filiere/type/2').subscribe(
      data => {
        this.filieres = data;
      }, error => {
        console.log('error while loading filieres ...');
      }
    );
  }


  findAll() {
    this.http.get<Array<Concours>>(this._url).subscribe(
      data => {
        this._listConcours = data;
        for (let i = 0; i < this.listConcours.length; i++) {
          this.listeDesAnnee.push(this.listConcours[i].anneeConcours);
          this.listeDesAnnee = this.listeDesAnnee.filter((e1, i, a) => i === a.indexOf(e1));
        }
      }, error => {
        console.log('error while loading concours ...');
      }
    );
  }


  public findModuleConcoursByReferenceConcours(concours: Concours) {
    this._concoursSelected = concours;
    if (this.concoursSelected != null) {
      this.http.get<Array<ModuleConcours>>(this._url + 'reference/' + this.concoursSelected.reference + '/module-concours').subscribe(
        data => {
          this._concoursSelected.moduleConcoursVo = data;
          console.log(this.listeModuleConcours);
        }, error => {
          console.log('error while loading Modules ...');
        }
      );
    }
  }

  public refdaba: string;

  public findModuleConcoursByRefConcours(reference: string) {
    this.refdaba = reference;
    this.http.get<Array<ModuleConcours>>(this._url + 'reference/' + reference + '/module-concours').subscribe(
      data => {
        this.listeModuleConcours = data;
        console.log(this.listeModuleConcours);
      }, error => {
        console.log('error while loading Modules ...');
      }
    );

  }

  public findConcoursByRefConcours(reference: string) {
    this.http.get<Array<Concours>>(this._url + 'reference/' + reference).subscribe(
      data => {
        this._listConcours = data;
        console.log(this._listConcours);
      }, error => {
        console.log('error while loading Modules ...');
      }
    );

  }


  public deleteConcoursComplet(concours: Concours) {
    this.concoursSelected = concours;
    if (this.concoursSelected != null) {
      console.log(this.url + 'reference/' + this.concoursSelected.reference);
      this.http.delete<Concours>(this.url + 'reference/' + this.concoursSelected.reference).subscribe(error => {

        console.log('Concours Deleted with reference = ' + this.concoursSelected.reference + '' + error);
        this.concoursSelected.moduleConcoursVo = new Array();
      });
      let index: number = this._listConcours.indexOf(concours);
      this._listConcours.splice(index, 1);
    }

  }


  public deleteModuleConcours(moduleConcours: ModuleConcours) {
    this.moduleSelected = moduleConcours;
    if (this.moduleSelected != null) {
      console.log(this.url + 'reference/' + this.moduleSelected.reference);
      this.http.delete<ModuleConcours>(this.url + 'module-concours/reference/' + this.moduleSelected.id).subscribe(error => {
        this.findModuleConcoursByReferenceConcours(this.concoursSelected);
      });

    }
  }

  public updateConcours(concoursupdated: Concours) {
    if (concoursupdated != null) {
      console.log('koko');
      this.http.put(this._url2, concoursupdated).subscribe(
        data => {
          if (data == -1) {
            Swal.fire({
              title: 'failed !',
              text: 'déja accorder',
              type: 'error',
            });
          }

          if (data == -1) {
            Swal.fire({
              title: 'failed !',
              text: 'qte non acceptable',
              type: 'error',
            });
          }

          if (data == 1) {
            Swal.fire({
              title: 'done !!',
              text: 'une qte a été accorder',
              type: 'success',
            });
          }
          console.log('Done ... !');
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  public updateModuleConcours(moduleUpdated: ModuleConcours) {
    if (moduleUpdated != null) {
      console.log('koko');
      this.http.put('http://localhost:8090/concours-api/concours/module-concours/update/', moduleUpdated).subscribe(
        data => {
          if (data == 1){
          console.log('Done ... !');
        }},
        error => {
          console.log(error);
        }
      );
    }
  }

  public findByAnneeConcours(anneeConcours: number) {
    this.http.get<Array<Concours>>(this._url + /annee/ + anneeConcours).subscribe(
      data => {
        this.listeConcoursByAnnee = data;
        console.log(data);
      }, error1 => {
        console.log('error Annee');
      }
    );

  }

  public findByQuery() {
    console.log(this._concoursSearched);
    this.http.post<Array<Concours>>(this._url1, this._concoursSearched).subscribe(
      data => {
        this._listConcours = data;
      }, error => {
        console.log('Error');
      }
    );
  }

  public findByRefModule(id: number) {
    this.http.get<ModuleConcours>(this.url + 'module-concours/' + id).subscribe(
      data => {
        this.moduleSelected = data;
        console.log('ok' + this.moduleSelected.id);
      }, error1 => {
        console.log('eror');
      });

  }

  /*constructor(private http: HttpClient) { }
  public url:string="http://localhost:8092/concours-api/concours/reference";

  public listConcours=Array<Concours>();

  public findAll(){

    this.http.get<Array<Concours>>(this.url).subscribe(
      data => {
        this.listConcours = data;
      },
      error1 => {
        console.log('error while loading elements...');
      }
    );
  }*/
}
