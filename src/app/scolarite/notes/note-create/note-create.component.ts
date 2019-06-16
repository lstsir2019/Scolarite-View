import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../../controller/service/note.service';
import * as $ from 'jquery';
import {NoteEtudiantModule} from '../../../controller/model/noteetudiantmodule.model';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  public checkBoxState:boolean = false;
  public userFile: any = File;
  public cne: string;
  editField: string;
  public showSpinner: boolean = true;

  constructor(private _noteService: NoteService) {
  }



  ngOnInit() {
    // this.noteService.findAll();
  }


  public get notesExited() {
    return this._noteService.notesExisted;
  }

  public get note() {
    return this._noteService.noteCreate;
  }

  public get note1() {
    return this._noteService.note1;
  }

  public get notess() {
    return this._noteService.notess;
  }

  public get firstline() {
    return this._noteService.firstline;
  }

  public get notesExisted() {
    return this._noteService.notesExisted;
  }
  public  findItem(n: NoteEtudiantModule) {
    return this._noteService.findItem(n);
  }
  public  findInList(n: string) {
    return this._noteService.findInList(n);
  }

  public get notesCheck() {
    return this._noteService.notesCheck;
  }

  public get noteClone() {
    return this._noteService.noteClone;
  }


  public onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
  }

  // public addNote() {
  //    this.noteService.addNote();
  // }
  public save() {
    this._noteService.save();
  }
  public checkType() {
    this.noteService.checkType();
  }

  public check() {
    this._noteService.check();
  }

  public deleteAll() {
    this._noteService.deleteAll();
  }

  public deleteItem(n: NoteEtudiantModule) {
    this._noteService.deleteItem(n);
  }

  get noteService(): NoteService {
    return this._noteService;
  }

  set noteService(value: NoteService) {
    this._noteService = value;
  }
  public changeValue(id: number, property: string, event: any) {
    this.noteService.updateList(id,property,event);
  }

  public updateList(id: number, property: string, event: any) {
    this.noteService.updateList(id,property,event);
  }
}
