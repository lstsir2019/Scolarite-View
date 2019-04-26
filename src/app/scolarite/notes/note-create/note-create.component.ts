import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../../controller/service/note.service';
import * as $ from 'jquery';
import {NoteEtudiantModule} from '../../../controller/model/noteetudiantmodule.model';
@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  public userFile: any = File;
  constructor(private noteService: NoteService) { }

  ngOnInit(  ) {
    // this.noteService.findAll();
  }


  public get note() {
    return this.noteService.noteCreate;
  }
  public get note1() {
    return this.noteService.note1;
  }
  public get notess() {
    return this.noteService.notess;
  }
  public get notesExisted() {
    return this.noteService.notesExisted;
  }
  public get notesCheck() {
    return this.noteService.notesCheck;
  }
  public onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
  }
  // public addNote() {
  //    this.noteService.addNote();
  // }
  public save() {
    this.noteService.save();
  }
  public check() {
    this.noteService.check();
  }
  public deleteAll() {
    this.noteService.deleteAll();
  }
  public deleteItem( n: NoteEtudiantModule ) {
    this.noteService.deleteItem(n);
  }
}
