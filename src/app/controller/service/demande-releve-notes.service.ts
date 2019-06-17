import {Injectable} from '@angular/core';
import {DemandeReleveNotes} from '../model/demande-releve-notes.model';
import {HttpClient} from '@angular/common/http';
import {ReleveNotes} from '../model/releve-notes.model';
import Swal from 'sweetalert2';
import {DemandeInscription} from '../model/demande-inscription.model';
import {DemandeScolarite} from '../model/demande-scolarite.model';
import {RetenueEcrit} from '../model/retenue-ecrit.model';
import {Semestre} from '../model/semestre.model';
import {SemestreService} from './semestre.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeReleveNotesService {

  private _url: string = 'http://localhost:9004/microservice1-demande/simple-faculte-scolarite/demandeReleveNotess/';
  private _url2: string = 'http://localhost:9004/microservice1-demande/simple-faculte-scolarite/demandeReleveNotess/refEtudiant/';
  private _url3: string = 'http://localhost:9004/microservice1-demande/simple-faculte-scolarite/demandeReleveNotess/chercher';
  private _url4: string = 'http://localhost:9004/microservice1-etudiant/efaculte-v1-api/semestres/';

  private _demandeReleveNotess: Array<DemandeReleveNotes>;

  public semestres: Array<Semestre> = [];
  public semestresSelected: Array<Semestre> = [];

  private _demandeReleveNotesSearch: DemandeReleveNotes = new DemandeReleveNotes('', '', '', '', '', '', '', '');

  private _demandeReleveNotesSelected: DemandeReleveNotes = new DemandeReleveNotes('', '', '', '', '', '', '', '');

  private _demandeReleveNotesCreate: DemandeReleveNotes = new DemandeReleveNotes('', '', '', '', '', '', '', '');
  private _releveNotesCreate: ReleveNotes = new ReleveNotes('');
  private _demandeReleveNotesList = Array<DemandeReleveNotes>();


  constructor(private _http: HttpClient, private _semestreService: SemestreService) {
  }

  public semestres10: Array<Semestre> = new Array<Semestre>();
  public semestress: string[] = [];


  public addDemandeReleveNotes() {
    let demandeReleveNotesClone = new DemandeReleveNotes(this._demandeReleveNotesCreate.refEtudiant, this._demandeReleveNotesCreate.refFiliere, this._demandeReleveNotesCreate.nom, this._demandeReleveNotesCreate.prenom, this._demandeReleveNotesCreate.email, this._demandeReleveNotesCreate.cin, this._demandeReleveNotesCreate.annee, this._demandeReleveNotesCreate.refSemestre);
    this._demandeReleveNotesList.push(demandeReleveNotesClone);
  }


  public saveDemandeReleveNotes() {
    if (this._demandeReleveNotesCreate.email.includes('@')) {
      var a = this._demandeReleveNotesCreate.annee;
      if (a == "2015" || a == "2016" || a == "2017" || a == "2018"|| a == "2019"  ) {
        this._http.post<number>(this._url, this._demandeReleveNotesCreate).subscribe(
          data => {
            if (this._demandeReleveNotesCreate.nom == '') {
              Swal.fire('ERREUR !', 'Le champ "NOM" ne peut pas être vide !', 'error');
            }
            else if (this._demandeReleveNotesCreate.prenom == '') {
              Swal.fire('ERREUR !', 'Le champ "PRENOM" ne peut pas être vide !', 'error');
            }
            else if (this._demandeReleveNotesCreate.email == '') {
              Swal.fire('ERREUR !', 'Le champ "EMAIL" ne peut pas être vide !', 'error');
            }
            else if (data == -5) {
              Swal.fire('ERREUR !', 'Le champ "FILIERE" ne peut pas être vide !', 'error');
            }
            else if (data == -6) {
              Swal.fire('ERREUR !', 'Le champ "SEMESTRE" ne peut pas être vide !', 'error');
            }
            else if (this._demandeReleveNotesCreate.refEtudiant == '') {
              Swal.fire('ERREUR !', 'Le champ "CNE" ne peut pas être vide !', 'error');
            }

            else if (this._demandeReleveNotesCreate.annee == '') {
              Swal.fire('ERREUR !', 'Le champ "Année" ne peut pas être vide !', 'error');
            }

            else if (this._demandeReleveNotesCreate.cin = '') {
              Swal.fire('ERREUR !', 'Le champ "CIN" ne peut pas être vide !', 'error');
            }
            else {
              (data == 1);
              Swal.fire('SUCCES !', 'La demande a été effectuée aves succès !', 'success');
            }
            console.log(this._demandeReleveNotesCreate.refSemestre);
            console.log('ok');
            this._demandeReleveNotesCreate = new DemandeReleveNotes('', '', '', '', '', '', '', '');
            this._releveNotesCreate = new ReleveNotes('');
          }, error => {
            console.log(error);
          }
        );
      }else{
        Swal.fire('ERREUR !', "L'année est non valide !", 'error');
      }

    }
    else {
      Swal.fire('ERREUR !', "Le champ 'EMAIL' n'est pas valide !", 'error');
    }
  }

  public findAll() {
    this._http.get<Array<DemandeReleveNotes>>(this._url).subscribe(
      data => {
        this.demandeReleveNotess = data;
      }, error => {
        console.log('error while loading  ...');
      }
    );
  }

  public findByCriteria() {
    this.http.post<Array<DemandeReleveNotes>>(this._url3, this._demandeReleveNotesSearch).subscribe(
      data => {
        console.log('success:' + data);
        this._demandeReleveNotess = data;
      }, error => {
        console.log('error');
      }
    );
  }

  public findByRefEtudiant(refEtudiant: string, refSemestre: string) {
    this.http.get<DemandeReleveNotes>(this._url2 + refEtudiant + '/refSemestre/' + refSemestre).subscribe(
      data => {
        console.log('success:' + data);
        this._demandeReleveNotesSelected = data;
      }, error => {
        console.log('error');
      }
    );
  }

  public createList() {
    // console.log("ok");
    // for(let i = 0; i < this.semestres10.length; i++){
    //   this.semestress.push(this.semestres10[i].libelle);
    //
    // }
    // console.log(this.semestress);
  }

  public findAllSemestres() {
    this._http.get<Array<Semestre>>(this._url4).subscribe(
      data => {
        this.semestres10 = data;
        console.log(data);
        console.log(this.semestres10.length);
        this.semestress = [this.semestres10[0].libelle, this.semestres10[1].libelle, this.semestres10[2].libelle, this.semestres10[3].libelle, this.semestres10[4].libelle, this.semestres10[5].libelle];
      }, error => {
        console.log('error while loading semestres ...');
      }
    );

  }


  public print(refEtudiant: string, refFiliere: string, refSemestre: string, annee: string) {
    const httpOptions = {
      responseType: 'blob' as 'json' //This also worked
    };
    return this.http.get('http://localhost:9004/microservice1-demande/simple-faculte-scolarite/demandeReleveNotess/pdf/refEtudiant/' + refEtudiant + '/refFiliere/' + refFiliere + '/refSemestre/' + refSemestre + '/annee/' + annee, httpOptions).subscribe((resultBlob: Blob) => {
        var downloadURL = URL.createObjectURL(resultBlob);
        window.open(downloadURL);
      },
      error => {
        Swal.fire(
          'Cet étudiant ne possède pas de notes !',
          'Erreur !',
          'warning'
        );
      }
    );
  }


  public deleteDemandeReleveNotes(demandeReleveNotes: DemandeReleveNotes) {
    Swal.fire({
      title: '',
      text: 'Souhaitez-vous vraiment supprimer la demande ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d6000a',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
        if (result.value) {
          this.demandeReleveNotesSelected = demandeReleveNotes;
          if (this.demandeReleveNotesSelected != null) {
            this._http.delete<DemandeReleveNotes>(this._url2 + this._demandeReleveNotesSelected.refEtudiant).subscribe(
              error => {
                console.log('deleted ...');
                this.demandeReleveNotesSelected;
              });
            let index: number = this._demandeReleveNotess.indexOf(demandeReleveNotes);
            this._demandeReleveNotess.splice(index, 1);
          }
          Swal.fire(
            '',
            'Supprimé !',
            'success'
          );
        }
      },
    );
  }


  get demandeReleveNotesSearch(): DemandeReleveNotes {
    return this._demandeReleveNotesSearch;
  }

  set demandeReleveNotesSearch(value: DemandeReleveNotes) {
    this._demandeReleveNotesSearch = value;
  }

  get url3(): string {
    return this._url3;
  }

  set url3(value: string) {
    this._url3 = value;
  }

  get demandeReleveNotess(): Array<DemandeReleveNotes> {
    return this._demandeReleveNotess;
  }

  set demandeReleveNotess(value: Array<DemandeReleveNotes>) {
    this._demandeReleveNotess = value;
  }

  get releveNotesCreate(): ReleveNotes {
    return this._releveNotesCreate;
  }

  set releveNotesCreate(value: ReleveNotes) {
    this._releveNotesCreate = value;
  }

  get demandeReleveNotesList(): DemandeReleveNotes[] {
    return this._demandeReleveNotesList;
  }

  set demandeReleveNotesList(value: DemandeReleveNotes[]) {
    this._demandeReleveNotesList = value;
  }

  get demandeReleveNotesCreate(): DemandeReleveNotes {
    return this._demandeReleveNotesCreate;
  }

  set demandeReleveNotesCreate(value: DemandeReleveNotes) {
    this._demandeReleveNotesCreate = value;
  }


  get demandeReleveNotesSelected(): DemandeReleveNotes {
    return this._demandeReleveNotesSelected;
  }

  set demandeReleveNotesSelected(value: DemandeReleveNotes) {
    this._demandeReleveNotesSelected = value;
  }

  get url2(): string {
    return this._url2;
  }

  set url2(value: string) {
    this._url2 = value;
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

  get semestreService(): SemestreService {
    return this._semestreService;
  }

  set semestreService(value: SemestreService) {
    this._semestreService = value;
  }


  get url4(): string {
    return this._url4;
  }

  set url4(value: string) {
    this._url4 = value;
  }
}
