import {Injectable, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteModuleConcours} from '../model/note-module-concours';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {RetenueEcrit} from '../model/retenue-ecrit.model';
import {Candidat} from '../model/candidat.model';
import {NoteConcours} from '../model/note-concours.model';

@Injectable({
  providedIn: 'root'
})
export class GestionNotesService {
  constructor(public http: HttpClient) {
  }

  url: string = 'http://localhost:8091/admission/retenus/';
  public listNoteModulesInBd: Array<NoteModuleConcours> = [];
  public filtered: Array<NoteModuleConcours> = [];
  public listNoteConcoursInBd: Array<NoteConcours> = [];
  public filteredNoteConcours: Array<NoteConcours> = [];

  public findNoteConcours(refConcours: string) {

    this.filteredNoteConcours = [];
    this.listNoteConcoursInBd = [];
    this.http.get<Array<NoteConcours>>(this.url + 'listeNoteConcours/' + refConcours).subscribe(
      data => {
        this.filteredNoteConcours = data;
        this.listNoteConcoursInBd = data;
        console.log(data);
      }, error1 => {
        console.log('ero88r');
      }
    );
  }

  public saveNoteModuleConcours(notes: Array<NoteModuleConcours>, module: string) {
    this.http.post(this.url + 'xls/save', notes).subscribe(
      data => {
        this.findNoteModules(module);
        console.log('heehooo');
      }, error1 => {
        console.log('eror');
      }
    );
  }

  public saveNoteConcoursOral(notes: Array<NoteConcours>) {
    this.http.post(this.url + 'xls/note_oral/save', notes).subscribe(
      data => {
        console.log('heehooo');
      }, error1 => {
        console.log('eror');
      }
    );
  }

  public findInListByRefCandidat(reference: string) {
    if (reference == null) {
      this.findNoteModules(this.refModule);
    } else {
      const filter = (note: NoteModuleConcours[]) => this.listNoteModulesInBd.filter(note => note.retenueEcritVo.refCandidat.match('^' + reference + '.*$'));
      this.filtered = filter(this.listNoteModulesInBd);

    }
  }

  public refModule: string = 'Module';

  public findNoteModules(refModule: string) {
    this.refModule = refModule;
    this.filtered = [];
    this.listNoteModulesInBd = [];
    this.http.get<Array<NoteModuleConcours>>(this.url + 'xls/notes/' + this.refModule).subscribe(
      data => {
        this.filtered = data;
        this.listNoteModulesInBd = data;
        console.log(data);
      }, error1 => {
        console.log('ero88r');
      }
    );
  }

}
