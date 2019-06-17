import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../../controller/service/note.service";
import {NoteEtudiantModule} from "../../../controller/model/noteetudiantmodule.model";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  public cne:string;

  ngOnInit() {
  }

  public get notesList() {
    return this.noteService.notesList;
  }
  public get Modules2() {
    return this.noteService.Modules2;
  }
  public get noteSelected1() {
    return this.noteService.noteSelected1;
  }
  public get filtered() {
    return this.noteService.filtred;
  }
  public get notesListCreate() {
    return this.noteService.noteListCreate;
  }

  public findNotesList() {
    this.noteService.findNotesList();
  }
  public delete(n:NoteEtudiantModule) {
    this.noteService.delete(n);
  }
  public deleteListItem(n: NoteEtudiantModule) {
    this.noteService.deleteListItem(n);
  }
  public deleteListAll() {
    this.noteService.deleteListAll();
  }
  public findInListByCne(c : string) {
    this.noteService.findInListByCne(c);
  }
  public findNote(cne: string, filiere: string, mod: string, annee: string) {
    this.noteService.findNote(cne, filiere, mod, annee);
  }
  public edit() {
    this.noteService.edit();
  }
  public initModules2() {
    this.noteService.initModules2();
  }

}
