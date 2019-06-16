import {Injectable} from '@angular/core';
import {Module} from '../model/module.model';
import {Filiere} from '../model/filiere.model';
import {Etudiant} from '../model/etudiant.model';
import {NotesCreate} from '../model/note.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NoteEtudiantModule} from '../model/noteetudiantmodule.model';
// import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import {forEach} from '@angular/router/src/utils/collection';
import {NgxSpinnerService} from "ngx-spinner";
import {Pv} from "../model/pv.model";


// import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  get noteSelected(): NoteEtudiantModule {
    return this._noteSelected;
  }

  set noteSelected(value: NoteEtudiantModule) {
    this._noteSelected = value;
  }


  private _notess: Array<NoteEtudiantModule>;
  private _notesCheck: Array<NoteEtudiantModule> = new Array<NoteEtudiantModule>();
  private _notesExisted: Array<NoteEtudiantModule> = new Array<NoteEtudiantModule>();
  private _notesCheckClone: Array<NoteEtudiantModule> = new Array<NoteEtudiantModule>();
  private _noteCreate = new NotesCreate('', '', '', 1, 0, 6, '', '');
  private _noteListCreate = new NotesCreate('', '', '', 0, 0, 0, '', '');
  private _note1 = new NoteEtudiantModule('', '', '', '', '', '', '', '', '', '', '', '','');
  private _noteSelected1 = new NoteEtudiantModule('', '', '', '', '', '', '', '', '', '', '', '','');
  private _url = 'http://localhost:8097/efaculte-api-notes/notes/filename/';
  private _url1 = 'http://localhost:8097/efaculte-api-notes/notes/';
  private _noteSelected: NoteEtudiantModule;
  private _noteClone: NoteEtudiantModule = new NoteEtudiantModule('', '', '', '', '', '', '', '', '', '', '', '','');
  public firstline: number;
  public path: string;
  public editField: string;
  private _notesList: Array<NoteEtudiantModule> = new Array<NoteEtudiantModule>();
  private _filtred: Array<NoteEtudiantModule> = new Array<NoteEtudiantModule>();
  private _notesss: Array<NoteEtudiantModule> = new Array<NoteEtudiantModule>();


  constructor(private _http: HttpClient, private _spinner: NgxSpinnerService) {
  }

  // public addNote() {
  //   let noteClone = new NotesCreate(this.noteCreate.etudiant, this.noteCreate.module, this.noteCreate.value);
  //   this.noteCreate.notes.push(noteClone);
  // }

  public check() {
    this.spinner.show();
    if (this.notesCheck.length !== 0) {
      this.spinner.hide();
      Swal.fire('Error!!!', 'La liste nest pas vide', 'error');
    } else {
      if (this.noteCreate.xpath !== '') {
        this.path = this.noteCreate.xpath.replace("C:\\fakepath\\", "");
        this._http.get<Array<NoteEtudiantModule>>(this._url + this.path + '/startCol/' + this.noteCreate.startCol
          + '/endCol/' + this.noteCreate.endCol + '/line/' + this.noteCreate.startLine + '/refFiliere/'
          + this.noteCreate.refFiliere + '/refModule/' + this.noteCreate.refModule + '/annee/'
          + this.noteCreate.annee).subscribe(
          data => {
            this.spinner.hide();
            this.notesCheck = data;
          }, error => {
            this.spinner.hide();
            Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
          }
        );
      } else {
        this.spinner.hide();
        Swal.fire('Error!!!', 'please enter file name!', 'error');
        console.log(this.noteCreate.xpath);
      }
    }
  }

  // public check() {
  //   if (this.notesCheck.length !== 0) {
  //     Swal.fire('Error!!!', 'La liste nest pas vide', 'error');
  //   } else {
  //     if (this.noteCreate.xpath !== '') {
  //       this._http.get<Array<NoteEtudiantModule>>(this._url + this.noteCreate.xpath + '/module/' + this._note1.refFiliere + '/semestre/' + this._note1.refSemestre + '/firstline/' + this.noteCreate.startLine).subscribe(
  //         data => {
  //           if (data.length === 0) {
  //             Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
  //           } else {
  //             this.notesCheck = data;
  //           }
  //         }, error => {
  //           Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
  //         }
  //       );
  //       // this.notesCheck.push(new NoteEtudiantModule('hjk', 'gfd' , 'gfd' , 'fds', 'hgd' , 'gfds' , 'gaezfds' ));
  //     } else {
  //       Swal.fire('Error!!!', 'please enter file name!', 'error');
  //     }
  //   }
  // }

  public save() {
    this.spinner.show();
    if (this.notesCheck.length == 0) {
      this.spinner.hide();
      Swal.fire('erreur', 'la liste est vide', 'warning');
    } else {
      this._http.post<number>(this.url1, this.notesCheck).subscribe(
        data => {
          if (data == 1) {
            this.spinner.hide();
            Swal.fire('Done', 'Success', 'success');
            this.deleteAll();
          } else if (data == -2) {
            this.spinner.hide();
            Swal.fire('erreur', 'des etudiats nont pas de cne!', 'warning');
          }
        }, error => {
          this.spinner.hide();
          Swal.fire('Error!!!', 'Error', 'error');
        }
      );
    }
  }

  public deleteItem(n: NoteEtudiantModule) {
    Swal.fire({
      title: 'etes vous sure??',
      text: "C'est irreversible",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {
      if (result.value) {
        const id: number = this.notesCheck.indexOf(n);
        this.notesCheck.splice(id, 1);
        Swal.fire(
          'Supprimé!',
          'La note supprimé avec succes.',
          'success'
        )
      }
    })

  }

  public findItem(n: NoteEtudiantModule): NoteEtudiantModule {
    let id = this.notesCheck.indexOf(n);
    n = this.notesCheck[id];
    return n;
  }

  public findInList(cne: string): NoteEtudiantModule {
    let n = new NoteEtudiantModule('', '', '', '', '', '', '', '', '', '', '', '','');
    for (let i = 0; i < this.notesCheck.length; i++) {
      if (this.notesCheck[i].refEtudiant == cne) {
        n = this.notesCheck[i];
      }
    }
    return n;
  }

  public deleteListItem(n: NoteEtudiantModule) {
    const i: number = this.filtred.indexOf(n);
    this.filtred.splice(i, 1);
    if (this.noteListCreate.cne != '') {
      const id: number = this.notesList.indexOf(n);
      this.notesList.splice(id, 1);
    }
  }


  public deleteAll() {
    this.notesss = this.notesCheck.splice(0, this.notesCheck.length);
  }

  public deleteListAll() {
    if (this._noteListCreate.cne == '') {
      this.filtred.splice(0, this.filtred.length);
    }
  }

  public findInListByCne(cne: string) {
    if (cne == null) {
      this.notesList
    }
    const filter = (note: NoteEtudiantModule[]) => this.notesList.filter(note => note.refEtudiant.match("^" + cne + ".*$"));
    this.filtred = filter(this.notesList);
  }

  public findAll() {
    this._http.get<Array<NoteEtudiantModule>>(this._url).subscribe(
      data => {
        this.notess = data;
      }, error => {
        console.log('error while loading notes ...');
      }
    );
  }

  public findNote(cne: string, filiere: string, mod: string, annee: string) {
    this.noteSelected1 = new NoteEtudiantModule('', '', '', '', '', '', '', '', '', '', '', '','');
    this._http.get<NoteEtudiantModule>(this._url1 + 'refEtudiant/' + cne + '/refFiliere/' + filiere + '/refModule/' + mod + '/annee/' + annee).subscribe(
      data => {
        this.noteSelected1 = data;
      }, error => {
        console.log('error while...');
      }
    );
  }

  public edit() {
    this._http.put<NoteEtudiantModule>('http://localhost:8097/efaculte-api-notes/notes/editNoteModulaire/', this.noteSelected1).subscribe(
      data => {
        console.log(data);
        this.findNotesList();
        Swal.fire('Done','updated.','success');
      }, error => {
        Swal.fire('error','erreur','warning');

        console.log('error while...');
      }
    );
  }

  public findNotesList() {
    if (this.noteListCreate.refFiliere != '' && this.noteListCreate.refModule != '' && this.noteListCreate.annee != '') {
      this._http.get<Array<NoteEtudiantModule>>(this._url1 + '/refFiliere/' + this.noteListCreate.refFiliere + '/refModule/' + this.noteListCreate.refModule + '/annee/' + this.noteListCreate.annee).subscribe(
        data => {
          this.notesList = data;
          this.filtred = data;
        }, error => {
          console.log('error while loading notes ...');
        }
      );
    } else if (this.noteListCreate.refFiliere == '' || this.noteListCreate.refModule == '' || this.noteListCreate.annee == '') {
      Swal.fire('Champs non remplis', 'Veullier remplire tout les champs', 'info');
    }
  }

  public changeValue(id: number, property: string, event: any) {
    this.updateList(id, property, event);
  }

  public updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.notesCheck[id][property] = editField;
  }

  public delete(noteM: NoteEtudiantModule) {
    this._http.delete<number>(this.url1+'deleteModualire/refEtudiant/'+noteM.refEtudiant+'/refFiliere/'+noteM.refFiliere+'/refModule/'+noteM.refModule+'/annee/'+noteM.annee).subscribe(
      data => {
        this.findNotesList();
        Swal.fire('Done','deleted.','success');
      }, error => {
        Swal.fire('error','erreur','warning');
      }
    );
  }
  public checkType(){
    if(!this.noteCreate.xpath.endsWith(".xls")){
      Swal.fire('Type non compatible','Veuiller choisir un fichier .xls','warning');
      this.noteCreate.xpath = "";
    }
  }

  // saveFile() {
  //   const headers = new HttpHeaders();
  //   headers.append('Accept', 'text/plain');
  //   this.http.get('/api/files', { headers })
  //     .toPromise()
  //     .then(response => this.saveToFileSystem(response));
  // }
  //
  // private saveToFileSystem(response) {
  //   const contentDispositionHeader: string = response.headers.get('Content-Disposition');
  //   const parts: string[] = contentDispositionHeader.split(';');
  //   const filename = parts[1].split('=')[1];
  //   const blob = new Blob([response._body], { type: 'text/plain' });
  //   saveAs(blob, filename);
  // }

  // public findByRefEtidant(note: NoteEtudiantModule) {
  //   this._noteSelected = note;
  //   if (this.noteSelected != null) {
  //   this._http.put<Array<NoteEtudiantModule>>(this._url).subscribe(
  //     data => {
  //       this.notess = data;
  //     }, error => {
  //       console.log('error while loading notes ...');
  //     }
  //   ); }
  // }


  get notess(): Array<NoteEtudiantModule> {
    return this._notess;
  }

  set notess(value: Array<NoteEtudiantModule>) {
    this._notess = value;
  }

  get noteCreate(): NotesCreate {
    return this._noteCreate;
  }

  set noteCreate(value: NotesCreate) {
    this._noteCreate = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }


  get notesCheck(): Array<NoteEtudiantModule> {
    return this._notesCheck;
  }

  set notesCheck(value: Array<NoteEtudiantModule>) {
    this._notesCheck = value;
  }

  get url1(): string {
    return this._url1;
  }

  set url1(value: string) {
    this._url1 = value;
  }

  get notesCheckClone(): Array<NoteEtudiantModule> {
    return this._notesCheckClone;
  }

  set notesCheckClone(value: Array<NoteEtudiantModule>) {
    this._notesCheckClone = value;
  }

  get notesExisted(): Array<NoteEtudiantModule> {
    return this._notesExisted;
  }

  set notesExisted(value: Array<NoteEtudiantModule>) {
    this._notesExisted = value;
  }

  get note1(): NoteEtudiantModule {
    return this._note1;
  }

  set note1(value: NoteEtudiantModule) {
    this._note1 = value;
  }

  get spinner(): NgxSpinnerService {
    return this._spinner;
  }

  set spinner(value: NgxSpinnerService) {
    this._spinner = value;
  }


  get noteClone(): NoteEtudiantModule {
    return this._noteClone;
  }

  set noteClone(value: NoteEtudiantModule) {
    this._noteClone = value;
  }

  get notesList(): Array<NoteEtudiantModule> {
    return this._notesList;
  }

  set notesList(value: Array<NoteEtudiantModule>) {
    this._notesList = value;
  }

  get noteListCreate(): NotesCreate {
    return this._noteListCreate;
  }

  set noteListCreate(value: NotesCreate) {
    this._noteListCreate = value;
  }

  get filtred(): Array<NoteEtudiantModule> {
    return this._filtred;
  }

  set filtred(value: Array<NoteEtudiantModule>) {
    this._filtred = value;
  }


  get notesss(): Array<NoteEtudiantModule> {
    return this._notesss;
  }

  set notesss(value: Array<NoteEtudiantModule>) {
    this._notesss = value;
  }


  get noteSelected1(): NoteEtudiantModule {
    return this._noteSelected1;
  }

  set noteSelected1(value: NoteEtudiantModule) {
    this._noteSelected1 = value;
  }


}
