import {Injectable, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NoteModuleConcours} from "../model/note-module-concours";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {RetenueEcrit} from "../model/retenue-ecrit.model";

@Injectable({
  providedIn: 'root'
})
export class GestionNotesService {
  constructor(public http: HttpClient) {
  }

  url: string = 'http://localhost:8091/admission/retenus/xls/';
public  listNoteModulesInBd: Array<NoteModuleConcours> =[];
  public saveNoteModuleConcours(notes: Array<NoteModuleConcours>) {

    this.http.post(this.url + "save", notes).subscribe(
      data => {
        console.log('heehooo');
      }, error1 => {
        console.log('eror');
      }
    )
  }

public refModule:string="Module";

  public findNoteModules(refModule:string) {
this.refModule=refModule;
console.log(this.refModule);
    this.http.get<Array<NoteModuleConcours>>(this.url + "notes/"+this.refModule).subscribe(
      data => {
        this.listNoteModulesInBd=data;
        console.log(data);
      }, error1 => {
        console.log('ero88r');
      }
    )
  }

}
