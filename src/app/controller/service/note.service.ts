import { Injectable } from '@angular/core';
import {Module} from '../model/module.model';
import {Filiere} from '../model/filiere.model';
import {Etudiant} from '../model/etudiant.model';
import {NotesCreate} from '../model/note.model';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {NoteEtudiantModule} from '../model/noteetudiantmodule.model';
// import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import {forEach} from '@angular/router/src/utils/collection';


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
  private _noteCreate = new NotesCreate('', '');
  private _note1 = new NoteEtudiantModule('', '', '', '', '', '', '');
  private _url = 'http://localhost:8097/efaculte-api-notes/notes/xlpath/';
  private _url1 = 'http://localhost:8097/efaculte-api-notes/notes/';
  private _noteSelected: NoteEtudiantModule;


  constructor(private _http: HttpClient) { }

  // public addNote() {
  //   let noteClone = new NotesCreate(this.noteCreate.etudiant, this.noteCreate.module, this.noteCreate.value);
  //   this.noteCreate.notes.push(noteClone);
  // }


  public check() {
    if (this.notesCheck.length !== 0) {
      Swal.fire('Error!!!', 'La liste est pas vide', 'error');
    } else {
      if (this.noteCreate.xpath !== '' ) {
        this._http.get<Array<NoteEtudiantModule>>(this._url + this.noteCreate.xpath + '/module/' + this._note1.refModule + '/semestre/' + this._note1.refSemestre).subscribe(
          data => {
            console.log(data);
            if (data.length === 0 ) {
              Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
            } else {
              this.notesCheck = data;
            }
          }, error => {
            Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
          }
        );
        // this.notesCheck.push(new NoteEtudiantModule('hjk', 'gfd' , 'gfd' , 'fds', 'hgd' , 'gfds' , 'gaezfds' ));
      } else {
        Swal.fire('Error!!!', 'please enter file name!', 'error');
      }}
  }
  public save() {
    this._http.post<Array<NoteEtudiantModule>>(this.url1, this.notesCheck).subscribe(
      data => {
        if (data == null) {
          Swal.fire('Error!!!', 'la liste est vide', 'error');
        } else {
          this.notesExisted = data;
          this.notesCheck = this.notesExisted;
        }
      }, error => {
        Swal.fire('Error!!!', 'Error', 'error');
      }
    );
  }

  public deleteItem( n: NoteEtudiantModule ) {
    const id: number = this.notesCheck.indexOf(n);
    this.notesCheck.splice(id, 1);
    console.log('dkhlty');
  }
  public deleteAll() {
    this.notesCheck.splice(0, this.notesCheck.length);
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
}
